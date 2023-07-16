import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SvgLocationMark from '../../helpers/SvgLocationMark';
import SvgCreatePhotoIcon from '../../helpers/SvgCreatePhotoIcon';

const CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.CreatePostsScreenContainer}>
      <View style={styles.CreatePostsScreenLoadPhotoBg}>
        <View style={styles.CreatePostsScreenLoadPhotoIconCircle}>
          <SvgCreatePhotoIcon />
        </View>
      </View>
      <Text style={styles.CreatePostsScreenTextLoadPhoto}>Загрузите фото</Text>
      <Text style={styles.CreatePostsScreenPhotoName}>Название...</Text>
      <View style={styles.CreatePostsScreenWrapperLocation}>
        <SvgLocationMark />
        <Text style={styles.CreatePostsScreenLocationName}>Местность...</Text>
      </View>
      <TouchableOpacity
        style={styles.CreatePostsScreenButtonPublish}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Профиль')}
      >
        <Text style={styles.CreatePostsScreenTextPublish}>Опубликовать</Text>
      </TouchableOpacity>
    </View>
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
  CreatePostsScreenLoadPhotoIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
