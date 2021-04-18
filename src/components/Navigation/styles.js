import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  link: {
    margin: 0,
    padding: 0,
    marginRight: 15,
    fontSize: 20,
    color: 'gray',
    textDecoration: 'none',
  },
  linkActive: {
    color: 'tomato',
  },
});

export default useStyles;
