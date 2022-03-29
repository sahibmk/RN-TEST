import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader, Text } from '../../components';
import { getHeroes } from '../../redux/api/data.api';
import { SectionHeader } from '../components';
import { HeroCard } from '../components/HeroCard';
import styles from './detail.styles';

const Detail = (props) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.Data);
  const [detail, setDetail] = useState(null);

  const id = props.route.params.id;
  
  useEffect(() => {
    const filtered = data?.filter(item => item.id === id);
    if (filtered && filtered.length > 0) {
      setDetail(filtered[0]);
    }
  }, [data, id])

  return (
    <View style={styles.container}>
      <AppHeader title={'Take Home App'} {...props} goBack={() => props.navigation.goBack()} />
      <ScrollView>
        <View style={styles.sectionWrapper}>
          {
            detail && (
              <View style={styles.detailWrapper}>
                <FastImage source={{uri: detail.imgUrl}} style={styles.image} resizeMode='contain' />
                <Text style={styles.title}>{detail.name}</Text>
                <Text style={styles.egoText}>{detail.alterEgo}</Text>
                <Text style={styles.description}>{detail.description}</Text>
              </View>
            )
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(Detail);
