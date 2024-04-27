import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
import { ISearchState, ISearchStateValue } from '@/ts/models/SearchState';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons/lib';
import { MdFolderCopy } from 'react-icons/md';
import { MdPinDrop } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { MdSyncAlt } from 'react-icons/md';
import { MdKeyboardVoice } from 'react-icons/md';
import { MdOutlineSubtitles } from 'react-icons/md';

interface IFilterConfig {
  Icon: IconType;
  onDelete: (id?: string | number) => void;
}

interface ISearchChipItem extends ISearchStateValue, IFilterConfig {
  filterType: keyof ISearchState;
  Icon: IconType;
}

const useSearchChipWrapper = () => {
  const [chipList, setChiplist] = useState<ISearchChipItem[]>();
  const searchState = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const filterConfigs: Record<keyof ISearchState['filters'], IFilterConfig> = {
    category: {
      Icon: MdFolderCopy,
      onDelete: () => {
        console.log('delete me!');
      }
    },
    tags: {
      Icon: MdFolderCopy,
      onDelete: (id) => {
        dispatch(searchSlice.actions.deleteTagById(<string>id));
      }
    },
    countries: {
      Icon: MdPinDrop,
      onDelete: (id) => {
        dispatch(searchSlice.actions.deleteCountryById(<number>id));
      }
    },
    startYear: {
      Icon: MdCalendarMonth,
      onDelete: () => {
        dispatch(searchSlice.actions.setYear({ year: '-1', isMin: true }));
      }
    },
    endYear: {
      Icon: MdCalendarMonth,
      onDelete: () => {
        dispatch(searchSlice.actions.setYear({ year: '-1', isMin: false }));
      }
    },
    sortProductEnum: {
      Icon: MdFolderCopy,
      onDelete: () => {
        dispatch(searchSlice.actions.deleteSort());
      }
    },
    persons: {
      Icon: MdFolderCopy,
      onDelete: () => {
        console.log('delete me!');
      }
    },
    sounds: {
      Icon: MdKeyboardVoice,
      onDelete: (id) => {
        dispatch(searchSlice.actions.deleteSoundById(<string>id));
      }
    },
    subtitles: {
      Icon: MdOutlineSubtitles,
      onDelete: (id) => {
        dispatch(searchSlice.actions.deleteSubtitleById(<string>id));
      }
    }
  };

  useEffect(() => {
    const newChipList = Object.entries(searchState.filters)
      .map(([key, value]) => {
        const isArray = Array.isArray(value);

        if (isArray) {
          return value.map(
            (subItem) =>
              <ISearchChipItem>{
                ...subItem,
                ...filterConfigs[key as keyof ISearchState['filters']],
                filterType: key
              }
          );
        } else {
          return [
            <ISearchChipItem>{
              ...value,
              ...filterConfigs[key as keyof ISearchState['filters']],
              filterType: key
            }
          ];
        }
      })
      .flat();

    setChiplist(newChipList);
  }, [searchState]);

  return {
    filterConfigs,
    chipList
  };
};

export default useSearchChipWrapper;
