import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  join_bg,
  defaultHeart,
  maleSymbol,
  femaleSymbol,
} from '../../assets/img';
import color from '../../assets/color';
import Userinput from './Userinput';

const Babyinfo = () => {
  const layouts = useSelector(state => state.layouts);
  return (
    <View>
      <KeyboardAwareScrollView bounces={false} style={css.Content}>
        <View style={css.BackgroundView}>
          <Image style={css.BackgroundImage} source={join_bg} />
        </View>
        <View style={css.ContentView}>
          <View style={css.PagerWrapper}>
            <View style={[css.Pager, {opacity: 1}]} />
            <View style={css.Pager} />
            <View style={[css.Pager, {marginRight: 0}]} />
          </View>
          <Text style={[css.Textcenter, css.Slogan1]}>STEP 01</Text>
          <Text style={[css.Textcenter, css.Slogan2]}>
            아이의 기본정보를{'\n'}
            입력해주세요
          </Text>
          <View style={css.ImageUploader}>
            <View>
              <Image source={defaultHeart} />

              <Text style={[css.Textcenter, css.Slogan3]}>
                우리아이 사진을{'\n'}등록해주세요
              </Text>
            </View>
          </View>
          <View style={{width: '100%', marginTop: 145}}>
            {layouts.babyinfo.map((item, idx) => {
              return (
                <Userinput
                  key={idx}
                  title={item.title}
                  placeholder={item.placeholder}
                />
              );
            })}
          </View>
          <View style={{width: '100%'}}>
            <Text style={{fontSize: 13, fontFamily: 'GmarketSansMedium'}}>
              성별
            </Text>
            <View
              style={{
                marginTop: 7,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: Dimensions.get('window').width * 0.39,
                  height: Dimensions.get('window').width * 0.39,
                  borderWidth: 1,
                  borderColor: color.sukGray,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={maleSymbol} />
                <Text
                  style={{
                    marginTop: 8.9,
                    fontFamily: 'GmarketSansMedium',
                    fontSize: 14,
                  }}>
                  남자아이
                </Text>
              </View>
              <View
                style={{
                  width: Dimensions.get('window').width * 0.39,
                  height: Dimensions.get('window').width * 0.39,
                  borderWidth: 1,
                  borderColor: color.sukGray,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={femaleSymbol} />
                <Text
                  style={{
                    marginTop: 8.9,
                    fontFamily: 'GmarketSansMedium',
                    fontSize: 14,
                  }}>
                  여자아이
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Babyinfo;

const css = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  BackgroundView: {
    width: '100%',
    height: 531 * (Dimensions.get('window').width / 375),
    position: 'absolute',
    top: 40,
  },
  BackgroundImage: {
    width: '100%',
    height: '100%',
    marginTop: -120,
  },

  Content: {
    width: '100%',
    height: '100%',

    // backgroundColor: 'yellow',
  },
  ContentView: {
    width: '100%',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 900,
  },

  PagerWrapper: {
    flexDirection: 'row',

    // justifyContent: 'space-between',
  },

  Pager: {
    width: 13,
    height: 13,
    backgroundColor: 'white',
    borderRadius: 13,
    opacity: 0.7,
    marginRight: 17,
  },
  Textcenter: {
    textAlign: 'center',
    color: 'white',
  },
  Slogan1: {
    marginTop: 37,
    fontSize: 15,
    fontFamily: 'GmarketSansBold',
  },
  Slogan2: {
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'GmarketSansMedium',
  },
  ImageUploader: {
    marginTop: 20,
    width: 227,
    height: 227,
    borderRadius: 227,
    backgroundColor: color.sukWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Slogan3: {
    marginTop: 11,
    fontSize: 13,
    fontFamily: 'GmarketSansMedium',
    color: color.imageGray,
  },
  Inputbase: {
    marginTop: 100,
  },
});
