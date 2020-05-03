import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Dimensions,
} from 'react-native';
import color from '../../assets/color';
import {useDispatch} from 'react-redux';
import {
  updateName,
  updateEmail,
  updatePassword,
  updatePasswordConfirm,
} from './action';
const Userinput = props => {
  const [val, setVal] = useState('');
  const title = props.title;
  const placeholder = props.placeholder;
  const type = props.type;
  const contentType = props.contentType;
  const dispatch = useDispatch();
  useEffect(() => {
    if (type === 'name') {
      dispatch(updateName(val));
    } else if (type === 'email') {
      dispatch(updateEmail(val));
    } else if (type === 'password') {
      dispatch(updatePassword(val));
    } else if (type === 'passwordconfirm') {
      dispatch(updatePasswordConfirm(val));
    } else {
    }

    return () => {};
  }, [val]);

  return (
    <View style={css.Container}>
      <Text style={css.Title}>{title}</Text>
      <TextInput
        style={[css.Input, css.InputLast]}
        placeholder={placeholder}
        placeholderTextColor={color.sukGray}
        secureTextEntry={
          type === 'password' || type === 'passwordconfirm' ? true : false
        }
        autoCapitalize="none"
        textContentType={contentType}
        onChangeText={text => {
          setVal(text);
        }}
      />
    </View>
  );
};

export default Userinput;

const css = StyleSheet.create({
  Container: {
    width: '100%',
    marginBottom: 30,
  },
  Title: {
    fontSize: 13,
    fontFamily: 'GmarketSansMedium',
    marginBottom: 6,
  },
  Input: {
    height: 48,
    borderRadius: 10,
    borderColor: color.sukGray,
    borderWidth: 1,
    paddingLeft: 16,
    fontFamily: 'GmarketSansMedium',
  },
  InputLast: {
    marginBottom: 0,
  },
});
