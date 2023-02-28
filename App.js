import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {
const [text, setText] = useState('');
const [list, setList] = useState([]);

const listHeader = () => {
  return (
    <View>
    <Text style={{fontSize: 18, fontWeight: 'bold'}}>History</Text>
    <View style={{ height:1, backgroundColor: 'blue'}} />
    </View>
     )

}
const Add = () => {
setList([text, ...list])
setText('')
console.log(list);
}

const Clear = () => {
setList('');
}

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.clear}>
      </View>
      <View style={{flex: 1}}>
      <View >
        <TextInput style={{ borderColor: 'black',
    borderWidth: 2,
    width: 200,
    height: 45,}}onChangeText={data => setText(data)} value={text}></TextInput>
        </View>
        <View style={styles.operators}>
        <Button style={{alignSelf: 'baseline'}} title='Add' onPress={Add}></Button>
        <Button style={{alignSelf: 'baseline'}} title='Clear' onPress={Clear}></Button>
      </View>
      </View>
      <View style={styles.flat}>
        <FlatList
        data={list}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={listHeader}
        >
        </FlatList>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clear: {
    flex: 1,
    backgroundColor: 'black'
  },
  operators: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center'
  },
  flat: {
flex: 3

  },
  text: {
    borderColor: 'black',
    borderWidth: 2,
    width: '50%',
    height: 45,
    
  } 
});
