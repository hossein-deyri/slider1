import MuiStyles from '@/ts/types/MuiStyles';

const searchProductionDateFilterStyle: MuiStyles = () => ({
  dateFilterWrapper: {
    display: 'flex',
    justifyContent: 'end',
    paddingBottom: '2rem'
  },
  titleFilterTextWrapper: {
    width: '10rem',
    display: 'flex',
    height: '4.6rem',
    alignItems: 'center'
  },
  label: {
    fontWeight: '400',
    fontSize: '1.6rem',
    display: 'inline-block',
    margin: '.75rem',
    color: '#fff'
  },

  titleFilterText: {
    paddingLeft: '1rem'
  },

  radioGroupWrapper: {
    width: 1
  },
  formControlLabelWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '.MuiFormControlLabel-root': {
      margin: '-1rem'
    }
  },
  gregorianLabelRight: {
    marginLeft: '-0.9rem !important'
  },
  gregorianLabelLeft: {
    marginRight: '0.1rem !important'
  },

  slider: {
    '.MuiSlider-rail': {
      width: 1,
      height: '0.2rem',
      backgroundColor: (theme) => theme.palette.text.secondary
    },
    '.MuiSlider-track ': {
      height: '0.1rem'
    },
    '.MuiSlider-thumb': {
      width: '0.8rem',
      height: '0.8rem',
      zIndex: 1
    },
    '.MuiSlider-markLabel': {
      top: '2.5rem',
      left: '80%'
    }
  },
  sliderWrapper: {
    height: 'auto',
    position: 'relative !important',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '0 1rem',
    right: '0%'
  },
  bulletRight: {
    width: '0.8rem',
    height: '0.8rem',
    backgroundColor: (theme) => theme.palette.text.primary,
    borderRadius: '50%',
    position: 'absolute',
    left: '0.6rem',
    top: '22%'
  },
  bulletLeft: {
    width: '0.8rem',
    height: '0.8rem',
    backgroundColor: (theme) => theme.palette.text.primary,
    borderRadius: '50%',
    position: 'absolute',
    right: '0.6rem',
    top: '22%'
  },
  textFieldYear: {
    '.MuiInputBase-root': {
      width: '9.3rem',
      height: '2.8rem',
      borderRadius: '.4rem'
    },
    '.MuiInputBase-input': {
      width: '9.3rem',
      height: '2.8rem',
      borderRadius: '.4rem'
    }
  },
  textFieldYearWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '.MuiFormControl-root': {
      height: '3.4rem',
      width: '13rem',
      margin: '0rem'
    },
    '.MuiInputBase-input': {
      height: '3.4rem',
      width: '13rem',
      paddingTop: '0rem',
      paddingBottom: '0rem',
      borderRadius: '.4rem',
      backgroundColor: (theme) => theme.palette.background.default
    }
  },
  textFieldTitle: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default searchProductionDateFilterStyle;
