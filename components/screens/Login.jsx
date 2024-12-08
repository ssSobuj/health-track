import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BottomNavbar from '../layout/BottomNavbar'; // Make sure to import the BottomNavbar

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetStates = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    Alert.alert('Success', `Email: ${email}\nPassword: ${password}`);
    resetStates();
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="py-4 px-10">
        <Text className="text-red-600 font-bold text-4xl text-center mt-4">
          Login
        </Text>
        <View className="mt-6">
          <TextInput
            className="border border-gray-200 bg-white rounded-md px-3 py-2 text-gray-700 mb-4"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            className="border border-gray-200 bg-white rounded-md px-3 py-2 text-gray-700 mb-4"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-blue-500 px-3 py-2 rounded-md">
            <Text className="text-white text-center font-bold text-lg">
              Submit
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row gap-2 justify-center mt-4">
            <Text className="text-gray-500 text-sm">
              Want to Create an Account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="text-blue-700 text-sm">Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Add Bottom Navbar here */}
      <View className="absolute bottom-0 left-0 right-0">
        <BottomNavbar />
      </View>
    </View>
  );
}
