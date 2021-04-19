import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: 16,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  item: {
    bordeRadius: 2,
    marginBottom: 5,
    boxShadow: '0px 0px 9px 0px rgba(34, 60, 80, 0.29)',
  },
  title: {
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: 260,
    objectFit: 'cover',
  },
});
export default useStyles;
