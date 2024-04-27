import { Chip, Grid, Icon, Typography } from '@mui/material';
import searchChipWrapperStyles from './searchChipWrapperStyles';
import useSearchChipWrapper from './useSearchChipWrapper';
import { useAppSelector } from '@/redux/hooks';

const SearchChipWrapper = () => {
  const classes = searchChipWrapperStyles();
  const { chipList } = useSearchChipWrapper();

  return (
    <Grid sx={classes.chipWrapper}>
      {chipList?.map((chip) => (
        <Chip
          sx={classes.chip}
          color="default"
          variant="outlined"
          label={
            <Grid item sx={classes.chipLabel}>
              <Icon component={chip.Icon} sx={classes.chipLabelIcon} />
              <Typography sx={classes.chipLabelText}>
                {chip.chipName}
              </Typography>
            </Grid>
          }
          onDelete={() => chip.onDelete(chip.apiId)}
        />
      ))}
    </Grid>
  );
};

export default SearchChipWrapper;
