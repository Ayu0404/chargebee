import React from 'react'
import ImageSvg from './Image.svg'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Arrow from '@material-ui/icons/ArrowForward'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import {makeStyles} from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Section1 = () => {
    const cardmakeStyles = makeStyles({
        root : {
            'position' : 'absolute',
            'left' : '50%',
            'top' : '30%',
            'transform' : 'translate(-50%)',
            'width' : '50%',
            'text-align' : 'center'
        }
    });
    const cardUseStyles = cardmakeStyles();
    const makeStylesPurple = makeStyles({
        root : {
            'color' : '#500ad2'
        },
    });
    const usePurple = makeStylesPurple();
    const buttonDisplay = makeStyles({
        root : {
            'display' : 'flex',
            'justify-content' : 'space-around',
            'align-items' : 'center'
        }
    });
    const demoDisplay = makeStyles({
        root : {
            'backgroundColor' : '#500ad2',
            'color' : 'white',
            '&:hover': {
                'box-shadow' : '2px 2px 2px 2px #500ad2',
                'backgroundColor' : '#500ad2',
              }
        }
    });
    const signupDisplay = makeStyles({
        root : {
            'border' : '1px solid #500ad2',
            'color' : '#500ad2',
            'backgroundColor' : 'white'
        }
    });
    const setButtonDisplay = buttonDisplay();
    const setdemoDisplay = demoDisplay();
    const setsignupDisplay = signupDisplay();

    const imageMakeStyles = makeStyles({
        img : {
            'margin-top' : '25rem',
            'overflow-x' : 'hidden',
            'width' : '100%',
            'height' : '100%',
        }
    });
    const useimageMakeStyles = imageMakeStyles();
    return (
        <div>
            <Card className={cardUseStyles.root}>
                <CardContent>
                    <Typography variant='h3' className={usePurple.root}>
                        Subscription Billing &amp; Revenue Operations
                    </Typography>
                    <Typography variant='h3'>
                        for Fast-growth B2B SaaS
                    </Typography>
                    <Typography variant='subtitle1'>
                    Get the operational sophistication to achieve, sustain,
                    <br />
                    and scale recurring revenue.
                    </Typography>
                </CardContent>  
                <CardActions  className={setButtonDisplay.root}>
                    <Button endIcon={<Arrow />}  size="large" className={setdemoDisplay.root}>
                        Schedule a demo
                    </Button>
                    <Button  endIcon={<Arrow />} size="large" className={setsignupDisplay.root}>
                        Sign up for free
                    </Button>
                </CardActions>      
            </Card>

            <div>
                <Paper>
                    <Grid container justify="center" alignItems="center">
                        <Grid item className={useimageMakeStyles.img}>
                            <img alt="svg" src={ImageSvg} />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
};

export default Section1;
