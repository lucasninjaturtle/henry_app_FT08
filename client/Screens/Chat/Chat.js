// @refresh reset
import React, {Component, useState, useEffect, useCallback} from 'react'
import * as firebase from 'firebase'
import 'firebase/firestore'
import AsyncStorage from '@react-native-community/async-storage'
import {GiftedChat} from 'react-native-gifted-chat'
import {StatusBar} from 'expo-status-bar'
import {Dimensions, StyleSheet, LogBox, TextInput, Button} from 'react-native'
import { Container, Header, Content, Badge, Text, Icon, View, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';

const firebaseConfig = {
  apiKey: "AIzaSyBKzpYoRH3JJC4idPVrssYj1Y3-bOJfW7g",
  authDomain: "henry-app-13095.firebaseapp.com",
  projectId: "henry-app-13095",
  storageBucket: "henry-app-13095.appspot.com",
  messagingSenderId: "869456409904",
  appId: "1:869456409904:web:d7c150d69d496b0da084f5",
  measurementId: "G-S437Y1M9Q9"
};
if(firebase.apps.length === 0){
firebase.initializeApp(firebaseConfig)
}

//FIREBASE DB

const db = firebase.firestore()
const chatsRef = db.collection('chats')


const Chat = ()=> {

    const [user, setUser] = useState(null)
    const [nickName, setNickName] = useState([])
    const [messages, setMessages] = useState([])

useEffect(()=>{
  readUser ()
  const unsubscribe = chatsRef.onSnapshot(querySnapshop =>{
    //the query has all the data and I just onlly fetch the added
    const messagesFirestore = querySnapshop.docChanges().filter(({type})=> type === 'added')
    .map(({doc})=>{
      //doc.data is a method that brings the data.
      const message = doc.data()
      return {...message, createdAt:message.createdAt.toDate()}
    }).sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime())
    appenMessages(messagesFirestore)
  })

}, [])

const appenMessages = useCallback((messages)=>{
  setMessages((previousMessages)=>GiftedChat.append(previousMessages, messages))
},[messages])


const readUser = async ()=>{
  const user = await AsyncStorage.getItem('user')
  if(user){
    setUser(JSON.parse(user))
  }
}

//HANDLEBUTTON
const hadlePress = async()=>{
  const _id = Math.random().toString(36).substring(7)
  const user = {_id, nickName}
  await AsyncStorage.setItem('user', JSON.stringify(user))
  setUser(user)
}

//HANDLE SEND PARA EL GIFTED CHAT

const handleSend = async (messages)=>{
  const writes = messages.map(m => chatsRef.add(m))
  await Promise.all(writes)

}


if(!user){
  return (
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Enter your nickname' value={nickName} onChangeText={setNickName}/>
            <Button onPress={hadlePress}title='Enter chat'/>
          </View>
          )
}

    return (
       
          <GiftedChat 
          messages={messages}
          user={user}
          onSend={handleSend}
          />
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    padding: 30,
  },
  input: {
    height:50,
    width:'100%',
    marginBottom:20,
    borderWidth:1,
    padding:1,
    borderColor:'grey'
  },
});

export default Chat;