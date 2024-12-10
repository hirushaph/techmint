import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type ProductFilters = {
  color?: string;
  storage?: string;
};

function useProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const color = searchParams.get('color');
  const storage = searchParams.get('storage');

  const setProductFilters = useCallback(
    (filters: ProductFilters) => {
      setSearchParams((params) => {
        if (filters.color) {
          params.set('color', filters.color);
        }

        if (filters.storage) {
          params.set('storage', filters.storage);
        }
        return params;
      });
    },
    [setSearchParams]
  );

  return { color, storage, setProductFilters };
}

export default useProductFilter;
