import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useSearchCategoryTabs from './useSearchCategoryTabs';
import searchCategoryTabsStyle from './searchCategoryTabsStyle';

const SearchCategoryTabs = () => {
  const classes = searchCategoryTabsStyle();
  const { handleChangeTabs, a11yProps, categoryTab } = useSearchCategoryTabs();

  return (
    <Tabs
      value={categoryTab}
      sx={classes.tabsWrapper}
      onChange={handleChangeTabs}
    >
      <Tab label="همه" {...a11yProps(0)} sx={classes.tab} />
      <Tab label="فیلم" {...a11yProps(1)} sx={classes.tab} />
      <Tab label="سریال" {...a11yProps(2)} sx={classes.tab} />
    </Tabs>
  );
};
export default SearchCategoryTabs;
