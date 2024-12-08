import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function ButtonOutline({onClick, title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="border border-primary bg-gray-100 rounded-full w-[250px]"
      onPress={onClick}>
      <Text className=" text-primary text-center py-4 font-bold">{title}</Text>
    </TouchableOpacity>
  );
}
