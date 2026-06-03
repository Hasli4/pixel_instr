const GALLERY_STORAGE_KEY = "pixel-draw-gallery";
const GALLERY_ARCHIVE_STORAGE_KEY = "pixel-draw-gallery-archive";
const MAX_GALLERY_ITEMS = 9;

const galleryGrid = document.querySelector("#galleryGrid");
const galleryCount = document.querySelector("#galleryCount");
const archiveCount = document.querySelector("#archiveCount");
const emptyMessage = document.querySelector("#emptyMessage");
const clearGalleryButton = document.querySelector("#clearGallery");
const previewModal = document.querySelector("#previewModal");
const modalImage = document.querySelector("#modalImage");
const modalMeta = document.querySelector("#modalMeta");
const modalTitle = document.querySelector("#modalTitle");
const year = document.querySelector("#year");

let artworks = [];

if (year) {
  year.textContent = new Date().getFullYear();
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sortByDateDesc(items) {
  return [...items].sort(function (a, b) {
    return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime();
  });
}

function formatDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "дата не указана";
  }

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatImageFormat(format) {
  if (format === "image/webp") return "WebP";
  if (format === "image/png") return "PNG";
  return format || "изображение";
}

function getArchiveItems() {
  return loadStorageList(GALLERY_ARCHIVE_STORAGE_KEY);
}

function loadGallery() {
  artworks = sortByDateDesc(loadStorageList(GALLERY_STORAGE_KEY)).slice(0, MAX_GALLERY_ITEMS);
}

function saveGallery() {
  saveStorageList(GALLERY_STORAGE_KEY, artworks);
}

function renderPlaceholder(index) {
  return `
    <article class="gallery-card gallery-card--placeholder">
      <div class="placeholder-art" aria-hidden="true">
        ${Array.from({ length: 25 }, () => "<span></span>").join("")}
      </div>
      <h3>Пустой слот ${index + 1}</h3>
      <p>Сохрани рисунок в редакторе, и он появится здесь.</p>
    </article>
  `;
}

function renderArtworkCard(artwork, index) {
  const title = `Работа ${index + 1}`;
  const savedDate = formatDate(artwork.savedAt);
  const imageFormat = formatImageFormat(artwork.format);
  const pixelCount =
    typeof artwork.pixelData === "string" ? `${artwork.pixelData.length} клеток` : "данные о пикселях";

  return `
    <article class="gallery-card" data-artwork-id="${escapeHtml(artwork.id)}">
      <img
        class="gallery-card__image"
        src="${escapeHtml(artwork.dataUrl)}"
        alt="${escapeHtml(title)}"
        loading="lazy"
      />
      <h3>${escapeHtml(title)}</h3>
      <p>Сохранено: ${escapeHtml(savedDate)}</p>
      <span class="gallery-card__meta">${escapeHtml(imageFormat)} · ${escapeHtml(pixelCount)}</span>
      <div class="gallery-card__actions">
        <button class="card-button" type="button" data-action="open" data-id="${escapeHtml(artwork.id)}">
          Открыть
        </button>
        <button
          class="card-button card-button--danger"
          type="button"
          data-action="delete"
          data-id="${escapeHtml(artwork.id)}"
        >
          Удалить
        </button>
      </div>
    </article>
  `;
}

function renderGallery() {
  const archiveItems = getArchiveItems();
  const placeholdersCount = Math.max(0, MAX_GALLERY_ITEMS - artworks.length);
  const cards = [
    ...artworks.map(renderArtworkCard),
    ...Array.from({ length: placeholdersCount }, (_, index) => renderPlaceholder(index + artworks.length)),
  ];

  galleryGrid.innerHTML = cards.join("");
  galleryCount.textContent = `${artworks.length} / ${MAX_GALLERY_ITEMS}`;
  archiveCount.textContent =
    archiveItems.length === 0
      ? "В архиве пока 0 работ."
      : `В архиве сохранено данных: ${archiveItems.length}.`;

  emptyMessage.hidden = artworks.length > 0;
  clearGalleryButton.disabled = artworks.length === 0;
}

function findArtwork(id) {
  return artworks.find((artwork) => artwork.id === id);
}

function openArtwork(id) {
  const artwork = findArtwork(id);

  if (!artwork) {
    return;
  }

  modalTitle.textContent = "Сохранённый рисунок";
  modalImage.src = artwork.dataUrl;
  modalImage.alt = `Сохранённая работа от ${formatDate(artwork.savedAt)}`;
  modalMeta.textContent = `${formatDate(artwork.savedAt)} · ${formatImageFormat(artwork.format)} · ${
    artwork.columns || 50
  } × ${artwork.rows || 20}`;
  previewModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  previewModal.hidden = true;
  modalImage.src = "";
  document.body.style.overflow = "";
}

function deleteArtwork(id) {
  const artwork = findArtwork(id);

  if (!artwork) {
    return;
  }

  const shouldDelete = window.confirm("Удалить эту работу из локальной галереи?");

  if (!shouldDelete) {
    return;
  }

  artworks = artworks.filter((item) => item.id !== id);
  saveGallery();
  closeModal();
  renderGallery();
}

function clearGallery() {
  if (artworks.length === 0) {
    return;
  }

  const shouldClear = window.confirm(
    "Очистить все активные работы из локальной галереи? Архивные данные останутся отдельно.",
  );

  if (!shouldClear) {
    return;
  }

  artworks = [];
  saveGallery();
  closeModal();
  renderGallery();
}

galleryGrid.addEventListener("click", function (event) {
  const button = event.target.closest("[data-action]");

  if (!button) {
    return;
  }

  const id = button.dataset.id;

  if (button.dataset.action === "open") {
    openArtwork(id);
  }

  if (button.dataset.action === "delete") {
    deleteArtwork(id);
  }
});

clearGalleryButton.addEventListener("click", clearGallery);

previewModal.addEventListener("click", function (event) {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !previewModal.hidden) {
    closeModal();
  }
});

loadGallery();
renderGallery();
