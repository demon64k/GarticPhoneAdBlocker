// ============================================
// GarticPhone AdBlocker - Background (MV3)
// Версия 3.1 | 250+ доменов
// ============================================

let blockCount = 0;
let isEnabled = true;

// Загрузка сохранённых данных при старте
chrome.storage.local.get(['blockCount', 'isEnabled'], (data) => {
  blockCount = data.blockCount || 0;
  isEnabled = data.isEnabled !== false;
  console.log(`GarticPhone AdBlocker MV3: защита ${isEnabled ? 'ВКЛ' : 'ВЫКЛ'}, заблокировано: ${blockCount}`);
});

// Установка при первом запуске
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.local.set({ blockCount: 0, isEnabled: true });
    console.log('🎉 GarticPhone AdBlocker установлен впервые!');
  }
  if (details.reason === 'update') {
    console.log('🔄 GarticPhone AdBlocker обновлён до версии 3.1');
  }
});

chrome.runtime.onStartup.addListener(() => {
  console.log('🚀 GarticPhone AdBlocker запущен');
});

// Подсчёт сработавших правил через declarativeNetRequest
chrome.declarativeNetRequest.onRuleMatched.addListener((event) => {
  if (!isEnabled) return;

  const { request, rule } = event;
  // Считаем только блокировки на доменах Gartic
  const initiator = request.initiator || request.documentUrl || '';
  if (initiator.includes('garticphone.com') || initiator.includes('gartic.io') || initiator.includes('gartic.com')) {
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

console.log('✅ GarticPhone AdBlocker Ultra (MV3) установлен и активен');