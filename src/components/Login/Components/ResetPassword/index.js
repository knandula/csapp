import React, {useEffect, useState} from 'react';
import {Button, CircularProgress, IconButton, InputAdornment, TextField, Typography,} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import useStyles from '../User/styles';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {useToasts} from 'react-toast-notifications';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../login.slice';

const UserLogin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const {addToast} = useToasts();
    const [orgDomain, setOrgDomain] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const loginState = useSelector(state => state.get('login'));

    const validationSchema = yup.object()
        .shape({
            password: yup.string()
                .required()
        });

    const {handleSubmit, register, errors} = useForm({
        validationSchema
    });

    useEffect(() => {
        const domain = localStorage.getItem('orgDomain');
        if(domain) {
            setOrgDomain(domain);
        }
    }, [orgDomain]);

    useEffect(() => {
        if(loginState.isAuthenticated) {
            history.push('/dashboard');
        }

        if(loginState.resetPassword) {
            history.replace('/login');
        }

        if(loginState.error && !loginState.error.success) {
            addToast(`${loginState.error.message}`, {appearance: 'error', autoDismiss: true});
        }
    }, [loginState]);

    const handleResetPassword = (data) => {
        const {password} = data;

        const query = new URLSearchParams(history.location.search);
        const token = query.get('token');

        dispatch(resetPassword({data: {newPassword: password}, token}));
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return <React.Fragment>
        <Typography>
            Reset Password
        </Typography>
        <div className={classes.textContainer}>to access your account</div>
        <form className={classes.form} onSubmit={handleSubmit(handleResetPassword)} autoComplete="off" noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                inputRef={register({required: true})}
                autoComplete="current-password"
                error={!!errors.password}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onMouseDown={handleTogglePassword}
                            onMouseUp={handleTogglePassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!!loginState.loading}
            >
                Submit
                {
                    loginState.loading ? <span className={classes.loaderWrapper}>
                        <CircularProgress color="secondary" size={20}/>
                    </span> : ''
                }
            </Button>
        </form>
    </React.Fragment>;
};

export default UserLogin;
