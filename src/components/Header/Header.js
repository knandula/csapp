/* eslint-disable react/prop-types */
import {AppBar} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import {Apps} from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import _ from 'lodash';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {logout} from '../Login/login.slice';
import SubHeader from './SubHeader';

let headerNavs = [
    {
        id: '1',
        links: '/dashboard',
        title: 'Dashboard',
        showTo: ['admin', 'employee']
    },
    {
        id: '2',
        links: '/people',
        title: 'People',
        showTo: ['admin']
    },
    {
        id: '3',
        links: '/conversations',
        title: 'Conversations',
        showTo: ['admin', 'employee']
    },
    {
        id: '4',
        links: '/surveys',
        title: 'Surveys',
        showTo: ['admin']
    },
    {
        id: '5',
        links: '/actions/all',
        title: 'Actions',
        showTo: ['admin', 'employee']
    },
];

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    appbar: {
        height: '56px'
    },
    toolbar: {
        minHeight: '56px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        height: '56px',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center'
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    link: {
        color: theme.palette.primary.light,
        height: '56px',
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 14,
        fontWeight: '100',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    toolbarLink: {
        height: '56px',
        color: theme.palette.primary.light,
        fontSize: 14,
        fontWeight: '100',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto',
        marginTop: 20,
        '&:hover': {
            color: theme.palette.primary.contrastText,
        },
    },
    iconButton: {
        color: theme.palette.icon.main,
    },
    iconButtonToolbar: {
        color: theme.palette.icon.main,
        padding: 6,
    },
    bigAvatar: {
        position: 'relative',
        width: 40,
        height: 40,
        marginLeft: 10,
        '& ::after': {
            content: '',
            position: 'absolute',
            padding: 2,
            border: '1.5px solid white',
            borderRadius: '50%'
        }
    },
    logoWrapper: {
        width: '32%',
        display: 'flex',
        '& img': {
            marginRight: '10px'
        }
    },
    linkWrapper: {
        height: '56px',
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        textAlign: 'center',
        borderTop: '7.5px solid',
        borderTopColor: theme.palette.primary.main,
        '&:hover': {
            borderTop: '7.5px solid',
            borderTopColor: theme.palette.primary.contrastText,
            borderRadius: 5,
        },
    },
    profileDiv: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarDiv: {
        position: 'relative',
        top: 0,
        left: 0,
    },
    onlineIndicator: {
        position: 'absolute',
        top: '30px',
        left: '40px',
    },
    menuLink: {
        height: '100%',
        color: theme.palette.primary.light,
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 35,
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto',
        display: 'inline-block',
        '&:hover': {
            color: theme.palette.primary.contrastText,
        },
    },
    linkDiv: {
        height: '100%',
        minWidth: '70px',
        display: 'inline-block',
    },
    borderImage: {
        width: '100%',
        height: '5px',
        marginBottom: 10,
        objectFit: 'cover',
    },
    borderImageInactive: {
        width: '100%',
        height: '5px',
        marginBottom: 15,
        display: 'none',
    },
    selected: {
        color: theme.palette.primary.contrastText,
    },
    divInactiveNav: {
        height: 18,
    },
    divActiveNav: {
        display: 'none',
    }
}));

const ShowHeaderNavs = () => {
    const loginState = useSelector(state => state.get('login'));
    const loggedInUser = loginState.loggedInUser;

    useEffect(() => {
        if(loggedInUser) {
            headerNavs = _.reject(headerNavs, nav => !_.includes(nav.showTo, loggedInUser.role));
        }
    }, [loginState]);

    return loggedInUser && headerNavs.map((headerNav) =>
        <HeaderNavs headerNav={headerNav} key={headerNav.id}/>
    );
};

function HeaderNavs(props) {
    const classes = useStyles();
    const path = `${window.location.pathname}`;
    return (
        <NavLink to={props.headerNav.links} className={classes.menuLink} underline={'none'} activeClassName={classes.selected}>
            <div className={classes.linkDiv}>
                <img className={path === props.headerNav.links ? classes.borderImage : classes.borderImageInactive}
                     src={`${window.location.origin}/assets/icons/toolbar-border.svg`} alt="toolbar-border"/>
                <div className={path !== props.headerNav.links ? classes.divInactiveNav : null}></div>
                {props.headerNav.title}
            </div>
        </NavLink>
    );
}

