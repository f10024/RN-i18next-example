import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

// 다국어
import {useTranslation} from 'react-i18next';
import './src/locales/index'
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
  },[]);

  function setLocale(language){
    console.log('language >>> ' , language)
    i18n.changeLanguage(language);
  }  

  // 다국어 처리
  const {t,i18n} = useTranslation();

  return (
    <>
    <View style={styles.container}>
        <Text style={styles.text}>{t('test')}</Text>
        <Text style={styles.text}>{t('body.testText')}</Text>
        <View style={{flexDirection:'row'}}>
          <Button title='영어' onPress={() => setLocale('en')}/>
          <Button title='한국어' onPress={() => setLocale('ko')}/>
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'gray',
    flex : 1,
    alignItems:'center',
    justifyContent:'center',
  },
  text : {
    color: 'white',
    fontSize:30
  }
});

export default App;

