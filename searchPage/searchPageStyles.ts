import MuiStyles from '@/ts/types/MuiStyles';

const searchPageStyles: MuiStyles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    p: {
      xs: '10rem 8vw 0',
      xl: '11rem 8vw 0'
    }
  },

  divider: {
    mb: 0.8,
    width: '100%'
  },

  searchIcon: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    flexWrap:'nowrap',
    svg: {
      width: '16rem'
    },
    span: {
      width: '30rem',
      textAlign: 'center',
      fontSize: '1.4rem',
      fontWeight: '400',
      marginTop: '2rem',
      color: (theme) => theme.palette.text.secondary,
      lineHeight: '2.5rem'
    }
  }
});

export default searchPageStyles;
