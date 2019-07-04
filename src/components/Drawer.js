import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        textAlign: 'center'
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerListItem: {
        marginLeft: '20%'
    },
    drawerList: {
        marginTop: '30px'
    }
}));

function DrawerContainer(props) {
    const classes = useStyles();
    const NonTitleItem = (text) => (<ListItem button key={text} ><ListItemText primary={text} className={classes.drawerListItem} /></ListItem>);
    const TitleItem = (text) => (<ListItem button key={text} selected><ListItemText primary={text} className={classes.drawerListItem} /></ListItem>);
    console.log(props.isOpen);

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader} />
            <Divider />
            <List className={classes.drawerList}>
                {['My Lists', 'Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    text === 'My Lists' ? TitleItem(text) : NonTitleItem(text)
                ))}
            </List>
            <Divider />
        </Drawer>
    );
};

export default DrawerContainer;