import React from "react";
import {TextField} from "@material-ui/core";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>  ({
        root:{
            width:'100%',
            marginLeft: theme.spacing(45)
        },
        input: {
            '& > *': {
                margin: "auto",
                width: '60ch',

            }
        }

    })
);
function Input(props) {
    const classes = useStyles();

    function updateInput(event) {
        props.onChange(event.target.value);
    }
    return (
        <div className={classes.root}>
        <TextField onChange={updateInput} className={classes.input} id="standard-basic" label="Search:"/>
        </div>
    )
}

export default Input;