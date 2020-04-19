// In App.js in a new project

import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {backbtn} from '../assets/img';
import {
  Button,
  View,
  Text,
  Platform,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
// import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
// import firestore from '@react-native-firebase/firestore';
// import Join from './Join/Join';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../reducers';
// import {changeNavigationState} from './action';
// import Login from './Login/Login';
import Home from './home/Home';
import Join from './join/Join';
import Login from './login/Login';
import CheckEmail from './find_password/CheckEmail';

const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    return () => {};
  }, []);
  return (
    <Provider store={myStore}>
      <MyNavigator />
    </Provider>
  );
}

export default App;

const MyNavigator = () => {
  const navigationState = useSelector(state => state.navigationState);
  useEffect(() => {
    // console.log(navigationState);
    return () => {};
  }, []);
  return (
    <NavigationContainer>
      <SwitchNavigation navigationState={navigationState} />
    </NavigationContainer>
  );
};

const Left = ({onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <Image source={backbtn} />
  </TouchableHighlight>
);

const SwitchNavigation = props => {
  const state = props.navigationState;

  if (state === 'Home') {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          options={{
            title: '',
            headerBackTitleVisible: false,
            headerBackImage: () => (
              <Image
                style={
                  Platform.OS === 'android' ? {marginLeft: 5} : {marginLeft: 10}
                }
                source={backbtn}
              />
            ),
            headerStyle: {
              shadowColor: '#fff',
              shadowOffset: {
                height: 0,
              },
              shadowRadius: 0,
              shadowOpacity: 0,
              elevation: 0,
            },
          }}
          component={Login}
        />
        <Stack.Screen
          name="Join"
          options={
            Platform.OS === 'android'
              ? {
                  title: '회원가입',
                  headerTitleContainerStyle: {
                    // backgroundColor: 'yellow',
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    zIndex: 0,
                  },
                  // headerStyle: {
                  //   paddingHorizontal: 8,
                  // },
                  headerTitle: () => (
                    <View
                      style={{
                        // backgroundColor: 'red',
                        justifyContent: 'center',

                        alignItems: 'center',
                        // backgroundColor: 'yellow',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'GmarketSansMedium',
                        }}>
                        회원가입
                      </Text>
                    </View>
                  ),
                  // headerBackTitleVisible: false,
                  headerBackImage: () => (
                    <Image
                      style={
                        Platform.OS === 'android'
                          ? {marginLeft: 5}
                          : {marginLeft: 10}
                      }
                      source={backbtn}
                    />
                  ),

                  headerStyle: {
                    shadowColor: '#fff',
                    shadowOffset: {
                      height: 0,
                    },
                    shadowRadius: 0,
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }
              : {
                  headerTitle: () => (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'GmarketSansMedium',
                        }}>
                        회원가입
                      </Text>
                    </View>
                  ),
                  headerBackTitleVisible: false,
                  headerBackImage: () => (
                    <Image style={{marginLeft: 10}} source={backbtn} />
                  ),

                  headerStyle: {
                    shadowColor: '#fff',
                  },
                }
          }
          component={Join}
        />
        <Stack.Screen
          name="FindPassword"
          options={
            Platform.OS === 'android'
              ? {
                  title: '비밀번호 찾기',
                  headerTitleContainerStyle: {
                    // backgroundColor: 'yellow',
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    zIndex: 0,
                  },
                  // headerStyle: {
                  //   paddingHorizontal: 8,
                  // },
                  headerTitle: () => (
                    <View
                      style={{
                        // backgroundColor: 'red',
                        justifyContent: 'center',

                        alignItems: 'center',
                        // backgroundColor: 'yellow',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'GmarketSansMedium',
                        }}>
                        비밀번호 찾기
                      </Text>
                    </View>
                  ),
                  // headerBackTitleVisible: false,
                  headerBackImage: () => (
                    <Image
                      style={
                        Platform.OS === 'android'
                          ? {marginLeft: 5}
                          : {marginLeft: 10}
                      }
                      source={backbtn}
                    />
                  ),

                  headerStyle: {
                    shadowColor: '#fff',
                    shadowOffset: {
                      height: 0,
                    },
                    shadowRadius: 0,
                    shadowOpacity: 0,
                    elevation: 0,
                  },
                }
              : {
                  headerTitle: () => (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'GmarketSansMedium',
                        }}>
                        비밀번호 찾기
                      </Text>
                    </View>
                  ),
                  headerBackTitleVisible: false,
                  headerBackImage: () => (
                    <Image style={{marginLeft: 10}} source={backbtn} />
                  ),

                  headerStyle: {
                    shadowColor: '#fff',
                  },
                }
          }
          component={CheckEmail}
        />
      </Stack.Navigator>
    );
  } else {
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Join} />
    </Stack.Navigator>;
  }
};
