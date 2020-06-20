import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

export default createMuiTheme({
    palette: {
        primary: {
            light: colors.palePurple,
            main: colors.mainPurple,
            dark: colors.darkPurple,
            contrastText: colors.white,
            yellow: colors.yellow,
            paleYellow: colors.paleYellow,
        },
        secondary: {
            light: '#efefef',
            main: '#FFFFFF',
            dark: '#8d8d8d',
            contrastText: '#000',
        },
        tertiary: {
            main: '#FFC100'
        },
        background: {
            main: colors.backgroundPurple,
        },
        icon: {
            main: colors.iconsColor
        },
        textColor: {
            main: colors.textColor,
            subtitle: colors.lightGrey,
            paleGrey: colors.paleGrey
        },
        lightTextColor: {
            main: colors.lightTextColor
        },
        error: red,
        navIconColor: {
            main: '#e0e0e0',
        },
        subHeader: {
            main: '#e0e0e0',
        },
        common: {
            colors
        },
    },
    space: {
        unit: 4,
    },
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    },
    overrides: {
        MuiContainer: {
            root: {
                backgroundColor: colors.backgroundPurple
            }
        },
        MuiIconButton: {
            root: {
                color: colors.iconsColor
            }
        },
        MuiButton: {
            whiteSpace: 'nowrap',
            boxShadow: '0px 1px 10px rgba(199, 210, 230, 0.32)',
            outlined: {
                borderRadius: '50px'
            },
            contained: {
                backgroundColor: colors.mainPurple,
                color: colors.white,
                borderRadius: '50px',
                '&:hover': {
                    backgroundColor: colors.palePurple
                },
                '&.Mui-disabled': {
                    backgroundColor: colors.palePurple,
                    color: colors.white
                }
            },
            startIcon: {
                color: colors.white,
                '& > svg': {
                    color: colors.white
                }
            },
            endIcon: {
                color: colors.white,
                '& > svg': {
                    color: colors.white
                }
            }
        },
        MuiFab: {
            extended: {
                backgroundColor: colors.mainPurple,
                '& svg': {
                    borderRadius: '50%',
                    backgroundColor: colors.white,
                    color: colors.mainPurple
                },
                '&:hover': {
                    backgroundColor: colors.darkPurple
                }
            }
        },
        MuiTypography: {
            root: {
                color: colors.textColor
            }
        },
        MuiTableCell: {
            head: {
                color: colors.darkPurple,
                padding: '10px',
                backgroundColor: colors.white,
                '&:first-child': {
                    borderRadius: '10px 0 0 10px',
                },
                '&:last-child': {
                    borderRadius: '0 10px 10px 0',
                },
            },
            active: {
                color: colors.darkPurple,
            },
            body: {
                fontFamily: 'Rubik',
                color: '#787F92',
                '& .responsive': {
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                }
            },
            root: {
                padding: 0,
                whiteSpace: 'nowrap',
            }
        },
        MuiTableBody: {
            root: {
                fontFamily: 'Rubik'
            }
        },
        MuiSvgIcon: {
            root: {
                color: colors.iconsColor
            }
        },
        MuiStepLabel: {
            active: {
                color: '#787F92'
            },
            label: {
                color: '#B3B7C2'
            }
        },
        MuiOutlinedInput: {
            input: {
                fontFamily: 'Rubik'
            }
        },
        MuiListItemIcon: {
            root: {
                minWidth: '31px'
            }
        },
        MuiPaper: {
            rounded: {
                borderRadius: '10px'
            }
        },
        MuiCircularProgress: {
            root: {
                width: 'inherit',
                height: 'inherit'
            }
        },
        MuiDivider: {
            root: {
                backgroundColor: colors.iconsColor
            }
        },
        MuiAutocomplete: {
            popup: {
                zIndex: 9999
            }
        },
        MuiSelect: {
            icon: {
                color: colors.iconsColor
            }
        }
    }
});
