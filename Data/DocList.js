import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Button } from 'react-native';

const DocList = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderDoctorItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedDoctor(item);
        setModalVisible(true);
      }}
    >
      <View style={styles.listItem}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text>{item.specialist}</Text>
        <Text>Experience: {item.experience}</Text>
      </View>
    </TouchableOpacity>
  );

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDoctor(null);
    setSelectedSlot(null);
  };

  const selectSlot = (slot) => {
    setSelectedSlot(slot);
  };

  const requestAppointment = () => {
    if (selectedDoctor && selectedSlot) {
      const selectedDay = selectedDoctor.availability.find((slotData) =>
        slotData.slots.includes(selectedSlot)
      );
      if (selectedDay) {
        console.log("Doctor: ", selectedDoctor.name);
        console.log("Specialist: ", selectedDoctor.specialist);
        console.log("Appointment Day: ", selectedDay.day);
        console.log("Appointment Time: ", selectedSlot);
      }
    }
  };

  return (
    <View>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDoctorItem}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContent}>
          {selectedDoctor && (
            <View>
              <Text style={styles.doctorName}>{selectedDoctor.name}</Text>
              <Text>{selectedDoctor.specialist}</Text>
              <Text>Experience: {selectedDoctor.experience}</Text>
              <Text>Details: {selectedDoctor.details}</Text>

              {selectedDoctor.availability.map((slotData) => (
                <View key={slotData.day}>
                  <Text>{slotData.day}</Text>
                  <View style={styles.timeSlots}>
                    {slotData.slots.map((slot) => (
                      <TouchableOpacity
                        key={slot}
                        onPress={() => selectSlot(slot)}
                        style={[
                          styles.timeSlot,
                          selectedSlot === slot && styles.selectedTimeSlot,
                        ]}
                      >
                        <Text>{slot}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}

              <Button title="Request Appointment" onPress={requestAppointment} />
            </View>
          )}

          <TouchableOpacity onPress={closeModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  doctorName: {
    fontSize: 18,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedTimeSlot: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
});

export default DocList;
