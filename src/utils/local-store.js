const init = channel => {
  const store = localStorage.getItem(channel);
  if (!store) {
    localStorage.setItem(channel, '{}');
  }
};

const storeApi = channel => {
  const fetchStore = () => {
    let data = null;
    try {
      data = JSON.parse(localStorage.getItem(channel));
    } catch (err) {}
    return data || {};
  };
  const pushStore = store => {
    localStorage.setItem(channel, JSON.stringify(store));
  };
  return {
    get(key) {
      const store = fetchStore();
      return store[key];
    },
    set(key, value) {
      const store = fetchStore();
      store[key] = value;
      pushStore(store);
    },
  };
};

export default function localStore(channel) {
  init(channel);
  return storeApi(channel);
}
