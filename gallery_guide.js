const steps = [
  {
    title: "Собери страницу галереи",
    goal:
      "Сначала создай отдельную страницу, на которой будут шапка, описание, счётчик, сетка работ и модальное окно для просмотра.",
    before:
      "В проекте есть редактор, но нет места, где пользователь увидит свои сохранённые рисунки.",
    change:
      "Добавь `gallery.html`, подключи `gallery.css` и `gallery.js`, сделай шапку со ссылкой в редактор, hero-блок, секцию сетки и скрытое модальное окно.",
    why:
      "Галерея должна быть отдельной страницей, чтобы её можно было открыть на GitHub Pages и спокойно читать сохранённые работы из браузера.",
    task:
      "Создай каркас страницы. Пока она может быть пустой: главное, чтобы были нужные блоки и id, к которым потом подключится JavaScript.",
    recap:
      "Ты подготовил HTML-основу галереи: теперь у JS есть понятные места для счётчика, карточек, сообщения о пустой галерее и модального просмотра.",
    result: {
      location:
        "Где править: новый файл `gallery.html`. Пути к главной странице, редактору и логотипу оставь такими, как устроено в твоём проекте.",
      before: `<!-- Страницы галереи пока нет. -->`,
      after: `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pixel Draw - моя галерея</title>
    <link rel="stylesheet" href="gallery.css" />
  </head>
  <body>
    <div class="page">
      <header class="header">
        <a class="logo" href="...путь к главной...">
          <img src="...путь к логотипу..." alt="Pixel Draw" />
        </a>
        <nav class="nav">
          <a href="...путь к редактору...">Редактор</a>
        </nav>
        <a class="header-button" href="...путь к редактору...">Рисовать</a>
      </header>

      <main>
        <section class="gallery-hero">
          <div>
            <p class="eyebrow">Local gallery</p>
            <h1>Моя галерея рисунков</h1>
            <p class="gallery-hero__lead">
              Здесь появляются работы, сохранённые в редакторе.
            </p>
          </div>

          <div class="gallery-panel">
            <span>Активные работы</span>
            <strong id="galleryCount">0 / 9</strong>
            <p id="archiveCount">В архиве пока 0 работ.</p>
            <a class="draw-button" href="...путь к редактору...">Перейти к рисованию</a>
            <button id="clearGallery" type="button">Очистить галерею</button>
          </div>
        </section>

        <section class="section">
          <p id="emptyMessage">Пока здесь нет сохранённых работ.</p>
          <div class="gallery-grid" id="galleryGrid"></div>
        </section>
      </main>
    </div>

    <div class="modal" id="previewModal" hidden>
      <div data-close-modal></div>
      <section>
        <button type="button" data-close-modal>×</button>
        <h2 id="modalTitle">Сохранённый рисунок</h2>
        <img id="modalImage" src="" alt="Сохранённый пиксельный рисунок" />
        <p id="modalMeta"></p>
      </section>
    </div>

    <script src="gallery.js"></script>
  </body>
</html>`,
      note:
        "id вроде `galleryGrid`, `galleryCount`, `previewModal` нужны не для красоты. По ним JavaScript найдёт элементы и сможет обновлять страницу.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой файл отвечает за разметку новой страницы галереи?",
        answer: "html",
        options: [
          { value: "css", label: "`gallery.css`", explain: "Нет. CSS отвечает за внешний вид, а не за HTML-разметку." },
          { value: "js", label: "`gallery.js`", explain: "Нет. JS будет оживлять страницу, но каркас сначала нужен в HTML." },
          { value: "html", label: "`gallery.html`", explain: "Верно. Именно HTML задаёт блоки страницы: шапку, сетку, модальное окно." },
          { value: "storage", label: "`localStorage`", explain: "Нет. Это хранилище в браузере, а не файл страницы." },
          { value: "image", label: "PNG-файл", explain: "Нет. PNG может быть рисунком, но не разметкой страницы." },
        ],
        body:
          "<p>Начни с <code>gallery.html</code>. JavaScript и CSS проще писать, когда на странице уже есть понятные элементы с классами и id.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Зачем блоку сетки нужен id `galleryGrid`?",
        answer: "target",
        options: [
          { value: "target", label: "Чтобы JS нашёл место для карточек", explain: "Верно. JS возьмёт этот блок через `querySelector` и вставит туда карточки." },
          { value: "font", label: "Чтобы подключить шрифт", explain: "Нет. Шрифты подключаются в `head`, а не через id сетки." },
          { value: "download", label: "Чтобы скачать картинку", explain: "Нет. Скачивание запускается из редактора, а сетка показывает сохранения." },
          { value: "cookie", label: "Чтобы записать cookie", explain: "Нет. id элемента не записывает cookie сам по себе." },
          { value: "random", label: "Чтобы id был просто красивым", explain: "Нет. У id есть практическая задача: найти конкретный блок." },
        ],
        body:
          "<p>Дай сетке id, например <code>galleryGrid</code>. Тогда в JS можно написать <code>document.querySelector('#galleryGrid')</code> и управлять содержимым.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какие блоки лучше подготовить в `gallery.html` сразу?",
        answer: "all",
        options: [
          { value: "only-grid", label: "Только пустую сетку", explain: "Не совсем. Сетка нужна, но ещё нужны счётчик, сообщение и модальное окно." },
          { value: "all", label: "Сетку, счётчики, сообщение, кнопки и модальное окно", explain: "Верно. Так JS сможет сразу работать со всеми частями интерфейса." },
          { value: "only-modal", label: "Только модальное окно", explain: "Нет. Без сетки пользователь не увидит карточки." },
          { value: "only-footer", label: "Только подвал", explain: "Нет. Подвал не решает задачу галереи." },
          { value: "no-ids", label: "Блоки без id и классов", explain: "Нет. Без id и классов сложнее подключить CSS и JS." },
        ],
        body:
          "<p>Сразу подготовь опорные элементы: <code>#galleryGrid</code>, <code>#galleryCount</code>, <code>#archiveCount</code>, <code>#emptyMessage</code>, <code>#clearGallery</code>, <code>#previewModal</code>.</p>",
      },
    ],
  },
  {
    title: "Оформи сетку и 9 пустых слотов",
    goal:
      "Галерея должна выглядеть как часть проекта: шапка, зелёные акценты, чёрные рамки, карточки и адаптивная сетка.",
    before:
      "Без CSS страница галереи выглядит как обычный список блоков, а пустое состояние не похоже на будущую галерею.",
    change:
      "Создай `gallery.css`: перенеси общий стиль проекта, оформи сетку на 3 колонки, карточки, плейсхолдеры, кнопки, модальное окно и мобильную версию.",
    why:
      "Пользователь должен понимать, что это продолжение редактора. А 9 пустых слотов сразу показывают лимит активных работ.",
    task:
      "Сделай внешний вид галереи. Не усложняй: обычный CSS, grid, карточки и media query достаточно.",
    recap:
      "Ты оформил галерею: пустая страница больше не выглядит сломанной, а 9 слотов показывают, куда попадут сохранённые рисунки.",
    result: {
      location:
        "Где править: новый файл `gallery.css`. Используй цвета и рамки своего проекта, но не копируй лишний код без необходимости.",
      before: `.gallery-grid {
  /* Пока сетка не оформлена. */
}`,
      after: `.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.gallery-card {
  min-width: 0;
  border: 2px solid #050505;
  border-radius: 6px;
  padding: 16px;
  background: #f8fff4;
}

.gallery-card__image,
.placeholder-art {
  width: 100%;
  aspect-ratio: 16 / 10;
  margin-bottom: 16px;
  border: 2px solid #050505;
  background: #ffffff;
}

.placeholder-art {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  padding: 12px;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}`,
      note:
        "Плейсхолдеры можно нарисовать обычными `span` внутри карточки. Это легче, чем искать временные картинки, и хорошо подходит пиксельному редактору.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какое CSS-свойство удобно использовать для сетки карточек?",
        answer: "grid",
        options: [
          { value: "grid", label: "`display: grid`", explain: "Верно. Grid удобно раскладывает карточки по колонкам." },
          { value: "color", label: "`color`", explain: "Нет. `color` меняет цвет текста." },
          { value: "font", label: "`font-family`", explain: "Нет. Это выбор шрифта." },
          { value: "position", label: "`position: fixed`", explain: "Нет. Fixed закрепляет элемент, но не строит сетку карточек." },
          { value: "opacity", label: "`opacity`", explain: "Нет. Это прозрачность элемента." },
        ],
        body:
          "<p>Для карточек галереи удобно использовать <code>display: grid</code> и <code>grid-template-columns</code>. Так сетка легко перестраивается на мобильной ширине.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Почему у изображения карточки полезно задать `aspect-ratio`?",
        answer: "stable",
        options: [
          { value: "stable", label: "Чтобы карточки были одинаковой формы", explain: "Верно. Фиксированное соотношение сторон делает сетку ровной." },
          { value: "storage", label: "Чтобы localStorage работал быстрее", explain: "Нет. CSS не ускоряет запись в localStorage." },
          { value: "date", label: "Чтобы дата форматировалась", explain: "Нет. Дату форматирует JS." },
          { value: "server", label: "Чтобы подключить сервер", explain: "Нет. Сервер здесь не нужен." },
          { value: "delete", label: "Чтобы удалять картинки", explain: "Нет. Удаление делает JS." },
        ],
        body:
          "<p><code>aspect-ratio</code> удерживает одинаковую форму превью. Даже если картинка загрузится позже, карточка не будет прыгать по высоте.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что должно произойти с сеткой на узком экране?",
        answer: "one-column",
        options: [
          { value: "one-column", label: "Карточки становятся в одну колонку", explain: "Верно. Так текст и картинки не сжимаются." },
          { value: "hide", label: "Галерея полностью исчезает", explain: "Нет. Пользователь должен видеть работы и на телефоне." },
          { value: "nine-columns", label: "Делается 9 колонок", explain: "Нет. На телефоне это будет нечитаемо." },
          { value: "fixed", label: "Ширина остаётся 1200px", explain: "Нет. Это создаст горизонтальный скролл." },
          { value: "modal-only", label: "Остаётся только модальное окно", explain: "Нет. Сетка тоже должна быть доступна." },
        ],
        body:
          "<p>Добавь media query: на ширине примерно до 900px сделай <code>.gallery-grid { grid-template-columns: 1fr; }</code>. Это простая и надёжная адаптивность.</p>",
      },
    ],
  },
  {
    title: "Подготовь локальное хранилище",
    goal:
      "Перед отрисовкой карточек нужно научиться безопасно читать и записывать массив работ в браузере пользователя.",
    before:
      "Рисунки могут скачиваться на компьютер, но страница галереи ещё не знает, где брать сохранённые работы.",
    change:
      "В `gallery.js` создай ключи localStorage, функцию чтения массива, функцию записи массива, сортировку по дате и форматирование даты.",
    why:
      "localStorage доступен на GitHub Pages и работает без сервера. Но данные там лежат строкой, поэтому их нужно превращать из JSON и обратно.",
    task:
      "Начни `gallery.js` с констант и маленьких функций. Это база, на которую потом опирается вся галерея.",
    recap:
      "Ты подготовил слой данных: теперь галерея умеет читать работы из браузера, записывать изменения и показывать даты в понятном виде.",
    result: {
      location:
        "Где править: начало файла `gallery.js`.",
      before: `// JS галереи пока пустой.`,
      after: `const GALLERY_STORAGE_KEY = "pixel-draw-gallery";
const GALLERY_ARCHIVE_STORAGE_KEY = "pixel-draw-gallery-archive";
const MAX_GALLERY_ITEMS = 9;

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

function sortByDateDesc(items) {
  return [...items].sort(function (a, b) {
    return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime();
  });
}`,
      note:
        "Ключи localStorage должны быть одинаковыми в редакторе и на странице галереи. Иначе редактор сохранит в одно место, а галерея будет читать другое.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой браузерный инструмент подходит для хранения работ без сервера?",
        answer: "localStorage",
        options: [
          { value: "localStorage", label: "`localStorage`", explain: "Верно. Он хранит данные в браузере пользователя." },
          { value: "database", label: "Серверная база данных", explain: "Нет. По задаче сервер и база не используются." },
          { value: "auth", label: "Авторизация", explain: "Нет. Аккаунты здесь не нужны." },
          { value: "css", label: "CSS-переменные", explain: "Нет. CSS не хранит пользовательские рисунки." },
          { value: "alert", label: "`alert`", explain: "Нет. `alert` показывает сообщение, но не хранит данные." },
        ],
        body:
          "<p><code>localStorage</code> хранит строки в браузере. Поэтому массив работ нужно сохранять через <code>JSON.stringify</code>, а читать через <code>JSON.parse</code>.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Почему чтение localStorage лучше обернуть в `try...catch`?",
        answer: "broken-json",
        options: [
          { value: "broken-json", label: "В хранилище может оказаться сломанный JSON", explain: "Верно. Тогда `JSON.parse` бросит ошибку, а страница не должна падать." },
          { value: "style", label: "Чтобы CSS стал красивее", explain: "Нет. `try...catch` относится к JS-ошибкам." },
          { value: "server", label: "Чтобы подключить сервер", explain: "Нет. Сервер не используется." },
          { value: "font", label: "Чтобы загрузить шрифт", explain: "Нет. Шрифт подключается в HTML/CSS." },
          { value: "modal", label: "Чтобы открыть модальное окно", explain: "Нет. Модальное окно открывается отдельной функцией." },
        ],
        body:
          "<p>Если данные повреждены, галерея должна спокойно показать пустое состояние. Для этого функция чтения возвращает пустой массив при ошибке.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Как сохранить массив работ в localStorage?",
        answer: "stringify",
        options: [
          { value: "stringify", label: "`localStorage.setItem(key, JSON.stringify(items))`", explain: "Верно. localStorage хранит строки, поэтому массив нужно превратить в JSON-строку." },
          { value: "direct", label: "`localStorage.setItem(key, items)`", explain: "Нет. Массив превратится в неудачную строку и потеряет структуру объектов." },
          { value: "parse", label: "`localStorage.setItem(key, JSON.parse(items))`", explain: "Нет. `JSON.parse` читает JSON, а не сохраняет его." },
          { value: "innerHTML", label: "`galleryGrid.innerHTML = items`", explain: "Нет. Это вставка в HTML, а не сохранение данных." },
          { value: "cookie", label: "`document.cookie = items`", explain: "Нет. Cookie слишком маленькие и неудобные для галереи работ." },
        ],
        body:
          "<p>Запись выглядит коротко: <code>localStorage.setItem(key, JSON.stringify(value))</code>. Чтение — наоборот: <code>JSON.parse(localStorage.getItem(key))</code>.</p>",
      },
    ],
  },
  {
    title: "Сохрани работу из редактора",
    goal:
      "Когда пользователь нажимает `Save Image`, рисунок должен скачаться как раньше и одновременно попасть в локальную галерею.",
    before:
      "Кнопка сохранения может только скачивать картинку. После перезагрузки сайта галерея ничего не знает о сохранённой работе.",
    change:
      "В коде редактора создай объект работы: `id`, дата, формат, `dataUrl`, данные пикселей, размер сетки и палитра. Запиши его в localStorage и покажи уведомление.",
    why:
      "Картинка нужна для просмотра, а данные пикселей нужны на будущее: по ним можно будет открыть работу для редактирования.",
    task:
      "Расширь функцию сохранения, но не ломай старое скачивание. Локальная галерея должна добавляться как ещё одно действие.",
    recap:
      "Ты связал редактор с галереей: сохранение теперь не только скачивает файл, но и оставляет работу в браузере пользователя.",
    result: {
      location:
        "Где править: файл JS редактора и, при необходимости, HTML редактора для ссылки на галерею и уведомления.",
      before: `function saveFieldAsImage() {
  domtoimage.toPng(field).then(function (dataUrl) {
    const link = document.createElement("a");
    link.download = "pixel-draw.png";
    link.href = dataUrl;
    link.click();
  });
}`,
      after: `const GALLERY_STORAGE_KEY = "pixel-draw-gallery";
const MAX_GALLERY_ITEMS = 9;

function createArtworkRecord(dataUrl, format) {
  return {
    id: "pixel-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8),
    savedAt: new Date().toISOString(),
    format,
    dataUrl,
    pixelData: serializeGrid(),
    columns: 50,
    rows: 20,
    palette: getPaletteSnapshot(),
  };
}

function saveArtworkToGallery(artwork) {
  const current = loadStorageList(GALLERY_STORAGE_KEY);
  const next = [artwork, ...current].slice(0, MAX_GALLERY_ITEMS);
  saveStorageList(GALLERY_STORAGE_KEY, next);
}

async function saveFieldAsImage() {
  const dataUrl = await domtoimage.toPng(field);
  const artwork = createArtworkRecord(dataUrl, "image/png");

  saveArtworkToGallery(artwork);
  downloadDataUrl(dataUrl, "pixel-draw.png");
  showSaveNotice("Рисунок сохранён в браузере и добавлен в галерею.");
}`,
      note:
        "Если хочешь хранить компактнее, можно сделать маленькое canvas-превью и сохранить его как WebP, а скачивание оставить через `dom-to-image`.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какая кнопка запускает сохранение работы?",
        answer: "save",
        options: [
          { value: "save", label: "`Save Image`", explain: "Верно. Именно к этой кнопке подключается сохранение картинки и запись в галерею." },
          { value: "clear", label: "`Clear`", explain: "Нет. Эта кнопка очищает поле." },
          { value: "fill", label: "`Fill All`", explain: "Нет. Эта кнопка заливает поле цветом." },
          { value: "color", label: "Кнопка цвета", explain: "Нет. Цвет выбирает оттенок, но не сохраняет работу." },
          { value: "back", label: "Кнопка назад", explain: "Нет. Она нужна для перехода, а не для сохранения." },
        ],
        body:
          "<p>Найди обработчик кнопки <code>Save Image</code>. Внутри него можно оставить скачивание и добавить запись работы в localStorage.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Зачем сохранять не только картинку, но и `pixelData`?",
        answer: "edit",
        options: [
          { value: "edit", label: "Чтобы позже можно было восстановить рисунок по клеткам", explain: "Верно. `pixelData` хранит состояние сетки, а не только готовое изображение." },
          { value: "font", label: "Чтобы изменить шрифт галереи", explain: "Нет. Шрифт не связан с данными пикселей." },
          { value: "server", label: "Чтобы отправить всё на сервер", explain: "Нет. Сервер по задаче не используется." },
          { value: "button", label: "Чтобы кнопка стала зелёной", explain: "Нет. Цвет кнопки задаёт CSS." },
          { value: "random", label: "Чтобы id стал случайным", explain: "Нет. id создаётся отдельно." },
        ],
        body:
          "<p>Картинка удобна для просмотра. Но для будущей кнопки редактирования важнее строка или массив с цветами клеток: по ним можно заново раскрасить сетку.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что обязательно должно быть в объекте сохранённой работы?",
        answer: "metadata",
        options: [
          { value: "metadata", label: "`id`, дата, формат, `dataUrl`, данные пикселей", explain: "Верно. Этого хватает для карточки, сортировки и будущего редактирования." },
          { value: "only-image", label: "Только `dataUrl`", explain: "Не совсем. Картинка есть, но без даты, id и пиксельных данных галерея слабее." },
          { value: "only-date", label: "Только дату сохранения", explain: "Нет. Дата не покажет сам рисунок." },
          { value: "only-css", label: "Только CSS-класс", explain: "Нет. CSS-класс не хранит работу пользователя." },
          { value: "password", label: "Пароль пользователя", explain: "Нет. Авторизация не нужна и не должна добавляться." },
        ],
        body:
          "<p>Собирай работу как объект. Например: <code>{ id, savedAt, format, dataUrl, pixelData, columns, rows, palette }</code>. Это понятная структура для галереи.</p>",
      },
    ],
  },
  {
    title: "Покажи сохранённые работы",
    goal:
      "Страница галереи должна загружать работы из localStorage, сортировать их и показывать карточки вместо пустых слотов.",
    before:
      "Даже если редактор уже записывает данные, галерея пока может показывать только пустую сетку.",
    change:
      "В `gallery.js` найди элементы страницы, загрузи массив работ, отсортируй новые сверху, отрисуй карточки и добавь плейсхолдеры до 9 слотов.",
    why:
      "Пользователь должен видеть свои последние работы сразу после перехода в галерею.",
    task:
      "Напиши функции `loadGallery`, `renderArtworkCard`, `renderPlaceholder` и `renderGallery`.",
    recap:
      "Ты сделал главную часть галереи: она берёт данные из браузера и превращает их в понятные карточки.",
    result: {
      location:
        "Где править: середина файла `gallery.js`, после функций работы с localStorage.",
      before: `const galleryGrid = document.querySelector("#galleryGrid");

// Карточки пока не строятся.`,
      after: `const galleryGrid = document.querySelector("#galleryGrid");
const galleryCount = document.querySelector("#galleryCount");
const emptyMessage = document.querySelector("#emptyMessage");

let artworks = [];

function loadGallery() {
  artworks = sortByDateDesc(loadStorageList(GALLERY_STORAGE_KEY)).slice(0, MAX_GALLERY_ITEMS);
}

function renderPlaceholder(index) {
  return '<article class="gallery-card gallery-card--placeholder">' +
    '<div class="placeholder-art" aria-hidden="true"></div>' +
    '<h3>Пустой слот ' + (index + 1) + '</h3>' +
    '<p>Сохрани рисунок в редакторе, и он появится здесь.</p>' +
  '</article>';
}

function renderArtworkCard(artwork, index) {
  return '<article class="gallery-card" data-artwork-id="' + artwork.id + '">' +
    '<img class="gallery-card__image" src="' + artwork.dataUrl + '" alt="Работа ' + (index + 1) + '">' +
    '<h3>Работа ' + (index + 1) + '</h3>' +
    '<p>Сохранено: ' + formatDate(artwork.savedAt) + '</p>' +
    '<button data-action="open" data-id="' + artwork.id + '">Открыть</button>' +
    '<button data-action="delete" data-id="' + artwork.id + '">Удалить</button>' +
  '</article>';
}

function renderGallery() {
  const placeholdersCount = Math.max(0, MAX_GALLERY_ITEMS - artworks.length);
  const cards = [
    ...artworks.map(renderArtworkCard),
    ...Array.from({ length: placeholdersCount }, function (_, index) {
      return renderPlaceholder(index + artworks.length);
    }),
  ];

  galleryGrid.innerHTML = cards.join("");
  galleryCount.textContent = artworks.length + " / " + MAX_GALLERY_ITEMS;
  emptyMessage.hidden = artworks.length > 0;
}

loadGallery();
renderGallery();`,
      note:
        "Если вставляешь данные пользователя в HTML, используй функцию экранирования. Это защищает страницу от странных символов в сохранённых данных.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Откуда галерея берёт сохранённые работы?",
        answer: "storage",
        options: [
          { value: "storage", label: "Из `localStorage`", explain: "Верно. Редактор записывает туда работы, а галерея читает." },
          { value: "server", label: "С сервера", explain: "Нет. Серверной части здесь нет." },
          { value: "css", label: "Из CSS-файла", explain: "Нет. CSS отвечает за оформление." },
          { value: "modal", label: "Из модального окна", explain: "Нет. Модальное окно только показывает выбранную работу." },
          { value: "footer", label: "Из подвала сайта", explain: "Нет. Подвал не хранит данные." },
        ],
        body:
          "<p>На загрузке страницы вызови функцию чтения: <code>loadStorageList(GALLERY_STORAGE_KEY)</code>. Она вернёт массив сохранённых работ.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какой порядок карточек нужен в галерее?",
        answer: "new-first",
        options: [
          { value: "new-first", label: "Новые работы сверху", explain: "Верно. Пользователь чаще хочет видеть последнее сохранение первым." },
          { value: "old-first", label: "Старые работы сверху", explain: "Не лучший вариант для этой галереи: последнее сохранение будет далеко." },
          { value: "random", label: "Случайный порядок", explain: "Нет. Пользователь потеряет связь между сохранением и карточкой." },
          { value: "alphabet", label: "По алфавиту", explain: "Нет. У работ нет удобных названий для алфавитной сортировки." },
          { value: "none", label: "Не показывать карточки", explain: "Нет. Галерея должна показывать работы." },
        ],
        body:
          "<p>Сортируй по <code>savedAt</code>: новая дата должна идти раньше старой. Для этого можно сравнить <code>new Date(b.savedAt)</code> и <code>new Date(a.savedAt)</code>.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Зачем добавлять плейсхолдеры после настоящих карточек?",
        answer: "nine",
        options: [
          { value: "nine", label: "Чтобы сетка всегда показывала 9 мест", explain: "Верно. Так пользователь видит лимит активной галереи." },
          { value: "storage", label: "Чтобы увеличить localStorage", explain: "Нет. Плейсхолдеры не меняют размер хранилища." },
          { value: "download", label: "Чтобы скачать все картинки", explain: "Нет. Скачивание работает в редакторе." },
          { value: "archive", label: "Чтобы открыть архив", explain: "Нет. Архив хранится отдельно, а плейсхолдеры показывают свободные места." },
          { value: "font", label: "Чтобы подключить шрифт", explain: "Нет. Шрифт не связан с пустыми карточками." },
        ],
        body:
          "<p>Посчитай свободные места: <code>MAX_GALLERY_ITEMS - artworks.length</code>. Потом дорисуй столько плейсхолдеров, чтобы на странице было 9 слотов.</p>",
      },
    ],
  },
  {
    title: "Добавь просмотр и удаление",
    goal:
      "Карточки должны быть не просто картинками: пользователь может открыть работу крупно, удалить одну работу или очистить всю галерею.",
    before:
      "Галерея показывает карточки, но кнопки на них ещё ничего не делают.",
    change:
      "Добавь обработчик клика по сетке, функции `openArtwork`, `deleteArtwork`, `clearGallery`, закрытие модального окна и клавишу Escape.",
    why:
      "Так галерея становится полноценной: пользователь управляет своими локальными работами без перезагрузки страницы.",
    task:
      "Используй делегирование событий: один обработчик на сетке читает `data-action` у нажатой кнопки.",
    recap:
      "Ты оживил галерею: карточку можно открыть, отдельную работу удалить, всю активную галерею очистить, а модальное окно закрыть.",
    result: {
      location:
        "Где править: конец файла `gallery.js`, после функций отрисовки.",
      before: `// Кнопки карточек пока без обработчиков.`,
      after: `function findArtwork(id) {
  return artworks.find(function (artwork) {
    return artwork.id === id;
  });
}

function openArtwork(id) {
  const artwork = findArtwork(id);
  if (!artwork) return;

  modalImage.src = artwork.dataUrl;
  modalMeta.textContent = formatDate(artwork.savedAt) + " · " + artwork.format;
  previewModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  previewModal.hidden = true;
  modalImage.src = "";
  document.body.style.overflow = "";
}

function deleteArtwork(id) {
  const shouldDelete = window.confirm("Удалить эту работу из локальной галереи?");
  if (!shouldDelete) return;

  artworks = artworks.filter(function (item) {
    return item.id !== id;
  });
  saveStorageList(GALLERY_STORAGE_KEY, artworks);
  renderGallery();
}

galleryGrid.addEventListener("click", function (event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  if (button.dataset.action === "open") {
    openArtwork(button.dataset.id);
  }

  if (button.dataset.action === "delete") {
    deleteArtwork(button.dataset.id);
  }
});`,
      note:
        "Делегирование удобно, потому что карточки создаются через JS. Не нужно вешать обработчик на каждую кнопку отдельно после каждой перерисовки.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какое событие обычно слушают у кнопок?",
        answer: "click",
        options: [
          { value: "click", label: "`click`", explain: "Верно. Кнопки открытия и удаления запускаются по клику." },
          { value: "scroll", label: "`scroll`", explain: "Нет. Прокрутка не нажимает кнопку." },
          { value: "load", label: "`load`", explain: "Нет. `load` связан с загрузкой страницы или ресурса." },
          { value: "resize", label: "`resize`", explain: "Нет. Это изменение размера окна." },
          { value: "keydown-only", label: "Только `keydown`", explain: "Нет. Клавиатура полезна для Escape, но кнопки всё равно нажимаются кликом." },
        ],
        body:
          "<p>Для кнопок карточек используй событие <code>click</code>. Один обработчик можно повесить на всю сетку.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Почему удобно использовать `data-action` на кнопках карточки?",
        answer: "action",
        options: [
          { value: "action", label: "Чтобы понять, открыть или удалить работу", explain: "Верно. `data-action` хранит смысл действия кнопки." },
          { value: "style", label: "Чтобы заменить CSS", explain: "Нет. `data-action` не заменяет стили." },
          { value: "storage", label: "Чтобы автоматически записать localStorage", explain: "Нет. Запись делает функция, а не атрибут сам по себе." },
          { value: "image", label: "Чтобы загрузить картинку", explain: "Нет. Картинка берётся из `dataUrl`." },
          { value: "date", label: "Чтобы форматировать дату", explain: "Нет. Дату форматирует функция." },
        ],
        body:
          "<p>Кнопка может выглядеть так: <code>&lt;button data-action=\"open\" data-id=\"...\"&gt;</code>. JS читает действие и id, а потом вызывает нужную функцию.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что нужно сделать после удаления работы из массива?",
        answer: "save-render",
        options: [
          { value: "save-render", label: "Сохранить массив и заново отрисовать галерею", explain: "Верно. Иначе изменения не останутся и не появятся на экране." },
          { value: "only-filter", label: "Только сделать `filter`", explain: "Не хватит. Массив изменится в памяти, но localStorage и экран не обновятся." },
          { value: "reload", label: "Обязательно перезагрузить страницу", explain: "Нет. Галерея должна обновляться без перезагрузки." },
          { value: "delete-storage", label: "Удалить весь localStorage", explain: "Нет. Нужно удалить только одну работу." },
          { value: "hide-modal", label: "Только закрыть модальное окно", explain: "Нет. Закрытие окна не удаляет карточку." },
        ],
        body:
          "<p>После удаления сделай три вещи: обнови массив, запиши его в <code>localStorage</code>, вызови <code>renderGallery()</code>.</p>",
      },
    ],
  },
  {
    title: "Сделай лимит 9 работ и архив",
    goal:
      "Галерея должна хранить 9 активных картинок, а старые работы переносить в архив без тяжёлого изображения.",
    before:
      "Если бесконечно сохранять dataURL-картинки, localStorage быстро переполнится.",
    change:
      "Ограничь активный массив до 9 работ. Всё, что старше, перенеси в отдельный архивный ключ: без `dataUrl`, но с `pixelData`, датой, размером и палитрой.",
    why:
      "Так галерея остаётся лёгкой, но данные для будущего редактирования не пропадают полностью.",
    task:
      "Добавь функцию архивирования и обработку ошибки переполнения localStorage.",
    recap:
      "Ты защитил галерею от переполнения: активных картинок не больше 9, а старые пиксельные данные сохраняются отдельно.",
    result: {
      location:
        "Где править: JS редактора, там где работа записывается в localStorage.",
      before: `function saveArtworkToGallery(artwork) {
  const current = loadStorageList(GALLERY_STORAGE_KEY);
  const next = [artwork, ...current];
  saveStorageList(GALLERY_STORAGE_KEY, next);
}`,
      after: `const GALLERY_ARCHIVE_STORAGE_KEY = "pixel-draw-gallery-archive";
const MAX_GALLERY_ITEMS = 9;
const MAX_ARCHIVE_ITEMS = 60;

function makeArchiveRecord(artwork) {
  const archiveRecord = { ...artwork };
  delete archiveRecord.dataUrl;

  archiveRecord.archivedAt = new Date().toISOString();
  archiveRecord.imageRemoved = true;
  return archiveRecord;
}

function saveArchiveItems(items) {
  if (!items.length) return;

  const archiveItems = items.map(makeArchiveRecord);
  const archive = [
    ...archiveItems,
    ...loadStorageList(GALLERY_ARCHIVE_STORAGE_KEY),
  ].slice(0, MAX_ARCHIVE_ITEMS);

  saveStorageList(GALLERY_ARCHIVE_STORAGE_KEY, archive);
}

function saveArtworkToGallery(artwork) {
  const current = loadStorageList(GALLERY_STORAGE_KEY);
  let next = [artwork, ...current];
  const overflow = next.slice(MAX_GALLERY_ITEMS);

  next = next.slice(0, MAX_GALLERY_ITEMS);
  saveStorageList(GALLERY_STORAGE_KEY, next);
  saveArchiveItems(overflow);
}`,
      note:
        "Архивная запись специально удаляет `dataUrl`: картинка тяжёлая, а пиксельные данные компактнее и полезнее для будущего редактирования.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Сколько активных работ должна показывать галерея?",
        answer: "nine",
        options: [
          { value: "nine", label: "9 работ", explain: "Верно. Это лимит активной галереи." },
          { value: "one", label: "1 работу", explain: "Нет. Галерея должна показывать до 9 работ." },
          { value: "hundred", label: "100 работ с картинками", explain: "Нет. Так можно быстро переполнить localStorage." },
          { value: "zero", label: "0 работ", explain: "Нет. Тогда галерея не будет выполнять задачу." },
          { value: "server", label: "Сколько разрешит сервер", explain: "Нет. Сервер здесь не используется." },
        ],
        body:
          "<p>Активную галерею ограничиваем числом <code>9</code>. После этого старые элементы уходят в архивную структуру.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Почему в архиве лучше убрать `dataUrl`?",
        answer: "heavy",
        options: [
          { value: "heavy", label: "`dataUrl` занимает много места", explain: "Верно. Картинка в dataURL может быть большой строкой." },
          { value: "date", label: "Дата занимает много места", explain: "Нет. Дата — короткая строка." },
          { value: "id", label: "id нельзя хранить", explain: "Нет. id как раз полезно оставить." },
          { value: "palette", label: "Палитра ломает CSS", explain: "Нет. Палитра хранится как данные, CSS не ломается." },
          { value: "modal", label: "Модальное окно не любит dataURL", explain: "Нет. Модальное окно может показывать dataURL, но архиву картинка не нужна." },
        ],
        body:
          "<p>Для архива оставь <code>pixelData</code>, дату, размер сетки и палитру. Этого хватит, чтобы потом восстановить рисунок в редакторе.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Как получить работы, которые не помещаются в первые 9?",
        answer: "slice",
        options: [
          { value: "slice", label: "`next.slice(MAX_GALLERY_ITEMS)`", explain: "Верно. Так ты получишь элементы после первых 9." },
          { value: "first", label: "`next[0]`", explain: "Нет. Это только самая новая работа." },
          { value: "clear", label: "`localStorage.clear()`", explain: "Нет. Это удалит всё хранилище и слишком грубо." },
          { value: "sort", label: "`next.sort()` без даты", explain: "Нет. Сортировка не выбирает лишние элементы сама по себе." },
          { value: "html", label: "`innerHTML`", explain: "Нет. `innerHTML` отвечает за разметку, а не за выбор лишних работ." },
        ],
        body:
          "<p>После добавления новой работы массив выглядит так: новая работа сверху, старые ниже. <code>slice(0, 9)</code> оставляет активные, <code>slice(9)</code> отдаёт архиву остальные.</p>",
      },
    ],
  },
  {
    title: "Проверь весь путь пользователя",
    goal:
      "В конце нужно убедиться, что пользователь может нарисовать, сохранить, перейти в галерею, увидеть работу и управлять ей.",
    before:
      "Отдельные куски кода могут быть готовы, но ошибка в пути, ключе localStorage или id элемента сломает весь сценарий.",
    change:
      "Проверь ссылки, одинаковые ключи хранилища, уведомление, сортировку, 9 слотов, удаление, очистку, модальное окно и мобильную ширину.",
    why:
      "Локальная галерея работает только на стороне браузера, поэтому важно проверить именно пользовательский сценарий, а не только синтаксис.",
    task:
      "Пройди полный тест вручную: сохрани несколько рисунков, открой галерею, удали один, очисти активную галерею и проверь 10-е сохранение.",
    recap:
      "Ты довёл галерею до рабочего состояния: она связана с редактором, работает без сервера, хранит данные локально и остаётся понятной для пользователя.",
    result: {
      location:
        "Где проверять: редактор, `gallery.html`, localStorage в DevTools и мобильная ширина браузера.",
      before: `// Проверка пропущена:
// ссылки могут вести не туда,
// ключи localStorage могут отличаться,
// галерея может не увидеть сохранённые работы.`,
      after: `// Мини-чеклист проверки:
// 1. Открой редактор и нажми Save Image.
// 2. Убедись, что появилось уведомление без перезагрузки страницы.
// 3. Перейди в галерею и проверь новую карточку сверху.
// 4. Открой карточку в полном размере.
// 5. Удали одну работу и проверь, что она исчезла.
// 6. Очисти активную галерею.
// 7. Сохрани 10 работ и проверь, что активных осталось 9.
// 8. Проверь, что архивный ключ хранит данные старой работы без dataUrl.
// 9. На мобильной ширине карточки должны идти в одну колонку.`,
      note:
        "Главный признак успеха: страница работает после публикации на GitHub Pages, потому что всё хранится в браузере и не требует сервера.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Нужно ли перезагружать страницу после сохранения рисунка?",
        answer: "no",
        options: [
          { value: "no", label: "Нет, сохранение должно пройти без перезагрузки", explain: "Верно. Пользователь должен остаться в редакторе и увидеть уведомление." },
          { value: "yes", label: "Да, обязательно", explain: "Нет. Перезагрузка не нужна и может сбить работу." },
          { value: "server", label: "Только после ответа сервера", explain: "Нет. Сервера в этой задаче нет." },
          { value: "modal", label: "Только после закрытия модального окна", explain: "Нет. Модальное окно относится к просмотру в галерее." },
          { value: "css", label: "После загрузки CSS", explain: "Нет. CSS не управляет сохранением." },
        ],
        body:
          "<p>После клика по <code>Save Image</code> редактор должен показать уведомление и продолжить работать. Переход в галерею — это выбор пользователя.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Что проверить, если галерея не видит сохранённую работу?",
        answer: "keys",
        options: [
          { value: "keys", label: "Одинаковые ключи localStorage в редакторе и галерее", explain: "Верно. Если ключи разные, страницы смотрят в разные места." },
          { value: "border", label: "Толщину рамки карточки", explain: "Нет. Рамка не влияет на чтение данных." },
          { value: "font", label: "Название шрифта", explain: "Нет. Шрифт не связан с localStorage." },
          { value: "footer", label: "Текст в подвале", explain: "Нет. Подвал не хранит работы." },
          { value: "title", label: "Заголовок вкладки", explain: "Нет. Заголовок вкладки не влияет на сохранение." },
        ],
        body:
          "<p>Ключ вроде <code>pixel-draw-gallery</code> должен совпадать на обеих страницах. Это первое место для проверки.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Где можно посмотреть, что реально записалось в браузере?",
        answer: "devtools",
        options: [
          { value: "devtools", label: "DevTools → Application → Local Storage", explain: "Верно. Там видны ключи и значения localStorage." },
          { value: "css-file", label: "В CSS-файле", explain: "Нет. CSS не хранит сохранённые работы." },
          { value: "html-title", label: "В заголовке HTML", explain: "Нет. Заголовок не показывает данные хранилища." },
          { value: "server-log", label: "В логах сервера", explain: "Нет. Сервера нет, логов сервера тоже." },
          { value: "font-panel", label: "В панели шрифтов", explain: "Нет. Это не связано с localStorage." },
        ],
        body:
          "<p>Открой инструменты разработчика, вкладку Application, раздел Local Storage. Там должны появиться ключи активной галереи и архива.</p>",
      },
    ],
  },
];

