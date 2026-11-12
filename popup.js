// Обновление UI
function updateUI(isEnabled, count) {
  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const toggleSwitch = document.getElementById('toggleSwitch');
  const toggleStatusText = document.getElementById('toggleStatusText');
  const blockCounter = document.getElementById('blockCounter');

  if (isEnabled) {
    if (statusDot) statusDot.classList.remove('paused');
    if (statusText) statusText.textContent = 'Защита активна';
    if (toggleSwitch) toggleSwitch.classList.remove('paused');
    if (toggleStatusText) toggleStatusText.textContent = 'Защита включена';
  } else {
    if (statusDot) statusDot.classList.add('paused');
    if (statusText) statusText.textContent = 'Защита отключена';
    if (toggleSwitch) toggleSwitch.classList.add('paused');
    if (toggleStatusText) toggleStatusText.textContent = 'Защита отключена';
  }

  if (blockCounter) {
    blockCounter.textContent = count.toLocaleString('ru-RU');
  }
}

// Загрузка данных при открытии popup
chrome.storage.local.get(['blockCount', 'isEnabled'], (data) => {
  const count = data.blockCount || 0;
  const isEnabled = data.isEnabled !== false;
  updateUI(isEnabled, count);
});

// Переключатель защиты
const toggleBtn = document.getElementById('toggleBtn');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    chrome.storage.local.get(['isEnabled'], (data) => {
      const isEnabled = data.isEnabled !== false;
      const newState = !isEnabled;

      chrome.storage.local.set({ isEnabled: newState }, () => {
        chrome.storage.local.get(['blockCount'], (data) => {
          updateUI(newState, data.blockCount || 0);
        });
        chrome.runtime.sendMessage({ action: 'toggleProtection', enabled: newState });
      });
    });
  });
}

// Сброс счетчика по клику на него
const counterBox = document.getElementById('counterBox');
if (counterBox) {
  counterBox.addEventListener('click', () => {
    if (confirm('Сбросить счетчик заблокированной рекламы?')) {
      chrome.storage.local.set({ blockCount: 0 }, () => {
        chrome.storage.local.get(['isEnabled'], (data) => {
          updateUI(data.isEnabled !== false, 0);
        });
        chrome.runtime.sendMessage({ action: 'resetCounter' });
      });
    }
  });
}

console.log('GarticPhone AdBlocker Popup загружен');