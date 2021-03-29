import { useState, useEffect } from 'react';

interface IUseDebouce {
  value: string;
  delay: number;
}

function useDebounce({ value, delay }: IUseDebouce): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
