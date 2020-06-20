import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        overflowY: 'hidden',
    },
    backgroundImage: {
        backgroundImage: 'url(/assets/images/People.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'left',
        backgroundRepeat: 'repeat'
    },
    logoImage: {
        width: '300px',
        height: '100px'
    },
    loginLeftPanelWrapper: {
        height: '100%',
        backgroundColor: 'rgba(75, 63, 159, .6)',
        color: 'white',
        padding: '5% 14%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    loginContent: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,0.04)',
        boxShadow: '0px 4px 4px rgba(120, 127, 146, 0.5)',
        backdropFilter: 'blur(15px)',
        padding: '33px',
        width: '60%',
        textAlign: 'justify'
    },
    outertextWrapper: {
        color: 'white',
        paddingBottom: '15px',
    },
    innertextWrapper: {
        color: 'white',
        fontFamily: 'Rubik',
        fontSize: '14px'
    },
    loginWrapper: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    loginHeader: {
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.textColor.main,
        fontWeight: 'bold',
        fontSize: 18,
        width: '100%',
        padding: '5% 0'
    },
    loginFooter: {
        padding: '15px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: 100,
        fontSize: 9
    },
    reservedText: {
        color: theme.palette.textColor.subtitle,
        fontSize: 9
    },
    footerLinks: {
        '& a': {
            color: theme.palette.textColor.main
        }
    },
    paper: {
        margin: '64px 22%',
        display: 'flex',
        flexDirection: 'column',

    },
    textContainer: {
        color: theme.palette.textColor.subtitle,
        fontSize: '14px',
        fontFamily: 'Rubik',
        fontWeight: '300'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    controlLinksWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',

        '& span': {
            fontSize: 14
        }
    },
    loaderWrapper: {
        width: 20,
        height: 20,
        margin: '0 0 0 10px'
    },
    textOrgDomainWrapper: {
        fontSize: '12px',
        display: 'block',
        textAlign: 'center',
        paddingTop: '5px',
    }
}));

export default useStyles;
