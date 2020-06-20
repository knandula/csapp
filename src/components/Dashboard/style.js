import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '20px',
    },
    paper: {
        padding: '20px',
        textAlign: 'center',
        color: theme.palette.textColor.secondary,
        marginBottom: '8px',
        minHeight: '100px',
        whiteSpace: 'normal',
        boxShadow: '0px 1px 10px rgba(199, 210, 230, 0.32)'
    },
    mainHeader: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
        display: 'flex',
        alignItems: 'center',
    },
    marginBottom: {
        marginBottom: '20px'
    },
    personIcon: {
        color: 'orange'
    },
    subHeader: {
        color: theme.palette.textColor.subtitle,
        fontFamily: 'Rubik',
        fontWeight: 300,
        fontSize: '12px',
        lineHeight: '17px',
        textAlign: 'left',
        paddingTop: '10px',

    },
    textEmpNo: {
        textAlign: 'left',
        paddingTop: '15px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '48px',
        lineHeight: '56px',
        display: 'flex',
        alignItems: 'center'
    },
    statsWrapper: {
        display: 'flex',
        '& $statsContainer': {
            borderRight: '2px dashed #C7D2E6',
            marginRight: '20px',
            '&:last-child': {
                borderRight: 'none'
            }
        }
    },
    statsContainer: {},
    statsSection: {
        fontSize: 14,
        padding: '0 20px',
    },
    alignIcon: {
        textAlign: 'left',
    },
    success: {
        color: 'green'
    },
    fail: {
        color: 'red'
    },
    staticCircularbar: {
        width: '100px',
        height: '100px',
        marginTop: '20px',
    },
    tagCloud: {
        width: '50%',
        padding: '20px',
        textAlign: 'center',
        margin: 'auto',
    },

}));


export default useStyles;
