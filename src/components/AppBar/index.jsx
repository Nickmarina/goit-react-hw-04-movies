import Navigation from '../Navigation';
import useStyles from './styles';

const AppBar = () => {
  const classes = useStyles();
  return (
    <header className="AppBar" className={classes.searchbar}>
      <Navigation />
    </header>
  );
};

export default AppBar;
