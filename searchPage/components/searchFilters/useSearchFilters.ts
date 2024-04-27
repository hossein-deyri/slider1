import { getCountries } from '@/services/countryServices';
import { getTags } from '@/services/tagServices';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getPersons } from '@/services/personServices';
import { ITag } from '@/ts/models/Tag.service';
import { ICountry } from '@/ts/models/Country.service';
import { IPerson } from '@/ts/models/Person.service';
import { useDebouncedCallback } from 'use-debounce';

const useSearchfilters = () => {
  const [tagList, setTagList] = useState<ITag[]>([]);
  const [countyList, setCountyList] = useState<ICountry[]>([]);
  const [personList, setPersonList] = useState<IPerson[]>([]);
  const [personName, setPersonName] = useState<string>('');

  // Debounce callback
  const onPersonNameChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newName = event.target.value?.trim();

      if (newName !== personName) {
        setPersonName(newName);

        if (newName?.length) {
          fetchDropdownData(
            () => getPersons({ name: newName?.trim() }),
            (value) => setPersonList(value?.slice(0, 5))
          );
        } else {
          setPersonList([]);
        }
      }
    },
    300
  );

  const fetchDropdownData = (
    api: () => Promise<any>,
    setter: Dispatch<SetStateAction<any>>
  ) =>
    api()
      .then((res) => {
        setter(res.data);
      })
      // TODO: @ali: handle catch state
      .catch((error) => {});

  useEffect(() => {
    [
      {
        api: getTags,
        setter: (list: ITag[]) => setTagList(list?.filter((tag) => tag.fixed && !tag.invisible))
      },
      { api: getCountries, setter: setCountyList }
    ].map(({ api, setter }) => fetchDropdownData(api, setter));
  }, []);

  return {
    tagList,
    countyList,
    personList,
    personName,
    onPersonNameChange
  };
};

export default useSearchfilters;