function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [toolbar, setToolbar] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const isToolbarOpen = Boolean(toolbar);

    const dispatch = useDispatch();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleTranslation = () => {

    };

    const handleToolbarMenuClose = () => {
        setToolbar(null);
    };

    const handleToolbarMenuOpen = (event) => {
        setToolbar(event.currentTarget);
    };

    const routingHandler = (pageName) => {
        switch (pageName) {
        case 'Profile':
            props.history.push('/profile');
            break;
        default :
            props.history.push('/');
        }
        handleMenuClose();
    };

    const Logout = () => {
        dispatch(logout());
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu
            = <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => routingHandler('Profile')}>Profile</MenuItem>
            <MenuItem onClick={() => routingHandler('My Acoount')}>My account</MenuItem>
            <MenuItem onClick={Logout}>Log Out</MenuItem>
        </Menu>
    ;

    const toolbarId = 'toolbar-menu';
    const renderToolbar = <Menu
            anchorEl={toolbar}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={toolbarId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isToolbarOpen}
            onClose={handleToolbarMenuClose}
        >
            <MenuItem onClick={handleToolbarMenuClose}>
                <Link href='/dashboard' className={classes.link} underline={'none'}>
                    Dashboard
                </Link>
            </MenuItem>
            <MenuItem onClick={handleToolbarMenuClose}>
                <Link href='/surveys' className={classes.link} underline={'none'}>
                    Surveys
                </Link>
            </MenuItem>
            <MenuItem onClick={handleToolbarMenuClose}>
                <Link href='/people' className={classes.link} underline={'none'}>
                    People
                </Link>
            </MenuItem>
            <MenuItem onClick={handleToolbarMenuClose}>
                <Link href='/conversations' className={classes.link} underline={'none'}>
                    Conversations
                </Link>
            </MenuItem>
            <MenuItem onClick={handleToolbarMenuClose}>
                <Link href='/insights' className={classes.link} underline={'none'}>
                    Insights
                </Link>
            </MenuItem>
        </Menu>
    ;

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu
            = <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleTranslation}>
                <IconButton aria-label="Module" className={classes.iconButton}>
                    <Apps/>
                </IconButton>
                <p>Module</p>
            </MenuItem>
            <MenuItem>

            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="Profile"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    className={classes.iconButton}
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    ;

    return (
        <div className={classes.toolbar}>
            <AppBar position="static" elevation={0} className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.sectionDesktop}>
                        <div className={classes.logoWrapper}>
                            <img src="/assets/images/acme_logo.svg" alt="Engagepulse"/>
                            <img src="/assets/images/poweredByEngagepulse.svg" alt="Engagepulse"/>
                        </div>
                        <ShowHeaderNavs/>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton edge="start"
                                    className={classes.iconButton}
                                    onClick={handleToolbarMenuOpen}
                                    aria-controls={toolbarId}
                                    aria-haspopup="true">
                            <MenuIcon/>
                        </IconButton>
                        <img src="assets/images/logo.svg" width="300" alt="Engagepulse"/>
                    </div>

                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton onClick={handleTranslation} className={classes.iconButtonToolbar}>
                            <Apps/>
                        </IconButton>
                        <IconButton aria-label="Notifications" className={classes.iconButtonToolbar}>
                            <img src={`${window.location.origin}/assets/images/bell_n.svg`}/>
                        </IconButton>
                        <div onClick={handleProfileMenuOpen} className={classes.profileDiv}>
                            <div className={classes.avatarDiv}>
                                <Avatar alt="Remy Sharp" src="/assets/images/profile.png" className={classes.bigAvatar}>
                                    <span></span>
                                </Avatar>
                                <img src={`${window.location.origin}/assets/icons/online-indicator.svg`} className={classes.onlineIndicator}/>
                            </div>

                            <IconButton
                                aria-label="Current User Account"
                                aria-haspopup="true"
                                className={classes.iconButtonToolbar}
                                color="inherit"
                            >
                                <KeyboardArrowDown/>
                            </IconButton>
                        </div>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            className={classes.iconButton}
                            edge="end"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderToolbar}
            {renderMobileMenu}
            {renderMenu}
            <SubHeader/>
        </div>
    );
}

export default withRouter(Header);
