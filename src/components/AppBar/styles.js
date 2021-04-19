import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  searchbar: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    color: '#fff',
    backgroundColor: 'slategrey',
  },
});
export default useStyles;
