import React from 'react';
import { Grid,
    Link,
    Typography,
} from '@material-ui/core';
import emojis from 'emojis';
import T from 'prop-types';
import useStyles from './styles';

const Layout = (props) => {
    const { children } = props;
    const classes = useStyles();

    const currentYear = new Date().getFullYear();

    return <React.Fragment>
        <Grid container className={classes.root}>
            <Grid item lg={7} md={7} className={classes.backgroundImage}>
                <div className={classes.loginLeftPanelWrapper}>
                    <div className={classes.logoWrapper}>
                        <img className={classes.logoImage} src="/assets/images/logo.png" alt='logoImage'/>
                    </div>
                    <div className={classes.loginContent}>
                        <Typography variant="h5" className={classes.outertextWrapper}> The Always-ON Committment</Typography>
                        <Typography className={classes.innertextWrapper}>
                        At Engagepulse we believe that managing employee experience
                        is a process that should be frictionless, always on and inspire
                        confidence within the organization. Our platform is built to reduce
                        friction, promote 360-degree feedback mechanism and provide insights
                        to help organizations create an enriching employee experience.
                        </Typography>
                    </div>
                </div>

            </Grid>
            <Grid item md={5}>
                <div className={classes.loginWrapper}>
                    <div className={classes.loginHeader}>
                        { emojis.unicode(':tada:') } Welcome back { emojis.unicode(':tada:') }</div>
                    <div className={classes.paper}>
                        {children}
                    </div>
                    <div className={classes.loginFooter}>
                        <div className={classes.reservedText}> &copy; { currentYear } All Rights Reserved</div>
                        <div className={classes.footerLinks}>
                            <Link href="">Privacy Policy</Link>&nbsp;|&nbsp;
                            <Link href="">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    </React.Fragment>;
};

Layout.propTypes = {
    children: T.any
};

export default Layout;
