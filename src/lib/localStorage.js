/**
 * Retrieves a value from localStorage by its key.
 * @param key The key to look up in localStorage.
 * @returns The value for the given key or null if no value is found for the given key.
 */
const getItem =  (key) => {
    const value = window.localStorage.getItem(key);
    if (!value) return null;
    return value;
  };
  
  /**
   * Saves a value to localStorage with the given key.
   * @param key The key to use to store the value in localStorage.
   * @param value The value to save to localStorage.
   */
  const setItem = (key, value) => {
    window.localStorage.setItem(key, value);
  };
  
  export { getItem, setItem };