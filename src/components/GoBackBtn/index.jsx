import { useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';

const GoBackBtn = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);

  const HandleBtnClick = () => {
    location.state?.from
      ? history.push(location.state.from)
      : history.push('/movies');
  };

  return (
    <button type="button" className={classes.btn} onClick={HandleBtnClick}>
      Go Back
    </button>
  );
};
export default GoBackBtn;
