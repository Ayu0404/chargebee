import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';
import Lock from '@material-ui/icons/Lock';
import Arrow from '@material-ui/icons/ArrowForward';

const NavBar = () => {
    const navBarDiv = makeStyles({
        root : {
            'display' : 'flex',
            'justify-content' : 'space-around',
            'align-items' : 'flex-start'
        }
    });
    const useNavBar = navBarDiv();
    const chargebee = makeStyles({
        root : {
            'font-family' : 'Lobster, cursive',
            'font-weight' : '300',
            'display' : 'block'
        }
    });
    const useChargebee = chargebee();
    return(
        <div className={useNavBar.root}>
            <h1 className={useChargebee.root}>Chargebee</h1>
            
            <Buttons />
        </div>
    );
};

const Buttons = () => {
    const loginButton = makeStyles({
        root : {
            'backgroundColor' : 'transperant',
            'border' : 'none'
        }
    });
    const loginButtonUseStyles = loginButton();

    const demoButton = makeStyles({
        root : {
            'backgroundColor' : '#ff5722',
            'color' : 'white',
            'border' : 'none',
            'borderRadius' : '5px'
        }
    });
    const demoButtonUseStyles = demoButton(); 
    return(
        <ButtonGroup>
            <Button startIcon={<Lock />} endIcon={<Arrow />} className={loginButtonUseStyles.root} >
                Login
            </Button>
            <Button endIcon={<Arrow />} className={demoButtonUseStyles.root}>
                Schedule a Demo
            </Button>
        </ButtonGroup>
    );
};

export default NavBar;