import { ROOT } from '@/constants/ROOT';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
import moment from 'moment-jalaali';
import { useEffect, useState } from 'react';

const SLIDER_VALUES = {
  MIN: Number(ROOT.VIDEO_MIN_PUBLISH_DATE),
  MAX: new Date().getFullYear()
};

const yearConverter = {
  gregorianToJalaali: (year: number) =>
    moment(`${year}/12`, 'YYYY/M').jYear().toString(),
  jalaaliToGregorian: (year: number) => moment(year, 'jYYYY').year().toString()
};

const useSearchProductionDatefilter = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);
  const [minVal, setMinVal] = useState(SLIDER_VALUES.MIN.toString());
  const [maxVal, setMaxVal] = useState(SLIDER_VALUES.MAX.toString());
  const [calendarType, setCalendarType] = useState<string>('EN');
  const [selectedDates, setSelectedDates] = useState<[number, number]>([
    SLIDER_VALUES.MIN,
    SLIDER_VALUES.MAX
  ]);

  const minIrDate = moment(`${SLIDER_VALUES.MIN}/12`, 'YYYY/M').format('jYYYY');
  const maxIrDate = moment(`${SLIDER_VALUES.MAX}/12`, 'YYYY/M').format('jYYYY');

  let marks = [
    {
      value:
        calendarType === 'EN'
          ? SLIDER_VALUES.MIN
          : Number(yearConverter.gregorianToJalaali(SLIDER_VALUES.MIN)),
      label:
        calendarType === 'EN'
          ? `${SLIDER_VALUES.MIN}`
          : `${yearConverter.gregorianToJalaali(SLIDER_VALUES.MIN)}`
    },
    {
      value:
        calendarType === 'EN'
          ? SLIDER_VALUES.MAX
          : Number(yearConverter.gregorianToJalaali(SLIDER_VALUES.MAX)),
      label:
        calendarType === 'EN'
          ? `${SLIDER_VALUES.MAX}`
          : `${yearConverter.gregorianToJalaali(SLIDER_VALUES.MAX)}`
    }
  ];

  const onChange = (value: string, isMin: boolean) => {
    const newValue =
      calendarType === 'FA'
        ? yearConverter.jalaaliToGregorian(Number(value))
        : value;
    dispatch(searchSlice.actions.setYear({ year: newValue, isMin }));
    isMin
      ? setMinVal(newValue)
      : setMaxVal(
          Number(newValue) > new Date().getFullYear()
            ? new Date().getFullYear().toString()
            : newValue
        );
  };

  const onSliderChange = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      value.map((item, index) => {
        onChange(item.toString(), !index);
      });
    }
  };

  const handleCalendarType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCalendarType(event.target.value);
  };

  useEffect(() => {
    let min = Number(searchState.filters.startYear?.apiId) || SLIDER_VALUES.MIN;
    let max = Number(searchState.filters.endYear?.apiId) || SLIDER_VALUES.MAX;

    if (calendarType === 'FA') {
      min = Number(yearConverter.gregorianToJalaali(min));
      max = Number(yearConverter.gregorianToJalaali(max));
    }

    setSelectedDates([min, max]);
  }, [
    searchState.filters.startYear?.apiId,
    searchState.filters.endYear?.apiId,
    calendarType
  ]);

  return {
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
  };
};

export default useSearchProductionDatefilter;
