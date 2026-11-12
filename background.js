const BLOCKED_DOMAINS = [
  'vntsm.com', 'vntsm.io', 'adinplay.com',
  'googlesyndication.com', 'doubleclick.net', 'googleadservices.com', 'google-analytics.com',
  'googletagmanager.com', 'pagead2.googlesyndication.com', 'adservice.google.com', '2mdn.net',
  'googleads.g.doubleclick.net', 'tpc.googlesyndication.com', 'googleoptimize.com',
  'facebook.com/tr', 'connect.facebook.net', 'an.facebook.com', 'pixel.facebook.com',
  'twitter.com/i/adsct', 'pinterest.com/log', 'snapchat.com/pixel', 'tiktok.com', 'analytics.tiktok.com',
  'rubiconproject.com', 'pubmatic.com', 'openx.net', 'indexww.com', 'appnexus.com', 'xandr.com',
  'smartadserver.com', 'yieldmo.com', 'sharethrough.com', 'teads.tv', 'triplelift.com', 'gumgum.com',
  'magnite.com', 'criteo.com', 'criteo.net', 'taboola.com', 'outbrain.com', 'revcontent.com',
  'mgid.com', 'lijit.com', 'spotxchange.com', 'freewheel.tv', 'ix.io', 'contextweb.com',
  'adnxs.com', 'popads.net', 'propellerads.com', 'exoclick.com', 'trafficjunky.com',
  'adcash.com', 'chitika.com', 'buysellads.com', 'adsterra.com', 'hilltopads.com', 'adriver.ru',
  'between.ru', 'rambler.ru', 'tns-counter.ru', 'top100.rambler.ru', 'mail.ru/counter', 'ok.ru',
  'quantserve.com', 'scorecardresearch.com', 'comscore.com', 'bluekai.com', 'demdex.net',
  'krxd.net', 'rlcdn.com', 'id5-sync.com', 'liveramp.com', 'tapad.com', 'neustar.biz',
  'ezoic.com', 'mediavine.com', 'adthrive.com', 'raptive.com', 'publift.com', 'sovrn.com',
  'conversantmedia.com', 'verizonmedia.com', 'yahoo.com/ads', 'ads.yahoo.com', 'gemini.yahoo.com',
  'muslimhands.org', 'insight.azureedge.net', 'azureedge.net',
  'liadm.com', 'inmobi.com', '3lift.com', 'onetag-sys.com', 'bids.ws',
  'sync.outbrain.com', 'sync.taboola.com', 'eb2.3lift.com', 'ssp-sync.criteo.com',
  'adform.net', 'adform.com', 'adkernel.com', 'admixer.net', 'adroll.com', 'adsafeprotected.com',
  'adskeeper.com', 'adsrvr.org', 'adtech.com', 'advertising.com', 'adzerk.net', 'amoad.com',
  'applovin.com', 'bidswitch.net', 'bidtellect.com', 'bkrtx.com', 'blismedia.com', 'casalemedia.com',
  'chartbeat.com', 'clicktale.net', 'clmbtech.com', 'cnvrsions.net', 'contentabc.com', 'conviva.com',
  'crsspxl.com', 'ctnsnet.com', 'dataxu.com', 'doubleverify.com', 'driveniq.com', 'dsp.io',
  'dyntrk.com', 'effectivemeasure.net', 'emxdigital.com', 'engageya.com', 'exelator.com',
  'eyeota.net', 'flashtalking.com', 'flurry.com', 'fwmrm.net', 'getintent.com', 'glispa.com',
  'gmossp-sp.jp', 'go-mpulse.net', 'goadservices.com', 'hadronid.net', 'hbx.com', 'imrworldwide.com',
  'intentiq.com', 'intergi.com', 'invitemedia.com', 'jivox.com', 'justpremium.com', 'kargo.com',
  'keywee.co', 'krushmedia.com', 'leadbolt.com', 'liveintent.com', 'lkqd.net', 'loopme.me',
  'm6r.eu', 'mathtag.com', 'media.net', 'mediamath.com', 'merkleinc.com', 'metadsp.co.uk',
  'mfadsrvr.com', 'microad.jp', 'moatads.com', 'mookie1.com', 'mythings.com', 'nativo.net',
  'netseer.com', 'newrelic.com', 'nexac.com', 'nxtck.com', 'omtrdc.net', 'onaudience.com',
  'openxenterprise.com', 'optimatic.com', 'optimizely.com', 'out-there-media.com', 'owneriq.net',
  'parrable.com', 'peer39.net', 'perfectaudience.com', 'permutive.com', 'plista.com', 'pocketcents.com',
  'postrelease.com', 'prebid.org', 'proofpoint.com', 'pubmatic.net', 'pulsepoint.com', 'qbaka.net',
  'quantcount.com', 'rhythmone.com', 'richaudience.com', 'rubiconproject.net', 'sail-horizon.com',
  'sascdn.com', 'saymedia.com', 'scanscout.com', 'segment.com', 'serving-sys.com', 'sessionm.com',
  'sharethis.com', 'simpli.fi', 'skimresources.com', 'skupenet.com', 'smartclip.net', 'smrtb.com',
  'snplow.net', 'sonobi.com', 'sophus3.com', 'speedcurve.com', 'spongecell.com', 'spot.im',
  'springserve.com', 'stackadapt.com', 'steepto.com', 'stickyadstv.com', 'storygize.net',
  'streamrail.com', 'sundaysky.com', 'supersonicads.com', 'tagcommander.com', 'tappx.com',
  'targetspot.com', 'tealiumiq.com', 'technorati.com', 'thedevband.com', 'the-ozone-project.com',
  'tidaltv.com', 'tremorhub.com', 'tribalfusion.com', 'triggit.com', 'tru.am', 'truoptik.com',
  'turn.com', 'twiago.com', 'uberads.com', 'udmserve.net', 'unrulymedia.com', 'upsight-api.com',
  'urbanairship.com', 'usemax.de', 'utarget.ru', 'valueclick.net', 'vdx.tv', 'verve.com',
  'videologygroup.com', 'vidoomy.com', 'visiblemeasures.com', 'visualrevenue.com', 'vrtcal.com',
  'vungle.com', 'w55c.net', 'weborama.fr', 'widespace.com', 'wistia.com', 'wunderloop.net',
  'xapads.com', 'yandex.ru/ads', 'yandex.ru/metrika', 'yieldbroker.com', 'yieldify.com',
  'yieldlab.net', 'yldbt.com', 'yoc.com', 'yumenetworks.com', 'zedo.com', 'zergnet.com', 'zucks.net', 'zynga.com'
];

