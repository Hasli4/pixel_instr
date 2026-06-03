let paintAll = document.querySelector(".paint-all");
let clear = document.querySelector(".clear");
let saveImageButton = document.querySelector(".save-image");
let field = document.querySelector(".field");
let saveNotice = document.querySelector(".save-notice");

const COOKIE_NAME = "pixel-draw-state";
const GALLERY_STORAGE_KEY = "pixel-draw-gallery";
const GALLERY_ARCHIVE_STORAGE_KEY = "pixel-draw-gallery-archive";
const MAX_GALLERY_ITEMS = 9;
const MAX_ARCHIVE_ITEMS = 60;
const GRID_COLUMNS = 50;
const GRID_ROWS = 20;
const PREVIEW_CELL_SIZE = 16;

const COLOR_TO_CODE = {
  white: "0",
  black: "1",
  red: "2",
  green: "3",
  blue: "4",
  yellow: "5",
  purple: "6",
  brown: "7",
  pink: "8",
};

const CODE_TO_COLOR = {
  0: { background: "#ffffff", border: "#fff" },
  1: { background: "#000000", border: "#111" },
  2: { background: "#ff0000", border: "#111" },
  3: { background: "#008000", border: "#111" },
  4: { background: "#0000ff", border: "#111" },
  5: { background: "#ffea00", border: "#111" },
  6: { background: "#800080", border: "#111" },
  7: { background: "#a52a2a", border: "#111" },
  8: { background: "#ffc0cb", border: "#111" },
};

let noticeTimeoutId = 0;

document.addEventListener("pointerup", function () {
  if (IS_CLICKED) {
    saveGridToCookie();
  }

  IS_CLICKED = false;
});

function showSaveNotice(message, type = "success") {
  if (!saveNotice) {
    return;
  }

  window.clearTimeout(noticeTimeoutId);
  saveNotice.innerHTML = message;
  saveNotice.classList.toggle("is-error", type === "error");
  saveNotice.classList.add("is-visible");

  noticeTimeoutId = window.setTimeout(function () {
    saveNotice.classList.remove("is-visible");
  }, 4200);
}

function getGalleryHref() {
  const galleryLink = document.querySelector(".gallery-link");
  return galleryLink?.getAttribute("href") || "gallery.html";
}

function loadStorageList(key) {
  try {
    const rawValue = localStorage.getItem(key);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (error) {
    console.warn("Не удалось прочитать локальное хранилище:", error);
    return [];
  }
}

function saveStorageList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function isQuotaExceeded(error) {
  return (
    error &&
    (error.name === "QuotaExceededError" ||
      error.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
      error.code === 22 ||
      error.code === 1014)
  );
}

function getPaletteSnapshot() {
  const palette = {};

  Object.entries(CODE_TO_COLOR).forEach(function ([code, colorState]) {
    palette[code] = colorState.background;
  });

  return palette;
}

function createPreviewFromPixelData(pixelData) {
  const canvas = document.createElement("canvas");
  canvas.width = GRID_COLUMNS * PREVIEW_CELL_SIZE;
  canvas.height = GRID_ROWS * PREVIEW_CELL_SIZE;

  const context = canvas.getContext("2d");
  context.imageSmoothingEnabled = false;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let index = 0; index < pixelData.length; index++) {
    const colorCode = pixelData[index] || "0";
    const colorState = CODE_TO_COLOR[colorCode] || CODE_TO_COLOR["0"];
    const x = (index % GRID_COLUMNS) * PREVIEW_CELL_SIZE;
    const y = Math.floor(index / GRID_COLUMNS) * PREVIEW_CELL_SIZE;

    context.fillStyle = colorState.background;
    context.fillRect(x, y, PREVIEW_CELL_SIZE, PREVIEW_CELL_SIZE);
  }

  let format = "image/webp";
  let dataUrl = canvas.toDataURL(format, 0.9);

  if (!dataUrl.startsWith("data:image/webp")) {
    format = "image/png";
    dataUrl = canvas.toDataURL(format);
  }

  return { dataUrl, format };
}

