import {AppBar, Avatar, Badge, IconButton, Menu, MenuItem, Toolbar, withStyles} from '@material-ui/core';
import {Apps, KeyboardArrowDown} from '@material-ui/icons';
import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import 'react-activity-feed/dist/index.css';
import {useDispatch} from 'react-redux';
import {reset} from '../../Dashboard/dashboard.slice';
import {logout} from '../../Login/login.slice';
import navs from '../config';
import SubHeader from '../SubHeader/index';
import useStyles from './styles';


const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    },
}))(Badge);

const MainHeader = props => {

    const {history} = props;
    const dispatch = useDispatch();
    const classes = useStyles();

    const [subNav, setSubNav] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const path = history.location.pathname;
        const activeNav = _.filter(navs, (n) => path.includes(n.label.toLowerCase()))[0];
        setSubNav(null);

        if(activeNav && activeNav.subNav && activeNav.subNav.length > 0) {
            setSubNav(activeNav.subNav);
        }
    }, [history.location.pathname]);

    const handleUserMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    const Logout = () => {
        dispatch(logout());
        dispatch(reset());
        history.replace('/');
    };

    const routingHandler = (pageName) => {
        switch (pageName) {
        case 'Profile':
            history.push('/profile');
            break;
        default :
            // props.history.push('/');
        }
        handleCloseUserMenu();
    };

    const open = Boolean(anchorEl);

    return <React.Fragment>
        <div className={classes.toolbar}>
            <AppBar position="static" elevation={0} className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.navigationBar}>
                        <div className={classes.logoWrapper}>
                            <img src="/assets/images/acme_logo.svg" alt="Engagepulse"/> &nbsp;
                            <img src="/assets/images/poweredByEngagepulse.svg" alt="Engagepulse"/>
                        </div>
                    </div>

                    <div className={classes.userInfo}>
                        <IconButton className={classes.iconButtonToolbar}>
                            <Apps/>
                        </IconButton>
                        <IconButton aria-label="Notifications" className={classes.iconButtonToolbar}>
                        </IconButton>
                        <div className={classes.avatarWrapper}>
                            <div className={classes.avatarDiv}>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src={'/assets/images/no_avatar.png'} className={classes.bigAvatar}/>
                                </StyledBadge>
                            </div>

                            <IconButton
                                onClick={handleUserMenu}
                                aria-label="Current User Account"
                                aria-haspopup="true"
                                className={classes.iconButtonToolbar}
                                color="inherit"
                            >
                                <KeyboardArrowDown/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                id=""
                                keepMounted
                                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                                open={open}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={() => routingHandler('Profile')}>Profile</MenuItem>
                                <MenuItem onClick={Logout}>Log Out</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            {
                subNav ? <SubHeader navs={subNav} {...props} /> : ''
            }
        </div>
    </React.Fragment>;
};

export default MainHeader;
