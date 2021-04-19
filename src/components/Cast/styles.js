import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
    padding: 15,
  },
  item: {
    width: 150,
    height: 350,
    marginRight: 10,
    marginBottom: 10,
    boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
    textAlign: 'center',
  },
});

export default useStyles;