const GARTIC_DOMAINS = ['garticphone.com', 'gartic.io', 'gartic.com', 'gartic.com.br'];

let isEnabled = true;
let blockCount = 0;

// Загрузка состояния при старте
chrome.storage.local.get(['isEnabled', 'blockCount'], (data) => {
  isEnabled = data.isEnabled !== false;
  blockCount = data.blockCount || 0;
  console.log(`GarticPhone AdBlocker v2.0 Ultra: защита ${isEnabled ? 'ВКЛ' : 'ВЫКЛ'}, заблокировано: ${blockCount}`);
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.local.set({ blockCount: 0, isEnabled: true });
    console.log('🎉 GarticPhone AdBlocker v2.0 Ultra установлен!');
  }
});

// Подсчёт заблокированных запросов (только для GarticPhone)
chrome.declarativeNetRequest.onRuleMatched.addListener((event) => {
  if (!isEnabled) return;
  
  const { request } = event;
  const initiator = request.initiator || request.documentUrl || '';
  
  // Проверяем, что запрос идёт с домена GarticPhone
  if (GARTIC_DOMAINS.some(domain => initiator.includes(domain))) {
    blockCount++;
    chrome.storage.local.set({ blockCount: blockCount });
  }
});

// Обработка сообщений от popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleProtection') {
    isEnabled = message.enabled;
    chrome.storage.local.set({ isEnabled: isEnabled });
    console.log(`Защита переключена: ${isEnabled ? 'ВКЛ' : 'ВЫКЛ'}`);
    sendResponse({ success: true, isEnabled: isEnabled });
  }
  if (message.action === 'getStats') {
    sendResponse({ blockCount: blockCount, isEnabled: isEnabled });
  }
  if (message.action === 'resetCounter') {
    blockCount = 0;
    chrome.storage.local.set({ blockCount: 0 });
    sendResponse({ success: true });
  }
  return true;
});

console.log('✅ GarticPhone AdBlocker v2.0 Ultra (MV3) активен');