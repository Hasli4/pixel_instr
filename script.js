/*
  Шаблон для будущих учебных сайтов по схеме "старая версия -> новая версия":
  1. Сначала собери полный diff HTML/CSS/JS и разложи его на понятные шаги.
  2. Шаги держи в одном порядке: структура HTML -> каркас страницы -> область
     работы -> сетка -> адаптивность -> JS-рисование -> очистка/заливка ->
     финальные доводки до готового вида.
  3. В каждом шаге оставляй один и тот же формат: before/change/why/task,
     три простых вопроса, краткий recap и блок result с "что было / что
     должно получиться".
  4. Вопросы делай легкими и проверяющими понимание, а точный код показывай
     только в третьей подсказке и в итоговом блоке после 3/3 верных ответов.
  5. После отметки шага как выполненного проси пройти вопросы для проверки.
*/

const steps = [
  {
    title: "Разбери HTML на понятные части",
    goal: "Сначала наведи порядок в `draw.html`: инструменты отдельно, поле отдельно.",
    before:
      "Сейчас `.field` стоит просто после шапки, а `Fill All` лежит рядом с цветами.",
    change:
      "Оставь цвета в `.colors`, перенеси `Fill All` к `Clear` в `.addons`, а `.field` оберни в `main.workspace`.",
    why:
      "Так сверху будет панель, в центре поле, и CSS станет проще настраивать.",
    task:
      "Правь только `draw.html`. Классы кнопок не меняй: `draw.js` ищет их по этим именам.",
    recap:
      "Ты разделил цвета и действия, а поле вынес в отдельную рабочую область. После этого HTML стало легче читать, а центр страницы проще оформлять в CSS.",
    result: {
      location: "Где править: `draw.html`, внутри `header` и сразу после него.",
      before: `<div class="colors">
  ...
  <button class="erase"></button>
  <button class="paint-all">Fill All</button>
</div>
</header>
<div class="field"></div>`,
      after: `<div class="colors">
  ...
  <button class="erase" type="button"></button>
</div>

<div class="addons">
  <button class="paint-all" type="button">Fill All</button>
  <button class="clear" type="button">Clear</button>
</div>
</header>

<main class="workspace">
  <div class="field"></div>
</main>`,
      note:
        "Поле теперь живет в отдельной рабочей зоне, а кнопки действий собраны в одном месте.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой блок является полем для рисования?",
        answer: "field",
        options: [
          {
            value: "colors",
            label: "`.colors`",
            explain: "Это блок с палитрой цветов, а не поле рисования.",
          },
          {
            value: "field",
            label: "`.field`",
            explain: "Верно: именно в `.field` потом появляются клетки для рисования.",
          },
          {
            value: "footer",
            label: "`.footer`",
            explain: "Это нижняя часть страницы, к холсту она не относится.",
          },
        ],
        body:
          "<p>Найди в HTML строку <code>&lt;div class=\"field\"&gt;&lt;/div&gt;</code>. Этот блок и будет основой для холста.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Куда лучше перенести кнопку `Fill All`?",
        answer: "addons",
        options: [
          {
            value: "colors",
            label: "В `.colors`",
            explain: "Не совсем: в `.colors` лучше оставить только цвета и ластик.",
          },
          {
            value: "addons",
            label: "В `.addons`",
            explain: "Верно: `Fill All` и `Clear` — это действия, поэтому их удобно держать вместе.",
          },
          {
            value: "logo",
            label: "К логотипу",
            explain: "Нет, логотип не связан с кнопками редактора.",
          },
        ],
        body:
          "<p>`Fill All` не выбирает цвет, а выполняет действие. Поэтому ей лучше стоять рядом с <code>Clear</code>.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какой тег оборачивает главную рабочую часть страницы?",
        answer: "main",
        options: [
          {
            value: "main",
            label: "`main`",
            explain: "Верно: `main` подходит для центральной части страницы, где находится холст.",
          },
          {
            value: "img",
            label: "`img`",
            explain: "Нет, `img` нужен для картинки, а не для рабочей области.",
          },
          {
            value: "button",
            label: "`button`",
            explain: "Нет, `button` подходит только для кнопок.",
          },
        ],
        body:
          '<p>Сделай центральную часть страницы такой:</p><pre><code>&lt;div class="addons"&gt;\n  &lt;button class="paint-all" type="button"&gt;Fill All&lt;/button&gt;\n  &lt;button class="clear" type="button"&gt;Clear&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;main class="workspace"&gt;\n  &lt;div class="field"&gt;&lt;/div&gt;\n&lt;/main&gt;</code></pre><p>Теперь у поля есть отдельная рабочая зона, а у действий — свой блок.</p>',
      },
    ],
  },
  {
    title: "Поставь блоки на свои места",
    goal: "Настрой `draw.css`, чтобы шапка была сверху, поле в центре, подвал снизу.",
    before:
      "Страница уже похожа на flex-колонку, но высота и центральная область настроены не до конца.",
    change:
      "Задай странице высоту окна, оставь `body` колонкой, а `.workspace` растяни между шапкой и подвалом.",
    why:
      "Редактор займет экран аккуратно и не будет разваливаться по высоте.",
    task:
      "Начни с `body`, `.header`, `.footer` и `.workspace` в `draw.css`.",
    recap:
      "Ты собрал каркас страницы: шапка сверху, рабочая область в центре, подвал снизу. Теперь поле можно ограничивать и настраивать отдельно.",
    result: {
      location: "Где править: `draw.css`, общие стили страницы и блок `.workspace`.",
      before: `body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.footer {
  position: sticky;
}`,
      after: `* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.header,
.footer {
  flex-shrink: 0;
}

.workspace {
  flex: 1;
  min-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 12px;
}`,
      note:
        "Главная идея здесь — дать полю свое место между шапкой и подвалом, а не растягивать всё вручную.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Как должны стоять шапка, поле и подвал?",
        answer: "column",
        options: [
          {
            value: "row",
            label: "В одну строку",
            explain: "Нет: редактор должен идти сверху вниз, а не слева направо.",
          },
          {
            value: "column",
            label: "Один под другим",
            explain: "Верно: для этого у `body` нужна flex-колонка.",
          },
          {
            value: "center",
            label: "Просто по центру",
            explain: "Недостаточно: нам нужен именно порядок сверху вниз.",
          },
        ],
        body:
          "<p>У `body` должно быть <code>display: flex;</code> и <code>flex-direction: column;</code>.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какой блок должен занять место между шапкой и подвалом?",
        answer: "workspace",
        options: [
          {
            value: "header",
            label: "`.header`",
            explain: "Нет: шапка остается отдельным верхним блоком.",
          },
          {
            value: "workspace",
            label: "`.workspace`",
            explain: "Верно: именно рабочая область должна растягиваться по свободной высоте.",
          },
          {
            value: "footer",
            label: "`.footer`",
            explain: "Нет: подвал остается снизу и не должен забирать центральное место.",
          },
        ],
        body:
          "<p>Добавь для <code>.workspace</code> свойство <code>flex: 1;</code>. Оно отдаст ей всё свободное место.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Где нужна прокрутка, если поле не помещается?",
        answer: "workspace",
        options: [
          {
            value: "workspace",
            label: "У `.workspace`",
            explain: "Верно: прокрутка должна включаться у рабочей области, а не у всего холста.",
          },
          {
            value: "header",
            label: "У `.header`",
            explain: "Нет: шапка не должна прокручиваться вместе с полем.",
          },
          {
            value: "logo",
            label: "У логотипа",
            explain: "Нет, логотип не управляет расположением поля.",
          },
        ],
        body:
          '<p>Добавь в `.workspace` такие строки:</p><pre><code>.workspace {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  padding: 12px;\n}</code></pre><p>Теперь рабочая область держит поле и включает прокрутку только при необходимости.</p>',
      },
    ],
  },
  {
    title: "Ограничь поле рисования",
    goal: "Поле не должно растягивать всю страницу и вылезать за экран.",
    before:
      "Сейчас `.field` занимает всю ширину и не ощущается как отдельный холст.",
    change:
      "Задай `.field` понятную ширину, высоту, минимальный размер и скрой лишнее внутри.",
    why:
      "Так поле станет отдельной рабочей зоной и не будет ломать верстку.",
    task:
      "Правь блок `.field` в `draw.css`. Клетки настроишь следующим шагом.",
    recap:
      "Ты ограничил сам холст по ширине и высоте. После этого поле перестало растягивать всю страницу и стало выглядеть как отдельная область для рисования.",
    result: {
      location: "Где править: `draw.css`, блок `.field`.",
      before: `.field {
  width: 100%;
  display: grid;
  gap: 2.5px;
  background-color: black;
}`,
      after: `.field {
  width: min(100%, 1000px);
  height: min(100%, calc(100vh - 230px));
  min-width: 620px;
  min-height: 320px;
  overflow: hidden;
  background-color: black;
  border: 1px solid black;
  touch-action: none;
}`,
      note:
        "Теперь поле не растягивается бесконечно, а живет в понятных границах.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой блок в CSS отвечает за сам холст?",
        answer: "field",
        options: [
          {
            value: "field",
            label: "`.field`",
            explain: "Верно: именно `.field` является контейнером для сетки.",
          },
          {
            value: "clear",
            label: "`.clear`",
            explain: "Нет: это кнопка очистки, а не холст.",
          },
          {
            value: "logo",
            label: "`.logo`",
            explain: "Нет: это только картинка в шапке.",
          },
        ],
        body:
          "<p>Ищи в CSS блок <code>.field</code>. Ограничивать нужно именно его.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какая максимальная ширина поля выглядит нормально?",
        answer: "1000",
        options: [
          {
            value: "100",
            label: "100px",
            explain: "Слишком мало: поле станет почти бесполезным.",
          },
          {
            value: "1000",
            label: "1000px",
            explain: "Верно: это широкое, но все еще ограниченное поле.",
          },
          {
            value: "5000",
            label: "5000px",
            explain: "Слишком много: поле снова начнет ломать верстку.",
          },
        ],
        body:
          "<p>Удобный вариант: <code>width: min(100%, 1000px);</code>. Так поле не выйдет за пределы контейнера.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что лучше сделать с лишним внутри поля?",
        answer: "hidden",
        options: [
          {
            value: "hidden",
            label: "Скрыть",
            explain: "Верно: у `.field` лучше поставить `overflow: hidden`, чтобы лишнее не торчало наружу.",
          },
          {
            value: "scroll",
            label: "Прокручивать внутри поля",
            explain: "Не лучший вариант: прокрутка удобнее у внешней рабочей области.",
          },
          {
            value: "ignore",
            label: "Ничего не делать",
            explain: "Так поле может вылезать за свои границы.",
          },
        ],
        body:
          '<p>Настрой `.field` так:</p><pre><code>.field {\n  width: min(100%, 1000px);\n  height: min(100%, calc(100vh - 230px));\n  min-width: 620px;\n  min-height: 320px;\n  overflow: hidden;\n  background-color: black;\n  border: 1px solid black;\n  touch-action: none;\n}</code></pre><p>Прокрутку при необходимости даст родитель <code>.workspace</code>.</p>',
      },
    ],
  },
  {
    title: "Сделай ровную сетку",
    goal: "1000 клеток должны лечь в сетку 50 на 20.",
    before:
      "В CSS указано 50 колонок и 15 строк, хотя JS создает 1000 клеток.",
    change:
      "Поставь 50 колонок, 20 строк и сделай клетку размером на всю свою ячейку.",
    why:
      "Когда сетка совпадает с количеством клеток, поле выглядит ровно и аккуратно.",
    task:
      "Проверь `.field` и `.cell` в `draw.css`. Здесь главная идея простая: 50 * 20 = 1000.",
    recap:
      "Ты согласовал сетку с количеством клеток и убрал фиксированный размер у `.cell`. Теперь клетки растягиваются по сетке и не ломают поле.",
    result: {
      location: "Где править: `draw.css`, блоки `.field` и `.cell`.",
      before: `.field {
  grid-template-columns: repeat(50, 1fr);
  grid-template-rows: repeat(15, 1fr);
}

.cell {
  width: 25px;
  height: 25px;
}`,
      after: `.field {
  display: grid;
  grid-template-columns: repeat(50, minmax(0, 1fr));
  grid-template-rows: repeat(20, minmax(0, 1fr));
  gap: 1px;
}

.cell {
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid #d9d9d9;
  user-select: none;
  touch-action: none;
}`,
      note:
        "Ключевой момент: 50 колонок и 20 строк дают ровно 1000 мест для клеток.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Сколько строк нужно, если клеток 1000, а колонок 50?",
        answer: "20",
        options: [
          {
            value: "15",
            label: "15",
            explain: "Нет: 50 * 15 = 750, этого мало.",
          },
          {
            value: "20",
            label: "20",
            explain: "Верно: 50 * 20 = 1000, сетка совпадет с количеством клеток.",
          },
          {
            value: "30",
            label: "30",
            explain: "Нет: 50 * 30 = 1500, это уже слишком много.",
          },
        ],
        body:
          "<p>В `grid-template-rows` нужно заменить 15 на 20. Это главный математический шаг в этой части.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Клетка должна быть фиксированной или подстраиваться под сетку?",
        answer: "percent",
        options: [
          {
            value: "fixed",
            label: "Фиксированной",
            explain: "Нет: фиксированные 25px могут выталкивать сетку и ломать размеры поля.",
          },
          {
            value: "percent",
            label: "Подстраиваться под ячейку",
            explain: "Верно: через `width: 100%` и `height: 100%` клетка занимает всю свою grid-ячейку.",
          },
          {
            value: "none",
            label: "Без размеров",
            explain: "Не лучший вариант: размеры стоит задать через сетку.",
          },
        ],
        body:
          "<p>Убери у `.cell` фиксированные 25px. Пусть размер клетки задает сама сетка.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какой блок должен стать grid-контейнером?",
        answer: "field",
        options: [
          {
            value: "field",
            label: "`.field`",
            explain: "Верно: внутри `.field` лежат все клетки, значит именно он и должен стать сеткой.",
          },
          {
            value: "body",
            label: "`body`",
            explain: "Нет: весь документ не должен превращаться в пиксельную сетку.",
          },
          {
            value: "footer",
            label: "`.footer`",
            explain: "Нет: подвал не связан с клетками поля.",
          },
        ],
        body:
          '<p>Настрой сетку и клетки так:</p><pre><code>.field {\n  display: grid;\n  grid-template-columns: repeat(50, minmax(0, 1fr));\n  grid-template-rows: repeat(20, minmax(0, 1fr));\n  gap: 1px;\n}\n\n.cell {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  border: 1px solid #d9d9d9;\n}</code></pre><p>Теперь каждая из 1000 клеток получит свое место в сетке.</p>',
      },
    ],
  },
  {
    title: "Добавь адаптивность",
    goal: "Редактор должен нормально открываться и на компьютере, и на телефоне.",
    before:
      "У панели и поля много жестких размеров, поэтому на маленьком экране все теснится.",
    change:
      "Разреши панели переноситься на новые строки и добавь медиазапросы для меньшей ширины поля.",
    why:
      "На узком экране кнопки не будут налезать друг на друга, а поле останется доступным.",
    task:
      "Проверь `.header`, `.color-picker`, группы кнопок и медиазапросы в конце `draw.css`.",
    recap:
      "Ты сделал страницу более гибкой: панель умеет переноситься, а поле не ломает экран на телефоне. Теперь редактор удобнее открывать на разной ширине.",
    result: {
      location: "Где править: `draw.css`, шапка, панель инструментов и медиазапросы внизу файла.",
      before: `.header {
  display: flex;
}

.color-picker {
  width: 450px;
}`,
      after: `.header {
  display: flex;
  flex-wrap: wrap;
}

.color-picker,
.colors,
.addons {
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .field {
    min-width: 520px;
  }
}

@media (max-width: 640px) {
  body {
    overflow: auto;
  }

  .field {
    min-width: 460px;
    min-height: 300px;
  }

  .color-picker {
    width: 100%;
  }
}`,
      note:
        "Главная идея — не заставлять все влезать в одну строку на маленьком экране.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Что должны делать кнопки на узком экране?",
        answer: "wrap",
        options: [
          {
            value: "nowrap",
            label: "Оставаться в одну строку",
            explain: "Нет: тогда кнопки начнут наезжать друг на друга.",
          },
          {
            value: "wrap",
            label: "Переноситься",
            explain: "Верно: `flex-wrap: wrap` позволяет кнопкам уходить на новую строку.",
          },
          {
            value: "hide",
            label: "Прятаться",
            explain: "Нет: инструменты должны оставаться доступными.",
          },
        ],
        body:
          "<p>Добавь <code>flex-wrap: wrap;</code> туда, где кнопки могут не помещаться в одну строку.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Где лучше писать стили для телефона?",
        answer: "media",
        options: [
          {
            value: "media",
            label: "В `@media`",
            explain: "Верно: отдельные правила для узких экранов обычно пишут в медиазапросах.",
          },
          {
            value: "script",
            label: "В `draw.js`",
            explain: "Нет: размеры и переносы меняются через CSS, а не через JS.",
          },
          {
            value: "title",
            label: "В `title`",
            explain: "Нет: `title` относится только к вкладке браузера.",
          },
        ],
        body:
          "<p>Внизу файла добавь блоки <code>@media (max-width: 900px)</code> и <code>@media (max-width: 640px)</code>.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что лучше включить у страницы на телефоне?",
        answer: "auto",
        options: [
          {
            value: "auto",
            label: "Прокрутку",
            explain: "Верно: на телефоне странице лучше вернуть `overflow: auto`, чтобы ничего не обрезалось.",
          },
          {
            value: "hidden",
            label: "Скрытие переполнения",
            explain: "Нет: так часть редактора может просто исчезнуть.",
          },
          {
            value: "none",
            label: "Ничего",
            explain: "Не лучший вариант: на узком экране тогда легко потерять часть интерфейса.",
          },
        ],
        body:
          '<p>Добавь простые медиазапросы:</p><pre><code>@media (max-width: 900px) {\n  .field {\n    min-width: 520px;\n  }\n}\n\n@media (max-width: 640px) {\n  body {\n    overflow: auto;\n  }\n\n  .workspace {\n    padding: 8px;\n  }\n\n  .field {\n    min-width: 460px;\n    min-height: 300px;\n  }\n\n  .color-picker {\n    width: 100%;\n  }\n}</code></pre><p>Этого уже достаточно, чтобы страница вела себя спокойнее на телефоне.</p>',
      },
    ],
  },
  {
    title: "Сделай рисование по клеткам",
    goal: "Исправь `draw.js`, чтобы можно было рисовать кликом и протягиванием.",
    before:
      "Клетки создаются, но у них нет нормальных обработчиков рисования.",
    change:
      "Сохрани клетки в массив `cells` и добавь события `pointerdown` и `pointerenter`.",
    why:
      "Так рисование будет работать и мышью, и пальцем.",
    task:
      "Правь цикл, где создаются клетки. Там удобнее сразу добавить поведение каждой клетки.",
    recap:
      "Ты научил клетки реагировать на нажатие и движение указателя. Благодаря этому редактор начал действительно рисовать, а не просто создавать пустую сетку.",
    result: {
      location: "Где править: `draw.js`, цикл создания клеток и обработчики на документе.",
      before: `for (let i = 0; i < maxFields; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("id", \`\${i}\`);
  field.appendChild(cell);
}

document.addEventListener("mousedown", function () {
  IS_CLICKED = true;
});`,
      after: `let cells = [];

document.addEventListener("pointerdown", function () {
  IS_CLICKED = true;
});

document.addEventListener("pointerup", function () {
  IS_CLICKED = false;
});

for (let i = 0; i < maxFields; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("id", \`\${i}\`);
  field.appendChild(cell);
  cells.push(cell);

  cell.addEventListener("pointerdown", function () {
    cell.style.backgroundColor = color;
    cell.style.borderColor = color === "white" ? "#d9d9d9" : "#111";
  });

  cell.addEventListener("pointerenter", function () {
    if (IS_CLICKED) {
      cell.style.backgroundColor = color;
      cell.style.borderColor = color === "white" ? "#d9d9d9" : "#111";
    }
  });
}`,
      note:
        "Главный смысл — клетка должна краситься и при первом нажатии, и при протягивании по соседним клеткам.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какое событие срабатывает при нажатии на клетку?",
        answer: "pointerdown",
        options: [
          {
            value: "pointerdown",
            label: "`pointerdown`",
            explain: "Верно: это событие срабатывает в момент нажатия и сразу дает закрасить клетку.",
          },
          {
            value: "pointerup",
            label: "`pointerup`",
            explain: "Нет: оно срабатывает уже при отпускании, а рисовать нужно раньше.",
          },
          {
            value: "scroll",
            label: "`scroll`",
            explain: "Нет: прокрутка страницы не связана с рисованием по клетке.",
          },
        ],
        body:
          "<p>На каждую клетку добавь обработчик <code>pointerdown</code>, чтобы она красилась сразу при нажатии.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какое событие помогает красить соседние клетки при протягивании?",
        answer: "pointerenter",
        options: [
          {
            value: "pointerenter",
            label: "`pointerenter`",
            explain: "Верно: когда указатель входит в новую клетку, ее можно закрасить, если кнопка зажата.",
          },
          {
            value: "keyup",
            label: "`keyup`",
            explain: "Нет: это событие клавиатуры, а не мыши или пальца.",
          },
          {
            value: "load",
            label: "`load`",
            explain: "Нет: оно срабатывает только при загрузке страницы.",
          },
        ],
        body:
          "<p>В обработчике <code>pointerenter</code> проверь флаг <code>IS_CLICKED</code>. Если он <code>true</code>, клетку можно красить.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Зачем сохранять клетки в массив `cells`?",
        answer: "all",
        options: [
          {
            value: "all",
            label: "Чтобы потом пройтись по всем клеткам",
            explain: "Верно: этот же массив потом пригодится для очистки и общей заливки.",
          },
          {
            value: "one",
            label: "Чтобы работать с одной клеткой",
            explain: "Нет: для одной клетки массив вообще не нужен.",
          },
          {
            value: "text",
            label: "Чтобы хранить текст",
            explain: "Нет: текст в клетках не используется.",
          },
        ],
        body:
          '<p>Используй такой вариант:</p><pre><code>let cells = [];\n\nfor (let i = 0; i &lt; maxFields; i++) {\n  let cell = document.createElement("div");\n  cell.classList.add("cell");\n  cell.setAttribute("id", `${i}`);\n  field.appendChild(cell);\n  cells.push(cell);\n\n  cell.addEventListener("pointerdown", function () {\n    cell.style.backgroundColor = color;\n    cell.style.borderColor = color === "white" ? "#d9d9d9" : "#111";\n  });\n\n  cell.addEventListener("pointerenter", function () {\n    if (IS_CLICKED) {\n      cell.style.backgroundColor = color;\n      cell.style.borderColor = color === "white" ? "#d9d9d9" : "#111";\n    }\n  });\n}</code></pre><p>А глобальные обработчики тоже переведи на <code>pointerdown</code> и <code>pointerup</code>.</p>',
      },
    ],
  },
  {
    title: "Почини очистку и заливку",
    goal: "Сделай так, чтобы `Clear`, ластик и `Fill All` работали аккуратно.",
    before:
      "`Clear` меняет только фон, а заливка запускает много одинаковых анимаций внутри цикла.",
    change:
      "Очищай фон и границу каждой клетки. Для заливки запускай одну анимацию сразу на весь массив `cells`.",
    why:
      "Так поле возвращается к чистому виду, а заливка работает проще и быстрее.",
    task:
      "Правь обработчики `clear`, `erase` и `paintAll` в `draw.js`. Новые инструменты добавлять не нужно.",
    recap:
      "Ты довел инструменты до рабочего состояния: очистка полностью сбрасывает клетки, ластик рисует белым, а общая заливка больше не запускает сотни одинаковых анимаций.",
    result: {
      location: "Где править: `draw.js`, обработчики `clear`, `erase` и `paintAll`.",
      before: `clear.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "white";
  }
});

paintAll.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    anime({
      targets: document.querySelectorAll(".cell"),
      ...
    });
  }
});`,
      after: `clear.addEventListener("click", function () {
  FILL_MODE = false;

  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
    cells[i].style.borderColor = "#d9d9d9";
  }
});

erase.addEventListener("click", function () {
  color = "white";
});

paintAll.addEventListener("click", function () {
  FILL_MODE = true;

  let targetColor = color;
  let borderColor = color === "white" ? "#d9d9d9" : "#111";

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
});`,
      note:
        "Главная идея — работать не с новым поиском элементов каждый раз, а с уже готовым массивом `cells`.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой цвет выбирает ластик?",
        answer: "white",
        options: [
          {
            value: "black",
            label: "Черный",
            explain: "Нет: черный — обычный цвет рисования, а не ластик.",
          },
          {
            value: "white",
            label: "Белый",
            explain: "Верно: ластик здесь работает как рисование белым цветом.",
          },
          {
            value: "blue",
            label: "Синий",
            explain: "Нет: это просто один из цветов палитры.",
          },
        ],
        body:
          "<p>Для ластика достаточно оставить <code>color = \"white\";</code>. Тогда клетка снова становится белой.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Что нужно сбросить у клетки при очистке?",
        answer: "both",
        options: [
          {
            value: "background",
            label: "Только фон",
            explain: "Не хватает: граница может остаться темной и поле будет выглядеть грязно.",
          },
          {
            value: "both",
            label: "Фон и границу",
            explain: "Верно: после очистки клетка должна выглядеть как новая.",
          },
          {
            value: "id",
            label: "Ее `id`",
            explain: "Нет: `id` клетки менять не нужно.",
          },
        ],
        body:
          "<p>В обработчике <code>Clear</code> пройди по <code>cells</code> и верни каждой клетке белый фон и границу <code>#d9d9d9</code>.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Сколько раз нужно вызвать `anime()` для общей заливки?",
        answer: "one",
        options: [
          {
            value: "one",
            label: "Один раз",
            explain: "Верно: одной анимации на весь массив `cells` достаточно.",
          },
          {
            value: "many",
            label: "Много раз в цикле",
            explain: "Нет: это создает лишнюю работу и повторяет одну и ту же анимацию.",
          },
          {
            value: "zero",
            label: "Ни разу",
            explain: "Нет: тогда заливка останется без анимации.",
          },
        ],
        body:
          '<p>Очистка:</p><pre><code>clear.addEventListener("click", function () {\n  FILL_MODE = false;\n\n  for (let i = 0; i &lt; cells.length; i++) {\n    cells[i].style.backgroundColor = "white";\n    cells[i].style.borderColor = "#d9d9d9";\n  }\n});</code></pre><p>Заливка:</p><pre><code>paintAll.addEventListener("click", function () {\n  FILL_MODE = true;\n\n  let targetColor = color;\n  let borderColor = color === "white" ? "#d9d9d9" : "#111";\n\n  anime({\n    targets: cells,\n    backgroundColor: targetColor,\n    duration: 1200,\n    easing: "easeInOutQuad",\n    complete: function () {\n      for (let i = 0; i &lt; cells.length; i++) {\n        cells[i].style.backgroundColor = targetColor;\n        cells[i].style.borderColor = borderColor;\n      }\n    },\n  });\n});</code></pre><p>Теперь очистка и общая заливка опираются на один и тот же массив клеток.</p>',
      },
    ],
  },
  {
    title: "Доведи проект до итогового вида",
    goal: "В конце добери оставшиеся отличия, чтобы `draw.*` совпал с готовой версией.",
    before:
      "Основная логика уже работает, но в `draw.html` и `draw.css` еще могут остаться мелкие отличия от готового проекта.",
    change:
      "Поправь `title`, подключение шрифта, `alt` у логотипа, `type` и `title` у кнопок, а в CSS добери фон страницы, размеры панели, кнопок, подвала и последние мелкие стили.",
    why:
      "Это последний слой: проект не просто работает, а выглядит и оформлен так же, как готовая версия.",
    task:
      "Вернись к `draw.html` и `draw.css`, добери мелкие отличия и потом проверь проект целиком.",
    recap:
      "Ты добрал последние мелочи: название вкладки, подключение шрифта, аккуратные кнопки, размеры панели и оформление подвала. После этого `draw.*` уже повторяет готовую версию целиком.",
    result: {
      location: "Где править: верх `draw.html`, блок `header` и последние стили в `draw.css`.",
      before: `<title>Document</title>
<link rel="stylesheet" href="draw.css" />
<link rel="preconnect" href="https://gstatic.com" crossorigin />
<link href="https://googleapis.com" rel="stylesheet" />

<div class="logo"><img src="images/Logo.png" alt="" /></div>
<a href="../index.html"><button class="button_back">⬅</button></a>
<button class="red"></button>

.logo img {
  width: 100px;
  height: 100px;
}

.button_back {
  width: 49px;
  height: 55px;
}

.color-picker {
  width: 450px;
  height: 100px;
}

.clear {
  background-color: white;
}

.cell:hover {
  background-color: gray;
}

.footer {
  min-height: 100px;
  position: sticky;
}`,
      after: `<title>Pixel Draw</title>
<link rel="stylesheet" href="draw.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
  rel="stylesheet"
/>

<div class="logo">
  <img src="images/Logo.png" alt="Logo" />
</div>
<a href="../index.html">
  <button class="button_back" type="button">⬅</button>
</a>
<button class="red" type="button" title="Red"></button>
<button class="black" type="button" title="Black"></button>
...
<button class="erase" type="button" title="Erase"></button>

.logo img {
  width: 84px;
  height: 84px;
  object-fit: cover;
  display: block;
}

.button_back {
  background: white;
}

body {
  background: #f3f6fb;
}

.header {
  min-height: 100px;
  padding: 10px;
  gap: 12px;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.color-picker {
  width: min(100%, 720px);
  padding: 8px;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
}

.colors,
.addons {
  min-height: 56px;
  padding: 8px;
  gap: 6px;
  background: white;
  justify-content: center;
  align-items: center;
}

.red,
.black,
.green,
.blue,
.purple,
.yellow,
.brown,
.pink,
.erase {
  width: 28px;
  height: 28px;
  margin: 0;
}

.paint-all,
.clear {
  height: 30px;
  padding: 0 14px;
  background-color: lightgray;
  font-family: inherit;
}

.cell:hover {
  filter: brightness(0.95);
}

.footer {
  min-height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.copyright {
  margin: 0;
}`,
      note:
        "Смысл этого шага — собрать все последние визуальные и служебные отличия, которые не меняют логику, но делают проект полностью совпадающим с готовой версией.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Как должно называться готовое приложение во вкладке браузера?",
        answer: "pixel",
        options: [
          {
            value: "document",
            label: "`Document`",
            explain: "Нет: это стандартная заготовка, а не название готового проекта.",
          },
          {
            value: "pixel",
            label: "`Pixel Draw`",
            explain: "Верно: так вкладка сразу показывает название готового проекта.",
          },
          {
            value: "draw",
            label: "`Draw Page`",
            explain: "Нет: в готовой версии используется конкретное имя `Pixel Draw`.",
          },
        ],
        body:
          "<p>В `draw.html` поменяй содержимое тега <code>&lt;title&gt;</code> на <code>Pixel Draw</code>.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Что должна уметь панель инструментов, если места по ширине мало?",
        answer: "wrap",
        options: [
          {
            value: "wrap",
            label: "Переноситься на новую строку",
            explain: "Верно: поэтому у панели и групп кнопок нужен перенос, а не жесткая одна строка.",
          },
          {
            value: "hide",
            label: "Обрезаться за краем",
            explain: "Нет: инструменты должны оставаться доступными.",
          },
          {
            value: "scroll",
            label: "Всегда прокручиваться внутри себя",
            explain: "Не лучший вариант: в готовой версии панель сначала старается переноситься.",
          },
        ],
        body:
          "<p>Проверь у `.header`, `.color-picker`, `.colors` и `.addons` перенос элементов и нормальные отступы. Тогда панель выглядит аккуратно и на узких экранах.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что лучше сделать с общими стилями цветных кнопок?",
        answer: "group",
        options: [
          {
            value: "copy",
            label: "Повторять размеры в каждом классе",
            explain: "Нет: так код разрастается и его сложнее поддерживать.",
          },
          {
            value: "group",
            label: "Собрать общие размеры в одно правило",
            explain: "Верно: общие размеры и рамки удобнее описать одним списком селекторов.",
          },
          {
            value: "js",
            label: "Перенести размеры в JS",
            explain: "Нет: оформление кнопок — это задача CSS, а не JS.",
          },
        ],
        body:
          '<p>Добери оставшиеся фрагменты так:</p><pre><code>&lt;title&gt;Pixel Draw&lt;/title&gt;\n&lt;link rel="preconnect" href="https://fonts.googleapis.com" /&gt;\n&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /&gt;\n&lt;link\n  href="https://fonts.googleapis.com/css2?family=Archivo+Black&amp;display=swap"\n  rel="stylesheet"\n/&gt;\n\n&lt;img src="images/Logo.png" alt="Logo" /&gt;\n&lt;button class="button_back" type="button"&gt;⬅&lt;/button&gt;\n&lt;button class="red" type="button" title="Red"&gt;&lt;/button&gt;</code></pre><pre><code>.header {\n  min-height: 100px;\n  padding: 10px;\n  gap: 12px;\n  flex-wrap: wrap;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n}\n\n.logo img {\n  width: 84px;\n  height: 84px;\n  object-fit: cover;\n  display: block;\n}\n\n.button_back {\n  background: white;\n}\n\n.color-picker {\n  width: min(100%, 720px);\n  padding: 8px;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background-color: whitesmoke;\n}\n\n.colors,\n.addons {\n  min-height: 56px;\n  padding: 8px;\n  gap: 6px;\n  background: white;\n  justify-content: center;\n  align-items: center;\n}\n\n.red,\n.black,\n.green,\n.blue,\n.purple,\n.yellow,\n.brown,\n.pink,\n.erase {\n  width: 28px;\n  height: 28px;\n  margin: 0;\n}\n\n.paint-all,\n.clear {\n  background-color: lightgray;\n}\n\n.cell:hover {\n  filter: brightness(0.95);\n}\n\n.footer {\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n}\n\n.copyright {\n  margin: 0;\n}</code></pre><p>После этого проверь еще подвал, фон страницы и подписи к цветным кнопкам. Именно этот шаг добирает проект до точного итогового вида.</p>',
      },
    ],
  },
];

