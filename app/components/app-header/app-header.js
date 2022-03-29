import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { screens } from '../../config';
import { textStyle } from '../../constants';
import { theme } from '../../theme';
import styles from './app-header.styles';

function AppHeader(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      {
        props.goBack ? (
          <TouchableOpacity onPress={() => props.goBack()}>
            <Entypo name='chevron-left' size={30} color={theme.colors.gray4} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 26 }} />
        )
      }
      <TouchableOpacity style={styles.wallet} onPress={() => props.navigation.navigate(screens.home)}>
        <Text style={[textStyle.heading, { color: 'black', marginHorizontal: 10 }]}>{props.title}</Text>
      </TouchableOpacity>
      <View style={{ width: 26 }} />
    </View>
  );
}

export default withTheme(AppHeader);
