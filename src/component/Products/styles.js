import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    
  },
  root: {
    flexGrow: 1,
    
  },
  body:{
    background:'#000000',
  },
  productsContainer: {
    backgroundColor: 'black',
    padding: theme.spacing(3), // Adjust the padding as needed
  },
}));