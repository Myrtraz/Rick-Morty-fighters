import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function BattleModal({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Quieres Rendirte?</Text>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate('WelcomeScreen')}
              >
                <Text style={styles.textStyle}>Si !</Text>
              </Pressable>
              <View style={{paddingHorizontal: 10}} />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    <TouchableOpacity 
            style={{
                paddingHorizontal: 10, 
                paddingVertical: 10, 
                backgroundColor: '#1b1b1b', 
                borderWidth: 1, 
                width: '50%',
                borderColor: 'black'
              }} onPress={() => setModalVisible(true)}>
              <View style={{paddingVertical: 6}}>
              <MaterialIcons
                name="run-fast" 
                size={25}
                color='white' 
                style={{textAlign: 'center'}}
              />
              </View>
            </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 30,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:16
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18
  }
});