import {
  Avatar,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  PaperProps,
  TextField,
  Theme,
  Typography,
  useMediaQuery
} from '@mui/material';
import useSearchfilters from './useSearchFilters';
import SearchNormalFilter from '../searchNormalFilter/SearchNormalFilter';
import { ArrayBoxVoiceAndSubtitle } from '@/constants/voice-subtitle';
import { ArraySort } from '@/constants/SORT';
import SearchProductionDateFilter from '../searchProductionDateFilter/SearchProductionDateFilter';
import searchFilterStyles from './searchFilterStyles';
import SearchCategoryTabs from '../searchCategoryTabs/SearchCategoryTabs';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
import { ITag } from '@/ts/models/Tag.service';
import { ICountry } from '@/ts/models/Country.service';
import { IArrayBoxVoiceAndSubtitle } from '@/ts/types/ArrayBoxVoiceAndSubtitle';

//icons
import { MdFolderCopy } from 'react-icons/md';
import { MdPinDrop } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { MdSyncAlt } from 'react-icons/md';
import { MdKeyboardVoice } from 'react-icons/md';
import { MdOutlineSubtitles } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

interface Props {
  props?: PaperProps;
  onClose?: () => void;
}

const SearchFilters: React.FC<Props> = ({ onClose }) => {
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));
  const { tagList, countyList, personList, personName, onPersonNameChange } =
    useSearchfilters();
  const classes = searchFilterStyles();
  const { tags, countries, sounds, subtitles } = useAppSelector(
    (state) => state.search.filters
  );
  const dispatch = useAppDispatch();

  // TODO: @ali: replace with real data

  return (
    <>
      {!isXl && (
        <>
          <Grid container sx={classes.headerFilter}>
            <Grid item>
              <Typography>فیلتر ها</Typography>
            </Grid>
            <Grid item>
              <div onClick={onClose}>
                <MdClose />
              </div>
            </Grid>
          </Grid>
          <Divider />
        </>
      )}
      <Paper
        // {...props}
        sx={classes.content}
      >
        {/* <TextField placeholder="نام بازیگر" onChange={onPersonNameChange} />
      {personList?.map((item) => (
        <Grid>
          <Chip
            avatar={
              <Avatar
                alt={item.name}
                src={
                  (process.env.NEXT_PUBLIC_API_URL_IMAGES_CDN as string) +
                  item.imagePath
                }
              />
            }
            label={item.name}
            variant="outlined"
          />
        </Grid>
      ))} */}
        <SearchCategoryTabs />
        <SearchNormalFilter
          allowMultiple={true}
          valueList={tagList}
          name="ژانر"
          Icon={MdFolderCopy}
          selectedValues={tags}
          onChangeValues={(value: ITag[]) =>
            dispatch(searchSlice.actions.setTag(value))
          }
        />
        <SearchProductionDateFilter name="سال ساخت" Icon={MdCalendarMonth} />
        <SearchNormalFilter
          allowMultiple={true}
          valueList={countyList}
          name="کشور سازنده"
          Icon={MdPinDrop}
          selectedValues={countries}
          onChangeValues={(value: ICountry[]) =>
            dispatch(searchSlice.actions.setCountry(value))
          }
        />
        <SearchNormalFilter
          allowMultiple={false}
          valueList={ArraySort}
          name="مرتب سازی"
          Icon={MdSyncAlt}
        />
        <SearchNormalFilter
          allowMultiple={true}
          valueList={ArrayBoxVoiceAndSubtitle}
          name="صوت"
          Icon={MdKeyboardVoice}
          selectedValues={sounds}
          onChangeValues={(value: IArrayBoxVoiceAndSubtitle[]) =>
            dispatch(searchSlice.actions.setSound(value))
          }
        />
        <SearchNormalFilter
          allowMultiple={true}
          valueList={ArrayBoxVoiceAndSubtitle}
          name="زیرنویس"
          Icon={MdOutlineSubtitles}
          selectedValues={subtitles}
          onChangeValues={(value: IArrayBoxVoiceAndSubtitle[]) =>
            dispatch(searchSlice.actions.setSubtitle(value))
          }
        />
      </Paper>
      {!isXl && (
        <Grid container sx={classes.mobileFilter}>
          <Grid item>
            <Button sx={classes.button} variant="contained">
              مشاهده نتایج
            </Button>
          </Grid>
          <Grid item>
            <Button sx={classes.button} variant="outlined">
              حذف فیلتر
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SearchFilters;
