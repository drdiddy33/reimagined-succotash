// Floating blue bubbles background
export function initBubbles() {
  const container = document.createElement('div');
  container.className = 'bubbles';
  document.body.appendChild(container);

  const bubbleCount = 20;

  for (let i = 0; i < bubbleCount; i++) {
    createBubble(container, i, bubbleCount);
  }
}

function createBubble(container, index, total) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  const size = Math.random() * 100 + 30; // 30-130px
  const left = Math.random() * 100;
  const duration = Math.random() * 20 + 15; // 15-35s

  // Use negative delay so bubbles are already spread across the screen on load
  const delay = -(Math.random() * duration);

  // Randomize blue hue slightly for variety
  const hue = 210 + Math.random() * 30 - 15; // 195-225
  const saturation = 70 + Math.random() * 30; // 70-100%
  const lightness = 50 + Math.random() * 20; // 50-70%

  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.left = left + '%';
  bubble.style.animationDuration = duration + 's';
  bubble.style.animationDelay = delay + 's';
  bubble.style.setProperty('--bubble-color', `hsla(${hue}, ${saturation}%, ${lightness}%, 0.15)`);
  bubble.style.setProperty('--bubble-highlight', `hsla(${hue}, ${saturation}%, ${lightness + 20}%, 0.25)`);
  bubble.style.setProperty('--sway', (Math.random() * 60 - 30) + 'px');

  container.appendChild(bubble);
}
