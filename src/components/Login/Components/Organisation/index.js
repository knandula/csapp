import React, {useEffect} from 'react';
import {Button, InputAdornment, TextField, Typography} from '@material-ui/core';

import useStyles from '../User/styles';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

const UserLogin = () => {
    const classes = useStyles();
    const history = useHistory();
    const validationSchema = yup.object()
        .shape({
            orgDomain: yup.string()
                .required(),
        });

    const {handleSubmit, register, errors} = useForm({
        validationSchema
    });

    const handleOrgDomain = (data) => {
        const {orgDomain} = data;
        localStorage.setItem('orgDomain', orgDomain);
        history.push(`/${orgDomain}/login`);
    };

    useEffect(() => {
        const orgDomain = localStorage.getItem('orgDomain');
        if(orgDomain) {
            history.replace(`/${orgDomain}/login`);
        }
    }, [history]);

    return <React.Fragment>
        <h2>Testing</h2>
        <Typography>
            Type your Organisation Domain
        </Typography>
        <div className={classes.textContainer}>to access your account</div>
        <form className={classes.form} onSubmit={handleSubmit(handleOrgDomain)} autoComplete="off" noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Organisation Domain"
                name="orgDomain"
                error={!!errors.orgDomain}
                inputRef={register({required: true})}
                autoFocus
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        .engagepulse.com
                    </InputAdornment>
                }}

            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Continue
            </Button>
        </form>
    </React.Fragment>;
};

export default UserLogin;
