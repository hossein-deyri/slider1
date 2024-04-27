import searchPageStyles from './searchPageStyles';
import { Divider, Grid, Theme, useMediaQuery } from '@mui/material';
import SearchFilters from './components/searchFilters/SearchFilters';
import SearchInput from './components/searchInput/SearchInput';
import SearchContent from './components/searchContent/SearchContent';
import SearchMobileFilter from './components/searchMobileFilter/SearchMobileFilter';

const SearchPage = () => {
  const classes = searchPageStyles();
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));

  return (
    <Grid container spacing={2.4} sx={classes.container}>
      <Grid item xs={12}>
        <Divider sx={classes.divider} />
      </Grid>
      {isXl ? (
        <Grid item xs={3}>
          <SearchFilters />
        </Grid>
      ) : (
        <SearchMobileFilter />
      )}
      <Grid item xs={12} xl={9}>
        <SearchInput />
        <SearchContent />
      </Grid>
    </Grid>
  );
};

export default SearchPage;
