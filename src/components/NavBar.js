import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import SyncIcon from '@material-ui/icons/Sync';
import DoneIcon from '@material-ui/icons/Done';

import Button from './Button';
import '../styles/NavBar.css';


const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        height: '64px',
        justifyContent: 'center',
        backgroundColor: 'white',
        zIndex: '11111',
        boxShadow: '0 0 20px 0 rgba(0,0,0,.1)',
    },
    menuButton: {
        fontSize: '2.3rem',
        color: '#808080'
    }

}));

function NavBar(props, context) {

    const classes = useStyles();
    function handleDrawerOpen() {
        props.onToggleDrawer();
    }
    return (

        <AppBar color="default" position="fixed" className={clsx(classes.appBar)}>
            <Toolbar variant="dense">
                <div className="AppHeader__controls AppHeader__controls--start ">
                    <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen} className="Btn__outline" >
                        <MenuIcon style={{ fontSize: '2.3rem' }} />
                    </IconButton>
                    <Button name="+ New" color="primary" variant="contained" />
                </div>
                <div className="AppHeader__controls AppHeader__controls--end">
                    <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen} className="Btn__outline "  >
                        <SearchIcon className={clsx(classes.menuButton)} />
                    </IconButton>
                    <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen} className="Btn__outline"  >
                        <SettingsIcon className={clsx(classes.menuButton)} />
                    </IconButton>
                    <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen} className="Btn__outline"  >
                        <DoneIcon className={clsx(classes.menuButton)} />
                    </IconButton>
                    <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen} className="Btn__outline"  >
                        <SyncIcon className={clsx(classes.menuButton)} />
                    </IconButton>
                    <Button name="Go Premium" color="primary" variant="outlined" />
                </div>
            </Toolbar>
        </AppBar >
    );
};

export default NavBar;

// <Container>
//     <Navbar className="AppHeader__component " fixed="top" expand="lg" variant="light" bg="light">
//         <div className="AppHeader__controls AppHeader__controls--start ">
//             <MdMenu className="Spacing Icons__style " size="2.5em" onClick={() => props.onToggleDrawer()} />
//             <Button className="Spacing" name="+ New" />
//         </div>
//         <div className="AppHeader__controls AppHeader__controls--end">
//             <FiSearch className="Spacing Icons__style" size="2em" />
//             <FiSettings className="Spacing Icons__style" size="2em" />
//             <FiSquare className="Spacing Icons__style" size="2em" />
//             <FiRefreshCw className="Spacing Icons__style" size="2em" />
//             <Button variant="outline-primary" name="Go Premium" />
//         </div>
//     </Navbar>

// </Container>
