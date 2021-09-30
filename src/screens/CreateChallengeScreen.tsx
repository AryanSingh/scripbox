import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";

import { MultipleSelect } from "react-select-material-ui";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import { createChallenge } from "../services/dataService";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: "30%",
      minWidth: "350px",
    },
    root: {
      padding: "20px",
    },
    formContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      margin: "auto",
    },
    button: {
      width: "30%",
      minWidth: "350px",
    },
  })
);

const CreateChallengeScreen = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const checkValid = () => {
    if (name && description && tags.length !== 0) {
      return true;
    }
    return false;
  };

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Angular", label: "Angular" },
    { value: "Java", label: "Java" },
    { value: "Typescript", label: "Typescript" },
  ];

  const onSubmit = () => {
    createChallenge({
      title: name,
      description: description,
      tags: tags,
      upVotes: [],
      downVotes: [],
    });
    history.push("/");
  };

  // @ts-ignore
  return (
    <Grid className={classes.root} container direction="column">
      <Grid
        container
        item
        direction="column"
        className={classes.formContainer}
        // justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid container direction="row" item justifyContent="center">
          <Typography variant="h4">Create Challenge</Typography>
        </Grid>
        <Grid container direction="row" justifyContent="center" item>
          <TextField
            className={classes.input}
            placeholder="challenge name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid container direction="row" justifyContent="center" item>
          <TextField
            multiline={true}
            className={classes.input}
            maxRows={4}
            value={description}
            placeholder="challenge description"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid container direction="row" justifyContent="center" item>
          <MultipleSelect
            className={classes.input}
            placeholder="Select tags"
            id="multiple-select"
            SelectProps={{ isCreatable: true }}
            variant="outlined"
            options={options}
            value={tags}
            onChange={(arr) => setTags(arr)}
          />
        </Grid>
        <Grid container direction="row" justifyContent="center" item>
          <Button
            data-testid={`button${checkValid() ? "Enabled" : "Disabled"}`}
            className={classes.button}
            disableElevation
            onClick={() => onSubmit()}
            variant="contained"
            color="primary"
            disabled={!checkValid()}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateChallengeScreen;
