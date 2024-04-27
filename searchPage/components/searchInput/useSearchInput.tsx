import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const useSearchInput = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [countFilter, setCountFilter] = useState(0);
  const [searchValueToDispatch] = useDebounce(search, 600);
  const {
    tags,
    countries,
    sounds,
    subtitles,
    endYear,
    startYear,
    sortProductEnum,
    persons
  } = useAppSelector((state) => state.search.filters);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(event.target.value);
  };

  const onOpenModalClick = () => {
    dispatch(searchSlice.actions.toggleMobileModal());
  };

  useEffect(() => {
    dispatch(searchSlice.actions.setSearchValue(searchValueToDispatch));
  }, [searchValueToDispatch]);
  // TODO: @hosein: Add category in count filter badge
  useEffect(() => {
    let count = 0;
    [tags, countries, sounds, persons, subtitles].forEach((item) => {
      if (Array.isArray(item) && item.length > 0) {
        count += item.length;
      }
    });
    count += [startYear, endYear, sortProductEnum].filter(
      (item) => !!item?.apiId
    ).length;
    setCountFilter(count);
  }, [
    tags,
    countries,
    sounds,
    persons,
    subtitles,
    startYear,
    endYear,
    sortProductEnum
  ]);
  return { search, onChange, onOpenModalClick, countFilter };
};

export default useSearchInput;
