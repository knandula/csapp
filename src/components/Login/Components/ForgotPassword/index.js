import React, {useEffect} from 'react';
import {Button, Link, TextField, Typography,} from '@material-ui/core';

import useStyles from '../User/styles';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useToasts} from 'react-toast-notifications';

import {forgotPassword} from '../../login.slice';

const UserLogin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const {addToast} = useToasts();
    const validationSchema = yup.object()
        .shape({
            email: yup.string()
                .required(),
        });

    const loginState = useSelector(state => state.get('login'));

    useEffect(() => {
        if(loginState.forgotPassword) {
            history.push('/login');
            addToast('Please check your mail for next instructions', {appearance: 'warning', autoDismiss: true});
        }
    }, [loginState]);

    const {handleSubmit, register, errors} = useForm({
        validationSchema
    });

    const handleForgotPassword = (data) => {
        const {email} = data;
        const orgDomain = localStorage.getItem('orgDomain');
        const _data = {email, orgDomain};
        dispatch(forgotPassword(_data));
    };
    return <React.Fragment>
        <Typography>
            Forgot Password
        </Typography>
        <div className={classes.textContainer}>to access your account</div>
        <form className={classes.form} onSubmit={handleSubmit(handleForgotPassword)} autoComplete="off" noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address or ID"
                name="email"
                error={!!errors.email}
                inputRef={register({required: true})}
                autoFocus
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Reset
            </Button>
            <Link className={classes.textOrgDomainWrapper} href="/login">Log In</Link>
        </form>
    </React.Fragment>;
};

export default UserLogin;
