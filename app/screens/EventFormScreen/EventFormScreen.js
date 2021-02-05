import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  Button,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '@navigation/AuthProvider';
import styles from './Styles';
import {responsiveHeight} from '@config/Metrics';
import * as ImagePicker from 'react-native-image-picker';
import * as NavigationService from '@navigation/NavigationService';

class EventFormScreen extends Component {
  static contextType = AuthContext;

  state = {
    event: {
      title: '',
      description: '',
      date: '',
      imageUri: null,
    },
    selectedImageUri: null,
  };

  pickImageHandler = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        if (response.error) {
          console.log('image error');
        } else {
          this.setState({
            selectedImageUri: response.uri,
            event: {...this.state.event, imageUri: response.uri},
          });
        }
      },
    );
  };

  submitHandler = async () => {
    await firestore()
      .collection('Events')
      .add({
        uid: this.context.user.uid,
        title: this.state.event.title,
        date: this.state.event.date,
        description: this.state.event.description,
        imageUri: this.state.event.imageUri,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then((data) => {
        NavigationService.navigate('Home');
      });
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            value={this.state.event.title}
            style={styles.longFormInput}
            placeholder="Title"
            onChangeText={(text) => {
              this.setState({event: {...this.state.event, title: text}});
            }}
          />
          <TextInput
            value={this.state.event.date}
            style={[styles.longFormInput]}
            placeholder="Date (DD/MM/YYYY)"
            onChangeText={(text) => {
              this.setState({
                event: {
                  ...this.state.event,
                  date: text,
                },
              });
            }}
          />
          <TextInput
            value={this.state.event.description}
            style={[styles.longFormInput, {height: responsiveHeight(10)}]}
            multiline
            placeholder="Description"
            onChangeText={(text) => {
              this.setState({event: {...this.state.event, description: text}});
            }}
          />

          <View style={styles.imagePickerContainer}>
            {this.state.selectedImageUri && (
              <Image
                source={{uri: this.state.selectedImageUri}}
                style={styles.previewImage}
              />
            )}
          </View>

          <View style={styles.button}>
            <Button
              onPress={() => this.pickImageHandler()}
              title="Pick Image"
            />
          </View>

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => this.submitHandler()}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default EventFormScreen;
