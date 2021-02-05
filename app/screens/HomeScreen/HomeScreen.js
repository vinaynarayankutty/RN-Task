import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ListItem from './components/ListItem';
import {AuthContext} from '@navigation/AuthProvider';
import * as NavigationService from '@navigation/NavigationService';
import styles from './Styles';

class HomeScreen extends Component {
  static contextType = AuthContext;

  state = {
    loading: false,
    eventList: [],
    uid: this.context.user.uid,
  };

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getEventData();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getEventData = async () => {
    var events = [];

    var snapshot = await firestore()
      .collection('Events')
      .orderBy('createdAt')
      .get();

    snapshot.forEach((doc) => {
      const eventItem = doc.data();
      if (eventItem.uid == this.state.uid) {
        eventItem.id = doc.id;
        events.push(eventItem);
      }
    });
    this.setState({eventList: events});
  };

  renderItem = ({item}) => {
    return (
      <ListItem
        uri={item.imageUri}
        title={item.title}
        description={item.description}
        date={new Date(item.date).toISOString()}
      />
    );
  };

  addEventHandler = () => {
    NavigationService.navigate('EventForm');
  };

  signOutHandler = () => {
    this.setState({loading: true});
    this.context.logout();
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => this.signOutHandler()}
            style={styles.signoutBtn}>
            <Text style={styles.signoutTxt}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        {this.state.eventList.length > 0 ? (
          <FlatList
            data={this.state.eventList}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            extraData={this.state}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.templateText}>Add events</Text>
          </View>
        )}

        <TouchableOpacity
          onPress={() => this.addEventHandler()}
          style={styles.addBtnContainer}>
          <Text style={styles.addTxtStyle}>+</Text>
        </TouchableOpacity>

        {this.state.loading && <ActivityIndicator size="large" />}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
