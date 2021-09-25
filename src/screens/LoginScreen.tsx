import React, {useState, ChangeEvent, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  container: {
    margin: 'auto',
    display: 'flex',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  input: {
    width: '300px',
  },
  button: {
    width: '300px',
    marginTop: '15px',
  },
}));

interface IProps {
  // eslint-disable-next-line no-unused-vars
  setAuthenticated: (a:boolean) => void;
}

const LoginScreen = (props:IProps) => {
  const classes = useStyles();

  const { setAuthenticated } = props;
  // const {errorText, setErrorText} = useState(null);
  const [employeeId, setEmployeeId] = useState<null|string>('');
  useEffect(() => {
    let employee = localStorage.getItem('employeeId');
    if(employee){
      setEmployeeId(employee);
      setAuthenticated(true);
    }
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmployeeId(event.target.value);
  };

  const onSubmit = () => {
    if (employeeId && employeeId.length > 0) {
      setAuthenticated(true);
      localStorage.setItem('employeeId', employeeId);
    }
  };
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.container} item xs={12} sm={6}>
        <TextField data-testid="employeeId" className={classes.input} value={employeeId} onChange={handleChange} label="Employee id" variant="outlined" />
        {(employeeId && employeeId.length > 0)
          ? <Button data-testid="activeButton" className={classes.button} disableElevation onClick={onSubmit} variant="contained" color="primary">Login</Button>
          : (
            <Button data-testid="inactiveButton" className={classes.button} disableElevation variant="contained" disabled>
              Login
            </Button>
          )}
      </Grid>
    </Grid>

  );
};

export default LoginScreen;
