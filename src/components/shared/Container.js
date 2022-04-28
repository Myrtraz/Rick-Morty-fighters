import React from 'react';
import { View } from 'react-native'
import STYLES from '../contants/Styles'

export default function Container({ children, nonpadding, dark }) {
    let style = { flex: 1, backgroundColor: STYLES.color.background.dark }

    if (! nonpadding) {
        style.padding = STYLES.space.screen.padding
    }

    if (dark) {
        style.backgroundColor = STYLES.color.dark
    }

    return (<View style={style}>{children}</View>);
}