const nativeStorage = window.localStorage;

const init = channel => {
  const store = nativeStorage.getItem(channel);
  if (!store) {
    nativeStorage.setItem(channel, '{}');
  }
};

const storeApi = channel => {
  const fetchStore = () => {
    let data = null;
    try {
      data = JSON.parse(nativeStorage.getItem(channel));
    } catch (err) {}
    return data || {};
  };
  const pushStore = store => {
    nativeStorage.setItem(channel, JSON.stringify(store));
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
