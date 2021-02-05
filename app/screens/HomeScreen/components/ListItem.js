import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from '@config/Metrics';
import AppStyles from '@config/Styles';

const ListItem = (props) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: props.uri,
          }}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.descriptionText}>{props.description}</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {moment(props.date).format('D-MM-Y')}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  rowContainer: {
    marginVertical: responsiveHeight(1),
    flexDirection: 'row',
    backgroundColor: AppStyles.color.COLOR_LIGHTGRAY,
  },

  imageContainer: {
    flex: 0.7,
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(2),
    marginVertical: responsiveHeight(2),
  },

  imageStyle: {
    height: responsiveHeight(8),
    width: responsiveWidth(13),
    resizeMode: 'contain',
  },

  contentContainer: {
    flex: 3,
    marginVertical: responsiveHeight(2),
    flexDirection: 'column',
  },

  titleText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },

  descriptionText: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '400',
    textAlign: 'left',
    paddingTop: responsiveHeight(0.6),
  },

  dateContainer: {
    flex: 1,
    marginVertical: responsiveHeight(2),
    marginHorizontal: responsiveWidth(2),
  },

  dateText: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: '400',
    textAlign: 'left',
  },
});