const penaltyQuestionBank = [
  {
    question: "Какой тег создаёт кнопку?",
    answer: "button",
    options: [
      { value: "button", label: "`<button>`", explain: "Верно. Кнопка создаётся тегом `<button>`." },
      { value: "div", label: "`<div>`", explain: "Нет. `div` — обычный контейнер." },
      { value: "img", label: "`<img>`", explain: "Нет. `img` показывает изображение." },
      { value: "link", label: "`<link>`", explain: "Нет. `link` подключает ресурс, например CSS." },
      { value: "meta", label: "`<meta>`", explain: "Нет. `meta` хранит служебную информацию." },
    ],
    body: "<p>Для действия на странице обычно используй <code>&lt;button&gt;</code>.</p>",
  },
  {
    question: "Как обратиться к классу `card` в CSS?",
    answer: "class",
    options: [
      { value: "class", label: "`.card`", explain: "Верно. Класс в CSS начинается с точки." },
      { value: "id", label: "`#card`", explain: "Нет. Так обращаются к id." },
      { value: "tag", label: "`card`", explain: "Нет. Так выглядит селектор тега." },
      { value: "html", label: "`<card>`", explain: "Нет. Это похоже на HTML-тег." },
      { value: "attr", label: "`[card]`", explain: "Нет. Это селектор атрибута." },
    ],
    body: "<p>Точка перед именем означает CSS-класс: <code>.card</code>.</p>",
  },
  {
    question: "Какой метод ищет первый элемент по селектору?",
    answer: "query",
    options: [
      { value: "query", label: "`document.querySelector(...)`", explain: "Верно. Он возвращает первый подходящий элемент." },
      { value: "stringify", label: "`JSON.stringify(...)`", explain: "Нет. Это превращает данные в JSON-строку." },
      { value: "parse", label: "`JSON.parse(...)`", explain: "Нет. Это читает JSON-строку." },
      { value: "set", label: "`localStorage.setItem(...)`", explain: "Нет. Это запись в localStorage." },
      { value: "date", label: "`new Date()`", explain: "Нет. Это создание даты." },
    ],
    body: "<p>Чтобы взять элемент со страницы, используй <code>document.querySelector</code>.</p>",
  },
  {
    question: "Какой тег подключает внешний JavaScript-файл?",
    answer: "script",
    options: [
      { value: "script", label: "`<script src=\"...\"></script>`", explain: "Верно. Так подключается внешний JS." },
      { value: "style", label: "`<style>`", explain: "Нет. Это CSS внутри HTML." },
      { value: "link", label: "`<link>`", explain: "Нет. Обычно так подключают CSS." },
      { value: "img", label: "`<img>`", explain: "Нет. Это изображение." },
      { value: "main", label: "`<main>`", explain: "Нет. Это основной контент страницы." },
    ],
    body: "<p>JS-файл подключается тегом <code>script</code> перед закрывающим <code>body</code> или в <code>head</code> с правильными атрибутами.</p>",
  },
  {
    question: "Какое событие используют для клика по кнопке?",
    answer: "click",
    options: [
      { value: "click", label: "`click`", explain: "Верно. Это событие клика." },
      { value: "resize", label: "`resize`", explain: "Нет. Это изменение размера окна." },
      { value: "scroll", label: "`scroll`", explain: "Нет. Это прокрутка." },
      { value: "input", label: "`input`", explain: "Нет. Это ввод в поле формы." },
      { value: "storage", label: "`storage`", explain: "Нет. Это событие изменений хранилища между вкладками." },
    ],
    body: "<p>Для кнопок чаще всего пишут <code>button.addEventListener('click', ...)</code>.</p>",
  },
  {
    question: "Как превратить массив в строку JSON?",
    answer: "stringify",
    options: [
      { value: "stringify", label: "`JSON.stringify(array)`", explain: "Верно. Это превращает массив или объект в JSON-строку." },
      { value: "parse", label: "`JSON.parse(array)`", explain: "Нет. `parse` читает JSON-строку." },
      { value: "query", label: "`querySelector(array)`", explain: "Нет. Это поиск элемента." },
      { value: "set", label: "`setItem(array)` без ключа", explain: "Нет. `setItem` требует ключ и строку." },
      { value: "map", label: "`array.map()`", explain: "Нет. `map` преобразует элементы массива, но не делает JSON." },
    ],
    body: "<p>Для localStorage массивы и объекты сохраняют через <code>JSON.stringify</code>.</p>",
  },
];