function createArtworkRecord() {
  const pixelData = serializeGrid();
  const preview = createPreviewFromPixelData(pixelData);
  const savedAt = new Date().toISOString();

  return {
    id: `pixel-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    savedAt,
    format: preview.format,
    dataUrl: preview.dataUrl,
    pixelData,
    columns: GRID_COLUMNS,
    rows: GRID_ROWS,
    palette: getPaletteSnapshot(),
  };
}

function makeArchiveRecord(artwork) {
  const { dataUrl, ...archiveRecord } = artwork;

  return {
    ...archiveRecord,
    archivedAt: new Date().toISOString(),
    imageRemoved: true,
  };
}

function saveArchiveItems(artworks) {
  if (!artworks.length) {
    return;
  }

  const archiveItems = artworks.map(makeArchiveRecord);
  let archive = [...archiveItems, ...loadStorageList(GALLERY_ARCHIVE_STORAGE_KEY)];
  archive = archive.slice(0, MAX_ARCHIVE_ITEMS);

  try {
    saveStorageList(GALLERY_ARCHIVE_STORAGE_KEY, archive);
  } catch (error) {
    if (!isQuotaExceeded(error)) {
      throw error;
    }

    try {
      saveStorageList(GALLERY_ARCHIVE_STORAGE_KEY, archive.slice(0, Math.floor(MAX_ARCHIVE_ITEMS / 2)));
    } catch (secondError) {
      console.warn("Архив не сохранен: в браузере недостаточно места.", secondError);
    }
  }
}

function saveArtworkToGallery(artwork) {
  const currentGallery = loadStorageList(GALLERY_STORAGE_KEY);
  let nextGallery = [artwork, ...currentGallery.filter((item) => item.id !== artwork.id)];
  let overflow = nextGallery.slice(MAX_GALLERY_ITEMS);

  nextGallery = nextGallery.slice(0, MAX_GALLERY_ITEMS);

  while (nextGallery.length > 0) {
    try {
      saveStorageList(GALLERY_STORAGE_KEY, nextGallery);
      saveArchiveItems(overflow);
      return {
        activeCount: nextGallery.length,
        archivedCount: overflow.length,
      };
    } catch (error) {
      if (!isQuotaExceeded(error) || nextGallery.length === 1) {
        throw error;
      }

      overflow.push(nextGallery.pop());
    }
  }

  throw new Error("Не удалось сохранить работу в локальную галерею.");
}

function downloadDataUrl(dataUrl, fileName) {
  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function getDownloadFileName(format) {
  const extension = format === "image/webp" ? "webp" : "png";
  const datePart = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  return `pixel-draw-${datePart}.${extension}`;
}

async function createDownloadImage(fallbackDataUrl, fallbackFormat) {
  if (typeof domtoimage === "undefined") {
    return {
      dataUrl: fallbackDataUrl,
      format: fallbackFormat,
    };
  }

  try {
    const dataUrl = await domtoimage.toPng(field);
    return {
      dataUrl,
      format: "image/png",
    };
  } catch (error) {
    console.warn("DOM-export не сработал, используется компактное превью:", error);
    return {
      dataUrl: fallbackDataUrl,
      format: fallbackFormat,
    };
  }
}

async function saveFieldAsImage() {
  if (!field) {
    showSaveNotice("Поле для рисования не найдено.", "error");
    return;
  }

  saveImageButton.disabled = true;

  try {
    const artwork = createArtworkRecord();
    const galleryInfo = saveArtworkToGallery(artwork);
    const downloadImage = await createDownloadImage(artwork.dataUrl, artwork.format);

    downloadDataUrl(downloadImage.dataUrl, getDownloadFileName(downloadImage.format));
    saveGridToCookie();

    const archiveText =
      galleryInfo.archivedCount > 0
        ? " Самая старая работа перенесена в архив без картинки."
        : "";

    showSaveNotice(
      `Рисунок сохранен в браузере и добавлен в <a href="${getGalleryHref()}">галерею</a>.${archiveText}`,
    );
  } catch (error) {
    console.error("Не удалось сохранить изображение:", error);
    showSaveNotice(
      "Не удалось сохранить рисунок в локальную галерею. Возможно, в браузере закончилось место.",
      "error",
    );
  } finally {
    saveImageButton.disabled = false;
  }
}

if (saveImageButton) {
  saveImageButton.addEventListener("click", saveFieldAsImage);
}

function writeCookie(name, value, maxAgeSeconds = 60 * 60 * 24 * 30) {
  document.cookie = `${name}=${value}; max-age=${maxAgeSeconds}; path=/; SameSite=Lax`;
}

function serializeGrid() {
  return cells.map((cell) => cell.dataset.colorCode ?? "0").join("");
}

function saveGridToCookie() {
  writeCookie(COOKIE_NAME, serializeGrid());
}

function readCookie(name) {
  const prefix = name + "=";
  const cookies = document.cookie.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].startsWith(prefix)) {
      return cookies[i].slice(prefix.length);
    }
  }

  return "";
}

function loadGridFromCookie() {
  const savedState = readCookie(COOKIE_NAME);

  if (!savedState || savedState.length !== cells.length) {
    return;
  }

  for (let i = 0; i < cells.length; i++) {
    applyCellColor(cells[i], savedState[i]);
  }
}

function getCodeByColorName(colorName) {
  return COLOR_TO_CODE[colorName] ?? "0";
}

function applyCellColor(cell, colorCode) {
  const state = CODE_TO_COLOR[colorCode] ?? CODE_TO_COLOR["0"];
  cell.dataset.colorCode = colorCode;
  cell.style.backgroundColor = state.background;
  cell.style.borderColor = state.border;
}

function get_result_from_cookie() {
  let cookie = document.cookie;
}

let IS_CLICKED = false;
let FILL_MODE = false;
let maxFields = 1000;

let workspace = document.querySelector(".workspace");

let red = document.querySelector(".red");
let black = document.querySelector(".black");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let yellow = document.querySelector(".yellow");
let purple = document.querySelector(".purple");
let brown = document.querySelector(".brown");
let pink = document.querySelector(".pink");
let erase = document.querySelector(".erase");

let color = "black";
let cells = [];

red.addEventListener("click", () => {
  color = "red";
});
black.addEventListener("click", () => {
  color = "black";
});
green.addEventListener("click", () => {
  color = "green";
});
blue.addEventListener("click", () => {
  color = "blue";
});
yellow.addEventListener("click", () => {
  color = "yellow";
});
purple.addEventListener("click", () => {
  color = "purple";
});
brown.addEventListener("click", () => {
  color = "brown";
});
pink.addEventListener("click", () => {
  color = "pink";
});

document.addEventListener("pointerdown", function () {
  IS_CLICKED = true;
});

for (let i = 0; i < maxFields; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("id", `${i}`);
  field.appendChild(cell);
  cells.push(cell);
  cell.addEventListener("pointerdown", function () {
    applyCellColor(cell, getCodeByColorName(color));
  });

  cell.addEventListener("pointerenter", function () {
    if (IS_CLICKED) {
      applyCellColor(cell, getCodeByColorName(color));
    }
  });
}

loadGridFromCookie();
const buttons = document.querySelectorAll(".cell");
console.log(maxFields);
console.log(document.querySelectorAll(".cell").length);

clear.addEventListener("click", function () {
  FILL_MODE = false;
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
    cells[i].style.borderColor = "#000000";
  }
  for (let i = 0; i < cells.length; i++) {
    applyCellColor(cells[i], "0");
  }

  saveGridToCookie();
});

erase.addEventListener("click", function () {
  color = "white";
});

paintAll.addEventListener("click", function () {
  FILL_MODE = true;
  const targetColorCode = getCodeByColorName(color);
  const targetColorState = CODE_TO_COLOR[targetColorCode] ?? CODE_TO_COLOR["0"];

  anime({
    targets: cells,
    backgroundColor: targetColorState.background,
    duration: 1200,
    easing: "easeInOutQuad",
    complete: function () {
      for (let i = 0; i < cells.length; i++) {
        applyCellColor(cells[i], targetColorCode);
      }

      saveGridToCookie();
    },
  });
});

// const colorBefore = "white";
// anime({
//   targets: document.querySelector(".cell"),
//   backgroundColor: ["#FFFFFF", "#008000"],
//   duration: 2.5 * 1000,
//   easing: "easeInOutQuad",
//   begin: () => console.log(document.querySelector(".cell").style.backgroundColor),
//   complete: () => {
//     console.log("Анимация завершена для элемента:");
//     console.log(document.querySelector(".cell").style.backgroundColor);
//   },
// });
