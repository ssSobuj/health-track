import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function Button({onClick, title}) {
  return (
    <TouchableOpacity
      className="bg-primary rounded-full w-[250px]"
      onPress={onClick}>
      <Text className=" text-white text-center text-xl py-4 font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
