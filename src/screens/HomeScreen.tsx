import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Challenge from "../components/Challenge";
import { useHistory } from "react-router-dom";
import { getChallenges } from "../services/challengeService";
import { IChallenge } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "20px 0 80px 0",
    },
    wrapper: {
      // margin: 'auto'
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    challengesContainer: {
      flexGrow: 1,
      // display:'flex',
      // flexDirection: 'row',
      // flexWrap: 'wrap'
    },
    buttonContainer: {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    createButton: {
      width: "30%",
      minWidth: "250px",
      maxWidth: "300px",
    },
  })
);

interface IProps {}

const HomeScreen = (props: IProps) => {
  const classes = useStyles();
  const [challenges, setChallenges] = useState<IChallenge[]>([]);
  useEffect(() => {
    fetchChallenges();
  }, []);

  const history = useHistory();

  const fetchChallenges = () => {
    let res = getChallenges();
    setChallenges(res);
  };

  const renderChallenges = () =>
    challenges.map((challenge) => (
      <Challenge
        key={challenge.id}
        challenge={challenge}
        fetchChallenges={fetchChallenges}
      />
    ));
  return (
    <Grid container className={classes.root}>
      <Grid
        justifyContent="center"
        className={classes.wrapper}
        item
        container
        xs={12}
      >
        <Typography variant="h3">All Challenges</Typography>
      </Grid>
      <Grid
        direction="row"
        className={classes.challengesContainer}
        container
        justifyContent="center"
      >
        {renderChallenges()}
      </Grid>
      <Grid
        className={classes.buttonContainer}
        direction="row"
        container
        justifyContent="center"
      >
        <Button
          onClick={() => history.push("/create_challenge")}
          className={classes.createButton}
          variant="contained"
          color="primary"
        >
          Create Challenge
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
