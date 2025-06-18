const createWebStorage = (type: 'local' | 'session') => {
  if (typeof window === 'undefined') {
    return {
      getItem() {
        return null;
      },
      setItem() { },
      removeItem() { },
    };
  }

  const storage = window[`${type}Storage` as 'localStorage' | 'sessionStorage'];

  return {
    getItem(key: string) {
      return storage.getItem(key);
    },
    setItem(key: string, value: string) {
      storage.setItem(key, value);
    },
    removeItem(key: string) {
      storage.removeItem(key);
    },
  };
};

export default createWebStorage;