const completedStorageKey = "pixel-instruction-completed";
const solvedStorageKey = "pixel-instruction-solved-hints";
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

  return `Ты отметил шаг как выполненный. Осталось ответить еще на ${remaining} из ${total} вопросов. После всех верных ответов откроется готовый код.`;
}

function render() {
  navRoot.innerHTML = steps
    .map((step, index) => {
      const id = getStepId(index);
      return `
        <a href="#${id}" class="${completedSteps.has(id) ? "is-done" : ""}" data-nav="${id}">
          <span class="route__num">${index + 1}</span>
          <span class="route__title">${escapeHtml(step.title)}</span>
        </a>
      `;
    })
    .join("");

  stepsRoot.innerHTML = steps
    .map((step, index) => renderStep(step, index))
    .join("");

  updateProgress();
  updateSolvedState();
  observeCurrentStep();
}

function renderStep(step, index) {
  const stepId = getStepId(index);
  const solvedCount = getSolvedCount(index);
  const allSolved = solvedCount === step.hints.length;
  const isDone = completedSteps.has(stepId);
  const needsValidation = isDone && !allSolved;

  return `
    <article class="step ${isDone ? "is-done" : ""}" id="${stepId}" data-step="${stepId}" data-step-index="${index}">
      <header class="step__header">
        <span class="step__number">${index + 1}</span>
        <div>
          <h2>${escapeHtml(step.title)}</h2>
          <p class="step__goal">${formatInlineCode(step.goal)}</p>
        </div>
      </header>

      <div class="flow" aria-label="Что было, что изменить и зачем">
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
          <p>${step.result.location}</p>
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

function getStepStatusText(stepIndex, isDone, allSolved) {
  if (isDone && !allSolved) {
    return "Шаг отмечен. Теперь ответь на все вопросы этого шага, чтобы проверить себя и открыть готовый код.";
  }

  if (isDone && allSolved) {
    return "Шаг выполнен и проверен. Готовый код уже открыт ниже.";
  }

  if (!isDone && allSolved) {
    return "Все вопросы уже пройдены. Можешь смело отмечать шаг выполненным.";
  }

  return "Сделай шаг сам или открой подсказку после ответа на вопрос.";
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

  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("is-done", completedSteps.has(link.dataset.nav));
  });

  document.querySelectorAll("[data-step]").forEach((stepElement) => {
    const stepIndex = Number(stepElement.dataset.stepIndex);
    const isDone = completedSteps.has(stepElement.dataset.step);
    const allSolved = getSolvedCount(stepIndex) === steps[stepIndex].hints.length;
    const status = stepElement.querySelector(".step__status");
    const button = stepElement.querySelector(".complete-step");
    const recap = stepElement.querySelector("[data-step-recap]");
    const checkin = stepElement.querySelector("[data-step-checkin]");

    stepElement.classList.toggle("is-done", isDone);
    status.textContent = getStepStatusText(stepIndex, isDone, allSolved);
    button.textContent = isDone ? "Снять отметку" : "Отметить шаг выполненным";
    recap.hidden = !isDone;
    checkin.hidden = !(isDone && !allSolved);
    if (isDone && !allSolved) {
      checkin.querySelector("p").textContent = getValidationMessage(stepIndex);
    }
  });
}

function updateSolvedState() {
  steps.forEach((step, stepIndex) => {
    const stepId = getStepId(stepIndex);
    const solvedCount = getSolvedCount(stepIndex);
    const allSolved = solvedCount === step.hints.length;
    const counter = document.querySelector(`[data-step-progress="${stepId}"]`);
    const result = document.querySelector(`[data-step-result="${stepId}"]`);
    const checkin = document.querySelector(`[data-step-checkin="${stepId}"]`);

    if (counter) {
      counter.textContent = allSolved
        ? `${solvedCount} / ${step.hints.length} вопросов. Итоговый код открыт.`
        : `${solvedCount} / ${step.hints.length} вопросов`;
    }

    if (result) {
      result.hidden = !allSolved;
    }

    if (checkin) {
      const isDone = completedSteps.has(stepId);
      checkin.hidden = !(isDone && !allSolved);
      if (isDone && !allSolved) {
        checkin.querySelector("p").textContent = getValidationMessage(stepIndex);
      }
    }

    step.hints.forEach((_, hintIndex) => {
      const hintId = getHintId(stepIndex, hintIndex);
      const hintElement = document.querySelector(`[data-hint="${hintId}"]`);

      if (hintElement) {
        hintElement.classList.toggle("is-solved", solvedHints.has(hintId));
      }
    });
  });
}

function observeCurrentStep() {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      document.querySelectorAll("[data-nav]").forEach((link) => {
        link.classList.toggle("is-active", link.dataset.nav === visible.target.id);
      });
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0.2, 0.6] },
  );

  document.querySelectorAll(".step").forEach((stepElement) => {
    observer.observe(stepElement);
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

  const id = button.dataset.complete;
  const stepElement = document.querySelector(`[data-step="${id}"]`);
  const stepIndex = Number(stepElement.dataset.stepIndex);

  if (completedSteps.has(id)) {
    completedSteps.delete(id);
  } else {
    completedSteps.add(id);
  }

  saveStoredSet(completedStorageKey, completedSteps);
  updateProgress();
  updateSolvedState();

  const isDone = completedSteps.has(id);
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
    }, 1800);
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
