const steps = [
  {
    title: "Подключи библиотеку в HTML",
    goal:
      "Сначала дай странице инструмент, который умеет превращать блок сайта в PNG.",
    before:
      "Сейчас на странице может уже быть кнопка сохранения, но браузер сам по себе не умеет превращать HTML-блок в картинку.",
    change:
      "Внизу HTML, перед подключением твоего основного JS, добавь отдельный `script` с библиотекой `dom-to-image`.",
    why:
      "После этого в JavaScript появится объект `domtoimage`, и ты сможешь вызвать `domtoimage.toPng(...)`.",
    task:
      "Правь только самый низ HTML. Ничего перестраивать в дизайне и разметке не нужно.",
    recap:
      "На этом шаге ты подключил библиотеку, без которой сохранение картинки не заработает. Сначала инструмент, потом логика.",
    result: {
      location:
        "Где править: внизу HTML, сразу перед подключением твоего основного JS.",
      before: `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="...твой основной JS..."></script>`,
      after: `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
<script src="...твой основной JS..."></script>`,
      note:
        "Порядок важен: сначала внешняя библиотека, потом твой код. Иначе JS запустится раньше и не найдет `domtoimage`.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question:
          "Что нужно странице, чтобы в JS можно было вызвать `domtoimage.toPng(...)`?",
        answer: "library",
        options: [
          {
            value: "button",
            label: "Только кнопка на странице",
            explain:
              "Нет. Кнопка запускает действие, но сама не умеет сохранять блок как картинку.",
          },
          {
            value: "library",
            label: "Подключенная библиотека",
            explain:
              "Верно. Сначала нужно подключить библиотеку, и только потом можно вызывать ее методы из JS.",
          },
          {
            value: "footer",
            label: "Отдельный footer",
            explain:
              "Нет. Подвал вообще не влияет на сохранение изображения.",
          },
        ],
        body:
          "<p>Кнопка только запускает код. Само превращение блока в PNG делает библиотека <code>dom-to-image</code>, поэтому ее нужно подключить в HTML отдельным <code>script</code>.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question:
          "Где должен стоять `script` с библиотекой относительно твоего основного JS?",
        answer: "before",
        options: [
          {
            value: "before",
            label: "Перед твоим JS",
            explain:
              "Верно. Тогда к моменту запуска твоего кода объект `domtoimage` уже существует.",
          },
          {
            value: "after",
            label: "После твоего JS",
            explain:
              "Нет. Если библиотека подключится позже, твой код попытается обратиться к ней слишком рано.",
          },
          {
            value: "head-only",
            label: "Только в `head`",
            explain:
              "Не обязательно. Здесь важнее не место само по себе, а правильный порядок подключения.",
          },
        ],
        body:
          "<p>Скрипты читаются сверху вниз. Поэтому библиотека должна подключиться раньше твоего основного JS, чтобы объект <code>domtoimage</code> уже был готов к работе.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question:
          "Какую строку нужно добавить в HTML, чтобы подключить нужную библиотеку?",
        answer: "dom-script",
        options: [
          {
            value: "anime-script",
            label: "Еще раз подключить `anime.js`",
            explain:
              "Нет. `anime.js` отвечает за анимации и не умеет сохранять блок в PNG.",
          },
          {
            value: "dom-script",
            label: "Подключить `dom-to-image` через CDN",
            explain:
              "Верно. Нужен отдельный `script` с библиотекой `dom-to-image`.",
          },
          {
            value: "style-link",
            label: "Добавить `link` на CSS",
            explain:
              "Нет. Для этой задачи нужен именно JavaScript-файл библиотеки.",
          },
        ],
        body:
          '<p>Добавь внизу HTML такую строку:</p><pre><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"&gt;&lt;/script&gt;</code></pre><p>Поставь ее сразу перед подключением своего основного JS. Тогда библиотека загрузится вовремя, и ты сможешь вызвать <code>domtoimage.toPng(...)</code>.</p>',
      },
    ],
  },
  {
    title: "Подготовь в JS кнопку и поле",
    goal:
      "Теперь нужно точно указать, какая кнопка запускает сохранение и какой блок мы сохраняем.",
    before:
      "Браузер не угадывает сам, что именно нужно скачать. Ему надо явно передать и кнопку, и область рисования.",
    change:
      "В верхней части JS сохрани в переменные кнопку `.save-image` и блок `.field`.",
    why:
      "Кнопка будет запускать сохранение, а `.field` станет источником будущей картинки.",
    task:
      "Проверь начало своего JS. Эти переменные должны быть рядом с остальными `querySelector`.",
    recap:
      "Ты связал интерфейс и код: теперь JS знает, какую кнопку слушать и какой блок превращать в PNG.",
    result: {
      location:
        "Где править: вверху JS, рядом с остальными переменными, которые ты получаешь через `querySelector`.",
      before: `let paintAll = document.querySelector(".paint-all");
let clear = document.querySelector(".clear");`,
      after: `let paintAll = document.querySelector(".paint-all");
let clear = document.querySelector(".clear");
let saveImageButton = document.querySelector(".save-image");
let field = document.querySelector(".field");`,
      note:
        "Здесь важно не просто найти кнопку, а сохранить именно `.field`. Мы скачиваем рисунок, а не всю страницу.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question: "Какой блок является областью рисования?",
        answer: "field",
        options: [
          {
            value: "colors",
            label: "`.colors`",
            explain:
              "Нет. Это блок с выбором цветов, а не само поле для рисунка.",
          },
          {
            value: "field",
            label: "`.field`",
            explain:
              "Верно. Именно внутри `.field` находятся клетки, которые образуют рисунок.",
          },
          {
            value: "footer",
            label: "`.footer`",
            explain:
              "Нет. Подвал не имеет отношения к рисунку.",
          },
        ],
        body:
          "<p>Сохранять нужно блок <code>.field</code>, потому что именно в нем находится сетка с клетками. Если выбрать другой блок, ты получишь не то изображение.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question: "Какой селектор нужен, чтобы взять кнопку сохранения?",
        answer: "save-image",
        options: [
          {
            value: "clear",
            label: "`.clear`",
            explain:
              "Нет. Это кнопка очистки, она отвечает за другую функцию.",
          },
          {
            value: "save-image",
            label: "`.save-image`",
            explain:
              "Верно. Именно этот класс нужен для кнопки сохранения.",
          },
          {
            value: "cell",
            label: "`.cell`",
            explain:
              "Нет. `.cell` это клетки сетки, а не кнопка.",
          },
        ],
        body:
          "<p>Селектор должен совпасть с классом кнопки. Если кнопка в HTML имеет класс <code>save-image</code>, то в JS логично взять ее через <code>document.querySelector('.save-image')</code>.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question:
          "Какие две переменные должны появиться рядом с остальными DOM-элементами?",
        answer: "two-vars",
        options: [
          {
            value: "one-var",
            label: "Только `field`",
            explain:
              "Этого мало. Нужно знать и что сохранять, и чем запускать сохранение.",
          },
          {
            value: "two-vars",
            label: "`saveImageButton` и `field`",
            explain:
              "Верно. Одна переменная для кнопки, вторая для области рисования.",
          },
          {
            value: "body-var",
            label: "`saveImageButton` и `body`",
            explain:
              "Нет. Если взять `body`, сохранится почти вся страница, а не только рисунок.",
          },
        ],
        body:
          '<p>В начале JS добавь такие строки:</p><pre><code>let saveImageButton = document.querySelector(".save-image");\nlet field = document.querySelector(".field");</code></pre><p>Первая строка дает доступ к кнопке, вторая указывает библиотеке, какой блок нужно превратить в картинку.</p>',
      },
    ],
  },
  {
    title: "Собери отдельную функцию сохранения",
    goal:
      "Сделай одно аккуратное место, в котором будет жить вся логика экспорта картинки.",
    before:
      "Если писать сохранение сразу внутри обработчика кнопки, код становится труднее читать и проверять.",
    change:
      "Создай функцию `saveFieldAsImage()`. Сначала проверь, найдено ли поле, потом проверь, подключена ли библиотека.",
    why:
      "Так код становится понятнее: одна функция отвечает за одну задачу, и ее легче подключить к кнопке.",
    task:
      "На этом шаге сделай каркас функции с двумя проверками и `return`, если что-то не найдено.",
    recap:
      "Теперь логика сохранения живет в отдельной функции. Это упрощает подключение кнопки и дальнейшую отладку.",
    result: {
      location:
        "Где править: в JS, до подключения обработчика клика по кнопке.",
      before: `saveImageButton.addEventListener("click", function () {
  // здесь сразу начинается логика сохранения
});`,
      after: `function saveFieldAsImage() {
  if (!field) {
    console.error("Поле для рисования не найдено.");
    return;
  }

  if (typeof domtoimage === "undefined") {
    console.error("Библиотека dom-to-image не подключена.");
    return;
  }
}`,
      note:
        "Эти две проверки экономят время. Если проблема в HTML или в порядке скриптов, ты сразу увидишь понятное сообщение в консоли.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question:
          "Что должна сделать функция, если блок для рисования не найден?",
        answer: "return",
        options: [
          {
            value: "continue",
            label: "Продолжать работу",
            explain:
              "Нет. Без блока для рисования сохранять нечего, значит нужно остановиться.",
          },
          {
            value: "return",
            label: "Остановиться через `return`",
            explain:
              "Верно. Так функция не пойдет дальше в ошибочное состояние.",
          },
          {
            value: "reload",
            label: "Перезагрузить страницу",
            explain:
              "Нет. Для такой проверки достаточно просто остановить функцию.",
          },
        ],
        body:
          "<p>Если переменная <code>field</code> пустая, сохранять нечего. Поэтому функция должна вывести понятное сообщение в консоль и сразу закончиться через <code>return</code>.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question:
          "Как безопасно проверить, подключена ли библиотека?",
        answer: "typeof",
        options: [
          {
            value: "if-dom",
            label: "`if (!document)`",
            explain:
              "Нет. Документ у страницы и так есть. Проверять нужно именно библиотеку.",
          },
          {
            value: "typeof",
            label: "`typeof domtoimage === \"undefined\"`",
            explain:
              "Верно. Такая проверка не ломается даже тогда, когда библиотека вообще не подключена.",
          },
          {
            value: "innerhtml",
            label: "Проверить `innerHTML`",
            explain:
              "Нет. Содержимое страницы не покажет, загрузилась ли библиотека в JS.",
          },
        ],
        body:
          "<p>Проверка через <code>typeof domtoimage === \"undefined\"</code> хороша тем, что она работает безопасно. Если библиотеки нет, ты просто увидишь понятную ошибку в консоли.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question:
          "Какой каркас функции нужно собрать перед самой логикой скачивания?",
        answer: "function-shell",
        options: [
          {
            value: "empty",
            label: "Пустую функцию без проверок",
            explain:
              "Нет. Тогда при ошибке ты не поймешь, где именно проблема.",
          },
          {
            value: "function-shell",
            label: "Функцию с проверкой `field` и `domtoimage`",
            explain:
              "Верно. Это хороший и понятный каркас для следующего шага.",
          },
          {
            value: "listener-only",
            label: "Сразу один `addEventListener`",
            explain:
              "Пока рано. Сначала удобнее собрать саму функцию, а уже потом подключить кнопку.",
          },
        ],
        body:
          '<p>Собери такой каркас:</p><pre><code>function saveFieldAsImage() {\n  if (!field) {\n    console.error("Поле для рисования не найдено.");\n    return;\n  }\n\n  if (typeof domtoimage === "undefined") {\n    console.error("Библиотека dom-to-image не подключена.");\n    return;\n  }\n}</code></pre><p>Теперь у тебя есть понятная основа. На следующем шаге внутрь этой функции ты добавишь само сохранение PNG.</p>',
      },
    ],
  },
  {
    title: "Преврати поле в PNG и скачай его",
    goal:
      "Теперь внутри функции нужно получить картинку и отдать ее браузеру на скачивание.",
    before:
      "Функция уже существует, но пока ничего не сохраняет. В ней еще нет главного действия.",
    change:
      "Внутри `saveFieldAsImage()` вызови `domtoimage.toPng(field)`. В `then` создай временную ссылку, запиши в нее `dataUrl`, добавь `download` и программно кликни по ней.",
    why:
      "Библиотека отдает строку с картинкой, а временная ссылка превращает эту строку в обычное скачивание файла.",
    task:
      "Добавь блок `then(...)`, создай ссылку, кликни по ней и потом удали ее из документа.",
    recap:
      "На этом шаге ты сделал главное: превратил область рисования в PNG и связал результат с обычным скачиванием файла.",
    result: {
      location:
        "Где править: внутри функции `saveFieldAsImage()`, после двух защитных проверок.",
      before: `function saveFieldAsImage() {
  if (!field) {
    console.error("Поле для рисования не найдено.");
    return;
  }

  if (typeof domtoimage === "undefined") {
    console.error("Библиотека dom-to-image не подключена.");
    return;
  }
}`,
      after: `function saveFieldAsImage() {
  if (!field) {
    console.error("Поле для рисования не найдено.");
    return;
  }

  if (typeof domtoimage === "undefined") {
    console.error("Библиотека dom-to-image не подключена.");
    return;
  }

  domtoimage
    .toPng(field)
    .then(function (dataUrl) {
      const link = document.createElement("a");
      link.download = "pixel-draw.png";
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch(function (error) {
      console.error("Не удалось сохранить изображение:", error);
    });
}`,
      note:
        "Мы сохраняем именно `field`, поэтому на картинке окажется только рисунок. Временная ссылка нужна, чтобы браузер реально начал скачивание.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question:
          "Какой метод библиотеки превращает блок в PNG?",
        answer: "topng",
        options: [
          {
            value: "tojpg",
            label: "`toJpg(field)`",
            explain:
              "Не в этой задаче. Нам нужен именно PNG, поэтому ищем метод для PNG.",
          },
          {
            value: "topng",
            label: "`toPng(field)`",
            explain:
              "Верно. Этот метод создает PNG из указанного DOM-элемента.",
          },
          {
            value: "tocookie",
            label: "`toCookie(field)`",
            explain:
              "Нет. Такого метода для экспорта картинки здесь нет.",
          },
        ],
        body:
          "<p>Библиотека берет DOM-элемент и по вызову <code>domtoimage.toPng(field)</code> возвращает готовую PNG-картинку в виде строки <code>dataUrl</code>.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question:
          "Что нужно создать в `then`, чтобы браузер скачал готовую картинку?",
        answer: "link",
        options: [
          {
            value: "div",
            label: "Обычный `div`",
            explain:
              "Нет. `div` не запускает скачивание файла.",
          },
          {
            value: "link",
            label: "Временную ссылку `a`",
            explain:
              "Верно. Ссылка с `href` и `download` запускает скачивание через JS.",
          },
          {
            value: "canvas",
            label: "Новый `canvas`",
            explain:
              "Нет. В этой задаче библиотека уже возвращает готовую картинку, новый canvas не нужен.",
          },
        ],
        body:
          "<p>Внутри <code>then</code> удобно создать временный элемент <code>a</code>, записать туда картинку, дать имя файлу через <code>download</code> и затем программно нажать на эту ссылку.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question:
          "Что нужно сделать после создания ссылки, чтобы скачивание точно запустилось и не осталось лишнего элемента?",
        answer: "click-remove",
        options: [
          {
            value: "only-href",
            label: "Только задать `href`",
            explain:
              "Этого мало. Браузеру еще нужен сам запуск скачивания.",
          },
          {
            value: "click-remove",
            label: "Добавить, кликнуть и удалить ссылку",
            explain:
              "Верно. Так скачивание запускается, и после него в документе не остается лишний элемент.",
          },
          {
            value: "console",
            label: "Только вывести `dataUrl` в консоль",
            explain:
              "Нет. Тогда картинка не скачается, ты просто увидишь длинную строку.",
          },
        ],
        body:
          '<p>Внутри функции добавь такой блок:</p><pre><code>domtoimage\n  .toPng(field)\n  .then(function (dataUrl) {\n    const link = document.createElement("a");\n    link.download = "pixel-draw.png";\n    link.href = dataUrl;\n    document.body.appendChild(link);\n    link.click();\n    link.remove();\n  })\n  .catch(function (error) {\n    console.error("Не удалось сохранить изображение:", error);\n  });</code></pre><p>Здесь каждый шаг важен: получить PNG, собрать ссылку, запустить скачивание и убрать временный элемент после клика.</p>',
      },
    ],
  },
  {
    title: "Подключи кнопку и проверь результат",
    goal:
      "Последний шаг связывает уже готовую функцию с интерфейсом.",
    before:
      "Даже правильная функция ничего не сделает, пока ее не вызывает кнопка.",
    change:
      "Повесь на кнопку обработчик `click`, который запускает `saveFieldAsImage()`. После этого проверь сохранение в браузере.",
    why:
      "Именно так логика начинает работать для пользователя, а не только существовать в коде.",
    task:
      "Подключи кнопку и проверь результат: нарисуй что-нибудь, нажми `Save Image` и открой скачанный PNG.",
    recap:
      "Ты закончил доработку: кнопка вызывает функцию, функция сохраняет только область рисования, а результат скачивается как PNG.",
    result: {
      location:
        "Где править: в JS, сразу после функции `saveFieldAsImage()`.",
      before: `function saveFieldAsImage() {
  // готовая логика сохранения
}`,
      after: `function saveFieldAsImage() {
  // готовая логика сохранения
}

if (saveImageButton) {
  saveImageButton.addEventListener("click", saveFieldAsImage);
}`,
      note:
        "Проверка `if (saveImageButton)` полезна тем, что код не упадет, если кнопка временно отсутствует в разметке.",
    },
    hints: [
      {
        level: "Маленькая подсказка",
        difficulty: "Простой вопрос",
        question:
          "Какое событие нужно слушать у кнопки сохранения?",
        answer: "click",
        options: [
          {
            value: "pointerenter",
            label: "`pointerenter`",
            explain:
              "Нет. Это событие наведения, оно не подходит для обычного нажатия по кнопке.",
          },
          {
            value: "click",
            label: "`click`",
            explain:
              "Верно. Именно `click` запускает действие по нажатию на кнопку.",
          },
          {
            value: "scroll",
            label: "`scroll`",
            explain:
              "Нет. Прокрутка страницы не должна запускать сохранение.",
          },
        ],
        body:
          "<p>Для кнопки нужен обычный <code>click</code>. Пользователь нажимает кнопку, а обработчик по этому нажатию запускает функцию сохранения.</p>",
      },
      {
        level: "Средняя подсказка",
        difficulty: "Вопрос чуть точнее",
        question:
          "Почему сохранять нужно именно `.field`, а не всю страницу?",
        answer: "only-field",
        options: [
          {
            value: "whole-page",
            label: "Чтобы в PNG попала вся страница",
            explain:
              "Нет. По задаче нужно сохранить именно рисунок, без лишних блоков.",
          },
          {
            value: "only-field",
            label: "Чтобы в файл попала только область рисования",
            explain:
              "Верно. Тогда картинка получается чистой и без панели с кнопками.",
          },
          {
            value: "faster",
            label: "Только потому что так быстрее",
            explain:
              "Это может быть приятным бонусом, но главная причина в другом: нужно сохранить именно рисунок.",
          },
        ],
        body:
          "<p>Если передать в библиотеку <code>body</code>, на картинку попадут шапка, кнопки и лишние блоки. Поэтому сохранять нужно именно <code>.field</code>, то есть само поле с рисунком.</p>",
      },
      {
        level: "Почти готовое решение",
        difficulty: "Точный вопрос",
        question:
          "Как лучше подключить функцию к кнопке, чтобы код не ломался при отсутствии кнопки?",
        answer: "if-button",
        options: [
          {
            value: "direct",
            label: "Сразу вызвать `saveFieldAsImage()` без кнопки",
            explain:
              "Нет. Тогда сохранение начнется сразу при загрузке страницы, а не по нажатию.",
          },
          {
            value: "if-button",
            label: "Проверить кнопку и повесить `click`",
            explain:
              "Верно. Это и понятно, и безопасно.",
          },
          {
            value: "timeout",
            label: "Запустить через `setTimeout`",
            explain:
              "Нет. Таймер здесь не решает задачу и только запутает код.",
          },
        ],
        body:
          '<p>После функции добавь такой код:</p><pre><code>if (saveImageButton) {\n  saveImageButton.addEventListener("click", saveFieldAsImage);\n}</code></pre><p>Теперь нарисуй несколько клеток, нажми кнопку сохранения и открой скачанный PNG. Если на картинке только рисунок, значит все собрано правильно.</p>',
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
      { value: "div", label: "`<div>`", explain: "Нет. `<div>` это обычный блочный контейнер, а не кнопка." },
      { value: "span", label: "`<span>`", explain: "Нет. `<span>` это строчный контейнер, он не создает кнопку сам по себе." },
      { value: "section", label: "`<section>`", explain: "Нет. `<section>` нужен для смыслового блока страницы." },
      { value: "img", label: "`<img>`", explain: "Нет. `<img>` вставляет изображение, а не кнопку." },
    ],
    body: "<p>Базовая вещь: интерактивные кнопки в HTML обычно создают через <code>&lt;button&gt;</code>. Это удобно и для стилизации, и для обработки событий в JS.</p>",
  },
  {
    question: "Как в CSS обратиться к элементу по классу `card`?",
    answer: "class",
    options: [
      { value: "class", label: "`.card`", explain: "Верно. Точка в CSS означает селектор по классу." },
      { value: "id", label: "`#card`", explain: "Нет. Решетка используется для `id`, а не для класса." },
      { value: "tag", label: "`card`", explain: "Нет. Так CSS искал бы тег `<card>`, а не класс." },
      { value: "attr", label: "`[card]`", explain: "Нет. Это уже селектор по атрибуту." },
      { value: "child", label: "`> card`", explain: "Нет. Такой селектор тут не нужен." },
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
    body: "<p><code>document.querySelector(...)</code> очень удобен, когда нужен один конкретный элемент по классу, тегу или более сложному селектору.</p>",
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
      { value: "background", label: "`background-color`", explain: "Нет. Это свойство меняет фон, а не цвет самого текста." },
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
    question: "Какой атрибут у `<img>` задает текст, если картинка не загрузилась?",
    answer: "alt",
    options: [
      { value: "alt", label: "`alt`", explain: "Верно. Атрибут `alt` задает альтернативный текст для изображения." },
      { value: "href", label: "`href`", explain: "Нет. `href` используют у ссылок." },
      { value: "title", label: "`title`", explain: "Нет. `title` может показать подсказку, но это не замена `alt`." },
      { value: "name", label: "`name`", explain: "Нет. Для изображений это не тот атрибут." },
      { value: "target", label: "`target`", explain: "Нет. Этот атрибут связан со ссылками." },
    ],
    body: "<p>Атрибут <code>alt</code> полезен и для доступности, и как запасной текст на случай, если изображение не показалось.</p>",
  },
  {
    question: "Какое свойство CSS задает внутренние отступы элемента?",
    answer: "padding",
    options: [
      { value: "padding", label: "`padding`", explain: "Верно. `padding` задает внутренние отступы." },
      { value: "margin", label: "`margin`", explain: "Нет. `margin` это внешние отступы снаружи элемента." },
      { value: "gap", label: "`gap`", explain: "Нет. `gap` работает для расстояния между элементами в grid/flex." },
      { value: "border", label: "`border`", explain: "Нет. Это рамка, а не отступ." },
      { value: "width", label: "`width`", explain: "Нет. Это ширина элемента." },
    ],
    body: "<p><code>padding</code> добавляет пространство внутри элемента, между содержимым и его границей.</p>",
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
      { value: "css", label: "`<css>`", explain: "Нет. Такого HTML-тега нет." },
    ],
    body: "<p>Внешний CSS обычно подключают через <code>&lt;link rel=\"stylesheet\" href=\"...\"&gt;</code>.</p>",
  },
];

