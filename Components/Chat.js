import React, { Component } from "react";
import {GiftedChat} from 'react-native-gifted-chat'
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Fire from './Fire'

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
        };

    }


    componentDidMount() {
        Fire.shared.on(message =>
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
        }))
        );
        }
    componentWillUnmount() {
    Fire.shared.off();
    }
    get user() {
        console.log(this.props.navigation.getParam('name'))
        return {
          name: this.props.navigation.getParam('name'),
          _id: Fire.shared.uid,
        };
      }
    render() {
        return (
            <GiftedChat
            messages={this.state.messages}
            onSend={Fire.shared.send}
            user={this.user}
          />
        );
    }
}