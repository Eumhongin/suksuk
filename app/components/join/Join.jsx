import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import img from '../../assets/img';
import colors from '../../assets/color';

const Join = props => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = props.navigation;
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <SafeAreaView style={css.container}>
        <View style={css.sloganView}>
          <Text style={css.sloganText}>약관동의</Text>
        </View>
        <View style={{marginTop: 48.3}}>
          {/* 약관동의 */}
          <View style={css.agreementView}>
            <TouchableOpacity
              style={{width: 17, height: 17, marginRight: 8.9}}
              onPress={() => {
                setIsChecked(!isChecked);
              }}>
              <Image source={isChecked ? img.fill_check : img.unfill_check} />
            </TouchableOpacity>
            <Text style={css.agreementTitle}>전체 약관동의</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors.sukGray,
              marginTop: 15.7,
              marginBottom: 20.9,
            }}
          />
          <View style={[css.agreementView, {width: '100%'}]}>
            <TouchableOpacity
              style={{width: 17, height: 17, marginRight: 8.9}}
              onPress={() => {
                setIsChecked(!isChecked);
              }}>
              <Image source={isChecked ? img.fill_check : img.unfill_check} />
            </TouchableOpacity>
            <Text style={css.agreementTitle}>서비스 이용약관 동의</Text>
            <TouchableOpacity
              style={{
                width: 66,
                height: 25,
                backgroundColor: 'white',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: colors.sukGray,
                position: 'absolute',
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'GmarketSansMedium',
                  color: colors.sukGrayFont,
                }}>
                내용보기
              </Text>
            </TouchableOpacity>
          </View>
          <View style={css.agreementView}>
            <TouchableOpacity
              style={{width: 17, height: 17, marginRight: 8.9}}
              onPress={() => {
                setIsChecked(!isChecked);
              }}>
              <Image source={isChecked ? img.fill_check : img.unfill_check} />
            </TouchableOpacity>
            <Text style={css.agreementTitle}>개인정보 취급 정책 동의</Text>
            <TouchableOpacity
              style={{
                width: 66,
                height: 25,
                backgroundColor: 'white',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: colors.sukGray,
                position: 'absolute',
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'GmarketSansMedium',
                  color: colors.sukGrayFont,
                }}>
                내용보기
              </Text>
            </TouchableOpacity>
          </View>
          <View style={css.agreementView}>
            <TouchableOpacity
              style={{width: 17, height: 17, marginRight: 8.9}}
              onPress={() => {
                setIsChecked(!isChecked);
              }}>
              <Image source={isChecked ? img.fill_check : img.unfill_check} />
            </TouchableOpacity>
            <Text style={css.agreementTitle}>마케팅 수신 정보 동의</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 52.3,
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 53,
              backgroundColor: colors.sukGray,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('Userinfo');
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'GmarketSansBold',
                color: 'white',
              }}>
              다음으로
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Join;

const css = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
  },
  sloganView: {
    marginTop: 81,
  },
  sloganText: {
    fontSize: 30,
    fontFamily: 'GmarketSansMedium',
  },
  agreementView: {
    flexDirection: 'row',
    height: 25,
    // backgroundColor: 'yellow',
    marginBottom: 12,
    alignItems: 'center',
  },
  agreementTitle: {
    fontSize: 15,
    fontFamily: 'GmarketSansMedium',
    color: colors.sukBlackFont,
  },
});
