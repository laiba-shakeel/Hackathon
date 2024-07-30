import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

const TaskCard = ({ task }) => {

  const getRandomFlatColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  const example =
    { "__v": 0, "_id": "668c1c614a02a01f855782ca", "createdDate": "2024-08-06T19:00:00.000Z", "creatorUserID": "668c1461bdef259998388e42", "description": "I have to make an app backend", "dueDate": "2024-06-06T19:00:00.000Z", "priority": "High", "status": "Active", "title": "Make Backend", "updatedDate": "2024-08-06T19:00:00.000Z" }

  return (
    <View style={[styles.card, { backgroundColor: getRandomFlatColor() }]}>
      <Text style={styles.time}>{dayjs(task.dueDate).format('DD/MM/YYYY')}</Text>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.person}>Priority: {task.priority}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  time: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  person: {
    fontSize: 14,
    color: '#fff',
    marginRight: 5,
    marginTop: 10,
    width:100,
    padding: 6,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
  },
});

export default TaskCard;
