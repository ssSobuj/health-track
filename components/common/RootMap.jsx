import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function RootMap() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: 'Check Your Medical History',
      image: '../../assets/images/brand1.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Make A appointment',
      image: '../../assets/images/brand1.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Book Your Doctor History',
      image: '../../assets/images/brand2.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  const handleNextButtonClick = () => {
    if (currentIndex === data.length - 1) {
      navigation.navigate('Login');
      return;
    }
    setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
  };
  const currentData = data[currentIndex];

  return (
    <View className="flex items-center relative w-full px-16">
      {!(currentIndex == data.length - 1) && (
        <View className="space-y-4 mt-6 absolute right-6 top-0">
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            className="py-4 w-full flex flex-row items-center">
            <Text className="text-center text-lg font-semibold">Skip</Text>
            <Icon name="arrow-forward" size={18} />
          </TouchableOpacity>
        </View>
      )}
      <View className="flex justify-center items-center">
        <Image
          source={require('../../assets/images/brand.png')} // Replace with your image
          style={{width: 500, height: 500}}
          resizeMode="contain"
        />
      </View>

      {/* Text Section */}
      <View className="mt-4">
        <Text className="text-2xl font-bold text-blue-500 text-center">
          {currentData?.title}
        </Text>
        <Text className="text-gray-500 text-sm text-center mt-4">
          {currentData?.description}
        </Text>
      </View>

      <View className="flex flex-row  gap-2 mt-16">
        {data.map((item, i) => (
          <TouchableOpacity
            onPress={() => setCurrentIndex(i)}
            className={`${
              i == currentIndex ? 'bg-primary' : 'border border-primary'
            } h-[10px] w-[10px] rounded-full`}
            key={item?.id}></TouchableOpacity>
        ))}
      </View>

      {/* Button Section */}
      <View className="flex justify-center items-center mt-16">
        <Button
          title={currentIndex == data.length - 1 ? 'Get Start' : 'Next'}
          onClick={handleNextButtonClick}
        />
      </View>
    </View>
  );
}

export default RootMap;
