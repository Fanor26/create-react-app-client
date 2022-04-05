import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Hidden

} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    menuButton: {
        marginRight: "16px",
    },
    title: {
        flexGrow: 1,
    },
    imagen: {
        borderRadius: "50%",
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar elevation={20} color="contained">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        MATERIAL-UI NAVBAR
                    </Typography>
                   
                    <Hidden only={["md", "lg"]}>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar
