import React, {Component} from "react";
import TopNav from "../components/header";
import Sidebar from "../components/sidebar";
// import 'src/views/layout/layout.module.css'
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    containerFluid: {
    // width: '100%',
    // pad dingRight: '15px',
    paddingLeft: '62px',
    // marginRight: 'auto',
    // marginLeft: 'auto'
}
}))

function AppLayout(props) {
    const classes = useStyles();

        return (
            <div id="app-container">
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