const stepDistractorPools = [
  [
    {
      value: "late-script",
      label: "Подключить библиотеку после основного JS",
      explain: "Нет. Тогда твой код запустится раньше и не найдет нужный объект библиотеки.",
    },
    {
      value: "auto-work",
      label: "Ничего не подключать, браузер сам справится",
      explain: "Нет. Для этой функции нужен конкретный внешний JS-файл библиотеки.",
    },
    {
      value: "css-file",
      label: "Подключить библиотеку как обычный CSS-файл",
      explain: "Нет. Это JavaScript-библиотека, ее подключают через `script`.",
    },
  ],
  [
    {
      value: "full-page",
      label: "Сохранять сразу весь `body`",
      explain: "Нет. Тогда в картинку попадет почти вся страница, а не только рисунок.",
    },
    {
      value: "header-only",
      label: "Взять только шапку страницы",
      explain: "Нет. Шапка не является областью для рисования.",
    },
    {
      value: "footer-button",
      label: "Искать кнопку через подвал страницы",
      explain: "Нет. Нужен прямой селектор самой кнопки.",
    },
  ],
  [
    {
      value: "no-checks",
      label: "Сразу запускать сохранение без проверок",
      explain: "Нет. Без проверок сложнее понять, почему именно код не сработал.",
    },
    {
      value: "reload-page",
      label: "Сначала перезагрузить страницу внутри функции",
      explain: "Нет. Перезагрузка не помогает проверить наличие нужных элементов и библиотеки.",
    },
    {
      value: "delete-field",
      label: "Удалить поле, если что-то не найдено",
      explain: "Нет. Тут нужна защита через проверку и `return`, а не удаление элементов.",
    },
  ],
  [
    {
      value: "console-only",
      label: "Только вывести картинку в консоль",
      explain: "Нет. Тогда файл не скачается, ты просто получишь длинную строку.",
    },
    {
      value: "keep-link",
      label: "Оставить временную ссылку в документе навсегда",
      explain: "Нет. После клика временную ссылку лучше убрать, чтобы не плодить лишние элементы.",
    },
    {
      value: "whole-document",
      label: "Передать в библиотеку весь документ целиком",
      explain: "Нет. По задаче нужно сохранить именно область рисования.",
    },
  ],
  [
    {
      value: "hover-save",
      label: "Сохранять по наведению мыши",
      explain: "Нет. Для кнопки нужен понятный запуск по нажатию.",
    },
    {
      value: "save-on-load",
      label: "Запускать сохранение сразу при загрузке страницы",
      explain: "Нет. Пользователь должен сам нажать кнопку, когда рисунок готов.",
    },
    {
      value: "save-on-scroll",
      label: "Слушать прокрутку страницы вместо нажатия",
      explain: "Нет. Прокрутка не имеет отношения к сохранению рисунка.",
    },
  ],
];

const completedStorageKey = "image-guide-completed";
const solvedStorageKey = "image-guide-solved";
const penaltySolvedStorageKey = "image-guide-penalty-solved";
const wrongCountsStorageKey = "image-guide-wrong-counts";
const stepWrongCountsStorageKey = "image-guide-step-wrong-counts";
const lockUntilStorageKey = "image-guide-lock-until";

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
    /* Progress still works until reload. */
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
  return `step-${index + 1}`;
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

      for (let extraIndex = 0; enrichedOptions.length < 5 && extraIndex < distractors.length; extraIndex++) {
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
        <p>За неправильные ответы здесь появилось ${penaltyCount} ${pluralizePenaltyQuestions(penaltyCount)}. Они несложные, но пройти их нужно до открытия итогового кода.</p>
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
  const done = [...completedSteps].filter((id) => id.startsWith("step-")).length;
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

    feedback.dataset.lastExplain = explanation;
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
