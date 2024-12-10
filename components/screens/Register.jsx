import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BottomNavbar from '../layout/BottomNavbar';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../common/Button';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState(''); // Date of birth state
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const resetStates = () => {
    setName('');
    setEmail('');
    setAge('');
    setDob('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = () => {
    if (!name || !email || !phone || !dob || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!/^\d+$/.test(phone)) {
      Alert.alert('Error', 'Phone must contain only numbers.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert(
      'Success',
      `Name: ${name}\nEmail: ${email}\nDOB: ${dob}\nPhone: ${phone}`,
    );
    resetStates();
  };

  return (
    <View className="flex-1 bg-white">
      {/* Content */}
      <View className="px-14 mt-8">
        {/* Full Name Input */}
        <Text className="text-xl text-black font-semibold mb-1">Full Name</Text>
        <TextInput
          className="placeholder:text-primary bg-gray-100 rounded-lg px-4 py-3 text-primary mb-3"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        {/* Password Input */}
        <Text className="text-xl text-black font-semibold mb-1">Password</Text>
        <View className="relative">
          <TextInput
            className="placeholder:text-primary bg-gray-100 rounded-lg px-4 py-3 text-primary mb-3"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Toggle visibility
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3">
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} />
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <Text className="text-xl text-black font-semibold mb-1">Email</Text>
        <TextInput
          className="placeholder:text-primary bg-gray-100 rounded-lg px-4 py-3 text-primary mb-3"
          placeholder="example@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Date of Birth Input */}
        <Text className="text-xl text-black font-semibold mb-1">
          Date of Birth
        </Text>
        <TextInput
          className="placeholder:text-primary bg-gray-100 rounded-lg px-4 py-3 text-primary mb-3"
          placeholder="DD/MM/YYYY"
          value={dob}
          onChangeText={setDob}
          keyboardType="numeric"
        />

        {/* Phone Number Input */}
        <Text className="text-xl text-black font-semibold mb-1">
          Phone Number
        </Text>
        <TextInput
          className="placeholder:text-primary bg-gray-100 rounded-lg px-4 py-3 text-primary mb-3"
          placeholder="01XXXXXXXXX"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        {/* Submit Button */}
        <View className="flex justify-center items-center w-full mt-4 text-center">
          <View className="flex justify-center items-center text-center mb-6">
            <Text>By Continuing, you agree to</Text>
            <View className="flex flex-row">
              <TouchableOpacity>
                <Text className="text-primary">Terms and Conditions</Text>
              </TouchableOpacity>
              <Text> and </Text>
              <TouchableOpacity>
                <Text className="text-primary">Privacy Policy </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button className="" onPress={handleSubmit} title={'Sign Up'} />
        </View>
        {/* Sign Up Options */}
        <Text className="text-center mt-4 text-black my-6">
          or sign up with
        </Text>
        <View className="flex-row justify-center space-x-4 gap-4">
          {/* Google */}
          <TouchableOpacity className="bg-primary flex justify-center items-center w-10 h-10 text-center rounded-full">
            <Icon name={'logo-google'} size={24} color={'#fff'} />
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity className="bg-primary flex justify-center items-center w-10 h-10 text-center rounded-full">
            <Icon name={'logo-facebook'} size={24} color={'#fff'} />
          </TouchableOpacity>

          {/* Fingerprint */}
          <TouchableOpacity className="bg-primary flex justify-center items-center w-10 h-10 text-center rounded-full">
            <Icon name={'finger-print'} size={24} color={'#fff'} />
          </TouchableOpacity>
        </View>

        {/* Sign Up Text */}
        <View className="flex-row justify-center mt-10">
          <Text className="text-black">Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-primary font-semibold"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
