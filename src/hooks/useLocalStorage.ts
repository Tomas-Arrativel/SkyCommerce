import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initial: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initial === 'function') return (initial as () => T)();
    else return initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
