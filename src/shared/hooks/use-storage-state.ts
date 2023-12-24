import { useState, useEffect } from 'react';
import { Storage } from '@capacitor/storage';

export const useStorageState = <T>(key: string, defaultValue?: T) => {
  const [storedValue, setStoredValue] = useState<T>();

  useEffect(() => {
    async function getStoredValue() {
      const { value } = await Storage.get({ key });
      if (value !== null) {
        setStoredValue(JSON.parse(value));
      } else {
        setStoredValue(defaultValue);
        Storage.set({ key, value: JSON.stringify(defaultValue) });
      }
    }

    getStoredValue();
  }, [key, defaultValue]);

  useEffect(() => {
    if (storedValue !== undefined) {
      Storage.set({ key, value: JSON.stringify(storedValue) });
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};
