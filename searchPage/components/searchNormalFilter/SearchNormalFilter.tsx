import {
  Autocomplete,
  FormControlLabel,
  FormLabel,
  Radio,
  TextField
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { IconBaseProps } from 'react-icons/lib';
import { ITag } from '@/ts/models/Tag.service';
import { ICountry } from '@/ts/models/Country.service';
import { IArrayBoxVoiceAndSubtitle } from '@/ts/types/ArrayBoxVoiceAndSubtitle';
import { IArraySort } from '@/ts/types/ArraySort';
import searchNormalFilterStyles from './searchNormalFilterStyles';
import { ISearchStateValue } from '@/ts/models/SearchState';
import useSearchNormalFilter from './useSearchNormalFilter';

interface Props {
  valueList: (ITag | ICountry | IArrayBoxVoiceAndSubtitle | IArraySort)[];
  name: string;
  allowMultiple: boolean;
  Icon: (props: IconBaseProps) => JSX.Element;
  selectedValues?: ISearchStateValue[];
  onChangeValues?: (value: any) => void;
}

const SearchNormalFilter: React.FC<Props> = ({
  valueList,
  name,
  allowMultiple,
  Icon,
  selectedValues,
  onChangeValues
}) => {
  const { handleChange, convertedData } = useSearchNormalFilter({
    onChangeValues,
    selectedValues
  });
  const classes = searchNormalFilterStyles();

  return (
    <>
      <Autocomplete
        size="small"
        multiple={allowMultiple}
        limitTags={2}
        options={valueList}
        getOptionLabel={(option) => option.name}
        onChange={handleChange}
        value={convertedData}
        sx={classes.autocomplete}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            {allowMultiple ? (
              <>
                <Checkbox
                  icon={<MdCheckBoxOutlineBlank />}
                  checkedIcon={<MdCheckBox />}
                  checked={selected}
                />
                {option.name}
              </>
            ) : (
              <FormControlLabel
                key={option.name}
                control={<Radio checked={selected} />}
                label={option.name}
                value={option.name}
              />
            )}
          </li>
        )}
        renderInput={(params) => (
          <>
            <Icon />
            <FormLabel sx={classes.label}>{name}</FormLabel>
            <TextField {...params} placeholder={name} sx={classes.textField} />
          </>
        )}
      />
    </>
  );
};

export default SearchNormalFilter;
