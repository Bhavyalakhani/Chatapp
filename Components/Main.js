import React,{Component} from "react"
import {
    StyleSheet,
    TextInput, // 1. <- Add this 
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
  export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    onPress = () => {
        this.props.navigation.navigate('Chat');
      }
    render() {
      return (
        <View>
            <Text style={styles.title}>Enter your name:</Text>
            <TextInput
            style={styles.nameInput}
            placeHolder="John Cena"
            value={this.state.name}
            onChangeText={val => this.setState({name:val})}
            />
            <TouchableOpacity onPress={this.onPress}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  const offset = 24;
  const styles = StyleSheet.create({
    nameInput: { // 3. <- Add a style for the input
      height: offset * 2,
      margin: offset,
      paddingHorizontal: offset,
      borderColor: '#111111',
      borderWidth: 1,
    },
    title: { 
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
      },
      buttonText: { 
        marginLeft: offset,
        fontSize: offset,
      },
  });