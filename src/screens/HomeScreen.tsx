import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Challenge from "../components/Challenge";
import { useHistory } from "react-router-dom";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
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
    noChallenge: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    button: {
      textTransform: "none",
    },
    filterText: {
      margin: "20px 10px 20px 0",
    },
  })
);

interface IProps {}

const HomeScreen = (props: IProps) => {
  const classes = useStyles();
  const [challenges, setChallenges] = useState<IChallenge[]>([]);
  const [alignment, setAlignment] = useState("left");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  useEffect(() => {
    fetchChallenges();
  }, []);

  const history = useHistory();

  const fetchChallenges = () => {
    let res = getChallenges();
    setChallenges(res);
  };

  const renderNoChallenge = () => {
    return (
      <Typography variant="h6">No challenges have been created yet.</Typography>
    );
  };

  const filterChallenges = (challenges: IChallenge[]) => {
    let copyChallenges = [...challenges];
    if (alignment === "left") {
      return copyChallenges.sort((a, b) => a.createdAt - b.createdAt);
    } else {
      return copyChallenges.sort((a, b) => b.upVotes - a.upVotes);
    }
  };

  const renderChallenges = () =>
    filterChallenges(challenges).map((challenge) => (
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
      <Grid item container xs={12} justifyContent="center" alignItems="center">
        <Typography className={classes.filterText} variant="h6">
          Filter by:{" "}
        </Typography>
        <ToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton className={classes.button} value="left">
            <Typography variant="body1">Creation time</Typography>
          </ToggleButton>

          <ToggleButton className={classes.button} value="right">
            <Typography variant="body1">Upvotes</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid
        item
        justifyContent="center"
        container
        xs={12}
        className={classes.noChallenge}
      >
        {challenges.length === 0 && renderNoChallenge()}
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
