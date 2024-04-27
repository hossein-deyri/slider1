import {
  Grid,
  GridProps,
  InputAdornment,
  TextField,
  Theme,
  useMediaQuery
} from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import searchInputStyles from './searchInputStyles';
import SearchChipWrapper from '../searchChipWrapper/SearchChipWrapper';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { IoFilter } from 'react-icons/io5';
import useSearchInput from './useSearchInput';

const SearchInput = (props: GridProps) => {
  const classes = searchInputStyles();
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));
  const { search, onChange, onOpenModalClick, countFilter } = useSearchInput();

  return (
    <Grid item {...props}>
      <Grid container sx={classes.searchWrapper}>
        {!isXl && (
          <IconButton onClick={onOpenModalClick}>
            <Badge
              badgeContent={countFilter}
              max={4}
              color="primary"
              sx={classes.badge}
            >
              <IoFilter />
            </Badge>
          </IconButton>
        )}
        <TextField
          sx={classes.textField}
          variant="filled"
          fullWidth
          placeholder="جستجو ..."
          value={search}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={classes.startAdornment}>
                <CiSearch />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <SearchChipWrapper />
    </Grid>
  );
};

export default SearchInput;
