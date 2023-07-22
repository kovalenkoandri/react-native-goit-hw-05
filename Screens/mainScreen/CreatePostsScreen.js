import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import SvgLocationMark from '../../helpers/SvgLocationMark';
import SvgCreatePhotoIcon from '../../helpers/SvgCreatePhotoIcon';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { ValidateInput } from '../../helpers/ValidateInput';

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [coord, setCoord] = useState(null);
  const inputTitleHandler = (text) => setTitle(text);
  const inputLocationHandler = (text) => setLocation(text);
  const [locationData, setLocationData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { keyboardHide, isShowKeyboard, setIsShowKeyboard } = ValidateInput();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentPosition = await Location.getCurrentPositionAsync({});
      setLocationData(currentPosition);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (locationData) {
    text = JSON.stringify(locationData);
    // console.log('locationData ', text);
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const locationCoords = await Location.getCurrentPositionAsync();
    setCoord(locationCoords);
    // console.log('latitude', coord?.coords.latitude);
    // console.log('longitude', coord?.coords.longitude);
    setPhoto(photo.uri);
    console.log('photoPath', photo);
  };

  const sendPhoto = () => {
    navigation.navigate('Публикации', {
      photo,
      title,
      location,
      coord,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{
          ...styles.CreatePostsScreenContainer,
          marginTop: isShowKeyboard ? -270 : 0,
        }}
      >
        <Camera style={styles.CreatePostsScreenLoadPhotoBg} ref={setCamera}>
          <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.CreatePostsScreenWidthHeight}>
              {photo && (
                <Image
                  source={{ uri: photo }}
                  style={styles.CreatePostsScreenWidthHeight}
                />
              )}
              <TouchableOpacity
                onPress={takePhoto}
                style={styles.CreatePostsScreenLoadPhotoIconCircle}
              >
                <SvgCreatePhotoIcon />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </Camera>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View style={styles.CreatePostsScreenWidthHeight}>
            <Text style={styles.CreatePostsScreenTextLoadPhoto}>
              Загрузите фото
            </Text>
            {/* <Text style={styles.CreatePostsScreenPhotoName}>Название...</Text> */}
            <TextInput
              placeholder="Название..."
              value={title}
              onChangeText={inputTitleHandler}
              style={styles.CreatePostsScreenPhotoName}
              onFocus={() => setIsShowKeyboard(true)}
            />
            <View style={styles.CreatePostsScreenWrapperLocation}>
              <SvgLocationMark />
              <TextInput
                placeholder="Местность..."
                value={location}
                onChangeText={inputLocationHandler}
                style={styles.CreatePostsScreenLocationName}
                onFocus={() => setIsShowKeyboard(true)}
              />
              {/* <Text style={styles.CreatePostsScreenLocationName}>Местность...</Text> */}
            </View>
            <TouchableOpacity
              style={styles.CreatePostsScreenButtonPublish}
              activeOpacity={0.8}
              onPress={sendPhoto}
            >
              <Text style={styles.CreatePostsScreenTextPublish}>
                Опубликовать
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  CreatePostsScreenContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
    height: '100%',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  CreatePostsScreenLoadPhotoBg: {
    backgroundColor: '#F6F6F6',
    height: 240,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CreatePostsScreenWidthHeight: { width: '100%', height: '100%' },
  CreatePostsScreenLoadPhotoIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -30, // Half of the width
    marginTop: -30, // Half of the height
  },
  CreatePostsScreenTextLoadPhoto: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginBottom: 48,
  },
  CreatePostsScreenPhotoName: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginBottom: 15,
  },
  CreatePostsScreenWrapperLocation: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
    height: 66,
    marginBottom: 32,
    paddingTop: 32,
    flexDirection: 'row',
  },
  CreatePostsScreenLocationName: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginLeft: 8,
  },
  CreatePostsScreenButtonPublish: {
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    height: 51,
  },
  CreatePostsScreenTextPublish: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
});

export default CreatePostsScreen;
