import MuiStyles from '@/ts/types/MuiStyles';

const searchInputStyles: MuiStyles = () => ({
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    '.MuiFormControl-root  ': {
      display: 'flex'
    },
    '.MuiButtonBase-root': {
      borderRadius: '0.4rem',
      backgroundColor: (theme) => theme.palette.primary.main,
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: (theme) => theme.palette.primary.dark
      },
      '&:hover .MuiBadge-badge': {
        backgroundColor: (theme) => theme.palette.primary.dark
      }
    },
    '.MuiBadge-badge': {
      top: '-1rem',
      border: (theme) => `0.1rem solid${theme.palette.grey[900]}`
    }
  },
  badge: {
    '.MuiBadge-badge': {
      width: '1.8rem',
      height: '1.8rem',
      fontSize: '1.1rem',
      transform: 'translate(-55%, -50%)'
    }
  },
  textField: {
    '& .MuiInputBase-input': {
      py: 0.85
    }
  },

  startAdornment: {
    mt: '0 !important'
  }
});

export default searchInputStyles;
