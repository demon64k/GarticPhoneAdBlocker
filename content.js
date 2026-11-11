(function () {
  'use strict';

  const AD_SELECTORS = [
    'aside',
    '.sidebar',
    '.side-bar',
    '.left-sidebar',
    '.right-sidebar',
    '#sidebar',
    '[class*="sidebar"]',
    '[id*="sidebar"]',
    'div[role="complementary"]',
    'div[id*="ad"]',
    'div[class*="ad"]',
    'div[id*="banner"]',
    'div[class*="banner"]',
    'div[id*="promo"]',
    'div[class*="promo"]',
    'div[id*="sponsor"]',
    'div[class*="sponsor"]',
    'div[id*="advertisement"]',
    'div[class*="advertisement"]',
    'ins.adsbygoogle',
    'iframe[src*="googlesyndication"]',
    'iframe[src*="doubleclick"]',
    'iframe[src*="ads"]',
    'iframe[src*="adserver"]',
    'iframe[src*="microsoft"]',
    'iframe[src*="insight"]',
    'iframe[src*="azure"]',
    '[id*="microsoft"]',
    '[class*="microsoft"]',
    '[id*="insight"]',
    '[class*="insight"]',
    '[id*="azure"]',
    '[class*="azure"]',
    '[data-testid*="ad"]',
    '[data-ad]',
    '[data-ad-slot]',
    '[data-ad-client]',
    '[data-ad-format]',
    '[data-dfp-ad]',
    '[data-google-ad]'
  ];

  const TRACKING_DOMAINS = [
    'microsoft.com',
    'insight',
    'azure.com',
    'googlesyndication.com',
    'doubleclick.net',
    'googleadservices.com',
    'google-analytics.com',
    'googletagmanager.com',
    'pagead',
    'adservice.google',
    'adnxs.com',
    'taboola.com',
    'outbrain.com',
    'amazon-adsystem.com',
    'facebook.com/tr',
    'scorecardresearch.com',
    'quantserve.com'
  ];

  function isAdElement(element) {
    if (!element || !element.tagName) return false;

    const tagName = element.tagName.toLowerCase();

    if (tagName === 'iframe' || tagName === 'img') {
      const src = (element.getAttribute('src') || '').toLowerCase();
      if (TRACKING_DOMAINS.some(domain => src.includes(domain))) return true;
    }

    const id = (element.id || '').toLowerCase();
    const className = (element.className && typeof element.className === 'string') ? element.className.toLowerCase() : '';
    
    if (id.includes('microsoft') || className.includes('microsoft')) return true;
    if (id.includes('insight') || className.includes('insight')) return true;
    if (id.includes('azure') || className.includes('azure')) return true;
    if (id.includes('sidebar') || className.includes('sidebar')) return true;
    if (id.includes('google_ads') || id.includes('div-gpt-ad')) return true;
    if (className.includes('adsbygoogle') || className.includes('google_ads')) return true;

    return false;
  }

  function removeAdElement(element) {
    if (!element || !element.parentNode) return;
    try {
      element.style.setProperty('display', 'none', 'important');
      element.style.setProperty('visibility', 'hidden', 'important');
      element.style.setProperty('opacity', '0', 'important');
      element.style.setProperty('pointer-events', 'none', 'important');
      element.style.setProperty('width', '0', 'important');
      element.style.setProperty('height', '0', 'important');
      element.style.setProperty('position', 'absolute', 'important');
      element.style.setProperty('left', '-9999px', 'important');
      element.style.setProperty('top', '-9999px', 'important');
      element.style.setProperty('z-index', '-9999', 'important');

      setTimeout(() => {
        if (element && element.parentNode) {
          try {
            element.parentNode.removeChild(element);
          } catch (e) {}
        }
      }, 100);
    } catch (e) {}
  }

  function cleanupAds(root) {
    if (!root) return;

    if (root.nodeType === Node.ELEMENT_NODE) {
      if (isAdElement(root)) {
        removeAdElement(root);
        return;
      }
    }

    if (root.querySelectorAll) {
      AD_SELECTORS.forEach(selector => {
        try {
          const elements = root.querySelectorAll(selector);
          elements.forEach(el => removeAdElement(el));
        } catch (e) {}
      });

      const iframes = root.querySelectorAll('iframe');
      const imgs = root.querySelectorAll('img');
      
      iframes.forEach(el => { if (isAdElement(el)) removeAdElement(el); });
      imgs.forEach(el => { if (isAdElement(el)) removeAdElement(el); });
    }
  }

  function initialCleanup() {
    try {
      cleanupAds(document);
    } catch (e) {
      console.error('Gartic AdBlocker error:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialCleanup);
  } else {
    initialCleanup();
  }

  const observer = new MutationObserver((mutations) => {
    try {
      for (const mutation of mutations) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              cleanupAds(node);
            }
          }
        }
      }
    } catch (e) {
      console.error('Gartic AdBlocker observer error:', e);
    }
  });

  observer.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true
  });

  setInterval(() => {
    try {
      cleanupAds(document);
    } catch (e) {
      console.error('Gartic AdBlocker interval error:', e);
    }
  }, 2000);

  window.addEventListener('load', () => {
    setTimeout(initialCleanup, 500);
    setTimeout(initialCleanup, 2000);
  });

  console.log('Gartic AdBlocker: активен на', window.location.hostname);
})();