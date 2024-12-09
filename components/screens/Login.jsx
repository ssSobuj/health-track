import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigation = useNavigation();
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
    <View className="flex-1 bg-white">
      {/* Content */}
      <View className="px-14 mt-16">
        <Text className="text-primary text-3xl font-bold mb-2">Welcome</Text>
        <Text className="text-black mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/* Email Input */}
        <Text className=" text-xl text-black mt-16 font-semibold mb-1">
          Email or Mobile Number
        </Text>
        <TextInput
          className="placeholder:text-primary bg-gray-100 rounded-lg px-4 py-3 text-primary mb-4"
          placeholder="example@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <Text className="text-xl text-black  font-semibold mb-1">Password</Text>
        <View className="relative">
          <TextInput
            className=" placeholder:text-primary bg-gray-100 rounded-lg px-4 py-3 text-primary pr-12"
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

        {/* Forget Password */}
        <TouchableOpacity>
          <Text className="text-primary text-right mt-2 mb-6">
            Forget Password?
          </Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <View className=" flex justify-center items-center w-full">
          <Button className="" onPress={handleSubmit} title={'Login'} />
        </View>
        {/* Sign Up Options */}
        <Text className="text-center mt-20 text-black my-6">
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
          <Text className="text-black">Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="text-primary font-semibold"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
