import { createUseStyles } from 'react-jss';
import { nominalTypeHack } from 'prop-types';

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
