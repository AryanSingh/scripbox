import React, {useState, useEffect} from "react";
import {Grid, TextField,FormControl, InputLabel} from "@material-ui/core";

import { MultipleSelect } from 'react-select-material-ui';


const CreateChallengeScreen = () => {
   const options = ['Javascript', "Python", "React", "Angular" , "Java", "Typescript"]

    return(
      <Grid container direction='column'>
        <Grid container direction='row' justifyContent='center' item>
          <TextField placeholder='challenge name' variant="outlined" />
        </Grid>
        <Grid container direction='row' justifyContent='center' item>

        <TextField placeholder='challenge description' variant="outlined" />
        </Grid>
        <Grid container direction='row' justifyContent='center' item>

          <Grid container direction='row' justifyContent='center' item>

          <MultipleSelect placeholder='Select tags' id="multiple-select" SelectProps={{isCreatable: true}} variant='outlined' options={options} onChange={(arg) => console.log('arg', arg)}/>
          </Grid>
      </Grid>
    )
}

export default CreateChallengeScreen;