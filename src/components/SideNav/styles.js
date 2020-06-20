import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.textColor.main,
        height: '100%',
        boxShadow: '0px 1px 10px rgba(199, 210, 230, 0.32)',
        minHeight: 'calc(100vh - 104px)',
        backgroundColor: 'white',
    },
    nested: {
        color: '#BDBDBD',
        paddingLeft: 40
    },
    listItem: {
        fontSize: 14,
        color: theme.palette.textColor.main
    },
    item: {
        padding: 0,
    },
    itemFont: {
        color: '#828282',
        paddingLeft: 42,
        fontWeight: 500,
        '&:hover': {
            color: '#828282',
            borderLeft: '5px solid #BDBDBD',
        },
    },
    subItem: {
        padding: 0,
        '&:hover': {
            color: '#828282',
        },
    },
    subItem2: {
        padding: 0,
        fontWeight: 300,
        textDecorationLine: 'underline',
        '&:hover': {
            color: '#828282',
        },
    },
    SubItemIcon: {
        fontSize: 'medium',
        color: '#BDBDBD',
    },
    navItem: {
        textTransform: 'capitalize',
        '& > span': {
            fontSize: 14,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '16px',
            color: '#B3B7C2'
        }
    },
    link: {
        '&:hover': {
            textDecoration: 'none'
        }
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#B3B7C2',
    },
    selected: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#787F92;',
    },
    mainNav: {
        '& > span': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '21px',
            color: '#787F92',
            textTransform: 'capitalize'
        }
    }
}));

export default useStyles;
