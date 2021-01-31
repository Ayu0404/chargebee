import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Arrow from '@material-ui/icons/ArrowForward'
import DoneSharp from '@material-ui/icons/DoneSharp'
import Paper from '@material-ui/core/Paper'

const Section2 = () => {
    const sectionMakeStyles = makeStyles({
        root : {
            'position' : 'relative',
            'left' : '10%',
            'marginTop' : '2rem'
        },
        header : {
            'fontFamily' : 'SFMono-Regular,Menlo',
            'color' : '#500ad2',
            'padding' : '0.5rem'
        },
        heading : {
            'fontWeight' : '800',
            'padding' : '0.5rem'
        },
        para : {
            'marginBottom' : '2rem'
        },
        list : {
            'display' : 'flex',
            'justify-content' : 'space-around',
            'align-items' : 'center',
            'marginBotton' : '2rem'
        }
    });
    const useSectionStyles = sectionMakeStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} className={useSectionStyles.root}>
                <Typography subtitle1 className={useSectionStyles.header} >
                    No more spreadsheet errors
                </Typography>
                <Typography variant='h4' className={useSectionStyles.heading} >
                    Automate Recurring Billing
                </Typography>
                <Typography className={useSectionStyles.para}>
                    Scale your SaaS through 480+ recurring <br />
                    billing scenarios that automate who you bill, <br />
                    when, and how. No humans, no spreadsheets, no missed payments!
                </Typography>
                    <Grid className={useSectionStyles.list}>
                        <Grid item xs={6} sm={3}>
                            <Paper>
                                <Typography>Billing Schedules</Typography>
                                <Typography>Proration &amp; Invoicing</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper>
                            <Typography  startIcon={<DoneSharp />} >Tax management</Typography>
                            <Typography>Payment Methods</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br />
                <Button variant="outlined" color="primary" endIcon={<Arrow />}>
                    Learn more  
                </Button>
            </Grid>
            <Grid item xs={6}>
                <img 
                src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/recurring-billing-graphic.svg" 
                alt="recurring bill graphic" />
            </Grid>
        </Grid>
    );
};

export default Section2;