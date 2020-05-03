import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Userinput from './Userinput';
import color from '../../assets/color';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Userinfo = props => {
  const layouts = useSelector(state => state.layouts);
  const layoutsData = layouts.join;
  const navigation = props.navigation;
  return (
    <View style={css.Container}>
      <KeyboardAwareScrollView
        extraScrollHeight={30}
        style={{width: '100%', height: '100%'}}>
        <SafeAreaView style={css.SafeArea}>
          <View style={css.SloganWrapper}>
            <Text style={css.Slogan}>회원정보입력</Text>
          </View>
          <View style={css.FormWrapper}>
            {layoutsData.map((item, idx) => {
              return (
                <Userinput
                  key={idx}
                  title={item.title}
                  placeholder={item.placeholder}
                  type={item.type}
                  contentType={item.contentType}
                />
              );
            })}
          </View>
          <TouchableOpacity
            style={css.NextWrapper}
            onPress={() => {
              navigation.navigate('Babyinfo');
            }}>
            <Text style={css.NextText}>다음으로</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Userinfo;

const css = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
  },
  SafeArea: {
    marginLeft: 30,
    marginRight: 30,
  },
  SloganWrapper: {
    marginTop: 82,
  },
  Slogan: {
    fontSize: 30,
    fontFamily: 'GmarketSansMedium',
  },
  FormWrapper: {
    marginTop: 41,
  },
  NextWrapper: {
    marginTop: 41,
    width: '100%',
    backgroundColor: color.sukGray,
    borderRadius: 10,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  NextText: {
    fontSize: 15,
    fontFamily: 'GmarketSansBold',
    color: 'white',
  },
});
