import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

  const theme = createTheme();

  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: '100%',
      marginTop: '90px',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.standard,
      }),
      '&:hover': {
        transform: 'scale(1.2)', // Bulging effect on hover
      },
    },
    media: {
      transform: 'scaleY(1)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.standard,
      }),
      '&:hover': {
        transform: 'scale(1.2)', // Bulging effect on hover
      },
      height: 0,
      paddingTop: '85.25%', // 16:9
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.standard,
      }),
    },
  }));
  
  export default useStyles;