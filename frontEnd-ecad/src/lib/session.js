
export const sessionGet = (key) => {
  const stringValue = window.sessionStorage.getItem(key);
  if (stringValue !== null) {
    const value = JSON.parse(stringValue);
    const expirationDate = new Date(value.expirationDate);
    if (expirationDate > new Date()) {
      return value.value;
    }
    window.sessionStorage.removeItem(key);
  }
  return null;
};

export const sessionSet = (key, value, expiration = 0) => {
  const expirationDate = new Date(new Date().getTime() + (expiration));
  const newValue = {
    value,
    expirationDate: expirationDate.toISOString(),
  };
  window.sessionStorage.setItem(key, JSON.stringify(newValue));
};

export const sessionRemove = (key) => {
  window.sessionStorage.removeItem(key);
};

export const localGet = (key) => {
  const stringValue = window.localStorage.getItem(key);
  if (stringValue !== null) {
    const value = JSON.parse(stringValue);
    const expirationDate = new Date(value.expirationDate);
    if (expirationDate > new Date()) {
      return value.value;
    }
    window.localStorage.removeItem(key);
  }
  return null;
};

export const localSet = (key, value, expiration = 0) => {
  const expirationDate = new Date(new Date().getTime() + (expiration));
  const newValue = {
    value,
    expirationDate: expirationDate.toISOString(),
  };
  window.localStorage.setItem(key, JSON.stringify(newValue));
};

export const localRemove = (key) => {
  window.localStorage.removeItem(key);
};
