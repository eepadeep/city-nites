const world = '🗺️';

export function hello(word: string = world): string {
  return `Hello ${world}! `;
}

window.addEventListener('load', () => {
  document.getElementById("content")!.innerHTML = hello();
});