import React from 'react';
import {Image, ImageBackground, Text, Touchable, TouchableOpacity, View} from 'react-native';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import arrow from '../../Assets/Backarrow.png';
import backgroundImage from '../../Assets/Ellipse.png';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import img2 from '../../Assets/humi.png';
import { storage, useAuth } from '../../storage';

const Profile = () => {

  const navigation = useNavigation();

  const HandleGoBack = () => {
    navigation.goBack('');
  };

  let { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  }

  let user = JSON.parse(storage.getString('user') || '{}');

  return (
    <View style={styles.container}>
      <CustomizeHeader
        left
        center
        text="Profile"
        leftImage={arrow}
        onLeftPress={HandleGoBack}
      />
      <View style={styles.heroContainer}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="contain"
          style={styles.image}>
          <View style={styles.ImageContainer}>
            <Image
              source={img2}
              resizeMode='cover'
              style={{width: 115, height: 120, alignSelf:'center', top:8}}
            />
          </View>
          <Text style={styles.qoutation}>{user.name}</Text>
          <Text style={styles.desc}>{user.email}</Text>
        </ImageBackground>
        <TouchableOpacity onPress={handleLogout} style={{ borderWidth: 1, borderColor: 'red', borderRadius: 10, width: 100, alignSelf: 'center', marginTop: 20 }}>
          <Text style={{color: 'red', textAlign: 'center', paddingVertical: 10}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
