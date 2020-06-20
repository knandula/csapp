/* eslint-disable no-extra-parens */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, withRouter, useLocation } from 'react-router';
import { connect } from 'react-redux';


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    const {search} = useLocation();
    const params = new URLSearchParams(search);
    const token = params.get('access_token');

    if(token) {
        localStorage.setItem('AuthToken', token);
    }

    return (
        <Route
            {...rest}
            render={props => <Layout {...props}>
                <Component {...props} />
            </Layout>
            }
        />
    );

};

const mapStateToProps = (state) => ({
    login: state.get('login')
});

export default withRouter(connect(mapStateToProps, null)(AppRoute));
