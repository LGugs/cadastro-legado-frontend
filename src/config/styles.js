import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    textField1: {
      maxWidth: '250px',
      marginRight: '30px',
      '& label.Mui-focused': {
        color: 'darkgreen',
      },
      '&.MuiInput-underline:after': {
        borderBottomColor: 'red',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'darkgreen',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
        '&:hover fieldset': {
          borderColor: 'green',
        },
      },
    },
    textField2: {
      maxWidth: '150px',
      marginRight: '30px',
      '& label.Mui-focused': {
        color: 'darkgreen',
      },
      '&.MuiInput-underline:after': {
        borderBottomColor: 'red',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'darkgreen',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
        '&:hover fieldset': {
          borderColor: 'green',
        },
      },
    },
    alignItemsAndJustifyContent: {
      maxHeight: '80', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: 'pink',
      marginBottom: '10px'
    },
    tabela: {
      //display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: 'pink',
      marginBottom: '10px'
    },
    button: {
      color: 'white',
      backgroundColor: 'darkgreen',
      '&:hover': {
        backgroundColor: 'green'
      }
    }
  }));

  export default useStyles;


/*import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles((theme) => ({
    textField1: {
      maxWidth: '250px',
    },
    textField2: {
      maxWidth: '150px'
    },
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'red',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    }
  }));

const FormGroupPer = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'red',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(FormGroup);

  export { FormGroupPer, useStyles };

  */