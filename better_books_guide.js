const steps = [
  {
    title: "Собери верхнее меню",
    goal:
      "Сначала приведи в порядок верхнее меню. HTML уже готов, тебе нужно только оформить контейнер с пунктами.",
    before:
      "Шапка уже есть, но `nav` пока не управляет пунктами меню как единым рядом.",
    change:
      "Добавь для `nav` высоту, flex-раскладку, расстояние между пунктами и выравнивание по центру.",
    why:
      "Так меню перестанет выглядеть как обычный набор ссылок и встанет в аккуратную строку рядом с логотипом.",
    task:
      "Правь только CSS. Сначала собери сам контейнер меню, а уже потом переходи к крупным секциям страницы.",
    recap:
      "Ты оформил контейнер меню: теперь его пункты стоят в одну линию, имеют ровный отступ и хорошо смотрятся в шапке.",
    result: {
      location: "Где править: в CSS проекта, сразу после блока `.logo img`.",
      before: `.logo img {
  height: 100%;
}

/* дальше стилей для меню еще нет */`,
      after: `nav {
  height: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
}`,
      note:
        "Сначала ты приводишь в порядок верхнюю навигацию, а уже потом переходишь к большому первому экрану.",
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
            explain:
              "Не совсем. `header` отвечает за всю шапку, а не только за контейнер ссылок.",
          },
          {
            value: "nav",
            label: "`nav`",
            explain:
              "Верно. Именно `nav` объединяет пункты меню в один контейнер.",
          },
          {
            value: "logo",
            label: "`.logo`",
            explain: "Нет. `.logo` относится к блоку логотипа, а не к ссылкам меню.",
          },
        ],
        body:
          "<p>Ищи в HTML тег <code>nav</code>. Именно ему сейчас не хватает отдельного CSS-блока, который соберет ссылки в одну систему.</p>",
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
            explain:
              "Верно. Flex-раскладка ставит элементы меню в один ряд и дает удобное управление отступами.",
          },
          {
            value: "padding",
            label: "`padding`",
            explain:
              "Нет. `padding` меняет внутренние отступы, но не собирает элементы в строку.",
          },
          {
            value: "font",
            label: "`font-family`",
            explain:
              "Нет. Шрифт влияет на внешний вид текста, а не на расположение пунктов.",
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
            explain:
              "Маловато: меню будет смотреться плотнее, чем нужно в этом макете.",
          },
          {
            value: "32",
            label: "`32px`",
            explain:
              "Верно. Именно такой gap нужен между пунктами меню.",
          },
          {
            value: "64",
            label: "`64px`",
            explain:
              "Слишком много: пункты разъедутся сильнее, чем нужно.",
          },
        ],
        body:
          '<p>Добавь такой блок:</p><pre><code>nav {\n  height: 100%;\n  display: flex;\n  gap: 32px;\n  align-items: center;\n}</code></pre><p>Теперь меню займет высоту шапки и выстроит ссылки в аккуратный горизонтальный ряд.</p>',
      },
    ],
  },
  {
    title: "Собери первый экран",
    goal:
      "Теперь оформи большой первый экран с текстом слева и картинкой справа.",
    before:
      "Секция первого экрана уже есть в HTML, но пока не разложена по ширине и высоте.",
    change:
      "Добавь стили для `.cover`, `.cover .right img` и `.cover .left`.",
    why:
      "Так первый экран станет похож на обложку: слева текст и кнопка, справа крупная картинка.",
    task:
      "На этом шаге работай только с раскладкой первого экрана: высота, отступы и деление на левую и правую части.",
    recap:
      "Ты задал размер и раскладку первого экрана. Теперь страница делится на две понятные части и начинает напоминать готовый макет.",
    result: {
      location: "Где править: в CSS проекта, после блока `nav`.",
      before: `/* у первого экрана пока нет своих стилей */`,
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
        "Сначала выставляется каркас секции, а уже потом внутри нее дооформляются текст, иконки и кнопка.",
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
            explain: "Это только левая колонка, а не весь первый экран целиком.",
          },
          {
            value: "cover",
            label: "`.cover`",
            explain:
              "Верно. Именно `.cover` является общей оболочкой первого экрана.",
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
            explain:
              "Верно. Первый экран должен занимать большую часть высоты окна.",
          },
          {
            value: "auto",
            label: "`auto`",
            explain:
              "Нет. Тогда высота будет зависеть только от содержимого, а экран не растянется как нужно.",
          },
        ],
        body:
          "<p>У <code>.cover</code> есть фиксированная высота <code>80vh</code>, поэтому секция сразу выглядит как большой первый экран.</p>",
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
            explain:
              "Нет. Так блоки соберутся в центре, а не разойдутся по краям.",
          },
          {
            value: "space-between",
            label: "`justify-content: space-between`",
            explain:
              "Верно. Это свойство разводит левую и правую части по краям первого экрана.",
          },
          {
            value: "column",
            label: "`flex-direction: column`",
            explain:
              "Нет. Это меняет направление, но не раздвигает блоки по горизонтали.",
          },
        ],
        body:
          '<p>Добавь такие стили:</p><pre><code>.cover {\n  width: 100%;\n  height: 80vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 64px;\n}\n\n.cover .right img {\n  height: 100%;\n}\n\n.cover .left {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}</code></pre><p>Теперь первый экран разбит на две части и держит нужную высоту.</p>',
      },
    ],
  },
  {
    title: "Оформи текст и соцсети",
    goal:
      "После каркаса доработай содержимое левой колонки: текст и иконки соцсетей.",
    before:
      "Заголовок, абзац и соцсети уже есть в HTML, но пока выглядят как обычные элементы без нужных размеров и шрифтов.",
    change:
      "Добавь стили для `.text-group`, заголовка `h1`, абзаца и блока `.social-icons`.",
    why:
      "Так текст станет главным акцентом первого экрана, а соцсети аккуратно встанут в ряд.",
    task:
      "Работай только с блоками внутри `.cover .left`. Здесь важны ширина текстовой группы, шрифты и иконки.",
    recap:
      "Ты оформил содержимое левой колонки: заголовок стал крупным, текст читабельным, а иконки соцсетей выровнялись в одну строку.",
    result: {
      location: "Где править: в CSS проекта, после стилей `.cover .left`.",
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
        "На этом шаге ты переводишь сырое содержимое в оформленный текстовый блок с понятной типографикой.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой блок ограничивает ширину текста в левой колонке?",
        answer: "text-group",
        options: [
          {
            value: "left",
            label: "`.left`",
            explain:
              "Нет. `.left` это вся колонка, а не отдельная группа с текстом.",
          },
          {
            value: "text-group",
            label: "`.text-group`",
            explain:
              "Верно. Именно `.text-group` задает ширину текстовой части.",
          },
          {
            value: "social-icons",
            label: "`.social-icons`",
            explain:
              "Нет. Это блок иконок, он отвечает за соцсети, а не за текст.",
          },
        ],
        body:
          "<p>Сначала оформи саму группу с текстом. Блок <code>.text-group</code> помогает держать заголовок и абзац в удобной ширине.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какой шрифт нужен для большого заголовка `h1`?",
        answer: "pt-serif",
        options: [
          {
            value: "arial",
            label: "`Arial`",
            explain:
              "Нет. Такой шрифт не даст нужного характера и крупного акцента.",
          },
          {
            value: "pt-serif",
            label: "`PT Serif`",
            explain:
              "Верно. Большой заголовок оформляется шрифтом `PT Serif`.",
          },
          {
            value: "pt-sans",
            label: "`PT Sans Caption`",
            explain:
              "Нет. Этот шрифт используется для абзаца и интерфейсных элементов, а не для главного заголовка.",
          },
        ],
        body:
          "<p>У заголовка <code>h1</code> должен быть отдельный шрифт <code>\"PT Serif\", serif</code>, чтобы он выглядел крупнее и выразительнее.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Какой промежуток нужен между иконками соцсетей?",
        answer: "16",
        options: [
          {
            value: "8",
            label: "`8px`",
            explain:
              "Маловато: иконки будут стоять слишком плотно друг к другу.",
          },
          {
            value: "16",
            label: "`16px`",
            explain:
              "Верно. Именно такой gap нужен между иконками соцсетей.",
          },
          {
            value: "32",
            label: "`32px`",
            explain:
              "Слишком много: иконки разойдутся сильнее, чем нужно.",
          },
        ],
        body:
          '<p>Добавь такие стили:</p><pre><code>.cover .left .text-group {\n  width: 80%;\n}\n\n.cover .left .text-group h1 {\n  font-family: "PT Serif", serif;\n  font-size: 6em;\n  font-weight: 400;\n  margin: 0;\n  line-height: 1em;\n}\n\n.cover .left p {\n  font-family: "PT Sans Caption", sans-serif;\n  font-weight: 400;\n  font-size: 1.5em;\n}\n\n.left .social-icons {\n  display: flex;\n  gap: 16px;\n  height: 40px;\n}\n\n.left .social-icons .social-icon img {\n  height: 100%;\n}</code></pre><p>Теперь текст и иконки выглядят как часть готового первого экрана, а не как сырые HTML-элементы.</p>',
      },
    ],
  },
  {
    title: "Сделай кнопку живой",
    goal:
      "Теперь оформи главную кнопку и добавь ей реакцию на наведение и нажатие.",
    before:
      "Кнопка уже есть на странице, но пока не выглядит как отдельный акцентный элемент и не дает понятной обратной связи.",
    change:
      "Добавь обычное состояние для `.left .btn-main`, а потом стили для `:hover` и `:active`.",
    why:
      "Так кнопка станет заметной, понятной и будет ощущаться живой при наведении и нажатии.",
    task:
      "На этом шаге работай только с кнопкой. Не смешивай ее стили со стилями текста или секции ниже.",
    recap:
      "Ты оформил кнопку и добавил ей состояния. Теперь она не просто стоит на странице, а ясно реагирует на действия пользователя.",
    result: {
      location: "Где править: в CSS проекта, после блока с соцсетями.",
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
        question: "Какой selector отвечает за главную кнопку в левой колонке?",
        answer: "btn-main",
        options: [
          {
            value: "button",
            label: "`button`",
            explain:
              "Слишком широко. Так правило затронет вообще все кнопки на странице.",
          },
          {
            value: "btn-main",
            label: "`.left .btn-main`",
            explain:
              "Верно. Это точный selector для главной кнопки в левой колонке.",
          },
          {
            value: "social",
            label: "`.social-icons`",
            explain:
              "Нет. Это блок иконок соцсетей, а не кнопка.",
          },
        ],
        body:
          "<p>Начни с обычного состояния кнопки. У <code>.left .btn-main</code> должен быть свой фон, рамка, текст и внутренние отступы.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какой pseudo-class нужен для состояния при наведении?",
        answer: "hover",
        options: [
          {
            value: "active",
            label: "`:active`",
            explain:
              "Нет. `:active` отвечает за нажатие, а не за наведение.",
          },
          {
            value: "hover",
            label: "`:hover`",
            explain:
              "Верно. Именно `:hover` срабатывает, когда курсор находится над кнопкой.",
          },
          {
            value: "focus",
            label: "`:focus`",
            explain:
              "Не в этом шаге. `:focus` полезен, но здесь речь идет именно о наведении.",
          },
        ],
        body:
          "<p>В блоке <code>.btn-main:hover</code> кнопка меняет фон на белый, а текст на черный. Так пользователь сразу видит, что элемент интерактивный.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question: "Что происходит с кнопкой при нажатии в готовом варианте?",
        answer: "scale",
        options: [
          {
            value: "rotate",
            label: "Она поворачивается",
            explain:
              "Нет. Здесь нужна спокойная и аккуратная реакция, без лишней анимации.",
          },
          {
            value: "scale",
            label: "Она слегка уменьшается через `scale(.97)`",
            explain:
              "Верно. Это дает понятное ощущение нажатия.",
          },
          {
            value: "disappear",
            label: "Она исчезает",
            explain:
              "Нет. Кнопка должна оставаться на месте и просто реагировать на клик.",
          },
        ],
        body:
          '<p>Добавь такие стили:</p><pre><code>.left .btn-main {\n  background: black;\n  border: 3px solid black;\n  color: white;\n  width: fit-content;\n  padding: 16px 32px;\n  box-sizing: border-box;\n  font-family: "PT Sans Caption", sans-serif;\n  cursor: pointer;\n  transition-property: background, color, transform;\n  transition-duration: .3s;\n  transition-timing-function: ease-out;\n  user-select: none;\n}\n\n.btn-main:hover {\n  background: white;\n  color: black;\n  transition-property: background, color, transform;\n  transition-duration: .15s;\n  transition-timing-function: ease-in;\n}\n\n.btn-main:active {\n  transform: scale(.97);\n  transition: transform .15s ease-in;\n}</code></pre><p>Теперь кнопка заметно реагирует и на наведение, и на нажатие.</p>',
      },
    ],
  },
  {
    title: "Доделай секцию направлений",
    goal:
      "Последним шагом собери нижнюю секцию с заголовком и карточками.",
    before:
      "Секция `.areas` уже есть в HTML, но пока не выглядит как собранный блок с карточками.",
    change:
      "Добавь стили для заголовка секции, строки `.areas .row` и картинок внутри `.row-item`.",
    why:
      "Так нижняя часть страницы станет цельной: появятся крупный заголовок, фон у строки и ровные карточки.",
    task:
      "Этим шагом закончи CSS страницы. После него у тебя должен получиться собранный внешний вид всего макета.",
    recap:
      "Ты закрыл последние отличия: после этого шага нижняя секция выглядит как цельный блок с карточками, а весь CSS становится собранным.",
    result: {
      location: "Где править: в CSS проекта, после стилей кнопки.",
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
        "Этим шагом ты собираешь нижнюю часть страницы и доводишь CSS до готового состояния.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой selector отвечает за крупный заголовок секции?",
        answer: "areas-h1",
        options: [
          {
            value: "areas-row",
            label: "`.areas .row`",
            explain: "Нет. Это строка с карточками, а не сам заголовок.",
          },
          {
            value: "areas-h1",
            label: "`.areas h1`",
            explain:
              "Верно. Именно этот selector отвечает за крупный заголовок секции.",
          },
          {
            value: "caption",
            label: "`.caption`",
            explain:
              "Нет. Такой selector не связан с заголовком этой секции.",
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
            explain:
              "Не здесь. В этом макете строка карточек собирается через flex.",
          },
          {
            value: "flex",
            label: "`display: flex`",
            explain:
              "Верно. Карточки секции стоят в один ряд через flex-раскладку.",
          },
          {
            value: "inline",
            label: "`display: inline`",
            explain:
              "Нет. Этого недостаточно для такой строки карточек.",
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
            explain:
              "Нет. Так картинка не обязана подстроиться под ширину карточки.",
          },
          {
            value: "100",
            label: "`width: 100%`",
            explain:
              "Верно. Картинка должна занимать всю ширину карточки.",
          },
          {
            value: "50",
            label: "`width: 50%`",
            explain:
              "Нет. Так картинка станет слишком узкой внутри карточки.",
          },
        ],
        body:
          '<p>Добавь такой финальный блок:</p><pre><code>.areas h1 {\n  font-size: 3.6em;\n  font-weight: 400;\n  font-family: "PT Serif", serif;\n  padding: 0 64px;\n}\n\n.areas .row {\n  background: rgba(233, 173, 200, 0.62);\n  display: flex;\n  gap: 48px;\n  padding: 64px 64px;\n  box-sizing: border-box;\n}\n\n.areas .row .row-item img {\n  width: 100%;\n}</code></pre><p>После этого у тебя будет оформлена и нижняя часть страницы, а CSS станет полностью собранным.</p>',
      },
    ],
  },
];

