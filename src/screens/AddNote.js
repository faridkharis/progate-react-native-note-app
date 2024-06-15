import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Add Note</Text>
      <CustomTextInput 
        text={title}
        onChange={setTitle}
        label="Title"
        placeholder="Title"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Description"
        placeholder="Description"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Save"
          width="100%"
          onPress={() => {
            addNote(title, desc)
            setCurrentPage('home')
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton 
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Back to Home"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
})

export default AddNote;