// Local and server image persistence manager

export function getStoredImage(key: string, fallbackUrl?: string): string {
  try {
    const val = localStorage.getItem(key);
    if (val && (val.startsWith('data:') || val.startsWith('http') || val.startsWith('/'))) {
      return val;
    }
  } catch (err) {
    console.error('Storage read error:', err);
  }
  return fallbackUrl || '';
}

export function saveStoredImage(key: string, filename: string, dataUrl: string) {
  try {
    localStorage.setItem(key, dataUrl);
  } catch (err) {
    console.error('LocalStorage write error:', err);
  }

  // Also persist to server public directory via Vite middleware
  fetch('/api/save-static-image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filename, base64: dataUrl }),
  }).catch((err) => {
    console.error('Failed to save to server disk:', err);
  });
}
