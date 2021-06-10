export default function debounce(callback: () => void, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}
