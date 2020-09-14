import React from 'react';
import { NavLink, history } from 'react-router-dom'
import clsx from 'clsx';
import logo from '../../assets/images/Merge.-1.png';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';
import EmojiEmotionsTwoToneIcon from '@material-ui/icons/EmojiEmotionsTwoTone';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#fff',
        color: '#fff',
        height: '2vh',
        display: 'flex',
    },
    appBar: {
        backgroundColor: '#4A00E0',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        background: "#fff",
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: "white",
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        background: '#fff',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    paper: {
        backgroundColor: "#fff"
    },
    contentShift: {
        background: 'white',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
            <div className={classes.root}>
                <CssBaseline style={{ backgroundColor: "white !important" }} />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar >
                        <Typography variant="h6" noWrap className={classes.title}>
                            <img src={logo} className="img-fluid merge-logo-all-student" />
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer style={{ backgroundColor: "#fff !important" }}
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawer,
                    }}
                >
                    <div style={{ backgroundColor: "white !important" }} className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {[<NavLink style={{ color: "black", decoration: "none" }} to="/student/dashboard">Dashboard</NavLink>,
                        <NavLink style={{ color: "black", decoration: "none" }} to="/nav/skillset">Test Skills</NavLink>
                            , <NavLink style={{ color: "black", decoration: "none" }} to="/student/internships">View Internships</NavLink>,
                        <NavLink style={{ color: "black", decoration: "none" }} to="/student/resume_form/false">My Info</NavLink>,
                        <button style={{ background: "transparent", color: "black" }} onClick={() => {
                            if (window.confirm("Are you sure to logout")) {
                                localStorage.removeItem("merge_jwt"); window.location.href = "/login/student";
                            }
                        }}>Logout</button>,].map((text, index) => (
                            <ListItem button key={text} style={{ backgroundColor: "white" }}>
                                <ListItemIcon>
                                    {(index === 3) ? <EmojiEmotionsTwoToneIcon /> : null}
                                    {(index === 2) ? <InboxIcon /> : null}
                                    {(index === 0) ? <MailIcon /> : null}
                                    {(index === 1) ? <AssignmentIcon /> : null}
                                    {(index === 4) ? <VpnKeyTwoToneIcon /> : null}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    {/* <Divider /> */}

                </Drawer>
                {/* <br /><br /> */}
            </div>
       
    );
}
