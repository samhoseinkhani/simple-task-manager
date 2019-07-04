import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../styles/Button.css';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        borderRadius: ' 70px',
        paddingLeft: '1.2em',
        paddingRight: '1.2em',
    },
    input: {
        display: 'none',
    },
    'button:focus': {

        outline: '0 !important'

    }
}));

function NavBar(props) {
    const classes = useStyles();
    return (
        <div>
            <Button variant={props.variant} color={props.color} className={clsx(classes['button:focus'], classes['button'])}>{props.name}</Button>
        </div>
    );
};

export default NavBar;

// button:focus {
//     /* outline: 1px dotted; */
//     /* outline: 5px auto -webkit-focus-ring-color; */
// }