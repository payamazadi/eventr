import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {H1, H2, Text, Button, Icon, Item, Input, Label, Content, Form, Body} from 'native-base';

import Br from './Br';

interface Props {
  visible: boolean;
  handleCancel();
  handleCreate();
  handleChange(text: string);
}

export default ({visible, handleCancel, handleCreate, handleChange}: Props) => (
  <Modal isVisible={visible} onBackdropPress={handleCancel}>
    <View style={styles.modal}>
      <View style={{borderBottomColor: '#999999', borderBottomWidth: 1, margin: -16, padding: 8}}>
        <Text style={{color: 'orange'}}>CREATE EVENT</Text>
      </View>
      <Br />
      <Br />
      <Item floatingLabel underline>
        <Label style={{padding: 4}}>
          <Text style={{color: 'black'}}>Event Name</Text>
        </Label>
        <Input style={{color: 'black'}} onChangeText={handleChange} />
      </Item>
      <Br />
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Button warning transparent onPress={handleCancel}>
          <Text>CANCEL</Text>
        </Button>
        <Button warning rounded>
          <Text style={{color: 'white'}} onPress={handleCreate}>
            CREATE
          </Text>
        </Button>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16
  }
});
