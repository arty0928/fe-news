export function createNewsSubscribeStore() {
  const STORAGE_KEY = 'news-subscribed-list';

  let subscribedSet = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);

  const listeners = new Set();

  function notify() {
    listeners.forEach((listener) => listener());
  }

  function syncToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...subscribedSet]));
  }

  function subscribe(listener) {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }

  function toggle(press) {
    const newSet = new Set(subscribedSet);

    has(press) ? newSet.delete(press) : newSet.add(press);

    subscribedSet = newSet;

    syncToLocalStorage();

    notify();
  }

  function has(press) {
    return subscribedSet.has(press);
  }

  function getAll() {
    return Array.from(subscribedSet);
  }

  return {
    subscribe,
    toggle,
    has,
    getAll,
  };
}
