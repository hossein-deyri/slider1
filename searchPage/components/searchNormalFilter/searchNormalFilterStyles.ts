import MuiStyles from '@/ts/types/MuiStyles';

const searchNormalFilterStyles: MuiStyles = () => ({
  autocomplete: {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: (theme) => theme.palette.background.default,
      borderRadius: '.4rem'
    }
  },
  textField: {
    borderRadius: '.4rem',
    mb: 2,
    backgroundColor: (theme) => theme.palette.background.default
  },
  label: {
    fontWeight: '400',
    fontSize: '1.5rem',
    display: 'inline-block',
    margin: '.75rem',
    color: (theme) => theme.palette.text.primary
  }
});

export default searchNormalFilterStyles;
