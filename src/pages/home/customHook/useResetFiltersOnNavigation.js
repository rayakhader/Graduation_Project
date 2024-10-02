import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFilters } from '../context/Filters';
import { useSorts } from '../context/Sorts';

function useResetFiltersOnNavigation() {
  const location = useLocation();
  const {setFilters} = useFilters();
  const{setSort}=useSorts()

  useEffect(() => {
    if (location.pathname !== '/home') {
      setFilters({
        city: '',
        university: '',
        price: '',
        minPrice: '',
        maxPrice: '',
        bathrooms: '',
        bedrooms: '',
        gender:'',
        visible: 'isVisible==true'
      });
      setSort('')
    }
  }, [location, setFilters,setSort]);
}

export default useResetFiltersOnNavigation;
