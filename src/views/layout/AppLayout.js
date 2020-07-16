import React from "react";
import Sidebar from "../components/sidebar";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    containerFluid: {
        paddingRight: '25px',
        paddingLeft: '120px',
        paddingTop: '70px',

    }
}));

function AppLayout(props) {
    const classes = useStyles();

    return (
        <div id="app-container">
            {/*<MiniDrawer/>*/}
            <Sidebar />
            {/*<TopNav />*/}
            <main>
                <div className={classes.containerFluid}>
                    {props.children}
                </div>
            </main>
        </div>
    );

}
export default AppLayout;
