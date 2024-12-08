import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavbar = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex-row justify-between items-center bg-gray-800 py-4 px-6">
      {/* Home */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="items-center">
        <Icon name="home-outline" size={24} color="#FFFFFF" />
        <Text className="text-xs text-white">Home</Text>
      </TouchableOpacity>

      {/* Search */}
      <TouchableOpacity className="items-center">
        <Icon name="search-outline" size={24} color="#FFFFFF" />
        <Text className="text-xs text-white">Search</Text>
      </TouchableOpacity>

      {/* Cart */}
      <TouchableOpacity className="items-center">
        <Icon name="cart-outline" size={24} color="#FFFFFF" />
        <Text className="text-xs text-white">Cart</Text>
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity className="items-center">
        <Icon name="person-outline" size={24} color="#FFFFFF" />
        <Text className="text-xs text-white">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavbar;
