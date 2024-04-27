import { useState } from 'react';

const useSearchCategoryTabs = () => {
  const [categoryTab, setCategoryTab] = useState(0);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setCategoryTab(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }
  return {
    handleChangeTabs,
    a11yProps,
    categoryTab
  };
};

export default useSearchCategoryTabs;
