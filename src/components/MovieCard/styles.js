import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    alignItems: 'start',
    padding: 30,
    marginBottom: 30,
  },
  poster: {
    width: 300,
    marginRight: 20,
  },
  descriptionContainer: {
    padding: 5,
  },
  title: {
    padding: 0,
    margin: 0,
    marginBottom: 30,
    fontSize: 40,
  },
  score: {
    color: 'gray',
  },
  overviewTitle: {
    padding: 0,
    margin: 0,
    marginBottom: 10,
    fontSize: 25,
  },
  overview: {
    width: 600,
    marginBottom: 40,
    color: 'dimgray',
  },
  genresList: {
    display: 'flex',
    alignItems: 'baseline',
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  listTitle: {
    padding: 0,
    margin: 0,
    marginBottom: 10,
    fontSize: 20,
  },
  listItem: {
    padding: 0,
    margin: 0,
    marginBottom: 5,
    marginRight: 20,
    color: 'darkslategray',
  },
});
export default useStyles;