const penaltyQuestionBank = [
  {
    question: "Какой тег в HTML создает кнопку?",
    answer: "button",
    options: [
      { value: "button", label: "`<button>`", explain: "Верно. Именно тег `<button>` создает кнопку в HTML." },
      { value: "div", label: "`<div>`", explain: "Нет. `<div>` это обычный контейнер, а не кнопка." },
      { value: "span", label: "`<span>`", explain: "Нет. `<span>` это строчный контейнер, он не создает кнопку сам по себе." },
      { value: "section", label: "`<section>`", explain: "Нет. `<section>` нужен для смыслового блока страницы." },
      { value: "img", label: "`<img>`", explain: "Нет. `<img>` вставляет изображение, а не кнопку." },
    ],
    body: "<p>Базовая вещь: интерактивные кнопки в HTML обычно создают через <code>&lt;button&gt;</code>. Это удобно и для стилизации, и для обработки событий.</p>",
  },
  {
    question: "Как в CSS обратиться к элементу по классу `card`?",
    answer: "class",
    options: [
      { value: "class", label: "`.card`", explain: "Верно. Точка в CSS означает селектор по классу." },
      { value: "id", label: "`#card`", explain: "Нет. Решетка используется для `id`, а не для класса." },
      { value: "tag", label: "`card`", explain: "Нет. Так CSS искал бы тег `<card>`, а не класс." },
      { value: "attr", label: "`[card]`", explain: "Нет. Это селектор по атрибуту." },
      { value: "child", label: "`> card`", explain: "Нет. Такой селектор здесь не нужен." },
    ],
    body: "<p>Если в HTML у элемента есть <code>class=\"card\"</code>, то в CSS к нему обращаются через <code>.card</code>.</p>",
  },
  {
    question: "Как в JS получить первый элемент по селектору `.box`?",
    answer: "query",
    options: [
      { value: "query", label: "`document.querySelector('.box')`", explain: "Верно. Этот метод возвращает первый подходящий элемент." },
      { value: "all", label: "`document.querySelectorAll('.box')`", explain: "Почти, но это вернет список элементов, а не один элемент." },
      { value: "id", label: "`document.getElementById('.box')`", explain: "Нет. `getElementById` работает только с `id` и без точки." },
      { value: "style", label: "`document.style('.box')`", explain: "Нет. Такого метода для поиска элемента нет." },
      { value: "inner", label: "`document.innerHTML('.box')`", explain: "Нет. `innerHTML` не ищет элементы." },
    ],
    body: "<p><code>document.querySelector(...)</code> удобен, когда нужен один конкретный элемент по классу, тегу или сложному селектору.</p>",
  },
  {
    question: "Какой тег подключает JavaScript-файл в HTML?",
    answer: "script",
    options: [
      { value: "script", label: "`<script>`", explain: "Верно. JavaScript-файлы подключают тегом `<script>`." },
      { value: "link", label: "`<link>`", explain: "Нет. `<link>` обычно используют для CSS и других внешних ресурсов." },
      { value: "style", label: "`<style>`", explain: "Нет. `<style>` нужен для CSS прямо в HTML." },
      { value: "meta", label: "`<meta>`", explain: "Нет. `<meta>` хранит служебные данные о странице." },
      { value: "code", label: "`<code>`", explain: "Нет. `<code>` нужен только для отображения кода как текста." },
    ],
    body: "<p>Если нужно подключить внешний JS, в HTML используют тег <code>&lt;script src=\"...\"&gt;&lt;/script&gt;</code>.</p>",
  },
  {
    question: "Какое CSS-свойство меняет цвет обычного текста?",
    answer: "color",
    options: [
      { value: "color", label: "`color`", explain: "Верно. Именно `color` меняет цвет текста." },
      { value: "background", label: "`background-color`", explain: "Нет. Это свойство меняет фон, а не цвет текста." },
      { value: "border", label: "`border-color`", explain: "Нет. Это цвет рамки элемента." },
      { value: "font", label: "`font-size`", explain: "Нет. Это размер шрифта." },
      { value: "display", label: "`display`", explain: "Нет. `display` отвечает за способ отображения элемента." },
    ],
    body: "<p>Свойство <code>color</code> отвечает именно за цвет текста. Это одна из базовых вещей в CSS.</p>",
  },
  {
    question: "Какое событие обычно используют для нажатия на кнопку?",
    answer: "click",
    options: [
      { value: "click", label: "`click`", explain: "Верно. Для обычного нажатия по кнопке чаще всего используют `click`." },
      { value: "scroll", label: "`scroll`", explain: "Нет. Это событие связано с прокруткой страницы." },
      { value: "resize", label: "`resize`", explain: "Нет. Оно относится к изменению размера окна." },
      { value: "load", label: "`load`", explain: "Нет. Это событие загрузки страницы или ресурса." },
      { value: "input", label: "`input`", explain: "Нет. Его чаще используют у полей ввода." },
    ],
    body: "<p>Если пользователь нажимает кнопку, самый прямой и понятный вариант в JS — слушать событие <code>click</code>.</p>",
  },
  {
    question: "Какое свойство CSS задает внутренние отступы элемента?",
    answer: "padding",
    options: [
      { value: "padding", label: "`padding`", explain: "Верно. `padding` задает внутренние отступы." },
      { value: "margin", label: "`margin`", explain: "Нет. `margin` это внешние отступы." },
      { value: "gap", label: "`gap`", explain: "Нет. `gap` отвечает за расстояния между элементами в flex и grid." },
      { value: "border", label: "`border`", explain: "Нет. Это рамка, а не отступ." },
      { value: "width", label: "`width`", explain: "Нет. Это ширина элемента." },
    ],
    body: "<p><code>padding</code> добавляет пространство внутри элемента, между его содержимым и границей.</p>",
  },
  {
    question: "Как в JS вывести значение в консоль браузера?",
    answer: "log",
    options: [
      { value: "log", label: "`console.log(...)`", explain: "Верно. Это базовый способ быстро проверить значение в консоли." },
      { value: "write", label: "`console.write(...)`", explain: "Нет. Обычно используют именно `console.log(...)`." },
      { value: "print", label: "`print(...)`", explain: "Нет. Для консоли браузера такой способ не основной." },
      { value: "show", label: "`console.show(...)`", explain: "Нет. Такого стандартного метода нет." },
      { value: "echo", label: "`echo(...)`", explain: "Нет. В браузерном JS это не тот инструмент." },
    ],
    body: "<p>Когда нужно быстро посмотреть значение переменной или проверить, сработала ли функция, удобно использовать <code>console.log(...)</code>.</p>",
  },
  {
    question: "Какой тег подключает CSS-файл в HTML?",
    answer: "link",
    options: [
      { value: "link", label: "`<link rel=\"stylesheet\" href=\"...\">`", explain: "Верно. Так обычно подключают внешний CSS-файл." },
      { value: "script", label: "`<script>`", explain: "Нет. `<script>` подключает JavaScript, а не CSS." },
      { value: "style", label: "`<style src=\"...\">`", explain: "Нет. Внешние CSS-файлы так не подключают." },
      { value: "meta", label: "`<meta>`", explain: "Нет. Этот тег не подключает стили." },
      { value: "css", label: "`<css>`", explain: "Нет. Такого HTML-тега не существует." },
    ],
    body: "<p>Внешний CSS обычно подключают через <code>&lt;link rel=\"stylesheet\" href=\"...\"&gt;</code>.</p>",
  },
  {
    question: "Какой атрибут у `<img>` задает текст, если картинка не загрузилась?",
    answer: "alt",
    options: [
      { value: "alt", label: "`alt`", explain: "Верно. Атрибут `alt` задает альтернативный текст для изображения." },
      { value: "href", label: "`href`", explain: "Нет. `href` используют у ссылок." },
      { value: "title", label: "`title`", explain: "Нет. `title` может показать подсказку, но не заменяет `alt`." },
      { value: "name", label: "`name`", explain: "Нет. Для изображений это не тот атрибут." },
      { value: "target", label: "`target`", explain: "Нет. Этот атрибут связан со ссылками." },
    ],
    body: "<p>Атрибут <code>alt</code> полезен и для доступности, и как запасной текст, если изображение не показалось.</p>",
  },
];

