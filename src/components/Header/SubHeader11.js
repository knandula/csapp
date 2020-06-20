import React from 'react';
import {Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import './SubHeader.scss';

const useStyles = makeStyles(theme => ({
    subMenu: {
        backgroundColor: 'white',
    },
    linkDiv: {
        height: '100%',
        display: 'inline-block',
    },
    submenuLink: {
        height: '100%',
        color: theme.palette.primary.dark,
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 22,
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto',
        display: 'inline-block',
        '&:hover': {
            color: theme.palette.primary.dark,
        },
    },
    linkWrapper: {
        height: '100%',
        alignItems: 'center',
        textAlign: 'center',
    },
    borderImage: {
        width: '100%',
        height: '5px',
        marginBottom: 10,
    },
    subMenuLayout: {
        display: 'none',
        height: '48px',
        position: 'relative',
        zIndex: 500,
        backgroundColor: theme.palette.primary.contrastText,
        boxShadow: '0px 1px 10px rgba(199, 210, 230, 0.32)',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center'
        },
    },
    linkText: {
        height: '100%',
        color: theme.palette.primary.dark,
        fontSize: 14,
        fontWeight: '500',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto',
        marginTop: '15px',
    },
}));


export default function SubHeader() {
    const classes = useStyles();
    const path = `${window.location.pathname}`;
    if(path.includes('/people')) {
        return (
            <div className={classes.subMenuLayout}>
                <Link href='/employee-actions' className={classes.submenuLink} underline={'none'}>
                    <div className={classes.linkDiv}>
                        <img className={classes.borderImage} src={`${window.location.origin}/assets/icons/sub-header-border.svg`} alt="submenu-border"/>
                        <br></br>
                        Employee Actions
                    </div>
                </Link>
                <Link href='people/applicants' className={classes.submenuLink} underline={'none'}>
                    <div className={classes.linkDiv}>
                        <img className={classes.borderImage} src={`${window.location.origin}/assets/icons/sub-header-border.svg`} alt="submenu-border"/>
                        <br></br>
                        Applicants
                    </div>
                </Link>
            </div>
        );
    } else if(path.includes('/actions')) {
        return <div className={classes.subMenuLayout}>
            <Link href='/employee-actions' className={classes.submenuLink} underline={'none'}>
                <div className={classes.linkDiv}>
                    <img className={classes.borderImage} src={`${window.location.origin}/assets/icons/sub-header-border.svg`} alt="submenu-border"/>
                    Tasks
                </div>
            </Link>
        </div>;
    } else if(path.includes('/surveys')) {
        return (
            <div className={classes.subMenuLayout}>
                <Link className={classes.submenuLink} underline={'none'}>
                    <div className={classes.linkDiv}>
                        <img className={classes.borderImage} src={`${window.location.origin}/assets/icons/sub-header-border.svg`} alt="submenu-border"/>
                        <br></br>
                        All Surveys
                    </div>
                </Link>
            </div>
        );
    } else {
        return <div/>;
    }
}

