import domtoimage from "https://cdn.skypack.dev/dom-to-image-more";

let paintAll = document.querySelector(".paint-all");
let clear = document.querySelector(".clear");
let saveImageButton = document.querySelector(".save-image");
let field = document.querySelector(".field");

const COOKIE_NAME = "pixel-draw-state";

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
  0: { background: "#ffffff", border: "#000" },
  1: { background: "#000000", border: "#000" },
  2: { background: "#ff0000", border: "#000" },
  3: { background: "#008000", border: "#000" },
  4: { background: "#0000ff", border: "#000" },
  5: { background: "#ffea00", border: "#000" },
  6: { background: "#800080", border: "#000" },
  7: { background: "#a52a2a", border: "#000" },
  8: { background: "#ffc0cb", border: "#000" },
};

document.addEventListener("pointerup", function () {
  if (IS_CLICKED) {
    saveGridToCookie();
  }

  IS_CLICKED = false;
});

saveImageButton.addEventListener("click", function () {
  domtoimage
    .toPng(field)
    .then(function (dataUrl) {
      const link = document.createElement("a");
      link.download = "pixel-draw.png";
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
      console.error("Не удалось сохранить изображение:", error);
    });
});

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
  let targetColor = color;
  let borderColor = "#000000";
  if (targetColor === "white") {
    targetColor = "white";
    borderColor = "#000000";
  } else if (targetColor === "black") {
    targetColor = "black";
  } else {
    targetColor = color;
  }

  anime({
    targets: cells,
    backgroundColor: targetColor,
    duration: 1200,
    easing: "easeInOutQuad",
    complete: function () {
      for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = targetColor;
        cells[i].style.borderColor = borderColor;
      }
    },
  });
});

saveImageButton.addEventListener("click", function () {
  domtoimage
    .toPng(field)
    .then(function (dataUrl) {
      const link = document.createElement("a");
      let img = link.download = "pixel-draw.png";
      link.href = dataUrl;
      link.click();
    })
    .catch(function (error) {
      console.error("Something went wrong with saving the IMG: ", error);
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