const stepDistractorPools = [
  [
    {
      value: "logo-only",
      label: "Оформить только логотип и больше ничего не менять",
      explain: "Нет. На этом шаге нужно собрать именно контейнер меню, а не только логотип.",
    },
    {
      value: "column-nav",
      label: "Поставить пункты меню в колонку",
      explain: "Нет. Здесь меню должно стоять в одну горизонтальную строку.",
    },
    {
      value: "big-margin",
      label: "Раздвинуть пункты только через огромные `margin`",
      explain: "Нет. Здесь логичнее собрать сам контейнер через flex и gap.",
    },
  ],
  [
    {
      value: "small-cover",
      label: "Сделать первый экран низким и оставить содержимое сбитым",
      explain: "Нет. Секция должна быть большой и собранной, как первый экран.",
    },
    {
      value: "right-first",
      label: "Сначала оформить только картинку, а контейнер не трогать",
      explain: "Нет. Сначала нужно собрать общий каркас секции.",
    },
    {
      value: "column-cover",
      label: "Сложить левую и правую части друг под друга",
      explain: "Нет. На этом шаге экран должен делиться именно на две колонки.",
    },
  ],
  [
    {
      value: "same-font",
      label: "Оставить весь текст в одном и том же шрифте без акцента",
      explain: "Нет. Заголовок должен выделяться, а не сливаться с обычным текстом.",
    },
    {
      value: "full-width-text",
      label: "Растянуть текст на всю ширину колонки",
      explain: "Нет. Текстовая группа должна быть уже, чтобы текст читался легче.",
    },
    {
      value: "icons-stack",
      label: "Поставить иконки соцсетей столбиком",
      explain: "Нет. Здесь иконки должны стоять в один ряд.",
    },
  ],
  [
    {
      value: "no-hover",
      label: "Сделать кнопку без состояний наведения и нажатия",
      explain: "Нет. Тогда кнопка будет выглядеть незаконченной и слишком статичной.",
    },
    {
      value: "rounded-big",
      label: "Сильно усложнить кнопку декоративными эффектами",
      explain: "Нет. Здесь нужна аккуратная живая кнопка, а не новая визуальная концепция.",
    },
    {
      value: "instant-click",
      label: "Оставить кнопку без плавных переходов",
      explain: "Нет. Переходы помогают сделать реакцию кнопки более аккуратной.",
    },
  ],
  [
    {
      value: "no-row-bg",
      label: "Оставить строку карточек без фона и отступов",
      explain: "Нет. Секция должна читаться как единый оформленный блок.",
    },
    {
      value: "stack-cards",
      label: "Поставить карточки под друг другом без общей строки",
      explain: "Нет. В этом макете карточки идут в один ряд.",
    },
    {
      value: "raw-images",
      label: "Не трогать картинки внутри карточек",
      explain: "Нет. Им тоже нужно ограничение по ширине, чтобы они не ломали блок.",
    },
  ],
];

