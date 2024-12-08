import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../common/Button';
import ButtonOutline from '../common/ButtonOutline';

export default function Home() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('RootMap');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-6">
      <View className="items-center">
        <Image
          source={require('../../assets/images/brand2.png')}
          style={{width: 400, height: 400}}
        />
        <Text className="text-5xl text-primary text-center font-bold">
          <Text className="font-extrabold">Health</Text>{' '}
          <Text className="font-semibold">Track</Text>
        </Text>
      </View>

      <View className="mt-8 w-full flex justify-center">
        <Text className="text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quis
          velit animi, deleniti libero optio tempore amet maiores quasi,
        </Text>

        <View className="w-full flex gap-4 items-center">
          <Button onClick={handleLogin} title={'Login'} />
          <ButtonOutline onClick={handleRegister} title={'Register'} />
        </View>
      </View>
    </View>
  );
}
