import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    marginBottom : theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: '0px',
    },
  },
  card: {
    maxWidth: 345,
  }
}));

export default useStyles;