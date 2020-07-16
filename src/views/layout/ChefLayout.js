import React from "react";
import ChefSidebar from "../components/chefSideBar";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    containerFluid: {
        paddingRight: '25px',
        paddingLeft: '120px',
        paddingTop: '70px',

    }
}));

function ChefLayout(props) {
    const classes = useStyles();

    return (
        <div id="app-container">
            {/*<MiniDrawer/>*/}
            <ChefSidebar />
            {/*<TopNav />*/}
            <main>
                <div className={classes.containerFluid}>
                    {props.children}
                </div>
            </main>
        </div>
    );

}
export default ChefLayout;
