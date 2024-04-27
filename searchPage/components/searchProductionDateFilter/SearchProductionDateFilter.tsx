import Slider from '@mui/material/Slider';
import { Box, FormLabel, Grid, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { parseInt } from 'lodash';
import searchProductionDateFilterStyle from './searchProductionDateFilterStyle';
import useSearchProductionDatefilter from './useSearchProductionDateFilter';
import { IconBaseProps } from 'react-icons/lib';
import MuiStyles from '@/ts/types/MuiStyles';
interface Props {
  name: string;
  Icon: (props: IconBaseProps) => JSX.Element;
}

const SearchProductionDateFilter: React.FC<Props> = ({ name, Icon }) => {
  const classes = searchProductionDateFilterStyle();
  const {
    calendarType,
    handleCalendarType,
    selectedDates,
    onSliderChange,
    SLIDER_VALUES,
    minIrDate,
    maxIrDate,
    marks,
    yearConverter,
    searchState,
    minVal,
    onChange,
    maxVal
  } = useSearchProductionDatefilter();

  return (
    <>
      <Grid container sx={classes.dateFilterWrapper}>
        <Grid item xs={12} sx={classes.titleFilterTextWrapper}>
          <Icon />
          <FormLabel sx={classes.label}>{name}</FormLabel>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={classes.radioGroupWrapper}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={classes.formControlLabelWrapper}
              value={calendarType}
              defaultValue={calendarType}
              onChange={handleCalendarType}
            >
              <FormControlLabel
                value="EN"
                control={<Radio />}
                label="میلادی"
                sx={
                  {
                    ...classes.label,
                    ...classes.gregorianLabelRight
                  } as MuiStyles
                }
              />
              <FormControlLabel
                value="FA"
                control={<Radio />}
                label="شمسی"
                sx={
                  {
                    ...classes.label,
                    ...classes.gregorianLabelLeft
                  } as MuiStyles
                }
              />
            </RadioGroup>
          </FormControl>
          <Box sx={classes.sliderWrapper}>
            <Slider
              value={selectedDates}
              onChange={onSliderChange}
              min={
                calendarType === 'EN' ? SLIDER_VALUES.MIN : parseInt(minIrDate)
              }
              max={
                calendarType === 'EN' ? SLIDER_VALUES.MAX : parseInt(maxIrDate)
              }
              sx={classes.slider}
              marks={marks}
            />
            <Typography sx={classes.bulletRight} />
            <Typography sx={classes.bulletLeft} />
          </Box>
          <Box sx={classes.textFieldYearWrapper}>
            <Typography sx={classes.textFieldTitle}>از</Typography>
            <TextField
              value={
                calendarType === 'FA'
                  ? yearConverter.gregorianToJalaali(
                      Number(searchState.filters.startYear?.apiId || minVal)
                    )
                  : searchState.filters.startYear?.apiId || minVal
              }
              variant="filled"
              onChange={(event) => onChange(event.target.value, true)}
            />
            <Typography sx={classes.textFieldTitle}>تا</Typography>
            <TextField
              value={
                calendarType === 'FA'
                  ? yearConverter.gregorianToJalaali(
                      Number(searchState.filters.endYear?.apiId || maxVal)
                    )
                  : searchState.filters.endYear?.apiId || maxVal
              }
              variant="filled"
              onChange={(event) => onChange(event.target.value, false)}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchProductionDateFilter;
