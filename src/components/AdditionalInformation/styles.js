import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  link: {
    fontSize: 20,
    textDecoration: 'none',
  },
  activeLink: {
    color: 'tomato',
  },
});
export default useStyles;
