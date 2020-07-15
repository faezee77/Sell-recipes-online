import React from 'react';
import clsx from 'clsx';
import {createMuiTheme, fade, makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import logo from '../../../public/images/logo.png'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import {MuiThemeProvider} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {primaryColor, secondryColor} from "../../constants/defaultsValues";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 135;
// const myTheme = createMuiTheme({
//     palette: {
//         primary: {
//             main: primaryColor,
//         },
//         secondary: {
//             main: secondryColor,
//         },
//     },
// });

const useStyles = makeStyles((theme) => ({
    text:{
        color:primaryColor
    },


    icon:{
        color:"white",
        fontSize:'30px',
        // width:'30px',
        // minWidth:'30px'
    },
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: primaryColor,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        backgroundColor: primaryColor,
        // marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        // right:'90%',
        // left:0,
        width: drawerWidth+30,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        // borderRadius:'0 90% 90% 0',
        // backgroundColor:'#e8e6e6',
        // marginTop:'30px',
    },
    drawerClose: {
        // marginTop:'30px',
        // right:'94%',
        // left:0,
        // borderRadius:'0 90% 90% 0',
        // backgroundColor:'#e8e6e6',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },

    toolbar: {
        Color:primaryColor,
        display: 'flex',
        alignItems: 'center',
        // padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        // marginRight: -drawerWidth,

    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        // marginLeft: theme.spacing(1),
    },
    divtitle:{
        backgroundColor:'white',
        borderRadius:'50%',
        marginRight:'450px'
    },
    title: {
        zIndex:'1000',
        // display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        // marginRight:'40%'

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        // marginLeft: theme.spacing(2),
        // marginRight: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        // left:0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        // textAlign:'right'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    mytxt:{
        color:"white"
    }

}));

export default function SideBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const mobileMenuId = 'primary-search-account-menu-mobile';


    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <div className={classes.sectionDesktop}>

                            <IconButton>
                                <HomeIcon className={classes.icon}/>
                            </IconButton>
                        <Link className={classes.mytxt} href="#" variant="body1" alignItems="flex" >
                            <p>ورود / خروج</p>
                        </Link>

                    </div>
                    <div className={classes.grow} />
                    <div className={classes.divtitle}>
                        <img className={classes.title} src ={logo} width='60' height='60' alt=''/>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="جستجو…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
