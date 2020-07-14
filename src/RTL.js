import React from 'react';
import {create} from 'jss';
import {jssPreset, StylesProvider} from '@material-ui/core/styles';
import rtl from 'jss-rtl';

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

export default function RTL({children}) {
    return (
        <StylesProvider jss={jss}>
            {children}
        </StylesProvider>
    );
}