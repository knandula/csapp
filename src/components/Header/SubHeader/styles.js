import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        backgroundColor: 'white',
        boxShadow: '0px 1px 10px rgba(199, 210, 230, 0.32)',
        minHeight: 48,
        height: 48,
        zIndex: 1
    },
    navbar: {
        display: 'flex',
        height: 48,
        fontSize: 14
    },
    navItem: {
        cursor: 'pointer',
        width: 'auto',
        margin: `0 ${theme.spacing(4)}px`,
        '&:hover:before': {
            content: '""',
            position: 'absolute',
            width: 'calc(100% - 32px)',
            border: `2.5px solid ${theme.palette.primary.dark}`,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            top: 0,
        }
    },
    link: {
        color: `${theme.palette.textColor.subtitle}`
    },
    active: {
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 'calc(100% - 32px)',
            border: `2.5px solid ${theme.palette.primary.dark}`,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            top: 0,
        },

        '& $link': {
            color: `${theme.palette.textColor.main}`
        }
    }
}));

export default useStyles;
