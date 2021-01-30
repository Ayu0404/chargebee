import React from 'react'

import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import {purple} from '@material-ui/core/colors';


const FixedBar = () => {
    const theme = makeStyles({
        'backgroundColor' : purple[500]
    });

    const fixedMakeStyles = makeStyles({
        root : {
            'position' : 'fixed',
            'bottom' : '0',
            'left' : '0',
            'width' : '100%',
            'height' : '10vh',
            'backgroundColor' : '#500ad2',
            'color' : 'white',
            'fontSize' : '1.5em',
            'padding' : '0.5rem'
        }
    });
    const useFixedStyles = fixedMakeStyles();
    return(
        <Typography variant='h4' className={useFixedStyles.root}>
            Adapting to a membership-first revenue model for publications 
            — An in-depth chat with Zetland's CEO, Tav Klitgaard. Save your free spot →
        </Typography>
    );
};

export default FixedBar;