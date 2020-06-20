/* eslint-disable no-invalid-this */
/* eslint-disable no-confusing-arrow */
import {withStyles} from '@material-ui/core/styles';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import {useDispatch, useSelector} from 'react-redux';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {withRouter} from 'react-router-dom';

import {fetchSidebar} from './sidebar.slice';

const styles = () => ({
    root: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: 'white',
        padding: 0,
        'margin-left': '-15px'
    },
    nested: {
        color: '#BDBDBD',
        paddingLeft: 64
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
    }
});

const NestedList = (props) => {
    const {classes, history} = props;
    const dispatch = useDispatch();
    const sidebars = useSelector(state => state.get('sidebar').sidebar);

    useEffect(() => {
        dispatch(fetchSidebar());
    }, []);

    const handleClick = (index) => {
        const sidebar = sidebars[index];
        history.push(sidebar.link);
    };
    const bool = true;
    return (
        <List component={'nav'} className={classes.root}>
            {sidebars && sidebars.map((item, index) =>
                <div key={index}>
                    <ListItem button onClick={() => handleClick(index)} className={classes.itemFont}>
                        <ListItemText inset primary={
                            item.category} classes={{root: classes.item}}/>
                        {bool ? <ExpandLess/> : <ExpandMore/>} {item.count}
                    </ListItem>
                    <Collapse in={true} timeout={'auto'} unmountOnExit>
                        <List>
                            <ListItem>
                                <ListItemText primary={item.subcategory.name}/>
                                {item.subcategory.count}
                            </ListItem>
                        </List>
                    </Collapse>
                </div>
            )}
        </List>
    );
};

NestedList.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    history: PropTypes.arrayOf(PropTypes.string)
};

export default withStyles(styles)(withRouter(NestedList));
