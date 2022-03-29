import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { Searchbar, withTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from '../../components';
import { screens } from '../../config';
import { getHeroes } from '../../redux/api/data.api';
import { SectionHeader } from '../components';
import { HeroCard } from '../components/HeroCard';
import styles from './home.styles';

const Home = (props) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.Data);

  const i18 = (key) => {
    return t(key);
  };

  const [list, setList] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      getHeroes(dispatch);
      setMounted(true);
    }
  }, [mounted]);

  useEffect(() => {
    setList(data);
  }, [data])

  const changeFilter = (e) => {
    let filter = e.toLowerCase().trim();
    let filtered = data?.filter((item) => item.name.toLowerCase().includes(filter) || item.alterEgo.toLowerCase().includes(filter) || item.description.toLowerCase().includes(filter));
    setList(filtered);
  }

  return (
    <View style={styles.container}>
      <AppHeader title={'Take Home App'} {...props} />
      <View style={styles.sectionWrapper}>
        <Searchbar onChangeText={changeFilter} />
      </View>
      <ScrollView>
        <View style={styles.sectionWrapper}>
          <SectionHeader style={{ marginTop: 24 }} title={i18('Home.list_header_text')} />
        </View>
        <View style={styles.sectionWrapper}>
          {
            list?.map((item, key) => {
              return (<HeroCard data={item} key={key} onPress={() => props.navigation.navigate(screens.detail, { id: item.id })} />)
            })
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(Home);
