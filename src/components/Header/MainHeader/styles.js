import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'space-between'
    },
    userInfo: {
        display: 'flex'
    },
    avatarWrapper: {
        display: 'flex'
    },
    navigationBar: {
        display: 'flex'
    },
    navbar: {
        display: 'flex',
        minHeight: 64
    },
    link: {
        fontFamily: 'Rubik',
        color: 'white',
        fontWeight: 300,
        fontSize: 14
    },
    logoWrapper: {
        display: 'flex'
    },
    navItem: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark
        }
    },
    active: {
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 'calc(100% - 32px)',
            border: '2.5px solid white',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            top: 0,
        },

        '& $link': {
            fontWeight: 'bold'
        }
    }
}));

export default useStyles;
