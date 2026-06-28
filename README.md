# 🎮 GarticPhone AdBlocker

**Полная блокировка рекламы на GarticPhone для всех популярных браузеров**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome](https://img.shields.io/badge/Chrome-✓-green)](https://www.google.com/chrome/)
[![Firefox](https://img.shields.io/badge/Firefox-✓-orange)](https://www.mozilla.org/firefox/)
[![Opera](https://img.shields.io/badge/Opera-✓-red)](https://www.opera.com/)
[![Edge](https://img.shields.io/badge/Edge-✓-blue)](https://www.microsoft.com/edge)
[![Yandex](https://img.shields.io/badge/Yandex-✓-yellow)](https://browser.yandex.ru/)

---

##  О проекте

**GarticPhone AdBlocker** — это браузерное расширение, которое полностью и бескомпромиссно блокирует всю рекламу на сайте [garticphone.com](https://garticphone.com) и его региональных версиях. Никаких боковых баннеров, никаких всплывающих окон, никаких видео-реклам во время игры — только чистый геймплей.

Расширение работает на уровне сети (блокирует запросы к рекламным серверам) и на уровне DOM (удаляет уже загруженные рекламные элементы), обеспечивая максимальную эффективность.

## ✨ Возможности

-  **Полная блокировка рекламы** — Google AdSense, DoubleClick, Adinplay, Microsoft Insight, Muslim Hands и 50+ других рекламных сетей
- 🌍 **Поддержка всех регионов** — работает на `garticphone.com`, `gartic.io`, `gartic.com`, `gartic.com.br` и языковых версиях (`/ru`, `/en`, `/pt` и т.д.)
- ️ **Двухуровневая защита** — блокировка на уровне сети + удаление элементов через DOM
- ⚡ **Минимальное влияние на производительность** — оптимизированный код без лишних проверок
- 🔒 **Приватность** — расширение работает только на доменах Gartic, не собирает данные пользователей
-  **Не ломает сайт** — безопасные селекторы, которые не затрагивают функциональные элементы игры
- 🔄 **Автоматическое обновление** — MutationObserver отслеживает динамически подгружаемую рекламу

##  Поддерживаемые браузеры

| Браузер | Версия манифеста | Статус |
|---------|------------------|--------|
| Google Chrome | V3 | ✅ Работает |
| Microsoft Edge | V3 | ✅ Работает |
| Яндекс Браузер | V3 | ✅ Работает |
| Mozilla Firefox | V2 | ✅ Работает |
| Opera | V2 | ✅ Работает |

## 🚀 Установка

### Chrome / Edge / Яндекс Браузер

1. Скачайте или клонируйте репозиторий
2. Откройте страницу расширений:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
   - Яндекс: `browser://extensions/`
3. Включите **«Режим разработчика»** (Developer mode)
4. Нажмите **«Загрузить распакованное расширение»** (Load unpacked)
5. Выберите папку `Chrome/` (или `Edge/`, `Yandex/`)
6. Готово! 🎉

### Firefox

1. Откройте `about:debugging`
2. Нажмите **«Этот Firefox»**
3. Нажмите **«Загрузить временное дополнение»**
4. Выберите файл `Firefox/manifest.json`

### Opera

1. Откройте `opera://extensions/`
2. Включите **«Режим разработчика»**
3. Нажмите **«Загрузить распакованное расширение»**
4. Выберите папку `Opera/`

## ️ Как это работает

Расширение использует три уровня блокировки:

### 1. Сетевая блокировка (background.js / rules.json)
Перехватывает HTTP-запросы к известным рекламным доменам и блокирует их до загрузки:
- `adinplay.com` — основной рекламный провайдер Gartic
- `googlesyndication.com`, `doubleclick.net` — Google Ads
- `adnxs.com`, `criteo.com`, `pubmatic.com` — programmatic реклама
- `microsoft.com/insight` — Microsoft реклама
- И ещё 50+ доменов

### 2. CSS-блокировка (styles.css)
Скрывает рекламные элементы через CSS-правила с `!important`:
- iframe стандартных рекламных размеров (160×600, 300×250, 728×90)
- Элементы с классами/id, содержащими "ad", "banner", "sponsor"
- Элементы с атрибутами `data-ad-client`, `data-ad-slot`

### 3. JavaScript-блокировка (content.js)
MutationObserver отслеживает изменения DOM в реальном времени и удаляет рекламные элементы, которые появляются динамически.

## 📁 Структура проекта

GarticAdBlocker/
├── Chrome/ # Для Google Chrome (Manifest V3)
│ ├── manifest.json
│ ├── background.js
│ ├── content.js
│ ├── styles.css
│ ├── rules.json
│ └── icon.png
├── Edge/ # Для Microsoft Edge (Manifest V3)
├── Yandex/ # Для Яндекс Браузера (Manifest V3)
├── Firefox/ # Для Mozilla Firefox (Manifest V2)
│ ├── manifest.json
│ ├── background.js
│ ├── content.js
│ ├── styles.css
│ └── icon.png
├── Opera/ # Для Opera (Manifest V2)
└── README.md


## 🔧 Добавление новых рекламных доменов

Если вы обнаружили новую рекламу, которую расширение не блокирует:

1. Откройте DevTools (F12) → вкладка **Console**
2. Скопируйте URL рекламного ресурса
3. Добавьте домен в соответствующий файл:
   - Для Chrome/Edge/Yandex: `rules.json`
   - Для Firefox/Opera: массив `BLOCKED_DOMAINS` в `background.js`
4. Обновите расширение через `chrome://extensions/` (кнопка 🔄)

## 🤝 Вклад в проект

Приветствуются:
-  Отчёты о багах и найденной рекламе
- 💡 Предложения по улучшению
- 📝 Обновления списков рекламных доменов
-  Переводы описания

Создайте **Issue** или **Pull Request** — буду рад любой помощи!

## 📋 Список заблокированных рекламных сетей

<details>
<summary>Показать полный список (50+ доменов)</summary>

- adinplay.com
- googlesyndication.com
- doubleclick.net
- googleadservices.com
- google-analytics.com
- googletagmanager.com
- adnxs.com
- taboola.com
- outbrain.com
- amazon-adsystem.com
- facebook.com/tr
- scorecardresearch.com
- quantserve.com
- popads.net
- propellerads.com
- revcontent.com
- mgid.com
- chitika.com
- buysellads.com
- muslimhands.org
- rubiconproject.com
- pubmatic.com
- criteo.com
- indexww.com
- lijit.com
- spotxchange.com
- advertising.com
- ads.yahoo.com
- liadm.com
- inmobi.com
- 3lift.com
- onetag-sys.com
- bids.ws
- id5-sync.com
- rlcdn.com
- bluekai.com
- demdex.net
- krxd.net
- openx.net
- smartadserver.com
- yieldmo.com
- sharethrough.com
- smaato.net
- appnexus.com
- contextweb.com
- districtm.io
- emxdigital.com
- gumgum.com
- liveramp.com
- media.net
- sovrn.com
- teads.tv
- triplelift.com
- undertone.com
- yieldlift.com
- tiktok.com
- blismedia.com
- equativ.com
- richaudience.com
- unrulygroup.com
- microsoft.com/insight
- azureedge.net

</details>

## ️ Важные замечания

- Расширение предназначено **только для личного использования**
- Работает **исключительно на доменах Gartic** — не влияет на другие сайты
- Не собирает и не передаёт никакие данные пользователей
- При обновлении сайта Gartic может потребоваться добавление новых доменов в список блокировки

## 📄 Лицензия

Этот проект распространяется под лицензией [MIT](LICENSE).

---

Нашли ошибку?
Напиши мне на почту в профиле
