import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import progressImage from '../../Assets/sixty.png';
import dayjs from 'dayjs';

function timeDifference(current, previous) {

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  }

  else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  }

  else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  }

  else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days ago';
  }

  else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago';
  }

  else {
    return Math.round(elapsed / msPerYear) + ' years ago';
  }
}

const ListCard = ({ task }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{task.title}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.col}>
          <Text style={styles.task}>{task.description}</Text>
          <Text style={styles.time}>{timeDifference(parseInt((new Date(task.createdDate).getTime() / 1000).toFixed(0)), parseInt((new Date().getTime() / 1000).toFixed(0)))}</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 25,
            width: 45,
            height: 45,
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            alignItems: 'flex-end'
          }}>
          <Image source={progressImage} alt='progress' style={{ width: '100%', height: '100%' }} />
        </View>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.progress}>
          <View style={[styles.progressBar, { width: `${task.progress || 60}%` }]}>
            <Text style={styles.progressText}>{task.progress || 60}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListCard;