const completedStorageKey = "gallery-guide-completed";
const solvedStorageKey = "gallery-guide-solved";
const penaltySolvedStorageKey = "gallery-guide-penalty-solved";
const wrongCountsStorageKey = "gallery-guide-wrong-counts";
const stepWrongCountsStorageKey = "gallery-guide-step-wrong-counts";
const lockUntilStorageKey = "gallery-guide-lock-until";

const stepsRoot = document.querySelector("#steps");
const navRoot = document.querySelector("#stepNav");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const resetProgressButton = document.querySelector("#resetProgress");

const completedSteps = new Set(loadStoredArray(completedStorageKey));
const solvedHints = new Set(loadStoredArray(solvedStorageKey));
const solvedPenaltyQuestions = new Set(loadStoredArray(penaltySolvedStorageKey));
const wrongCounts = loadStoredObject(wrongCountsStorageKey);
const stepWrongCounts = loadStoredObject(stepWrongCountsStorageKey);
const lockUntilByQuestion = loadStoredObject(lockUntilStorageKey);
const activeCountdowns = new Map();

function loadStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function loadStoredObject(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function saveStoredSet(key, valueSet) {
  try {
    localStorage.setItem(key, JSON.stringify([...valueSet]));
  } catch {
    /* Progress still works until reload. */
  }
}

function saveStoredObject(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Progress still works until reload. */
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatInlineCode(text) {
  return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function pluralizeQuestions(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "вопрос";
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return "вопроса";
  return "вопросов";
}

function pluralizeSeconds(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "секунда";
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return "секунды";
  return "секунд";
}

function pluralizePenaltyQuestions(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "дополнительный вопрос";
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return "дополнительных вопроса";
  return "дополнительных вопросов";
}

function getStepId(index) {
  return `gallery-guide-step-${index + 1}`;
}

function getHintId(stepIndex, hintIndex) {
  return `${getStepId(stepIndex)}-hint-${hintIndex + 1}`;
}

function getPenaltyId(stepIndex, penaltyIndex) {
  return `${getStepId(stepIndex)}-penalty-${penaltyIndex + 1}`;
}

function getSolvedCount(stepIndex) {
  return steps[stepIndex].hints.filter((_, hintIndex) =>
    solvedHints.has(getHintId(stepIndex, hintIndex)),
  ).length;
}

function getStepWrongCount(stepIndex) {
  return Number(stepWrongCounts[getStepId(stepIndex)] || 0);
}

function getPenaltyCount(stepIndex) {
  return Math.floor(getStepWrongCount(stepIndex) / 3);
}

function getSolvedPenaltyCount(stepIndex) {
  const penaltyCount = getPenaltyCount(stepIndex);
  let solved = 0;

  for (let penaltyIndex = 0; penaltyIndex < penaltyCount; penaltyIndex++) {
    if (solvedPenaltyQuestions.has(getPenaltyId(stepIndex, penaltyIndex))) {
      solved += 1;
    }
  }

  return solved;
}

function getTotalQuestionCount(stepIndex) {
  return steps[stepIndex].hints.length + getPenaltyCount(stepIndex);
}

function getTotalSolvedCount(stepIndex) {
  return getSolvedCount(stepIndex) + getSolvedPenaltyCount(stepIndex);
}

function isStepFullySolved(stepIndex) {
  return (
    getSolvedCount(stepIndex) === steps[stepIndex].hints.length &&
    getSolvedPenaltyCount(stepIndex) === getPenaltyCount(stepIndex)
  );
}

function getPenaltyQuestion(stepIndex, penaltyIndex) {
  return penaltyQuestionBank[(stepIndex * 3 + penaltyIndex) % penaltyQuestionBank.length];
}

function getQuestionWrongCount(questionId) {
  return Number(wrongCounts[questionId] || 0);
}

function incrementQuestionWrongCount(questionId) {
  wrongCounts[questionId] = getQuestionWrongCount(questionId) + 1;
  saveStoredObject(wrongCountsStorageKey, wrongCounts);
  return wrongCounts[questionId];
}

function incrementStepWrongCount(stepIndex) {
  const stepId = getStepId(stepIndex);
  stepWrongCounts[stepId] = Number(stepWrongCounts[stepId] || 0) + 1;
  saveStoredObject(stepWrongCountsStorageKey, stepWrongCounts);
  return Number(stepWrongCounts[stepId]);
}

function getLockDurationSeconds(wrongCount) {
  if (wrongCount <= 1) return 5;
  if (wrongCount === 2) return 15;
  return 30;
}

function getSecondsLeft(lockUntil) {
  return Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000));
}

function getValidationMessage(stepIndex) {
  const total = getTotalQuestionCount(stepIndex);
  const solvedCount = getTotalSolvedCount(stepIndex);
  const remaining = total - solvedCount;
  const penaltyCount = getPenaltyCount(stepIndex);
  const remainingPenalty = penaltyCount - getSolvedPenaltyCount(stepIndex);

  if (remaining === total) {
    return `Ты отметил шаг как выполненный. Теперь ответь на все ${total} ${pluralizeQuestions(total)} этого шага, чтобы проверить себя. После верных ответов откроется итоговый код.`;
  }

  if (remainingPenalty > 0) {
    return `Шаг уже отмечен. Осталось ответить еще на ${remaining} из ${total} ${pluralizeQuestions(total)}. Среди них ${remainingPenalty} ${pluralizePenaltyQuestions(remainingPenalty)} за неправильные ответы.`;
  }

  return `Шаг уже отмечен. Осталось ответить еще на ${remaining} из ${total} ${pluralizeQuestions(total)}, и тогда откроется итоговый код этого шага.`;
}

function getStepStatusText(stepIndex, isDone, allSolved) {
  const penaltyCount = getPenaltyCount(stepIndex);

  if (isDone && !allSolved) {
    if (penaltyCount > 0) {
      return "Шаг отмечен. Сначала ответь на основные вопросы и дополнительные вопросы, чтобы открыть итоговый код.";
    }

    return "Шаг отмечен. Теперь ответь на все вопросы этого шага, чтобы проверить себя и открыть итоговый код.";
  }

  if (isDone && allSolved) {
    return "Шаг выполнен и проверен. Итоговый код уже открыт ниже.";
  }

  return "Когда закончишь правку, отметь шаг выполненным. После этого сайт предложит вопросы для самопроверки.";
}

function shuffleOptions(options) {
  const copy = [...options];

  for (let index = copy.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const current = copy[index];
    copy[index] = copy[randomIndex];
    copy[randomIndex] = current;
  }

  return copy;
}

function render() {
  navRoot.innerHTML = steps
    .map((step, index) => {
      const id = getStepId(index);
      return `
        <a href="#${id}" class="${completedSteps.has(id) ? "is-done" : ""}">
          <span class="route__num">${index + 1}</span>
          <span class="route__title">${escapeHtml(step.title)}</span>
        </a>
      `;
    })
    .join("");

  stepsRoot.innerHTML = steps.map((step, index) => renderStep(step, index)).join("");
  updateProgress();
  updateSolvedState();
  restoreActiveLocks();
}

function renderStep(step, index) {
  const stepId = getStepId(index);
  const solvedCount = getSolvedCount(index);
  const solvedPenaltyCount = getSolvedPenaltyCount(index);
  const penaltyCount = getPenaltyCount(index);
  const totalSolved = solvedCount + solvedPenaltyCount;
  const totalQuestions = getTotalQuestionCount(index);
  const allSolved = isStepFullySolved(index);
  const isDone = completedSteps.has(stepId);
  const needsValidation = isDone && !allSolved;

  return `
    <article class="step" id="${stepId}" data-step="${stepId}" data-step-index="${index}">
      <header class="step__header">
        <span class="step__number">${index + 1}</span>
        <div>
          <h2>${escapeHtml(step.title)}</h2>
          <p class="step__goal">${formatInlineCode(step.goal)}</p>
        </div>
      </header>

      <div class="flow">
        <section class="flow__item">
          <h3>Что было</h3>
          <p>${formatInlineCode(step.before)}</p>
        </section>
        <section class="flow__item">
          <h3>Что изменить</h3>
          <p>${formatInlineCode(step.change)}</p>
        </section>
        <section class="flow__item">
          <h3>Зачем</h3>
          <p>${formatInlineCode(step.why)}</p>
        </section>
      </div>

      <div class="task">
        <p><strong>Твоя задача:</strong> ${formatInlineCode(step.task)}</p>
      </div>

      <section class="step__checkin" data-step-checkin="${stepId}" ${needsValidation ? "" : "hidden"}>
        <span class="hint__level">Проверь себя</span>
        <p>${needsValidation ? getValidationMessage(index) : ""}</p>
      </section>

      <div class="practice">
        <p>Для закрепления ответь на все ${totalQuestions} ${pluralizeQuestions(totalQuestions)} этого шага. После правильных ответов откроется итоговый код.</p>
        ${penaltyCount > 0 ? `<p class="practice__penalty">Из-за перебора ответов здесь добавлено ${penaltyCount} ${pluralizePenaltyQuestions(penaltyCount)}.</p>` : ""}
        <p class="practice__count" data-step-progress="${stepId}">${totalSolved} / ${totalQuestions} вопросов</p>
      </div>

      <div class="hints">
        ${step.hints.map((hint, hintIndex) => renderHint(hint, index, hintIndex)).join("")}
      </div>

      ${penaltyCount > 0 ? renderPenaltyBlock(index, penaltyCount) : ""}

      <section class="step__result" data-step-result="${stepId}" ${allSolved ? "" : "hidden"}>
        <div class="step__result-head">
          <span class="hint__level">Итоговый код шага</span>
          <p>${formatInlineCode(step.result.location)}</p>
        </div>
        <div class="result-grid">
          <section class="result-card">
            <h3>Что было</h3>
            <pre><code>${escapeHtml(step.result.before)}</code></pre>
          </section>
          <section class="result-card">
            <h3>Что должно получиться</h3>
            <pre><code>${escapeHtml(step.result.after)}</code></pre>
          </section>
        </div>
        <p class="step__result-note">${formatInlineCode(step.result.note)}</p>
      </section>

      <footer class="step__footer">
        <div class="step__footer-copy">
          <p class="step__status">${getStepStatusText(index, isDone, allSolved)}</p>
          <div class="step__recap" data-step-recap="${stepId}" ${isDone ? "" : "hidden"}>
            <span class="hint__level">Коротко по шагу</span>
            <p>${formatInlineCode(step.recap)}</p>
          </div>
        </div>
        <button class="button button--ghost complete-step" type="button" data-complete="${stepId}">
          ${isDone ? "Снять отметку" : "Отметить шаг выполненным"}
        </button>
      </footer>
    </article>
  `;
}

function renderHint(hint, stepIndex, hintIndex) {
  const hintId = getHintId(stepIndex, hintIndex);
  const isSolved = solvedHints.has(hintId);
  const options = shuffleOptions(hint.options);

  return `
    <section class="hint ${isSolved ? "is-solved" : ""}" data-hint="${hintId}">
      <div class="hint__top">
        <h3>${escapeHtml(hint.level)}</h3>
        <span class="hint__difficulty">${escapeHtml(hint.difficulty)}</span>
      </div>

      <form
        class="hint__form ${isSolved ? "is-solved-form" : ""}"
        data-answer="${escapeHtml(hint.answer)}"
        data-question-id="${hintId}"
        data-step-index="${stepIndex}"
        data-penalty="false"
      >
        <p class="question">${formatInlineCode(hint.question)}</p>
        <div class="options">
          ${options
            .map((option) => {
              const optionId = `${hintId}-${option.value}`;
              return `
                <label class="option" for="${optionId}">
                  <input
                    id="${optionId}"
                    type="radio"
                    name="${hintId}"
                    value="${escapeHtml(option.value)}"
                    data-explain="${escapeHtml(option.explain)}"
                    ${isSolved ? "disabled" : ""}
                  />
                  <span>${formatInlineCode(option.label)}</span>
                </label>
              `;
            })
            .join("")}
        </div>
        <div class="hint__actions">
          <button class="button" type="submit" ${isSolved ? "disabled" : ""}>Проверить и открыть</button>
          <p class="feedback ${isSolved ? "is-ok" : ""}" aria-live="polite">${isSolved ? "Верный ответ уже принят. Подсказка открыта." : ""}</p>
        </div>
      </form>

      <div class="hint__body" ${isSolved ? "" : "hidden"}>
        <span class="hint__level">${escapeHtml(hint.level)} открыта</span>
        ${hint.body}
      </div>
    </section>
  `;
}

function renderPenaltyBlock(stepIndex, penaltyCount) {
  return `
    <section class="penalty-block" data-penalty-step="${getStepId(stepIndex)}">
      <div class="penalty-block__head">
        <span class="hint__level">Дополнительные вопросы</span>
        <p>За неправильные ответы здесь появилось ${penaltyCount} ${pluralizePenaltyQuestions(penaltyCount)}. Они простые, но пройти их нужно до открытия итогового кода.</p>
      </div>
      <div class="hints">
        ${Array.from({ length: penaltyCount }, (_, penaltyIndex) => renderPenaltyQuestion(stepIndex, penaltyIndex)).join("")}
      </div>
    </section>
  `;
}

function renderPenaltyQuestion(stepIndex, penaltyIndex) {
  const penaltyId = getPenaltyId(stepIndex, penaltyIndex);
  const question = getPenaltyQuestion(stepIndex, penaltyIndex);
  const isSolved = solvedPenaltyQuestions.has(penaltyId);
  const options = shuffleOptions(question.options);

  return `
    <section class="hint penalty ${isSolved ? "is-solved" : ""}" data-penalty="${penaltyId}">
      <div class="hint__top">
        <h3>Дополнительный вопрос ${penaltyIndex + 1}</h3>
        <span class="hint__difficulty">Базовый вопрос</span>
      </div>

      <form
        class="hint__form penalty__form ${isSolved ? "is-solved-form" : ""}"
        data-answer="${escapeHtml(question.answer)}"
        data-question-id="${penaltyId}"
        data-step-index="${stepIndex}"
        data-penalty="true"
      >
        <p class="question">${formatInlineCode(question.question)}</p>
        <div class="options">
          ${options
            .map((option) => {
              const optionId = `${penaltyId}-${option.value}`;
              return `
                <label class="option" for="${optionId}">
                  <input
                    id="${optionId}"
                    type="radio"
                    name="${penaltyId}"
                    value="${escapeHtml(option.value)}"
                    data-explain="${escapeHtml(option.explain)}"
                    ${isSolved ? "disabled" : ""}
                  />
                  <span>${formatInlineCode(option.label)}</span>
                </label>
              `;
            })
            .join("")}
        </div>
        <div class="hint__actions">
          <button class="button" type="submit" ${isSolved ? "disabled" : ""}>Проверить ответ</button>
          <p class="feedback ${isSolved ? "is-ok" : ""}" aria-live="polite">${isSolved ? "Верный ответ уже принят." : ""}</p>
        </div>
      </form>

      <div class="hint__body" ${isSolved ? "" : "hidden"}>
        <span class="hint__level">Короткое пояснение</span>
        ${question.body}
      </div>
    </section>
  `;
}

function updateProgress() {
  const total = steps.length;
  const done = [...completedSteps].filter((id) => id.startsWith("gallery-guide-step-")).length;
  progressText.textContent = `${done} из ${total} шагов`;
  progressBar.style.width = `${(done / total) * 100}%`;
}

function updateSolvedState() {
  steps.forEach((step, stepIndex) => {
    const stepId = getStepId(stepIndex);
    const totalSolved = getTotalSolvedCount(stepIndex);
    const totalQuestions = getTotalQuestionCount(stepIndex);
    const allSolved = isStepFullySolved(stepIndex);
    const isDone = completedSteps.has(stepId);

    const counter = document.querySelector(`[data-step-progress="${stepId}"]`);
    const result = document.querySelector(`[data-step-result="${stepId}"]`);
    const recap = document.querySelector(`[data-step-recap="${stepId}"]`);
    const checkin = document.querySelector(`[data-step-checkin="${stepId}"]`);
    const stepElement = document.querySelector(`[data-step="${stepId}"]`);
    const status = stepElement?.querySelector(".step__status");
    const button = stepElement?.querySelector(".complete-step");

    if (counter) {
      counter.textContent = allSolved
        ? `${totalSolved} / ${totalQuestions} вопросов. Итоговый код открыт.`
        : `${totalSolved} / ${totalQuestions} вопросов`;
    }

    if (result) {
      result.hidden = !allSolved;
    }

    if (recap) {
      recap.hidden = !isDone;
    }

    if (checkin) {
      checkin.hidden = !(isDone && !allSolved);
      if (isDone && !allSolved) {
        checkin.querySelector("p").textContent = getValidationMessage(stepIndex);
      }
    }

    if (status) {
      status.textContent = getStepStatusText(stepIndex, isDone, allSolved);
    }

    if (button) {
      button.textContent = isDone ? "Снять отметку" : "Отметить шаг выполненным";
    }
  });

  document.querySelectorAll("#stepNav a").forEach((link, index) => {
    link.classList.toggle("is-done", completedSteps.has(getStepId(index)));
  });
}

function disableQuestionForm(form, disabled) {
  form.classList.toggle("is-locked", disabled);
  form.querySelectorAll("input, button").forEach((element) => {
    element.disabled = disabled || form.classList.contains("is-solved-form");
  });
}

function clearCountdown(questionId) {
  const timerId = activeCountdowns.get(questionId);

  if (timerId) {
    window.clearInterval(timerId);
    activeCountdowns.delete(questionId);
  }
}

function clearAllCountdowns() {
  activeCountdowns.forEach((timerId) => {
    window.clearInterval(timerId);
  });
  activeCountdowns.clear();
}

function showLockMessage(form, secondsLeft) {
  const feedback = form.querySelector(".feedback");
  feedback.classList.remove("is-ok", "is-error");
  feedback.classList.add("is-locked");
  feedback.textContent = `Вариант неправильный, внимательно прочитай задание и попробуй снова. Осталось ${secondsLeft} ${pluralizeSeconds(secondsLeft)}.`;
}

function startCountdown(form, questionId, lockUntil) {
  clearCountdown(questionId);
  disableQuestionForm(form, true);
  showLockMessage(form, getSecondsLeft(lockUntil));

  const timerId = window.setInterval(() => {
    const secondsLeft = getSecondsLeft(lockUntil);

    if (secondsLeft <= 0) {
      window.clearInterval(timerId);
      activeCountdowns.delete(questionId);
      delete lockUntilByQuestion[questionId];
      saveStoredObject(lockUntilStorageKey, lockUntilByQuestion);

      if (!form.classList.contains("is-solved-form")) {
        disableQuestionForm(form, false);
        const feedback = form.querySelector(".feedback");
        feedback.classList.remove("is-locked");
        feedback.classList.add("is-error");
        feedback.textContent = "Можно попробовать снова.";
      }

      return;
    }

    showLockMessage(form, secondsLeft);
  }, 1000);

  activeCountdowns.set(questionId, timerId);
}

function restoreActiveLocks() {
  clearAllCountdowns();

  Object.entries(lockUntilByQuestion).forEach(([questionId, rawLockUntil]) => {
    const lockUntil = Number(rawLockUntil);

    if (!lockUntil || lockUntil <= Date.now()) {
      delete lockUntilByQuestion[questionId];
      return;
    }

    const form = document.querySelector(`[data-question-id="${questionId}"]`);

    if (form && !form.classList.contains("is-solved-form")) {
      startCountdown(form, questionId, lockUntil);
    }
  });

  saveStoredObject(lockUntilStorageKey, lockUntilByQuestion);
}

document.addEventListener("submit", (event) => {
  const form = event.target.closest(".hint__form");
  if (!form) return;

  event.preventDefault();

  if (form.classList.contains("is-solved-form")) {
    return;
  }

  const questionId = form.dataset.questionId;
  const stepIndex = Number(form.dataset.stepIndex);
  const isPenalty = form.dataset.penalty === "true";
  const lockUntil = Number(lockUntilByQuestion[questionId] || 0);

  if (lockUntil > Date.now()) {
    startCountdown(form, questionId, lockUntil);
    return;
  }

  const selected = form.querySelector("input[type='radio']:checked");
  const feedback = form.querySelector(".feedback");
  const hintBody = form.nextElementSibling;

  feedback.classList.remove("is-ok", "is-error", "is-locked");

  if (!selected) {
    feedback.textContent = "Сначала выбери один вариант ответа.";
    feedback.classList.add("is-error");
    return;
  }

  const explanation = selected.dataset.explain;

  if (selected.value !== form.dataset.answer) {
    const currentWrongCount = incrementQuestionWrongCount(questionId);
    const durationSeconds = getLockDurationSeconds(currentWrongCount);
    const nextLockUntil = Date.now() + durationSeconds * 1000;
    lockUntilByQuestion[questionId] = nextLockUntil;
    saveStoredObject(lockUntilStorageKey, lockUntilByQuestion);

    if (!isPenalty) {
      const previousPenaltyCount = getPenaltyCount(stepIndex);
      incrementStepWrongCount(stepIndex);
      const nextPenaltyCount = getPenaltyCount(stepIndex);

      if (nextPenaltyCount !== previousPenaltyCount) {
        render();
        return;
      }
    }

    startCountdown(form, questionId, nextLockUntil);
    updateSolvedState();
    return;
  }

  feedback.textContent = explanation;
  feedback.classList.add("is-ok");
  hintBody.hidden = false;
  form.classList.add("is-solved-form");
  disableQuestionForm(form, true);
  clearCountdown(questionId);
  delete lockUntilByQuestion[questionId];
  saveStoredObject(lockUntilStorageKey, lockUntilByQuestion);

  if (isPenalty) {
    if (!solvedPenaltyQuestions.has(questionId)) {
      solvedPenaltyQuestions.add(questionId);
      saveStoredSet(penaltySolvedStorageKey, solvedPenaltyQuestions);
    }
  } else if (!solvedHints.has(questionId)) {
    solvedHints.add(questionId);
    saveStoredSet(solvedStorageKey, solvedHints);
  }

  updateSolvedState();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".complete-step");
  if (!button) return;

  const stepId = button.dataset.complete;
  const stepElement = document.querySelector(`[data-step="${stepId}"]`);
  const stepIndex = Number(stepElement.dataset.stepIndex);

  if (completedSteps.has(stepId)) {
    completedSteps.delete(stepId);
  } else {
    completedSteps.add(stepId);
  }

  saveStoredSet(completedStorageKey, completedSteps);
  updateProgress();
  updateSolvedState();

  const isDone = completedSteps.has(stepId);
  const allSolved = isStepFullySolved(stepIndex);

  if (isDone && !allSolved) {
    const checkin = stepElement.querySelector("[data-step-checkin]");
    const practice = stepElement.querySelector(".practice");

    checkin.hidden = false;
    checkin.classList.add("is-highlighted");
    practice.classList.add("is-highlighted");
    checkin.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      checkin.classList.remove("is-highlighted");
      practice.classList.remove("is-highlighted");
    }, 1500);
  }
});

resetProgressButton?.addEventListener("click", () => {
  const shouldReset = window.confirm(
    "Сбросить все ответы, отметки шагов, дополнительные вопросы и открытые подсказки?",
  );

  if (!shouldReset) return;

  completedSteps.clear();
  solvedHints.clear();
  solvedPenaltyQuestions.clear();
  clearAllCountdowns();

  Object.keys(wrongCounts).forEach((key) => delete wrongCounts[key]);
  Object.keys(stepWrongCounts).forEach((key) => delete stepWrongCounts[key]);
  Object.keys(lockUntilByQuestion).forEach((key) => delete lockUntilByQuestion[key]);

  saveStoredSet(completedStorageKey, completedSteps);
  saveStoredSet(solvedStorageKey, solvedHints);
  saveStoredSet(penaltySolvedStorageKey, solvedPenaltyQuestions);
  saveStoredObject(wrongCountsStorageKey, wrongCounts);
  saveStoredObject(stepWrongCountsStorageKey, stepWrongCounts);
  saveStoredObject(lockUntilStorageKey, lockUntilByQuestion);

  render();
});

render();
