import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(70)
    },
    button:{
        marginLeft: 'auto',
    }
}));
function Submit(props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Button onClick={props.submit} variant="outlined" size="medium" color="primary" className={classes.button}>
            Search
        </Button>
        </div>
    );
}
export default Submit;