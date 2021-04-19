import { useHistory, useLocation } from 'react-router-dom';
import { pathes } from '../../services/routes';
import useStyles from './styles';

const GoBackBtn = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const { push } = useHistory();

  const HandleBtnClick = () => {
    state?.from ? push(state.from) : push(pathes.home);
  };

  return (
    <button type="button" className={classes.btn} onClick={HandleBtnClick}>
      Go Back
    </button>
  );
};
export default GoBackBtn;
