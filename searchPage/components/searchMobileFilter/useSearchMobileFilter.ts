import { useAppSelector } from '@/redux/hooks';
const useSearchMobileFilter = () => {
  const isOpen = useAppSelector((state) => state.search.isOpenMobileFilter);

  return {
    isOpen
  };
};

export default useSearchMobileFilter;
