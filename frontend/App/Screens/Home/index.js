import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import backgroundImage from '../../Assets/Ellipse.png';
import styles from './style';
import UserCard from '../../Components/Card';
import ListCard from '../../Components/ListCard';
import sixtyPercentImage from '../../Assets/sixty.png';
import seventyPercentImage from '../../Assets/seventy.png';
import eightyPercentImage from '../../Assets/eighty.png';
import CategoryImage from '../../Assets/Category.png';
import NotificationImage from '../../Assets/Notifications.png';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import SvgIcons from '../../Assets/svg';
import color from '../../constant/color';
import { getProjects, getTasks } from '../../apis';
const Home = () => {
  const navigation = useNavigation();

  const handleLeftPress = () => {
    navigation.navigate('TaskScreen');
  };

  const handleRightPress = () => {
    console.log('navigate');
  };

  const [data, setData] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {

    getProjects().then((res) => {
      console.log(res.data);
      setProject(res.data);
    });

    getTasks().then((res) => {
      setData(res.data);
    })
  }, []);

  return (
    <View style={styles.container}>
      <CustomizeHeader
        left
        center
        right
        text="Friday, 26"
        leftImage={CategoryImage}
        rightImage={NotificationImage}
        onLeftPress={handleLeftPress}
        onRightPress={handleRightPress}
      />
      <View style={styles.heroContainer}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="contain"
          style={styles.image}>
          <Text style={styles.qoutation}>Let’s make a habits together 🙌</Text>
        </ImageBackground>
      </View>
      <View style={styles.SectionMainContainer}>
        <ScrollView horizontal style={{ paddingHorizontal: 10 }}>
          {project?.map((item, index) => (
            <UserCard
              key={index}
              borderColor="white"
              mainTextColor="white"
              uiDesignKit="#C5DAFD"
              progress="#ffffff"
              name={item.name}
              description={item.description}
            />
          ))}

        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TaskScreen');
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
          marginTop: 15,
          paddingVertical: 10
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: color.BLACK,
            letterSpacing: 1,
          }}>
          In Progress
        </Text>
        <View>
          <SvgXml xml={SvgIcons.rightArrow} />
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, marginTop: 1, paddingBottom: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator
          style={{ paddingVertical: 10, marginVertical: 10 }}
        >
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ProgressScreen')}
            >
              <ListCard
                task={item}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
