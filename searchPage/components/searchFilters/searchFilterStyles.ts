import MuiStyles from '@/ts/types/MuiStyles';

const searchFilterStyles: MuiStyles = () => ({
  headerFilter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.6rem 3rem'
  },

  content: {
    borderRadius: '1.6rem',
    display: 'flex',
    height: {
      xs: '100%',
      xl: 'fit-content'
    },
    top: {
      xl: '3rem'
    },
    flexDirection: 'column',
    gap: 1,
    position: {
      xs: 'relative',
      xl: 'sticky'
    },
    padding: {
      xs: '3rem 3rem 6rem 3rem',
      xl: '2rem 2rem 0rem 2rem'
    },
    background: {
      xs: 'none',
      xl: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
    },
    overflowY: {
      xs: 'scroll',
      xl: 'hidden'
    }
  },

  mobileFilter: {
    backgroundColor: (theme) => theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem 0',
    position: 'fixed',
    bottom: '0'
  },

  button: {
    padding: '.5rem 4rem'
  }
});

export default searchFilterStyles;
