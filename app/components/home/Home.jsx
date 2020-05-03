import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {home_deco} from '../../assets/img';
import colors from '../../assets/color';
import {changeNavigationState} from './action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: 'white'}}>
      <SafeAreaView style={css.container}>
        <View style={css.deco}>
          <Image source={home_deco} />
        </View>
        <View style={css.sloganView}>
          <Text style={css.slogan}>안녕하세요{'\n'}쑥쑥아이입니다</Text>
        </View>
        <View style={css.interactionView}>
          <TouchableOpacity
            style={[css.btnBG, {backgroundColor: colors.mainColor}]}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={css.btnText}>로그인하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[css.btnBG, {backgroundColor: colors.sukGray}]}
            onPress={() => {
              navigation.navigate('Join');
              // dispatch(changeNavigationState('Join'));
            }}>
            <Text style={css.btnText}>회원가입하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[css.btnBG, {backgroundColor: colors.mainColor}]}
            onPress={() => {
              navigation.navigate('Test');
              // dispatch(changeNavigationState('Join'));
            }}>
            <Text style={css.btnText}>테스트모드</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const css = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    // backgroundColor: 'yellow',
    height: '100%',
  },
  deco: {
    marginTop: 80.7,
  },
  sloganView: {
    marginTop: 15,
  },
  slogan: {
    fontSize: 30,
    lineHeight: 40,
    fontFamily: 'GmarketSansMedium',
  },
  interactionView: {
    marginTop: 30,
  },
  btnBG: {
    width: '100%',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 19,
  },
  btnText: {
    fontFamily: 'GmarketSansBold',
    fontSize: 15,
    color: 'white',
  },
});
