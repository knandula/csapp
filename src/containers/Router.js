import React from 'react';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import ELayout from './ELayout';
import LoginLayout from './LoginLayout';
import Dashboard from '../components/Dashboard';
import AppRoute from './AppRoute';
import UserLogin from '../components/Login/Components/User';

const useStyles = makeStyles({
    root: {
        padding: '0px'
    }
});
const Router = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Switch>

                    <AppRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                        layout={ELayout}
                        private={true}
                    />
                    <AppRoute
                        exact
                        path="/login"
                        component={UserLogin}
                        layout={LoginLayout}
                        private={false}
                    />
                    <Redirect to="/dashboard" />
                    {/*<AppRoute path="*" component={NotFound} layout={Layout} />*/}
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Router;
