import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { Text } from '../../../components';
import styles from './HeroCard.styles';

function HeroCard(props) {
    let style = styles.cardWrapper;
    let titleStyle = styles.header;
    let actionStyle = styles.action;
    if (props.style) {
        style = { ...style, ...props.style };
    }
    if (props.titleStyle) {
        titleStyle = { ...titleStyle, ...props.titleStyle };
    }
    if (props.actionStyle) {
        actionStyle = { ...actionStyle, ...props.actionStyle };
    }

    return (
        <TouchableOpacity style={style} onPress={props.onPress} >
            <View style={styles.imageWrapper}>
                <FastImage source={{ uri: props.data.imgUrl }} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.infoWrapper}>
                <Text style={titleStyle}>{props.data.name}</Text>
                <Text style={styles.description} numberOfLines={2} >{props.data.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default withTheme(HeroCard);
