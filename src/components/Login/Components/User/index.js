import React, { useState} from 'react';
import {Button, Checkbox,  FormControlLabel, IconButton, InputAdornment, Link, TextField, Typography,} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import useStyles from './styles';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';

const UserLogin = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const validationSchema = yup.object()
        .shape({
            email: yup.string()
                .required(),
            password: yup.string()
                .required()
        });

    const {handleSubmit, register, errors} = useForm({
        validationSchema
    });

    const handleLogin = (data) => {

    };

    const handleChangeOrgDomain = () => {

    };

    const handleChangeForgotPassword = () => {

    };
    return <React.Fragment>
        <Typography>
            Log in
        </Typography>
        <div className={classes.textContainer}>to access your account</div>
        <form className={classes.form} onSubmit={handleSubmit(handleLogin)} autoComplete="off" noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={!!errors.email}
                inputRef={register({required: true})}
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
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
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }}
            />
            <div className={classes.controlLinksWrapper}>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Link onClick={handleChangeForgotPassword}>
                    Forgot password?
                </Link>
            </div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Log In

            </Button>
            <Link className={classes.textOrgDomainWrapper} onClick={handleChangeOrgDomain}>want to change Organization Domain?</Link>
        </form>
    </React.Fragment>;
};

export default UserLogin;
