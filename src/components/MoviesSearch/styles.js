import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  input: {
    padding: 10,
    marginRight: 15,
    fontSize: 15,
  },

  btn: {
    padding: 5,
  },
});

export default useStyles;
