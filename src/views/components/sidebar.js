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
import logo from '../../images/logo.png'
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
        color:primaryColor,
        fontSize:'30px',
        width:'30px',
        minWidth:'30px'
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
        marginRight:'360px'
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

}));

export default function SideBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    // const isMenuOpen = Boolean(anchorEl);
    // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    //
    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    //
    // const handleMobileMenuClose = () => {
    //     setMobileMoreAnchorEl(null);
    // };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    //     handleMobileMenuClose();
    // };

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    // const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         id={menuId}
    //         keepMounted
    //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    // const renderMobileMenu = (
    //     <Menu
    //         anchorEl={mobileMoreAnchorEl}
    //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         id={mobileMenuId}
    //         keepMounted
    //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         open={isMobileMenuOpen}
    //         onClose={handleMobileMenuClose}
    //     >
    //         <MenuItem>
    //             <IconButton aria-label="show 4 new mails" color="inherit">
    //                 <Badge badgeContent={4} color="secondary">
    //                     <MailIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Messages</p>
    //         </MenuItem>
    //         <MenuItem>
    //
    //             <IconButton aria-label="show 11 new notifications" color="inherit">
    //                 <Badge badgeContent={11} color="secondary">
    //                     <NotificationsIcon />
    //                 </Badge>
    //             </IconButton>
    //             <p>Notifications</p>
    //         </MenuItem>
    //         <MenuItem onClick={handleProfileMenuOpen}>
    //             <IconButton
    //                 aria-label="account of current user"
    //                 aria-controls="primary-search-account-menu"
    //                 aria-haspopup="true"
    //                 color="inherit"
    //             >
    //                 <AccountCircle />
    //             </IconButton>
    //             <p>Profile</p>
    //         </MenuItem>
    //     </Menu>
    // );
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        // <MuiThemeProvider theme={myTheme}>
        <div className={classes.root}>
            <CssBaseline />

            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>

                    {/*<Typography className={classes.title}  variant="h6" noWrap>*/}
                    {/*    رسپی*/}
                    {/*</Typography>*/}
                    <div className={classes.sectionDesktop}>
                        {/*<IconButton aria-label="show 4 new mails" color="inherit">*/}
                        {/*    <Badge badgeContent={4} color="secondary">*/}
                        {/*        <ShoppingCartIcon />*/}
                        {/*    </Badge>*/}
                        {/*</IconButton>*/}

                        {/*<IconButton*/}
                        {/*    edge="end"*/}
                        {/*    aria-label="account of current user"*/}
                        {/*    aria-controls={menuId}*/}
                        {/*    aria-haspopup="true"*/}
                        {/*    onClick={handleProfileMenuOpen}*/}
                        {/*    color="inherit"*/}
                        {/*>*/}
                        {/*    <AccountCircle />*/}
                        {/*</IconButton>*/}

                        {open ?
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                            </IconButton>
                            :

                            <IconButton
                                edge="end"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon/>
                            </IconButton>
                        }
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            // onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
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
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>
            {/*{renderMobileMenu}*/}
            {/*{renderMenu}*/}
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    {/*<img className={classes.title} src ={logo} width='60' height='60' alt=''/>*/}
                    {/*<Typography variant="h6"     noWrap >*/}
                    {/*    رسپی آنلاین*/}
                    {/*</Typography>*/}

                </div>
                {/*<Divider />*/}
                <List>
                    <ListItem button key="profile">
                        <ListItemIcon>
                            <AccountCircle className={classes.icon} />
                        </ListItemIcon>
                        {open? <ListItemText primary="پروفایل" />:''}
                    </ListItem>
                    <ListItem button key="favorite">
                        <ListItemIcon>
                            <FavoriteIcon className={classes.icon}/>
                        </ListItemIcon>
                        {open? <ListItemText className={classes.mytxt} primary="علاقه مندی" />:''}
                    </ListItem>
                    <ListItem button key="cart">
                        <ListItemIcon>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon className={classes.icon}/>
                            </Badge>
                        </ListItemIcon>
                        {open? <ListItemText  primary="سبد خرید" />:''}
                    </ListItem>

                    <ListItem button key="exit">
                        <ListItemIcon>
                            <ExitToAppIcon className={classes.icon}/>
                        </ListItemIcon>
                        {open? <ListItemText primary="خروج" />:''}
                    </ListItem>
                </List>

            </Drawer>

        </div>
        // </MuiThemeProvider>

    );
}
