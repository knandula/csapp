import {withStyles} from '@material-ui/core/styles';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, CircularProgress, TextField} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useToasts} from 'react-toast-notifications';

import {login} from './login.slice';
import {fetch} from '../Dashboard/dashboard.slice';

const styles = () => ({
    root: {},
    formWrapper: {
        width: '50%',
        margin: '0 auto',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '40px',
        textAlign: 'center',
        border: '1px solid #C8C0FF',
        borderRadius: '15px',
        boxShadow: '0px 7px 24px -11px #7966FF',
        fontFamily: 'Rubik'
    },
    submitBtn: {
        margin: '10px 15px'
    },
    formControls: {
        display: 'flex',
        flexDirection: 'column'
    },
    formControl: {
        margin: '10px 0'
    },
    loaderWrapper: {
        width: 20,
        height: 20,
        margin: '0 0 0 10px'
    }
});

const validationSchema = yup.object()
    .shape({
        email: yup.string()
            .required(),
        password: yup.string()
            .required()
    });

const LoginEmployee = (props) => {
    const {classes} = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const {addToast} = useToasts();

    const loginState = useSelector(state => state.get('login'));

    const {handleSubmit, register, errors} = useForm({
        validationSchema
    });

    useEffect(() => {
        if(loginState.isAuthenticated) {
            history.push('/dashboard');
            dispatch(fetch());
        }

        if(loginState.error && !loginState.error.success) {
            addToast(`${loginState.error.message}`, {appearance: 'error', autoDismiss: false});
        }
    }, [loginState]);

    const handleLogin = (data) => {
        const {email, password} = data;
        dispatch(login({email, password}));
    };

    return <React.Fragment>
        <form className={classes.formWrapper} onSubmit={handleSubmit(handleLogin)} autoComplete="off" noValidate>
            <div className={classes.formControls}>
                <TextField error={!!errors.email} type="email" name="email" inputRef={register({required: true})} className={classes.formControl} label="Email ID" placeholder="Email ID"/>
                <TextField error={!!errors.password} name="password" inputRef={register({required: true})} className={classes.formControl} placeholder="Password" label="Password" type="password"/>
            </div>
            <Button type="submit" className={classes.submitBtn} color="primary" variant="contained">
                Login
                {
                    loginState.loading ? <span className={classes.loaderWrapper}>
                        <CircularProgress color="secondary" size={20}/>
                    </span> : ''
                }

            </Button>
            <Button className={classes.submitBtn} color="primary" variant="outlined">Clear</Button>
        </form>
    </React.Fragment>;
};

LoginEmployee.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    login: PropTypes.any
};

export default withStyles(styles)(LoginEmployee);
