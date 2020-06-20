import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';
import { renderToStaticMarkup } from 'react-dom/server';
import { isLoading } from '../selectors';
import Router from './Router';
import './App.scss';

import { Socket } from 'react-socket-io';

const mapStateToProps = (state) => ({
    loading: isLoading(state),
});

const options = { transports: ['uws'] };

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
        this.handleOverlay = this.handleOverlay.bind(this);
    }

    handleOverlay() {
        this.setState({open: !this.state.open});
    }

    componentDidMount() {
        this.props.initialize({
            options: { renderToStaticMarkup },
        });
    }

    render() {
        return (
            <Socket uri="http://localhost:3000/" options={options}>
                <Router />
            </Socket>
        );
    }
}

App.propTypes = {
    initialize: PropTypes.func,
};

export default connect(mapStateToProps)(withLocalize(App));
