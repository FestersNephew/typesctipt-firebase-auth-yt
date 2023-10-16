import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Button, Modal } from 'react-native';
import AddEventComponent from './AddEventComponent';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/NavigationTypes'; // Adjust the import path accordingly

type CalendarComponentProps = {
  navigation: NavigationProp<RootStackParamList, 'CalendarComponent'>;
};

const CalendarComponent: React.FC<CalendarComponentProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <Calendar onDayPress={(day) => console.log('selected day', day)} />
      <Button title="Add Event" onPress={() => setModalVisible(true)} />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <AddEventComponent onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default CalendarComponent;
