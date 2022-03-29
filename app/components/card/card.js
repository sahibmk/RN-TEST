import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Touchable } from '..';
import styles from './card.styles';

function Card(props) {
    let style = styles.cardWrapper;
    if (props.style) {
        style = {...style, ...props.style};
    }
    return (
        <Touchable style={style} onPress={props.onPress} >
            {props.children}
        </Touchable>
    );
}

export default withTheme(Card);
