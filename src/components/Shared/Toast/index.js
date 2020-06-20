import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, styled} from '@material-ui/core/styles';
import {Cancel, CheckCircleOutline, ErrorOutline} from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    icon: {
        margin: '5px 10px'
    },
    content: {
        display: 'flex',
        alignItems: 'center'
    },
    cancelIcon: {
        width: '1em',
        '& svg': {
            width: '100%',
            color: 'inherit'
        }
    }
}));

const appearances = {
    success: {
        icon: CheckCircleOutline,
        bgColor: '#DCF7E3',
        borderColor: '#66DEA4',
        color: '#66DEA4'
    },
    warning: {
        icon: ErrorOutline,
        bgColor: '#FCF3D7',
        borderColor: '#FFC100',
        color: '#FFC100'
    },
    error: {
        icon: ErrorOutline,
        bgColor: '#FEE4E2',
        borderColor: '#FA7979',
        color: '#FA7979'
    }
};

const Toast = ({appearance, children, onDismiss}) => {
        const style = appearances[appearance];
        const classes = useStyles();

        return <div style={{
            display: 'flex',
            fontWeight: 100,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: style.bgColor,
            color: style.color,
            padding: '10px 5px',
            borderRadius: '10px',
            minWidth: '350px',
            border: `1px solid ${style.borderColor}`,
            boxShadow: '0 8px 13px -2px rgb(199, 210, 230)',
            cursor: 'pointer',
            marginRight: '5px'
        }} onClick={onDismiss}>
            <div className={classes.content}>
                <style.icon className={classes.icon} style={{color: style.color}}/>

                <div>{children}</div>
            </div>
            <div className={classes.cancelIcon}><Cancel/></div>
        </div>;
    }
;

export const ToastContainer = styled('div')({
    position: 'fixed',
    top: 56,
    right: 0,
    zIndex: 99999
});

Toast.propTypes = {
    appearance: PropTypes.string,
    children: PropTypes.any,
    onDismiss: PropTypes.func
};

export default Toast;
