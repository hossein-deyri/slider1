import MuiStyles from '@/ts/types/MuiStyles';

const CHIP_MARGIN = 0.4;

const searchChipWrapperStyles: MuiStyles = () => ({
  chipWrapper: {
    minHeight: '2.6rem',
    m: `1.2rem ${-CHIP_MARGIN}rem 2rem`
  },

  chip: {
    backgroundColor: '#272727',
    border: 'none',
    height: '2.6rem',
    m: CHIP_MARGIN,

    '.MuiChip-label': {
      p: '0 0.6rem 0 0.4rem'
    }
  },

  chipLabel: {
    display: 'flex',
    alignItems: 'center'
  },

  chipLabelIcon: {
    width: 16,
    height: 16,
    mx: 0.4
  },

  chipLabelText: {
    mr: 0.8,
    fontSize: 12,
    fontWeight: 200
  }
});

export default searchChipWrapperStyles;
