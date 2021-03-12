import React, {useEffect} from 'react'
import { Text, View} from 'native-base'
import {Image, StyleSheet} from 'react-native'
import { getUserInfo } from '../../Redux/Actions/userActions';
import store from '../../Redux/store';
import {useSelector,useDispatch } from 'react-redux'

import { Container, Icon, Content, Card, CardItem, Switch, Body, Button, Thumbnail, List, ListItem, Left, Right} from "native-base";



const Profile = ()=>{
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getUserInfo())
    }, [])

    let User = useSelector((store) => store.userInfo.usuario)
    console.log(User)

    Object.keys(User).length === 0 ? User =  {name:'test name',
    cohort:'tets cohort',
    User:'GITHUBUSER',
    group:'grupo test',
    lastname:'apellido test',
    module:'modulo test',
    pm:{lucas:'PM test'},
    startDay:'start',
    instructor:{firstname: 'primer nombre', lastname: 'apellido'},
    }   : User;
    return (
        <View>
            <Container>
            <Card>
            <CardItem footer bordered >
              <Text>{User.User}</Text>
            </CardItem>
            <CardItem  >
              <Text>{User.name} </Text>
            </CardItem>
            <CardItem  >
              <Text>PM: {User.group} </Text>
            </CardItem>
            <CardItem  >
              <Text>Cohorte actual: {User.cohort}</Text>
            </CardItem>
            </Card>
            </Container>
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
      alignContent:'center',
      alignItems:'center',
      paddingTop:10,
      backgroundColor:'white',
      height:550
      
      
    },
    card:{
      alignItems:'center',
      alignContent:'center',
      alignSelf:'center'
    },
    image:{
      width:80,
      height:80,
    },
    titles:{
      fontFamily:'monospace',
      fontStyle:'normal',
      fontSize:20,
    },
    list:{
      paddingTop:-100
    }
    
  })

export default Profile;