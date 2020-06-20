import { create } from 'jss';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { jssPreset } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { JssProvider } from 'react-jss';
import { Provider } from 'react-redux';
import App from './containers/App';
import { createStore } from './store';
import theme from './theme';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const jss = create(jssPreset());
jss.setup({ insertionPoint: document.head });

const Root = props => {
    const store = props.store;
    return (
        <Provider store={store}>
                <JssProvider jss={jss}>
                    <MuiThemeProvider theme={theme}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                <App />
                        </MuiPickersUtilsProvider>
                    </MuiThemeProvider>
                </JssProvider>
        </Provider>
    );
};

const store = createStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

Root.propTypes = {
    store: PropTypes.object,
};