const completedStorageKey = "better-books-guide-completed";
const solvedStorageKey = "better-books-guide-solved";
const penaltySolvedStorageKey = "better-books-guide-penalty-solved";
const wrongCountsStorageKey = "better-books-guide-wrong-counts";
const stepWrongCountsStorageKey = "better-books-guide-step-wrong-counts";
const lockUntilStorageKey = "better-books-guide-lock-until";

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

ensureOptionDepth();

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

function loadStoredObject(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveStoredSet(key, valueSet) {
  try {
    localStorage.setItem(key, JSON.stringify([...valueSet]));
  } catch {
    /* State still works until reload. */
  }
}

function saveStoredObject(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* State still works until reload. */
  }
}

function formatInlineCode(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function pluralizeQuestions(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "вопрос";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "вопроса";
  return "вопросов";
}

function pluralizeSeconds(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "секунда";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "секунды";
  return "секунд";
}

function pluralizePenaltyQuestions(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "штрафной вопрос";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "штрафных вопроса";
  return "штрафных вопросов";
}

function getStepId(index) {
  return `better-books-step-${index + 1}`;
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
      return "Шаг отмечен. Сначала ответь на основные вопросы и дополнительные штрафные вопросы, чтобы открыть итоговый код.";
    }

    return "Шаг отмечен. Теперь ответь на все вопросы этого шага, чтобы проверить себя и открыть итоговый код.";
  }

  if (isDone && allSolved) {
    return "Шаг выполнен и проверен. Итоговый код уже открыт ниже.";
  }

  if (!isDone && allSolved) {
    return "Все вопросы уже пройдены. Теперь можешь смело отмечать шаг выполненным.";
  }

  return "Сначала попробуй сделать правку сам, а если застрянешь, открывай подсказки через вопросы.";
}

function ensureOptionDepth() {
  steps.forEach((step, stepIndex) => {
    const distractors = stepDistractorPools[stepIndex] || [];

    step.hints.forEach((hint, hintIndex) => {
      const enrichedOptions = [...hint.options];

      for (
        let extraIndex = 0;
        enrichedOptions.length < 5 && extraIndex < distractors.length;
        extraIndex++
      ) {
        const distractor = distractors[extraIndex];
        const nextValue = `${distractor.value}-${stepIndex}-${hintIndex}-${extraIndex}`;

        enrichedOptions.push({
          value: nextValue,
          label: distractor.label,
          explain: distractor.explain,
        });
      }

      hint.options = enrichedOptions;
    });
  });
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
        <h3>Штрафной вопрос ${penaltyIndex + 1}</h3>
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
  const done = [...completedSteps].filter((id) => id.startsWith("better-books-step-")).length;
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
    "Сбросить все ответы, отметки шагов, штрафные вопросы и открытые подсказки?",
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
