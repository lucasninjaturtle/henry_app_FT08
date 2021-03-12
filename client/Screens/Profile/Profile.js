import React, {useEffect} from 'react'
import { Text, View} from 'native-base'
import {Image, StyleSheet} from 'react-native'
import { getUserInfo } from '../../Redux/Actions/userActions';
import store from '../../Redux/store';
import {useSelector,useDispatch } from 'react-redux'

import { Container, Header, Footer , FooterTab, Icon, Content, Card, CardItem, Switch, Body, Button, Thumbnail, List, ListItem, Left, Right} from "native-base";



const Profile = ()=>{
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUserInfo())
    }, [])

    let Student = useSelector((store) => store.userInfo.usuario)
    return (
        <View >
            <Header style={{backgroundColor:'black',height:50,}}>
                    <Text style={styles.perfil}>
                        Perfil
                    </Text>
            </Header>
            <Container style={styles.container}>
            <Card style={styles.card}>
            <CardItem header bordered style={{top:-5, backgroundColor:'#AED6F1',}}>
              <Thumbnail style={styles.image} source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'}}
              />
            </CardItem>
            <CardItem bordered style={styles.card}>
                <Text style={styles.text}>
                {Student.name} {Student.lastName}
                </Text>
            </CardItem>
            <CardItem style={styles.card} >
              <Text style={styles.text}>Instructor: {Student.instructor.firstName} {Student.instructor.lastName}</Text>
            </CardItem>
            {/* <CardItem  >
              <Text >PM: {Student.projectManagers[0].firstName} </Text>
            </CardItem> */}
            <CardItem style={styles.card}>
                        {/* <Button style={{maxHeight:50, maxWidth:100}} transparent >
                            <Text>
                                Editar
                            </Text>
                        </Button> */}
                    <Text style={styles.text}>
                        +{Student.cellphone}
                    </Text>
            </CardItem>
            <CardItem style={styles.card}>
                <Text style={styles.text}>
                    {Student.email}
                </Text>
            </CardItem>
            <CardItem style={styles.card} >
              <Text style={styles.text}>Cohorte actual: {Student.cohort}</Text>
            </CardItem>
            </Card>
            </Container>
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
      textAlign:'center',
      paddingTop:10,
      backgroundColor:'black',
      height:550
      
    },
    card:{
        backgroundColor:'#AED6F1',
        height:58
    },
    image:{
        borderRadius:50,
      width:350,
      height:330,
      marginBottom:20
    },
    titles:{
      fontFamily:'monospace',
      fontStyle:'normal',
      fontSize:20,
      color:'#2874A6',
      textAlign:'center'
    },
    perfil:{
        fontFamily:'monospace',
        fontStyle:'normal',
        fontSize:20,
        color:'white',
        marginTop:15
    },

    text: {
        fontFamily:'serif',
        color:'#212F3D',
        fontStyle:'normal',
        fontSize:20,
    },
    list:{
      paddingTop:-100
    }
    
  })

export default Profile;