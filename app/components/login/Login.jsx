import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import color from '../../assets/color';

const Login = props => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('keyboard dismissed!');

          // setTimeout(() => {
          //   dispatch(changeLoginBtnState(true));
          // }, 100);
          Keyboard.dismiss();
        }}
        accessible={false}>
        <SafeAreaView
          style={{
            height: '100%',
            marginLeft: 30,
            marginRight: 30,
          }}>
          <View style={{marginTop: 40, marginBottom: 54}}>
            <Text style={{fontSize: 30, fontFamily: 'GmarketSansMedium'}}>
              로그인하기
            </Text>
          </View>
          <View>
            <View>
              <Text style={{fontSize: 13, fontFamily: 'GmarketSansMedium'}}>
                이메일
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  height: 48,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: color.sukGray,
                  marginTop: 7,
                  fontFamily: 'GmarketSansMedium',
                  paddingLeft: 16,
                }}
                clearButtonMode="while-editing"
                textContentType="emailAddress"
                returnKeyType="done"
                autoCapitalize="none"
                autoCompleteType="off"
              />
            </View>
            <View style={{marginTop: 25}}>
              <Text style={{fontSize: 13, fontFamily: 'GmarketSansMedium'}}>
                비밀번호
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  height: 48,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: color.sukGray,
                  marginTop: 7,
                  fontFamily: 'GmarketSansMedium',
                  paddingLeft: 16,
                }}
                secureTextEntry={true}
                textContentType="password"
                clearButtonMode="while-editing"
                returnKeyType="done"
              />
            </View>
          </View>
          <View style={{marginTop: 37}}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 53,
                borderRadius: 10,
                backgroundColor: color.mainColor,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'GmarketSansBold',
                }}>
                로그인하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 53,
                borderRadius: 10,
                backgroundColor: color.sukGray,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}
              onPress={() => {
                props.navigation.navigate('FindPassword');
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'GmarketSansBold',
                }}>
                비밀번호 찾기
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
