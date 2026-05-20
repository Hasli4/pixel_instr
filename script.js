const steps = [
  {
    title: "Подготовь HTML и кнопку сохранения",
    goal:
      "Сначала добавь в `update.html` всё, что нужно для новой функции сохранения картинки, но не переделывай интерфейс целиком.",
    before:
      "Сейчас в `update.html` уже есть редактор, палитра и кнопки `Fill All` и `Clear`, но нет отдельной кнопки для скачивания рисунка и не подключена библиотека из примера `pixel_M4L3`.",
    change:
      "Добавь в `.addons` еще одну кнопку, например `Save Image`, и подключи `dom-to-image` отдельным `<script>` перед `update.js`. В `update.css` расширь существующий селектор кнопок, чтобы новая кнопка выглядела так же, как остальные служебные кнопки.",
    why:
      "JS не сможет сохранить картинку без подключенной библиотеки, а пользователь не сможет вызвать функцию без кнопки. При этом дизайн редактора останется тем же: ты просто добавишь одну кнопку в уже существующий блок.",
    task:
      "Правь `update.html` и одну строку в `update.css`. Не копируй иконки и вертикальную палитру из `pixel_M4L3`: нам нужна только функциональность.",
    recap:
      "На этом шаге ты подготовил интерфейс к новым возможностям: подключил библиотеку и дал пользователю точку входа через новую кнопку, не ломая существующий дизайн проекта.",
    result: {
      location:
        "Где править: `update.html` внутри блока `.addons`, внизу `body` перед `update.js` и селектор кнопок в `update.css`.",
      before: `<div class="addons">
  <button class="paint-all" type="button">Fill All</button>
  <button class="clear" type="button">Clear</button>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="update.js"></script>

.paint-all,
.clear {
  border-radius: 5px;
  height: 30px;
  ...
}`,
      after: `<div class="addons">
  <button class="paint-all" type="button">Fill All</button>
  <button class="clear" type="button">Clear</button>
  <button class="save-image" type="button">Save Image</button>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
<script src="update.js"></script>

.paint-all,
.clear,
.save-image {
  border-radius: 5px;
  height: 30px;
  ...
}`,
      note:
        "В `pixel_M4L3` библиотека подключена через CDN. Эту идею мы переносим, а внешний вид редактора оставляем своим.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Куда логичнее всего добавить кнопку сохранения в текущем `update.html`?",
        answer: "addons",
        options: [
          {
            value: "colors",
            label: "В `.colors`",
            explain:
              "Нет: `.colors` у тебя отвечает за выбор цвета, а не за служебные действия.",
          },
          {
            value: "addons",
            label: "В `.addons`",
            explain:
              "Верно: сохранение картинки — это такое же действие, как `Fill All` и `Clear`.",
          },
          {
            value: "footer",
            label: "В `.footer`",
            explain:
              "Нет: подвал не связан с инструментами редактора и только засорит интерфейс.",
          },
        ],
        body:
          "<p>Ориентируйся на существующую логику интерфейса: цвета живут в <code>.colors</code>, а действия — в <code>.addons</code>. Кнопку сохранения нужно добавить именно к действиям.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какую библиотеку реально использует пример из `pixel_M4L3` для экспорта картинки?",
        answer: "domtoimage",
        options: [
          {
            value: "anime",
            label: "`anime.js`",
            explain:
              "Нет: `anime.js` отвечает за анимации, но не умеет превращать DOM-узел в картинку.",
          },
          {
            value: "domtoimage",
            label: "`dom-to-image`",
            explain:
              "Верно: именно `dom-to-image` подключена в `pixel_M4L3/index.html` и потом вызывается из JS.",
          },
          {
            value: "cookie",
            label: "Библиотека cookie",
            explain:
              "Нет: cookie в примере читаются и записываются обычным `document.cookie`, без отдельной библиотеки.",
          },
        ],
        body:
          "<p>В примере есть отдельный CDN-скрипт <code>dom-to-image</code>. Его и нужно подключить в <code>update.html</code> перед своим <code>update.js</code>, чтобы глобальный объект библиотеки уже существовал к моменту запуска твоего кода.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что нужно сделать в CSS, чтобы новая кнопка не выбивалась из текущего дизайна?",
        answer: "selector",
        options: [
          {
            value: "new-block",
            label: "Писать отдельный сложный блок с нуля",
            explain:
              "Не обязательно: дизайн у тебя уже есть, и здесь лучше переиспользовать существующие стили.",
          },
          {
            value: "selector",
            label: "Добавить новый класс в общий селектор кнопок",
            explain:
              "Верно: проще и чище расширить уже существующий селектор служебных кнопок.",
          },
          {
            value: "ignore",
            label: "Оставить без стилей",
            explain:
              "Нет: тогда новая кнопка будет выглядеть как чужой элемент внутри готовой панели.",
          },
        ],
        body:
          '<p>Сделай минимальные правки так:</p><pre><code>&lt;div class="addons"&gt;\n  &lt;button class="paint-all" type="button"&gt;Fill All&lt;/button&gt;\n  &lt;button class="clear" type="button"&gt;Clear&lt;/button&gt;\n  &lt;button class="save-image" type="button"&gt;Save Image&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"&gt;&lt;/script&gt;</code></pre><pre><code>.paint-all,\n.clear,\n.save-image {\n  border-radius: 5px;\n  height: 30px;\n  border: 2px solid black;\n  background-color: lightgray;\n  user-select: none;\n  cursor: pointer;\n  padding: 0 14px;\n  font-family: inherit;\n}</code></pre><p>Этого достаточно, чтобы не менять дизайн редактора, но подготовить интерфейс к новой функции.</p>',
      },
    ],
  },
  {
    title: "Подготовь удобный формат для сохранения состояния",
    goal:
      "Прежде чем читать и писать cookie, нужно договориться, как именно сетка будет храниться в памяти и в строке cookie.",
    before:
      "Сейчас `update.js` просто красит клетки через `backgroundColor` и `borderColor`. Это удобно для рисования, но неудобно для хранения: cookie лучше записывать не длинными CSS-строками, а короткими кодами цветов.",
    change:
      "Добавь в `update.js` кнопку `saveImageButton`, имя cookie, таблицу соответствия `цвет -> код`, обратную таблицу `код -> внешний вид` и функцию `applyCellColor(cell, code)`. После этого все изменения клетки делай через эту функцию, а не через ручную установку стилей в разных местах.",
    why:
      "Когда у клетки есть короткий код, вся сетка превращается в простую строку из символов. Это упрощает и сохранение в cookie, и восстановление рисунка после загрузки, и общий порядок в коде.",
    task:
      "Работай в `update.js`. На этом шаге не сохраняй cookie и не экспортируй картинку — сначала приведи внутреннее состояние редактора к предсказуемому виду.",
    recap:
      "Ты перевел редактор на единый способ работы с клетками: теперь у каждой клетки есть код цвета, а внешний вид задается одной функцией. Это делает следующий шаг с cookie намного проще.",
    result: {
      location:
        "Где править: верх `update.js`, рядом с выбором DOM-элементов и перед созданием клеток.",
      before: `let paintAll = document.querySelector(".paint-all");
let clear = document.querySelector(".clear");
let field = document.querySelector(".field");

let color = "black";
let cells = [];

cell.style.backgroundColor = color;
cell.style.borderColor = color === "white" ? "#d9d9d9" : "#111";`,
      after: `let paintAll = document.querySelector(".paint-all");
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
  "0": { background: "#ffffff", border: "#d9d9d9" },
  "1": { background: "#000000", border: "#111" },
  "2": { background: "#ff0000", border: "#111" },
  "3": { background: "#008000", border: "#111" },
  "4": { background: "#0000ff", border: "#111" },
  "5": { background: "#ffea00", border: "#111" },
  "6": { background: "#800080", border: "#111" },
  "7": { background: "#a52a2a", border: "#111" },
  "8": { background: "#ffc0cb", border: "#111" },
};

function getCodeByColorName(colorName) {
  return COLOR_TO_CODE[colorName] ?? "0";
}

function applyCellColor(cell, colorCode) {
  const state = CODE_TO_COLOR[colorCode] ?? CODE_TO_COLOR["0"];
  cell.dataset.colorCode = colorCode;
  cell.style.backgroundColor = state.background;
  cell.style.borderColor = state.border;
}`,
      note:
        "Ключевая мысль этого шага: рисование и сохранение должны опираться на один и тот же источник правды, а не на случайный набор inline-стилей.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Что удобнее хранить в cookie для каждой клетки?",
        answer: "code",
        options: [
          {
            value: "rgb",
            label: "Полную строку `rgb(...)`",
            explain:
              "Можно, но это длиннее, менее удобно и сложнее сравнивать в логике.",
          },
          {
            value: "code",
            label: "Короткий код цвета",
            explain:
              "Верно: один символ на клетку делает строку компактной и предсказуемой.",
          },
          {
            value: "html",
            label: "Готовый HTML клетки",
            explain:
              "Нет: хранить в cookie HTML целиком для каждой клетки — лишняя и хрупкая схема.",
          },
        ],
        body:
          "<p>Для cookie лучше хранить не CSS, а коды вроде <code>0</code>, <code>1</code>, <code>2</code>. Тогда строка состояния получится короткой, а восстановление — простым.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Где лучше записывать код цвета конкретной клетки во время работы редактора?",
        answer: "dataset",
        options: [
          {
            value: "dataset",
            label: "В `cell.dataset`",
            explain:
              "Верно: `dataset` удобно хранит служебное состояние прямо на DOM-элементе.",
          },
          {
            value: "title",
            label: "В `title`",
            explain:
              "Нет: `title` нужен для подсказок в интерфейсе, а не для рабочих данных.",
          },
          {
            value: "class",
            label: "Только в `className`",
            explain:
              "Можно, но в твоем проекте это будет менее прозрачно, чем отдельное `data-*` свойство.",
          },
        ],
        body:
          "<p>Самый удобный вариант здесь — писать код в <code>cell.dataset.colorCode</code>. Тогда и сериализация, и отладка становятся простыми: ты всегда видишь, какой код реально лежит в клетке.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Зачем нужна отдельная функция `applyCellColor`, а не прямые `style.backgroundColor = ...` в нескольких местах?",
        answer: "one-place",
        options: [
          {
            value: "one-place",
            label: "Чтобы вся логика клетки жила в одном месте",
            explain:
              "Верно: одна функция сразу задает и цвет, и рамку, и код клетки.",
          },
          {
            value: "speed",
            label: "Только ради скорости",
            explain:
              "Не в этом главная цель. Главное здесь — порядок и единый источник состояния.",
          },
          {
            value: "random",
            label: "Просто так удобнее на глаз",
            explain:
              "Нет: здесь есть конкретная инженерная причина — убрать дублирование и расхождение состояний.",
          },
        ],
        body:
          '<p>Добавь в верхнюю часть <code>update.js</code> такую основу:</p><pre><code>let saveImageButton = document.querySelector(".save-image");\n\nconst COOKIE_NAME = "pixel-draw-state";\n\nconst COLOR_TO_CODE = {\n  white: "0",\n  black: "1",\n  red: "2",\n  green: "3",\n  blue: "4",\n  yellow: "5",\n  purple: "6",\n  brown: "7",\n  pink: "8",\n};\n\nconst CODE_TO_COLOR = {\n  "0": { background: "#ffffff", border: "#d9d9d9" },\n  "1": { background: "#000000", border: "#111" },\n  "2": { background: "#ff0000", border: "#111" },\n  "3": { background: "#008000", border: "#111" },\n  "4": { background: "#0000ff", border: "#111" },\n  "5": { background: "#ffea00", border: "#111" },\n  "6": { background: "#800080", border: "#111" },\n  "7": { background: "#a52a2a", border: "#111" },\n  "8": { background: "#ffc0cb", border: "#111" },\n};\n\nfunction getCodeByColorName(colorName) {\n  return COLOR_TO_CODE[colorName] ?? "0";\n}\n\nfunction applyCellColor(cell, colorCode) {\n  const state = CODE_TO_COLOR[colorCode] ?? CODE_TO_COLOR["0"];\n  cell.dataset.colorCode = colorCode;\n  cell.style.backgroundColor = state.background;\n  cell.style.borderColor = state.border;\n}</code></pre><p>После этого все места, где клетка красится, стоит постепенно перевести на вызов <code>applyCellColor(...)</code>.</p>',
      },
    ],
  },
  {
    title: "Восстанови рисунок из cookie при запуске",
    goal:
      "Теперь научи редактор читать ранее сохраненное состояние и применять его к уже созданной сетке.",
    before:
      "Сейчас при каждом открытии страницы сетка создается заново с пустыми белыми клетками. Даже если ты добавишь сохранение, без отдельной загрузки из cookie рисунок после перезапуска не вернется.",
    change:
      "Добавь функции `readCookie(name)` и `loadGridFromCookie()`. Сначала создай все 1000 клеток, задай им начальный код `0`, а потом вызови `loadGridFromCookie()`, чтобы заменить белые клетки на сохраненные цвета там, где это нужно.",
    why:
      "Загрузка должна происходить после создания сетки. Если попытаться восстановить рисунок раньше, клеток еще не будет, и применять сохраненные данные будет просто не к чему.",
    task:
      "На этом шаге не записывай cookie обратно. Сфокусируйся только на чтении и правильном порядке запуска: создать клетки -> прочитать cookie -> раскрасить клетки по сохраненной строке.",
    recap:
      "Теперь редактор умеет поднимать старое состояние при запуске. Это первая половина задачи про сохранение между перезапусками: рисунок уже можно вернуть после обновления страницы.",
    result: {
      location:
        "Где править: `update.js`, рядом с созданием клеток и сразу после цикла `for`.",
      before: `for (let i = 0; i < maxFields; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("id", \`\${i}\`);
  field.appendChild(cell);
  cells.push(cell);

  cell.addEventListener("pointerdown", function () {
    ...
  });
}`,
      after: `function readCookie(name) {
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

  if (!savedState || savedState.length !== maxFields) {
    return;
  }

  for (let i = 0; i < cells.length; i++) {
    applyCellColor(cells[i], savedState[i]);
  }
}

for (let i = 0; i < maxFields; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("id", \`\${i}\`);
  applyCellColor(cell, "0");
  field.appendChild(cell);
  cells.push(cell);

  cell.addEventListener("pointerdown", function () {
    ...
  });
}

loadGridFromCookie();`,
      note:
        "Мы не копируем из `pixel_M4L3` весь код загрузки один в один. Там логика смешана с созданием клеток, а здесь лучше разделить чтение cookie и создание DOM — так понятнее и надежнее.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Когда правильнее вызывать `loadGridFromCookie()`?",
        answer: "after",
        options: [
          {
            value: "before",
            label: "До создания клеток",
            explain:
              "Нет: тогда функция попытается восстановить цвет в клетки, которых еще нет в массиве `cells`.",
          },
          {
            value: "after",
            label: "После создания клеток",
            explain:
              "Верно: сначала нужно создать DOM, а потом накладывать на него сохраненное состояние.",
          },
          {
            value: "never",
            label: "Вообще не вызывать",
            explain:
              "Нет: тогда cookie будет только записываться, но никогда не использоваться.",
          },
        ],
        body:
          "<p>Порядок здесь очень важен: сперва цикл создает клетки и наполняет массив <code>cells</code>, только потом функция восстановления может пройтись по этим клеткам и покрасить их.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Что нужно проверить перед восстановлением состояния из cookie?",
        answer: "length",
        options: [
          {
            value: "font",
            label: "Какой шрифт на странице",
            explain:
              "Нет: шрифт не связан с валидностью сохраненного состояния сетки.",
          },
          {
            value: "length",
            label: "Что строка cookie существует и имеет правильную длину",
            explain:
              "Верно: если длина строки не совпадает с числом клеток, восстанавливать ее опасно.",
          },
          {
            value: "button",
            label: "Что найдена кнопка сохранения",
            explain:
              "Кнопка нужна для экспорта, но не для чтения уже сохраненного состояния.",
          },
        ],
        body:
          "<p>Перед восстановлением обязательно проверь, что строка из cookie не пустая и что ее длина совпадает с <code>maxFields</code>. Это защитит тебя от частично битых данных.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какой начальный код цвета нужно задавать новой клетке до чтения cookie?",
        answer: "0",
        options: [
          {
            value: "0",
            label: "`0`",
            explain:
              "Верно: это код пустой белой клетки, от которого удобно стартовать.",
          },
          {
            value: "1",
            label: "`1`",
            explain:
              "Нет: это сделает все клетки черными еще до восстановления рисунка.",
          },
          {
            value: "8",
            label: "`8`",
            explain:
              "Нет: это произвольный цвет, а не нейтральное начальное состояние.",
          },
        ],
        body:
          '<p>Добавь чтение и восстановление так:</p><pre><code>function readCookie(name) {\n  const prefix = name + "=";\n  const cookies = document.cookie.split("; ");\n\n  for (let i = 0; i < cookies.length; i++) {\n    if (cookies[i].startsWith(prefix)) {\n      return cookies[i].slice(prefix.length);\n    }\n  }\n\n  return "";\n}\n\nfunction loadGridFromCookie() {\n  const savedState = readCookie(COOKIE_NAME);\n\n  if (!savedState || savedState.length !== maxFields) {\n    return;\n  }\n\n  for (let i = 0; i < cells.length; i++) {\n    applyCellColor(cells[i], savedState[i]);\n  }\n}</code></pre><pre><code>for (let i = 0; i < maxFields; i++) {\n  let cell = document.createElement("div");\n  cell.classList.add("cell");\n  cell.setAttribute("id", `${i}`);\n  applyCellColor(cell, "0");\n  field.appendChild(cell);\n  cells.push(cell);\n  ...\n}\n\nloadGridFromCookie();</code></pre><p>Теперь редактор сначала строит поле, а потом поднимает сохраненный рисунок поверх пустого состояния.</p>',
      },
    ],
  },
  {
    title: "Сохраняй рисунок обратно в cookie",
    goal:
      "Теперь добавь вторую половину механизма: после действий пользователя редактор должен сам обновлять строку состояния в cookie.",
    before:
      "Сетка уже умеет читаться из cookie, но пока туда нечего читать: текущее состояние после рисования, очистки и заливки еще не сериализуется и не записывается обратно.",
    change:
      "Добавь функции `writeCookie`, `serializeGrid` и `saveGridToCookie`. После этого обнови обработчики рисования, очистки и заливки: клетки крась через `applyCellColor`, а сохранение вызывай после завершенного действия. Для обычного рисования удобно сохранять на `pointerup`, а для `Clear` и `Fill All` — в конце их собственного обработчика.",
    why:
      "Так ты избежишь двух крайностей: редактор не будет терять рисунок, и при этом не будет писать cookie хаотично из десятков мест без единого правила.",
    task:
      "Здесь особенно важно не размазывать логику. Сначала собери строку состояния из `dataset.colorCode`, потом одной функцией запиши ее в cookie, и только затем подключай эту функцию к нужным событиям.",
    recap:
      "Теперь сохранение стало двусторонним: редактор не только восстанавливает старый рисунок, но и сам поддерживает cookie в актуальном состоянии после каждого изменения поля.",
    result: {
      location:
        "Где править: `update.js`, рядом с вспомогательными функциями и обработчиками событий.",
      before: `cell.addEventListener("pointerdown", function () {
  cell.style.backgroundColor = color;
  cell.style.borderColor = color === "white" ? "#d9d9d9" : "#111";
});

cell.addEventListener("pointerenter", function () {
  if (IS_CLICKED) {
    cell.style.backgroundColor = color;
    cell.style.borderColor = color === "white" ? "#d9d9d9" : "#111";
  }
});

clear.addEventListener("click", function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
    cells[i].style.borderColor = "#d9d9d9";
  }
});`,
      after: `function writeCookie(name, value, maxAgeSeconds = 60 * 60 * 24 * 30) {
  document.cookie = \`\${name}=\${value}; max-age=\${maxAgeSeconds}; path=/; SameSite=Lax\`;
}

function serializeGrid() {
  return cells.map((cell) => cell.dataset.colorCode ?? "0").join("");
}

function saveGridToCookie() {
  writeCookie(COOKIE_NAME, serializeGrid());
}

document.addEventListener("pointerup", function () {
  if (IS_CLICKED) {
    saveGridToCookie();
  }

  IS_CLICKED = false;
});

cell.addEventListener("pointerdown", function () {
  applyCellColor(cell, getCodeByColorName(color));
});

cell.addEventListener("pointerenter", function () {
  if (IS_CLICKED) {
    applyCellColor(cell, getCodeByColorName(color));
  }
});

clear.addEventListener("click", function () {
  FILL_MODE = false;

  for (let i = 0; i < cells.length; i++) {
    applyCellColor(cells[i], "0");
  }

  saveGridToCookie();
});`,
      note:
        "В примере `pixel_M4L3` сохранение идет по таймеру. Для проекта ученика надежнее и понятнее сохранять после завершенного действия: это проще объяснить и легче отлаживать.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Из чего удобнее всего собирать строку состояния сетки?",
        answer: "dataset",
        options: [
          {
            value: "dataset",
            label: "Из `cell.dataset.colorCode`",
            explain:
              "Верно: там уже лежит короткий и стабильный код каждой клетки.",
          },
          {
            value: "offset",
            label: "Из размеров клетки",
            explain:
              "Нет: размеры клетки вообще не говорят, каким цветом она заполнена.",
          },
          {
            value: "title",
            label: "Из `title` кнопок",
            explain:
              "Нет: `title` у кнопок описывает инструменты, а не состояние поля.",
          },
        ],
        body:
          "<p>Поскольку на прошлом шаге ты уже перенес код цвета в <code>dataset</code>, теперь именно оттуда удобнее собирать строку для cookie: просто пробеги по всем клеткам и склей коды в одну длинную строку.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Когда удобнее сохранять результат обычного рисования кистью?",
        answer: "pointerup",
        options: [
          {
            value: "page-load",
            label: "При загрузке страницы",
            explain:
              "Нет: в этот момент еще нет нового результата, который нужно сохранить.",
          },
          {
            value: "pointerup",
            label: "На `pointerup` после рисования",
            explain:
              "Верно: это хороший момент, когда пользователь закончил текущий жест рисования.",
          },
          {
            value: "never",
            label: "Вообще не сохранять кисть",
            explain:
              "Нет: тогда в cookie попадут только очистка и заливка, а обычный рисунок будет теряться.",
          },
        ],
        body:
          "<p>Если сохранять на каждом <code>pointerenter</code>, cookie будет переписываться слишком часто. Для обычного рисования удобнее дождаться <code>pointerup</code>: пользователь завершил движение — можно зафиксировать итоговое состояние.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какую функцию нужно вызывать после `Clear` и в конце заливки, чтобы состояние точно не потерялось?",
        answer: "save",
        options: [
          {
            value: "save",
            label: "`saveGridToCookie()`",
            explain:
              "Верно: после действий, которые меняют сразу много клеток, нужно явно записать новый результат в cookie.",
          },
          {
            value: "read",
            label: "`readCookie()`",
            explain:
              "Нет: `readCookie()` только читает старое состояние, но не сохраняет новое.",
          },
          {
            value: "render",
            label: "`renderGrid()`",
            explain:
              "Такой функции у тебя вообще нет в текущем проекте; здесь нужно именно сохранить строку состояния.",
          },
        ],
        body:
          '<p>Добавь сохранение так:</p><pre><code>function writeCookie(name, value, maxAgeSeconds = 60 * 60 * 24 * 30) {\n  document.cookie = `${name}=${value}; max-age=${maxAgeSeconds}; path=/; SameSite=Lax`;\n}\n\nfunction serializeGrid() {\n  return cells.map((cell) => cell.dataset.colorCode ?? "0").join("");\n}\n\nfunction saveGridToCookie() {\n  writeCookie(COOKIE_NAME, serializeGrid());\n}</code></pre><pre><code>document.addEventListener("pointerup", function () {\n  if (IS_CLICKED) {\n    saveGridToCookie();\n  }\n\n  IS_CLICKED = false;\n});\n\ncell.addEventListener("pointerdown", function () {\n  applyCellColor(cell, getCodeByColorName(color));\n});\n\ncell.addEventListener("pointerenter", function () {\n  if (IS_CLICKED) {\n    applyCellColor(cell, getCodeByColorName(color));\n  }\n});</code></pre><pre><code>clear.addEventListener("click", function () {\n  FILL_MODE = false;\n\n  for (let i = 0; i < cells.length; i++) {\n    applyCellColor(cells[i], "0");\n  }\n\n  saveGridToCookie();\n});</code></pre><p>По той же логике в обработчике общей заливки нужно в конце применить код ко всем клеткам и затем вызвать <code>saveGridToCookie()</code>.</p>',
      },
    ],
  },
  {
    title: "Добавь экспорт поля через dom-to-image",
    goal:
      "Последний шаг — превратить текущее содержимое `.field` в скачиваемую картинку по нажатию на новую кнопку.",
    before:
      "Кнопка сохранения уже есть, библиотека подключена, состояние сетки хранится и восстанавливается. Но пока нажатие на кнопку ничего не делает.",
    change:
      "Добавь обработчик для `.save-image`, вызови `domtoimage.toPng(field)`, создай временную ссылку и запусти скачивание файла. В случае ошибки выведи сообщение в `console.error`, чтобы было понятно, если экспорт сломается.",
    why:
      "Новая функция должна работать независимо от cookie: cookie сохраняет рабочее состояние редактора, а `dom-to-image` делает уже готовый пользовательский экспорт в отдельный файл.",
    task:
      "Цель этого шага — сохранить именно содержимое `.field`, а не весь `body` страницы. Экспортировать нужно поле с клетками, без шапки и кнопок.",
    recap:
      "Ты завершил функциональность: теперь редактор хранит рисунок между перезапусками и умеет отдавать текущее поле отдельной картинкой на компьютер пользователя.",
    result: {
      location:
        "Где править: `update.js`, ближе к концу файла, после основных обработчиков инструментов.",
      before: `/* кнопка .save-image уже есть в HTML, но обработчика для нее пока нет */`,
      after: `saveImageButton.addEventListener("click", function () {
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
});`,
      note:
        "В `pixel_M4L3` используется JPEG, но для пиксельного рисунка PNG обычно практичнее: картинка получается четче, и тебе не нужно переносить чужие мелкие решения один в один.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой DOM-элемент нужно превращать в картинку?",
        answer: "field",
        options: [
          {
            value: "body",
            label: "`body`",
            explain:
              "Нет: тогда в файл попадет вся страница целиком, вместе с шапкой и кнопками.",
          },
          {
            value: "field",
            label: "`.field`",
            explain:
              "Верно: сохранять нужно именно рабочее поле с клетками.",
          },
          {
            value: "header",
            label: "`.header`",
            explain:
              "Нет: шапка не содержит сам рисунок и не должна попадать в экспорт.",
          },
        ],
        body:
          "<p>Твой рисунок находится внутри <code>.field</code>. Значит, именно этот DOM-узел и нужно передавать в библиотеку для экспорта.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какой метод библиотеки лучше взять для четкого пиксельного результата?",
        answer: "png",
        options: [
          {
            value: "png",
            label: "`toPng`",
            explain:
              "Верно: PNG хорошо подходит для четкой сетки и резких цветовых границ.",
          },
          {
            value: "remove",
            label: "`remove`",
            explain:
              "Нет: это вообще не метод экспорта изображения.",
          },
          {
            value: "cookie",
            label: "`toCookie`",
            explain:
              "Нет: cookie и экспорт картинки — это две разные задачи.",
          },
        ],
        body:
          "<p>Для такого редактора удобнее вызвать <code>domtoimage.toPng(field)</code>. Так проще получить четкую картинку без лишних потерь.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что нужно сделать после получения `dataUrl`, чтобы браузер действительно скачал файл?",
        answer: "link",
        options: [
          {
            value: "alert",
            label: "Показать `alert`",
            explain:
              "Нет: `alert` только покажет сообщение, но не скачает картинку.",
          },
          {
            value: "link",
            label: "Создать временную ссылку и кликнуть по ней",
            explain:
              "Верно: это стандартный способ запустить скачивание файла из JS.",
          },
          {
            value: "reload",
            label: "Перезагрузить страницу",
            explain:
              "Нет: перезагрузка не имеет отношения к скачиванию картинки.",
          },
        ],
        body:
          '<p>Добавь финальный обработчик так:</p><pre><code>saveImageButton.addEventListener("click", function () {\n  domtoimage\n    .toPng(field)\n    .then(function (dataUrl) {\n      const link = document.createElement("a");\n      link.download = "pixel-draw.png";\n      link.href = dataUrl;\n      link.click();\n    })\n    .catch(function (error) {\n      console.error("Не удалось сохранить изображение:", error);\n    });\n});</code></pre><p>Проверь результат так: нарисуй что-нибудь, перезагрузи страницу, убедись, что рисунок восстановился, затем нажми <code>Save Image</code> и открой скачанный PNG.</p>',
      },
    ],
  },
];

