import React from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { GeneralModalProps } from './../../types'
import { GeneralModalStyles } from './../../styles'

export const GeneralModal = ({ 
    modalVisible = false,
    setModalVisible,
    onRequestCloseMsg = '',
    mainMsg = '',
    buttonMsg = ''
}: GeneralModalProps) => {
  return (
    <View style={GeneralModalStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert(`${onRequestCloseMsg}`);
          setModalVisible(!modalVisible);
        }}
      >
        <View style={GeneralModalStyles.centeredView}>
          <View style={GeneralModalStyles.modalView}>
            <Text style={GeneralModalStyles.modalText}>{mainMsg}</Text>
            <Pressable
              style={[GeneralModalStyles.button, GeneralModalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={GeneralModalStyles.textStyle}>{buttonMsg}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
