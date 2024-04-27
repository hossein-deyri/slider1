import STYLES from '@/constants/STYLES';
import MuiStyles from '@/ts/types/MuiStyles';

const searchMobileFilterStyles: MuiStyles = () => ({
  swipeableDrawer: {
    '& > .MuiPaper-root': {
      height: `calc(100% - ${STYLES.headerHeight})`,
      maxHeight: '70%',
      overflow: 'hidden',
      backgroundColor: (theme) => theme.palette.background.paper,
      borderRadius: '2rem 2rem 0 0'
    }
  }
});

export default searchMobileFilterStyles;
