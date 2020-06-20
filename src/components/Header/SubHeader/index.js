import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {Link, List, ListItem, Toolbar} from '@material-ui/core';
import T from 'prop-types';

import useStyles from './styles';
import clsx from 'clsx';

const SubHeader = (props) => {
        const {navs, history} = props;
        const classes = useStyles();
        const [selectedIndex, setSelectedIndex] = useState(0);

        useEffect(() => {
            const path = history.location.pathname;
            const index = _.findIndex(navs, nav => nav.url === path);
            if(index !== -1) {
                setSelectedIndex(index);
            }

            if(index === -1 && path.startsWith('/people/setup')) {
                setSelectedIndex(navs.length - 1);
            }

            if(index === -1 && path.startsWith('/people/onboardings')) {
                setSelectedIndex(navs.length - 2);
            }
        }, [history.location.pathname, navs]);

        const handleNavClick = (e, nav, index) => {
            setSelectedIndex(index);
            history.push(nav.url);
        };

        return <Toolbar className={classes.toolbar}>
            <List className={classes.navbar} disablePadding="true">
                {
                    navs && navs.map((nav, index) => <ListItem key={index}
                                                               className={clsx(classes.navItem, {[classes.active]: selectedIndex === index})}
                                                               onClick={e => handleNavClick(e, nav, index)}>
                        <Link className={classes.link} underline="none">{
                            nav.label
                        }</Link>
                    </ListItem>)
                }

            </List>
        </Toolbar>;
    }
;

SubHeader.propTypes = {
    navs: T.object,
    history: T.object
};

export default SubHeader;
