import React, {useState} from "react";
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import {TextField, Button} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh'
    },
    container:{
      margin: 'auto',
      display: 'flex',
      flex: 1,
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    input: {
      width: '300px'
    },
    button: {
      width: '300px',
      marginTop: '15px'
    }
  }),
);

interface IProps {
  setAuthenticated: (a: boolean) => void;
  authenticated: boolean;
}


const LoginScreen = (props:IProps) => {
  const classes = useStyles();

  const {authenticated, setAuthenticated} = props;
  // const {errorText, setErrorText} = useState(null);
  const [employeeId, setEmployeeId] = useState<null|string>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeId(event.target.value);
  };

  const onSubmit = () => {
    if(employeeId && employeeId.length>0){
      setAuthenticated(true);
    }
  }
  return(
    <Grid container className={classes.root}>
      <Grid className={classes.container} item xs={12} sm={6}>
        <TextField data-testid='employeeId' className={classes.input} value={employeeId} onChange={handleChange} label="Employee id" variant="outlined" />
        {(employeeId && employeeId.length > 0)?
          <Button className={classes.button} disableElevation onClick={onSubmit} variant="contained" color="primary">Login</Button>:
          <Button className={classes.button} disableElevation variant="contained" disabled>
           Login
          </Button>
        }
      </Grid>
    </Grid>

  )


}

export default LoginScreen;