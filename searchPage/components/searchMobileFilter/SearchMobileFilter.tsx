import { SwipeableDrawer } from '@mui/material';
import SearchFilters from '../searchFilters/SearchFilters';
import searchMobileFilterStyles from './searchMobileFilterStyles';
import useSearchMobileFilter from './useSearchMobileFilter';
import { useAppDispatch } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';

const SearchMobileFilter: React.FC = () => {
  const classes = searchMobileFilterStyles();
  const { isOpen } = useSearchMobileFilter();
  const dispatch = useAppDispatch();

  return (
    <>
      <SwipeableDrawer
        anchor={'bottom'}
        open={isOpen}
        onClose={() => dispatch(searchSlice.actions.toggleMobileModal())}
        onOpen={() => {}}
        sx={classes.swipeableDrawer}
      >
        <SearchFilters
          onClose={() => dispatch(searchSlice.actions.toggleMobileModal())}
        />
      </SwipeableDrawer>
    </>
  );
};
export default SearchMobileFilter;