const completedStorageKey = "pixel-m4l3-guide-completed";
const solvedStorageKey = "pixel-m4l3-guide-solved";
const stepsRoot = document.querySelector("#steps");
const navRoot = document.querySelector("#stepNav");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const resetProgressButton = document.querySelector("#resetProgress");

const completedSteps = new Set(loadStoredArray(completedStorageKey));
const solvedHints = new Set(loadStoredArray(solvedStorageKey));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadStoredArray(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveStoredSet(key, valueSet) {
  try {
    localStorage.setItem(key, JSON.stringify([...valueSet]));
  } catch {
    /* State still works until reload. */
  }
}

function formatInlineCode(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function getStepId(index) {
  return `step-${index + 1}`;
}

function getHintId(stepIndex, hintIndex) {
  return `${getStepId(stepIndex)}-hint-${hintIndex + 1}`;
}

function getSolvedCount(stepIndex) {
  return steps[stepIndex].hints.filter((_, hintIndex) =>
    solvedHints.has(getHintId(stepIndex, hintIndex)),
  ).length;
}

function getValidationMessage(stepIndex) {
  const total = steps[stepIndex].hints.length;
  const solvedCount = getSolvedCount(stepIndex);
  const remaining = total - solvedCount;

  if (remaining === total) {
    return `Ты отметил шаг как выполненный. Теперь ответь на все ${total} вопроса этого шага, чтобы проверить себя. После верных ответов откроется готовый код.`;
  }

  return `Шаг уже отмечен. Осталось ответить еще на ${remaining} из ${total} вопросов, и тогда откроется готовый код этого шага.`;
}

function getStepStatusText(stepIndex, isDone, allSolved) {
  if (isDone && !allSolved) {
    return "Шаг отмечен. Теперь ответь на все вопросы этого шага, чтобы проверить себя и открыть итоговый код.";
  }

  if (isDone && allSolved) {
    return "Шаг выполнен и проверен. Итоговый код уже открыт ниже.";
  }

  if (!isDone && allSolved) {
    return "Все вопросы уже пройдены. Теперь можешь смело отмечать шаг выполненным.";
  }

  return "Сначала попробуй сделать правку сам, а если застрянешь — открывай подсказку через вопрос.";
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
}

function renderStep(step, index) {
  const stepId = getStepId(index);
  const solvedCount = getSolvedCount(index);
  const allSolved = solvedCount === step.hints.length;
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
        <p>Для закрепления ответь на все 3 вопроса этого шага. После трех верных ответов откроется итоговый код.</p>
        <p class="practice__count" data-step-progress="${stepId}">${solvedCount} / ${step.hints.length} вопросов</p>
      </div>

      <div class="hints">
        ${step.hints.map((hint, hintIndex) => renderHint(hint, index, hintIndex)).join("")}
      </div>

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

  return `
    <section class="hint ${isSolved ? "is-solved" : ""}" data-hint="${hintId}">
      <div class="hint__top">
        <h3>${escapeHtml(hint.level)}</h3>
        <span class="hint__difficulty">${escapeHtml(hint.difficulty)}</span>
      </div>

      <form class="hint__form" data-answer="${escapeHtml(hint.answer)}" data-hint-id="${hintId}">
        <p class="question">${formatInlineCode(hint.question)}</p>
        <div class="options">
          ${hint.options
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
                  />
                  <span>${formatInlineCode(option.label)}</span>
                </label>
              `;
            })
            .join("")}
        </div>
        <div class="hint__actions">
          <button class="button" type="submit">Проверить и открыть</button>
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

