import { ISearchStateValue } from '@/ts/models/SearchState';

interface Props {
  onChangeValues?: Function;
  selectedValues?: ISearchStateValue[];
}
const useSearchNormalFilter = ({ onChangeValues, selectedValues }: Props) => {
  const convertedData = selectedValues?.map((item) => ({
    id: item.apiId.toString(),
    name: item.chipName
  }));

  const handleChange = (_: any, value: any) => {
    if (onChangeValues) {
      onChangeValues(value);
    }
  };

  return {
    handleChange,
    convertedData
  };
};

export default useSearchNormalFilter;
