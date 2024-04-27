import MuiStyles from '@/ts/types/MuiStyles';

const searchCategoryTabsStyle: MuiStyles = () => ({
  tabsWrapper: {
    backgroundColor: (theme) => theme.palette.background.default,
    borderRadius: '0.4rem',
    padding: '0.5rem 0.8rem',
    minHeight: '4rem',
    '& .MuiTabs-indicator': {
      display: 'none'
    },
    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between'
    }
  },
  tab: {
    fontSize: '1.2rem',
    borderRadius: '0.4rem',
    '&.MuiButtonBase-root': {
      color: (theme) => theme.palette.text.primary,
      minHeight: '3rem',
      minWidth: '10.2rem',
      padding: '0',
      transition: '0.4s'
    },
    '&.Mui-selected': {
      color: (theme) => theme.palette.text.primary,
      backgroundColor: (theme) => theme.palette.primary.main
    }
  }
});

export default searchCategoryTabsStyle;
