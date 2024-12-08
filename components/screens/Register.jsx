import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BottomNavbar from '../layout/BottomNavbar';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetStates = () => {
    setName('');
    setEmail('');
    setAge('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = () => {
    if (!name || !email || !phone || !age || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!/^\d+$/.test(phone)) {
      Alert.alert('Error', 'Phone must contain only numbers.');
      return;
    }

    if (parseInt(age, 10) <= 0) {
      Alert.alert('Error', 'Age must be a positive number.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert(
      'Success',
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}`,
    );
    resetStates();
  };

  return (
    <View className="flex-1 py-4 px-10 bg-gray-100">
      <Text className="text-red-600 font-bold text-4xl text-center mt-4">
        Register
      </Text>
      <View className="mt-6">
        <TextInput
          className="border border-gray-200 bg-white rounded-md px-3 py-2 text-gray-700 mb-4"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="border border-gray-200 bg-white rounded-md px-3 py-2 text-gray-700 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="border border-gray-200 bg-white rounded-md px-3 py-2 text-gray-700 mb-4"
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />
        <TextInput
          className="border border-gray-200 bg-white rounded-md px-3 py-2 text-gray-700 mb-4"
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          className="border border-gray-200 bg-white rounded-md px-3 py-2 text-gray-700 mb-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Ensures text is masked
        />
        <TextInput
          className="border border-gray-200 bg-white rounded-md px-3 py-2 text-gray-700 mb-4"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
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
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-blue-700 text-sm">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="absolute bottom-0 left-0 right-0">
        <BottomNavbar />
      </View>
    </View>
  );
}
