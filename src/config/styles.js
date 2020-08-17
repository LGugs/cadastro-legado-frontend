import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line
import { TextField } from '@material-ui/core'; // não descobri ainda o motivo de os estilos serem aplicados somente quando este import é feito


export const useStyles = makeStyles({
    alignItemsAndJustifyContent: {
      maxHeight: '80',
      //marginRight: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor: 'pink',
      marginBottom: '100px'
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
    },
    tF1: {
      maxWidth: '250px', // estes valores não estão sendo aplicados quando os textFields são incluidos dentro do FormValidator
      marginRight: '30px',
      '& label.Mui-focused': {
        color: 'darkgreen',
      },
      '&.MuiInput-underline:after': { // mas estes estão.
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
          borderColor: 'gray',
        },
      },
    },
      tF2: {
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
            borderColor: 'gray',
          },
        },
      }
  });

  //export default useStyles;

  /*
  export const useStyles = makeStyles((theme) => ({
    tF1: {
      maxWidth: '250px', // estes valores não estão sendo aplicados quando os textFields são incluidos dentro do FormValidator
      marginRight: '30px',
      //marginLeft: '340px',
      '& label.Mui-focused': {
        color: 'darkgreen',
      },
      '&.MuiInput-underline:after': { // mas estes estão.
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
          borderColor: 'gray',
        },
      },
    },
      tF2: {
        maxWidth: '150px',
        marginRight: '30px',
        //marginLeft: '340px',
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
            borderColor: 'gray',
          },
        },
      },
      alignItemsAndJustifyContent: {
        maxHeight: '80', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'pink',
        marginBottom: '100px'
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
    }));*/