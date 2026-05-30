// Floating bubbles background
export function initBubbles() {
  const container = document.createElement('div');
  container.className = 'bubbles';
  document.body.appendChild(container);

  const bubbleCount = 15;

  for (let i = 0; i < bubbleCount; i++) {
    createBubble(container, i);
  }
}

function createBubble(container, index) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  // Random properties
  const size = Math.random() * 80 + 40; // 40-120px
  const left = Math.random() * 100; // 0-100%
  const duration = Math.random() * 15 + 10; // 10-25s
  const delay = (index / 15) * 10; // Stagger initial bubbles

  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.left = left + '%';
  bubble.style.animationDuration = duration + 's';
  bubble.style.animationDelay = delay + 's';

  container.appendChild(bubble);

  // Recreate bubble when animation ends
  bubble.addEventListener('animationiteration', () => {
    bubble.style.left = Math.random() * 100 + '%';
    const newSize = Math.random() * 80 + 40;
    bubble.style.width = newSize + 'px';
    bubble.style.height = newSize + 'px';
  });
}