function updateProgress() {
  const total = steps.length;
  const done = [...completedSteps].filter((id) => id.startsWith("step-")).length;
  progressText.textContent = `${done} из ${total} шагов`;
  progressBar.style.width = `${(done / total) * 100}%`;
}

function updateSolvedState() {
  steps.forEach((step, stepIndex) => {
    const stepId = getStepId(stepIndex);
    const solvedCount = getSolvedCount(stepIndex);
    const allSolved = solvedCount === step.hints.length;
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
        ? `${solvedCount} / ${step.hints.length} вопросов. Итоговый код открыт.`
        : `${solvedCount} / ${step.hints.length} вопросов`;
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

document.addEventListener("submit", (event) => {
  const form = event.target.closest(".hint__form");
  if (!form) return;

  event.preventDefault();

  const selected = form.querySelector("input[type='radio']:checked");
  const feedback = form.querySelector(".feedback");
  const hintBody = form.nextElementSibling;
  const hintId = form.dataset.hintId;

  feedback.classList.remove("is-ok", "is-error");

  if (!selected) {
    feedback.textContent = "Сначала выбери один вариант ответа.";
    feedback.classList.add("is-error");
    return;
  }

  const explanation = selected.dataset.explain;

  if (selected.value !== form.dataset.answer) {
    feedback.textContent = `Пока не то. ${explanation}`;
    feedback.classList.add("is-error");
    return;
  }

  feedback.textContent = explanation;
  feedback.classList.add("is-ok");
  hintBody.hidden = false;

  if (!solvedHints.has(hintId)) {
    solvedHints.add(hintId);
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
  const allSolved = getSolvedCount(stepIndex) === steps[stepIndex].hints.length;

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
    "Сбросить все ответы, отметки шагов и открытые подсказки?",
  );

  if (!shouldReset) return;

  completedSteps.clear();
  solvedHints.clear();
  saveStoredSet(completedStorageKey, completedSteps);
  saveStoredSet(solvedStorageKey, solvedHints);
  render();
});

render();
