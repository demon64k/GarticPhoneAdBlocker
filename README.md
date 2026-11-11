<div align="center">
  <h1>🍪 GarticPhone AdBlocker Ultra</h1>
  <p><strong>Полная и бескомпромиссная блокировка рекламы на GarticPhone и его региональных версиях.</strong></p>
  
  <!-- Бейджи -->
  <p>
    <a <img src="https://img.shields.io/github/v/release/demon64k/GarticPhoneAdBlocker?label=Версия&color=7aa2f7&style=for-the-badge" alt="Version"></a>
    <a href="https://github.com/demon64k/GarticPhoneAdBlocker/blob/main/LICENSE"><img src="https://img.shields.io/github/license/demon64k/GarticPhoneAdBlocker?color=f38ba8&style=for-the-badge" alt="License"></a>
    <img src="https://img.shields.io/badge/Доменов_в_черном_списке-250+-a6e3a1?style=for-the-badge" alt="Domains">
    <img src="https://img.shields.io/badge/Manifest-V2_%26_V3-f9e2af?style=for-the-badge" alt="Manifest">
  </p>
</div>

<br>

## 📑 Оглавление
- [✨ Возможности](#-возможности)
- [🌐 Поддерживаемые браузеры](#-поддерживаемые-браузеры)
- [🛠 Установка](#️-установка)
- [⚙️ Как это работает](#️-как-это-работает)
- [📂 Список заблокированных сетей](#-список-заблокированных-сетей)
- [🤝 Вклад в проект](#-вклад-в-проект)
- [📬 Контакты](#-контакты)

---

## ✨ Возможности

> 🛡 **Миссия:** Вернуть чистый и комфортный геймплей в GarticPhone, не замедляя работу сайта и не собирая данные пользователей.

- 🚫 **Блокировка 250+ рекламных сетей:** Включая Adinplay, Google Ads, Microsoft Insight, Muslim Hands и другие.
- ⚡️ **Двухуровневая защита:** Сетевая блокировка (запрос отменяется до загрузки) + DOM-очистка (удаление остатков через JS/CSS).
- 📊 **Встроенная статистика:** Удобный счетчик заблокированных запросов прямо во всплывающем окне расширения.
- 🎛 **Гибкое управление:** Возможность мгновенно приостановить защиту в один клик без удаления расширения.
- 🔒 **Полная приватность:** Расширение работает **исключительно** на доменах `*.garticphone.com`, `*.gartic.io` и `*.gartic.com`. Никакой телеметрии.
- 🎨 **Стильный UI:** Всплывающее окно и страница "О расширении" выполнены в дизайне, вдохновленном интерфейсом самой игры.

---

## 🌐 Поддерживаемые браузеры

| Браузер | Статус | Манифест | Папка в репозитории |
| :--- | :---: | :---: | :--- |
| **Google Chrome** | ✅ Работает | V3 | `/Chrome` |
| **Яндекс Браузер** | ✅ Работает | V3 | `/Yandex` |
| **Microsoft Edge** | ✅ Работает | V3 | `/Edge` |
| **Mozilla Firefox** | ✅ Работает | V2 | `/Firefox` |
| **Opera / Opera GX** | ✅ Работает | V2 | `/Opera` |

---

## 🛠 Установка

### Для Chrome, Edge и Яндекс Браузера (Manifest V3)
1. Скачай или склонируй этот репозиторий:  
   ```bash
   git clone https://github.com/demon64k/GarticPhoneAdBlocker.git
   ```
2. Открой страницу расширений в браузере:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
   - Яндекс: `browser://extensions/`
3. Включи **«Режим разработчика»** (Developer mode) в правом верхнем углу.
4. Нажми **«Загрузить распакованное расширение»** (Load unpacked).
5. Выбери папку `Chrome` (или `Yandex` / `Edge`) из скачанного репозитория.
6. Готово! 🎉 Закрепи иконку на панели и наслаждайся игрой без рекламы.

### Для Firefox и Opera (Manifest V2)
1. Открой страницу управления дополнениями:
   - Firefox: `about:debugging#/runtime/this-firefox`
   - Opera: `opera://extensions/`
2. Включи «Режим разработчика».
3. Нажми «Загрузить временное дополнение» (Firefox) или «Загрузить распакованное расширение» (Opera).
4. Выбери файл `manifest.json` внутри папки `Firefox` или `Opera` соответственно.

---

## ⚙️ Как это работает

Расширение использует трехуровневую систему для максимальной эффективности и минимального влияния на производительность:

1. **Сетевой уровень (`background.js` / `rules.json`)**  
   Перехватывает HTTP-запросы к известным рекламным и трекинговым доменам и отменяет их (`cancel: true`) до начала загрузки. Это экономит трафик и ускоряет отрисовку страницы.
2. **CSS-уровень (`styles.css`)**  
   Применяет строгие правила `display: none !important` к стандартным рекламным фреймам (160×600, 300×250 и т.д.) и элементам с характерными классами.
3. **JavaScript-уровень (`content.js`)**  
   Использует `MutationObserver` для отслеживания динамических изменений DOM. Если сайт пытается встроить рекламу через JS после первоначальной загрузки, расширение мгновенно находит и удаляет этот элемент.

---

## 📂 Список заблокированных сетей

<details>
<summary>📌 <strong>Нажми, чтобы развернуть полный список (250+ доменов)</strong></summary>
<br>
<em>adinplay.com, vntsm.com, vntsm.io, googlesyndication.com, doubleclick.net, googleadservices.com, google-analytics.com, googletagmanager.com, taboola.com, outbrain.com, amazon-adsystem.com, facebook.com/tr, scorecardresearch.com, quantserve.com, popads.net, propellerads.com, revcontent.com, mgid.com, muslimhands.org, rubiconproject.com, pubmatic.com, criteo.com, inmobi.com, 3lift.com, onetag-sys.com, liadm.com, bids.ws, tiktok.com, microsoft.com/insight, azureedge.net, adnxs.com, openx.net, appnexus.com, xandr.com, smartadserver.com, yieldmo.com, sharethrough.com, teads.tv, triplelift.com, gumgum.com, magnite.com, lijit.com, spotxchange.com, freewheel.tv, exoclick.com, trafficjunky.com, adcash.com, chitika.com, buysellads.com, adsterra.com, adriver.ru, rambler.ru, tns-counter.ru, mail.ru/counter, comscore.com, bluekai.com, demdex.net, krxd.net, rlcdn.com, id5-sync.com, liveramp.com, tapad.com, neustar.biz, ezoic.com, mediavine.com, adthrive.com, raptive.com, publift.com, sovrn.com, conversantmedia.com, verizonmedia.com, ads.yahoo.com, gemini.yahoo.com, adform.net, adkernel.com, admixer.net, adroll.com, adsafeprotected.com, adskeeper.com, adsrvr.org, adtech.com, advertising.com, adzerk.net, amoad.com, applovin.com, bidswitch.net, bidtellect.com, bkrtx.com, blismedia.com, casalemedia.com, chartbeat.com, clicktale.net, clmbtech.com, cnvrsions.net, contentabc.com, conviva.com, crsspxl.com, ctnsnet.com, dataxu.com, doubleverify.com, driveniq.com, dsp.io, dyntrk.com, effectivemeasure.net, emxdigital.com, engageya.com, exelator.com, eyeota.net, flashtalking.com, flurry.com, fwmrm.net, getintent.com, glispa.com, gmossp-sp.jp, go-mpulse.net, goadservices.com, hadronid.net, hbx.com, imrworldwide.com, intentiq.com, intergi.com, invitemedia.com, jivox.com, justpremium.com, kargo.com, keywee.co, krushmedia.com, leadbolt.com, liveintent.com, lkqd.net, loopme.me, m6r.eu, mathtag.com, media.net, mediamath.com, merkleinc.com, metadsp.co.uk, mfadsrvr.com, microad.jp, moatads.com, mookie1.com, mythings.com, nativo.net, netseer.com, newrelic.com, nexac.com, nxtck.com, omtrdc.net, onaudience.com, openxenterprise.com, optimatic.com, optimizely.com, out-there-media.com, owneriq.net, parrable.com, peer39.net, perfectaudience.com, permutive.com, plista.com, pocketcents.com, postrelease.com, prebid.org, proofpoint.com, pubmatic.net, pulsepoint.com, qbaka.net, quantcount.com, rhythmone.com, richaudience.com, rubiconproject.net, sail-horizon.com, sascdn.com, saymedia.com, scanscout.com, segment.com, serving-sys.com, sessionm.com, sharethis.com, simpli.fi, skimresources.com, skupenet.com, smartclip.net, smrtb.com, snplow.net, sonobi.com, sophus3.com, speedcurve.com, spongecell.com, spot.im, springserve.com, stackadapt.com, steepto.com, stickyadstv.com, storygize.net, streamrail.com, sundaysky.com, supersonicads.com, tagcommander.com, tappx.com, targetspot.com, tealiumiq.com, technorati.com, thedevband.com, the-ozone-project.com, tidaltv.com, tremorhub.com, tribalfusion.com, triggit.com, tru.am, truoptik.com, turn.com, twiago.com, uberads.com, udmserve.net, unrulymedia.com, upsight-api.com, urbanairship.com, usemax.de, utarget.ru, valueclick.net, vdx.tv, verve.com, videologygroup.com, vidoomy.com, visiblemeasures.com, visualrevenue.com, vrtcal.com, vungle.com, w55c.net, weborama.fr, widespace.com, wistia.com, wunderloop.net, xapads.com, yandex.ru/ads, yandex.ru/metrika, yieldbroker.com, yieldify.com, yieldlab.net, yldbt.com, yoc.com, yumenetworks.com, zedo.com, zergnet.com, zucks.net, zynga.com</em>
<br><br>
<em>💡 Полный и актуальный список всегда можно найти в файлах <code>background.js</code> и <code>rules.json</code> соответствующих папок.</em>
</details>

---

## 🤝 Вклад в проект

Этот проект создан сообществом и для сообщества. Любая помощь приветствуется!

- 🐛 **Нашли рекламу?** Создайте [Issue](https://github.com/demon64k/GarticPhoneAdBlocker/issues) с описанием и скриншотом.
- 💡 **Есть идея?** Предложите её в [GitHub Issues](https://github.com/demon64k/GarticPhoneAdBlocker/issues) или напишите в Telegram.
- 💻 **Хотите улучшить код?** Форкните репозиторий и отправьте Pull Request.

---

## 📬 Контакты

- 👨‍💻 **Разработчик:** [@demon64k](https://github.com/demon64k)
- ✈️ **Telegram:** [@Dimoska_studio](https://t.me/Dimoska_studio)
- ⭐️ **Если расширение помогло вам, не забудьте поставить звезду этому репозиторию!** Это лучшая поддержка для разработчика.

<br>

<div align="center">
  <p>Сделано с ❤️ и 🍪 для игроков GarticPhone</p>
  <p><sub>© 2026 demon64k. Распространяется под лицензией <a href="https://github.com/demon64k/GarticPhoneAdBlocker/blob/main/LICENSE">MIT</a>.</sub></p>
</div>
