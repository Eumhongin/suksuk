import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const CheckEmail = () => {
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <TouchableWithoutFeedback>
        <SafeAreaView>
          <View>
            <Text>비밀번호 변경</Text>
          </View>
          <View>
            <Text>가입한 이메일 입력</Text>
            <TextInput textContentType="emailAddress" />
          </View>
          <TouchableOpacity>
            <Text>다음으로</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CheckEmail;

const styles = StyleSheet.create({});
