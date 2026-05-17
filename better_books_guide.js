const steps = [
  {
    title: "Собери верхнее меню",
    goal: "Сначала оформи меню в шапке. HTML уже готов, не хватает только CSS.",
    before:
      "У `header` уже есть размеры и отступы, но у `nav` пока нет своих стилей.",
    change:
      "Добавь правило `nav`: растяни его по высоте шапки, поставь пункты в ряд, добавь расстояние между ними и выровняй по центру.",
    why:
      "Так меню перестанет быть обычным текстом и встанет в аккуратную строку рядом с логотипом.",
    task:
      "Правь только CSS-файл проекта. Начни с нового блока `nav { ... }` ниже стилей логотипа.",
    recap:
      "Ты оформил контейнер меню: теперь его пункты стоят в одну линию, имеют ровный отступ и хорошо смотрятся в шапке.",
    result: {
      location: "Где править: CSS-файл проекта, сразу после блока `.logo img`.",
      before: `.logo img {
  height: 100%;
}

/* дальше стилей для меню еще нет */`,
      after: `.logo img {
  height: 100%;
}

nav {
  height: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
}`,
      note:
        "Смысл этого шага простой: сначала ты приводишь в порядок верхнюю навигацию, а уже потом переходишь к большим секциям страницы.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой selector отвечает за контейнер с пунктами меню?",
        answer: "nav",
        options: [
          {
            value: "header",
            label: "`header`",
            explain: "Не совсем: `header` отвечает за всю шапку, а не только за меню.",
          },
          {
            value: "nav",
            label: "`nav`",
            explain: "Верно: именно `nav` оборачивает все пункты меню.",
          },
          {
            value: "logo",
            label: "`.logo`",
            explain: "Нет, это блок логотипа.",
          },
        ],
        body:
          "<p>Ищи в HTML тег <code>nav</code>. Именно ему сейчас не хватает отдельного CSS-блока.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какое свойство ставит пункты меню в одну строку?",
        answer: "flex",
        options: [
          {
            value: "flex",
            label: "`display: flex`",
            explain: "Верно: flex-раскладка ставит элементы меню в один ряд.",
          },
          {
            value: "padding",
            label: "`padding`",
            explain: "Нет, padding добавляет внутренние отступы, но не строит элементы в ряд.",
          },
          {
            value: "font",
            label: "`font-family`",
            explain: "Нет, шрифт меняет внешний вид текста, но не раскладку.",
          },
        ],
        body:
          "<p>В блоке <code>nav</code> тебе точно нужен <code>display: flex;</code>. После этого уже можно добавить расстояние между пунктами и выравнивание.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какой отступ между пунктами меню нужен в готовом варианте?",
        answer: "32",
        options: [
          {
            value: "16",
            label: "`16px`",
            explain: "Маловато: меню будет смотреться плотнее, чем в готовом варианте.",
          },
          {
            value: "32",
            label: "`32px`",
            explain: "Верно: именно такой gap нужен между пунктами меню.",
          },
          {
            value: "64",
            label: "`64px`",
            explain: "Слишком много: меню расползется сильнее, чем нужно.",
          },
        ],
        body:
          '<p>Добавь такой блок:</p><pre><code>nav {\n  height: 100%;\n  display: flex;\n  gap: 32px;\n  align-items: center;\n}</code></pre><p>Теперь меню займет всю высоту шапки, а его пункты встанут ровно в одну строку.</p>',
      },
    ],
  },
  {
    title: "Собери первый экран",
    goal: "Теперь оформи большой первый экран с текстом слева и картинкой справа.",
    before:
      "Секция `.cover` уже есть в HTML, но пока она никак не разложена по ширине и высоте.",
    change:
      "Добавь стили для `.cover`, `.cover .right img` и `.cover .left`.",
    why:
      "Так первый экран станет похож на обложку: слева текст и кнопка, справа крупная картинка.",
    task:
      "Добавляй новые блоки ниже меню. На этом шаге ты работаешь только с раскладкой первого экрана.",
    recap:
      "Ты задал размер и раскладку первого экрана. Теперь страница делится на две понятные части и начинает напоминать готовый макет.",
    result: {
      location: "Где править: CSS-файл проекта, после блока `nav`.",
      before: `/* у секции cover пока нет своих стилей */`,
      after: `.cover {
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 64px;
}

.cover .right img {
  height: 100%;
}

.cover .left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`,
      note:
        "Главная идея здесь — сначала выставить каркас секции, а уже потом дооформлять текст, иконки и кнопку внутри.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой selector отвечает за весь первый экран?",
        answer: "cover",
        options: [
          {
            value: "left",
            label: "`.left`",
            explain: "Это только левая колонка, а не вся секция целиком.",
          },
          {
            value: "cover",
            label: "`.cover`",
            explain: "Верно: именно `.cover` является оболочкой первого экрана.",
          },
          {
            value: "right",
            label: "`.right`",
            explain: "Это только правая часть с картинкой.",
          },
        ],
        body:
          "<p>Сначала найди в HTML секцию <code>class=\"cover\"</code>. Именно ей нужен основной блок размеров и раскладки.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какую высоту нужно дать первому экрану?",
        answer: "80vh",
        options: [
          {
            value: "100px",
            label: "`100px`",
            explain: "Нет, это слишком мало для большого первого экрана.",
          },
          {
            value: "80vh",
            label: "`80vh`",
            explain: "Верно: первый экран должен занимать большую часть высоты окна.",
          },
          {
            value: "auto",
            label: "`auto`",
            explain: "Так высота будет зависеть только от содержимого и экран не растянется как в макете.",
          },
        ],
        body:
          "<p>У `.cover` есть фиксированная высота <code>80vh</code>, поэтому секция сразу выглядит как большой первый экран.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какое свойство раздвигает левую и правую части по краям секции?",
        answer: "space-between",
        options: [
          {
            value: "center",
            label: "`justify-content: center`",
            explain: "Нет, так блоки соберутся в центре, а не разойдутся по краям.",
          },
          {
            value: "space-between",
            label: "`justify-content: space-between`",
            explain: "Верно: это свойство разводит левую и правую части по краям первого экрана.",
          },
          {
            value: "column",
            label: "`flex-direction: column`",
            explain: "Нет, это меняет направление, но не раздвигает блоки по горизонтали.",
          },
        ],
        body:
          '<p>Добавь такие стили:</p><pre><code>.cover {\n  width: 100%;\n  height: 80vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 64px;\n}\n\n.cover .right img {\n  height: 100%;\n}\n\n.cover .left {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}</code></pre><p>Теперь первый экран разбит на две части и держит нужную высоту.</p>',
      },
    ],
  },
  {
    title: "Оформи текст и соцсети",
    goal: "После каркаса доработай содержимое левой колонки: текст и иконки.",
    before:
      "Заголовок, абзац и соцсети уже есть в HTML, но пока выглядят как обычные элементы без нужных размеров и шрифтов.",
    change:
      "Добавь стили для `.text-group`, заголовка `h1`, абзаца и блока `.social-icons`.",
    why:
      "Так текст станет главным акцентом первого экрана, а соцсети аккуратно встанут в ряд.",
    task:
      "Работай только с блоками внутри `.cover .left`. Сейчас важны текст, ширина группы и иконки.",
    recap:
      "Ты оформил содержимое левой колонки: заголовок стал крупным, текст — читабельным, а иконки соцсетей выровнялись в одну строку.",
    result: {
      location: "Где править: CSS-файл проекта, после стилей `.cover .left`.",
      before: `/* текст и соцсети пока используют только браузерные стили */`,
      after: `.cover .left .text-group {
  width: 80%;
}

.cover .left .text-group h1 {
  font-family: "PT Serif", serif;
  font-size: 6em;
  font-weight: 400;
  margin: 0;
  line-height: 1em;
}

.cover .left p {
  font-family: "PT Sans Caption", sans-serif;
  font-weight: 400;
  font-size: 1.5em;
}

.left .social-icons {
  display: flex;
  gap: 16px;
  height: 40px;
}

.left .social-icons .social-icon img {
  height: 100%;
}`,
      note:
        "Здесь ты дорабатываешь содержимое уже готовой раскладки. Поэтому сначала было важно собрать `.cover`, а уже потом заниматься типографикой.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой шрифт нужен главному заголовку?",
        answer: "serif",
        options: [
          {
            value: "montserrat",
            label: "`Montserrat`",
            explain: "Нет, этот шрифт не используется для большого заголовка в готовом варианте.",
          },
          {
            value: "serif",
            label: "`PT Serif`",
            explain: "Верно: большой заголовок оформляется шрифтом `PT Serif`.",
          },
          {
            value: "sans",
            label: "`PT Sans Caption`",
            explain: "Нет, этот шрифт используется для абзацев и кнопки.",
          },
        ],
        body:
          "<p>У заголовка <code>h1</code> должен быть отдельный шрифт <code>\"PT Serif\", serif</code>, чтобы он выглядел крупнее и выразительнее.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какой ширины должна быть текстовая группа внутри левой колонки?",
        answer: "80",
        options: [
          {
            value: "100",
            label: "`100%`",
            explain: "Нет, тогда текст растянется сильнее и потеряет воздух справа.",
          },
          {
            value: "80",
            label: "`80%`",
            explain: "Верно: в готовом варианте `.text-group` занимает 80% ширины своей колонки.",
          },
          {
            value: "50",
            label: "`50%`",
            explain: "Маловато: текстовая часть станет слишком узкой.",
          },
        ],
        body:
          "<p>Блок <code>.cover .left .text-group</code> должен занимать <code>80%</code>, чтобы у текста был удобный размер строки.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какое свойство ставит иконки соцсетей в одну линию?",
        answer: "flex",
        options: [
          {
            value: "flex",
            label: "`display: flex`",
            explain: "Верно: соцсети собираются в одну строку через `display: flex`.",
          },
          {
            value: "block",
            label: "`display: block`",
            explain: "Нет, так иконки снова пойдут друг под другом или будут вести себя как обычные блоки.",
          },
          {
            value: "inline",
            label: "`display: inline`",
            explain: "Нет, в готовом варианте здесь используется именно flex-раскладка.",
          },
        ],
        body:
          '<p>Добавь такие стили:</p><pre><code>.cover .left .text-group {\n  width: 80%;\n}\n\n.cover .left .text-group h1 {\n  font-family: "PT Serif", serif;\n  font-size: 6em;\n  font-weight: 400;\n  margin: 0;\n  line-height: 1em;\n}\n\n.cover .left p {\n  font-family: "PT Sans Caption", sans-serif;\n  font-weight: 400;\n  font-size: 1.5em;\n}\n\n.left .social-icons {\n  display: flex;\n  gap: 16px;\n  height: 40px;\n}\n\n.left .social-icons .social-icon img {\n  height: 100%;\n}</code></pre><p>Теперь текст и иконки выглядят как часть готового первого экрана, а не как сырые элементы HTML.</p>',
      },
    ],
  },
  {
    title: "Сделай кнопку живой",
    goal: "Теперь оформи главную кнопку так, чтобы она выглядела как настоящий интерактивный элемент.",
    before:
      "Кнопка `btn-main` уже есть в HTML, но без CSS она не похожа на заметную кнопку и не реагирует на действия пользователя.",
    change:
      "Добавь обычное состояние для `.left .btn-main`, а потом стили для `:hover` и `:active`.",
    why:
      "Так кнопка станет заметной, понятной и будет ощущаться живой при наведении и нажатии.",
    task:
      "На этом шаге работай только с кнопкой. Не смешивай ее стили со стилями текста или секции ниже.",
    recap:
      "Ты оформил кнопку как главный призыв к действию: она заметна, меняется при наведении и чуть сжимается при нажатии.",
    result: {
      location: "Где править: CSS-файл проекта, после стилей соцсетей.",
      before: `/* у .btn-main пока нет своих состояний */`,
      after: `.left .btn-main {
  background: black;
  border: 3px solid black;
  color: white;
  width: fit-content;
  padding: 16px 32px;
  box-sizing: border-box;
  font-family: "PT Sans Caption", sans-serif;
  cursor: pointer;
  transition-property: background, color, transform;
  transition-duration: .3s;
  transition-timing-function: ease-out;
  user-select: none;
}

.btn-main:hover {
  background: white;
  color: black;
  transition-property: background, color, transform;
  transition-duration: .15s;
  transition-timing-function: ease-in;
}

.btn-main:active {
  transform: scale(.97);
  transition: transform .15s ease-in;
}`,
      note:
        "Это уже поведенческий слой: кнопка не просто стоит на странице, а реагирует на действия пользователя и выглядит законченной.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой фон у кнопки в обычном состоянии?",
        answer: "black",
        options: [
          {
            value: "white",
            label: "Белый",
            explain: "Нет, в готовом варианте кнопка сначала темная, а светлой становится уже при наведении.",
          },
          {
            value: "black",
            label: "Черный",
            explain: "Верно: обычное состояние кнопки — черный фон и белый текст.",
          },
          {
            value: "pink",
            label: "Розовый",
            explain: "Нет, у кнопки нет розового фона в готовом варианте.",
          },
        ],
        body:
          "<p>Начни с обычного состояния: у <code>.left .btn-main</code> черный фон, черная рамка и белый текст.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какой pseudo-class нужен для состояния при наведении?",
        answer: "hover",
        options: [
          {
            value: "hover",
            label: "`:hover`",
            explain: "Верно: именно `:hover` отвечает за реакцию на наведение.",
          },
          {
            value: "focus",
            label: "`:focus`",
            explain: "Нет, это другое состояние — фокусировка элемента.",
          },
          {
            value: "before",
            label: "`::before`",
            explain: "Нет, это псевдоэлемент, а не состояние кнопки.",
          },
        ],
        body:
          "<p>В блоке <code>.btn-main:hover</code> кнопка меняет фон на белый, а текст — на черный.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что происходит с кнопкой при нажатии в готовом варианте?",
        answer: "scale",
        options: [
          {
            value: "rotate",
            label: "Поворачивается",
            explain: "Нет, кнопка не вращается.",
          },
          {
            value: "scale",
            label: "Чуть уменьшается",
            explain: "Верно: при нажатии кнопка слегка уменьшается через `transform: scale(.97)`.",
          },
          {
            value: "hide",
            label: "Исчезает",
            explain: "Нет, кнопка не должна пропадать.",
          },
        ],
        body:
          '<p>Добавь такие стили:</p><pre><code>.left .btn-main {\n  background: black;\n  border: 3px solid black;\n  color: white;\n  width: fit-content;\n  padding: 16px 32px;\n  box-sizing: border-box;\n  font-family: "PT Sans Caption", sans-serif;\n  cursor: pointer;\n  transition-property: background, color, transform;\n  transition-duration: .3s;\n  transition-timing-function: ease-out;\n  user-select: none;\n}\n\n.btn-main:hover {\n  background: white;\n  color: black;\n  transition-property: background, color, transform;\n  transition-duration: .15s;\n  transition-timing-function: ease-in;\n}\n\n.btn-main:active {\n  transform: scale(.97);\n  transition: transform .15s ease-in;\n}</code></pre><p>Теперь кнопка заметно реагирует и на наведение, и на нажатие.</p>',
      },
    ],
  },
  {
    title: "Доделай секцию направлений",
    goal: "В конце оформи нижнюю секцию с заголовком, цветным рядом карточек и картинками.",
    before:
      "Секция `.areas` уже есть в HTML, но пока не выглядит как собранный блок с карточками.",
    change:
      "Добавь стили для заголовка секции, строки `.areas .row` и картинок внутри `.row-item`.",
    why:
      "Так нижняя часть страницы станет цельной: появятся крупный заголовок, фон у строки и ровные карточки.",
    task:
      "На этом шаге закончи CSS страницы. После него у тебя должен получиться готовый внешний вид всего макета.",
    recap:
      "Ты собрал последнюю секцию страницы: заголовок оформлен, карточки стоят в один ряд, а картинки растягиваются по ширине своих блоков.",
    result: {
      location: "Где править: CSS-файл проекта, в самом конце файла.",
      before: `/* секция .areas пока без итогового оформления */`,
      after: `.areas h1 {
  font-size: 3.6em;
  font-weight: 400;
  font-family: "PT Serif", serif;
  padding: 0 64px;
}

.areas .row {
  background: rgba(233, 173, 200, 0.62);
  display: flex;
  gap: 48px;
  padding: 64px 64px;
  box-sizing: border-box;
}

.areas .row .row-item img {
  width: 100%;
}`,
      note:
        "Этим шагом ты закрываешь последние отличия: после него CSS полностью повторяет итоговый внешний вид страницы.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой selector оформляет заголовок секции направлений?",
        answer: "areas-h1",
        options: [
          {
            value: "row",
            label: "`.areas .row`",
            explain: "Нет, это строка с карточками, а не сам заголовок.",
          },
          {
            value: "areas-h1",
            label: "`.areas h1`",
            explain: "Верно: именно этот selector отвечает за крупный заголовок секции.",
          },
          {
            value: "caption",
            label: "`.caption`",
            explain: "Нет, это подписи внутри карточек.",
          },
        ],
        body:
          "<p>Сначала оформи заголовок через <code>.areas h1</code>, а уже потом переходи к строке карточек.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какое свойство ставит карточки в одну строку?",
        answer: "flex",
        options: [
          {
            value: "grid",
            label: "`display: grid`",
            explain: "Нет, в готовом варианте здесь используется flex, а не grid.",
          },
          {
            value: "flex",
            label: "`display: flex`",
            explain: "Верно: карточки секции стоят в один ряд через flex-раскладку.",
          },
          {
            value: "inline",
            label: "`display: inline`",
            explain: "Нет, этого недостаточно для такой строки карточек.",
          },
        ],
        body:
          "<p>У блока <code>.areas .row</code> должен быть <code>display: flex;</code>, а еще фон, отступы и расстояние между карточками.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что нужно поставить картинкам внутри карточек, чтобы они не вылезали за ширину блока?",
        answer: "100",
        options: [
          {
            value: "auto",
            label: "`width: auto`",
            explain: "Нет, так картинка не обязательно подстроится под ширину карточки.",
          },
          {
            value: "100",
            label: "`width: 100%`",
            explain: "Верно: картинка должна занимать всю ширину карточки.",
          },
          {
            value: "50",
            label: "`width: 50%`",
            explain: "Нет, так картинки станут слишком узкими.",
          },
        ],
        body:
          '<p>Добавь такой финальный блок:</p><pre><code>.areas h1 {\n  font-size: 3.6em;\n  font-weight: 400;\n  font-family: "PT Serif", serif;\n  padding: 0 64px;\n}\n\n.areas .row {\n  background: rgba(233, 173, 200, 0.62);\n  display: flex;\n  gap: 48px;\n  padding: 64px 64px;\n  box-sizing: border-box;\n}\n\n.areas .row .row-item img {\n  width: 100%;\n}</code></pre><p>После этого у тебя будет оформлена и нижняя часть страницы, а CSS станет полностью собранным.</p>',
      },
    ],
  },
];

const completedStorageKey = "better-books-guide-completed";
const solvedStorageKey = "better-books-guide-solved";
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
    /* ignore storage errors */
  }
}

function formatInlineCode(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function getStepId(index) {
  return `better-books-step-${index + 1}`;
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
  const done = [...completedSteps].filter((id) => id.startsWith("better-books-step-")).length;
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
