import React, { useState } from 'react'
import 'react-native-gesture-handler';
import { Dimensions, Modal, StyleSheet, Linking } from 'react-native'
import { Input, Form, Label, Textarea, Item, Container, Header, Content, Badge, Text, Icon, View, List, ListItem, Left, Body, Right, Thumbnail, Button } from 'native-base';
import axios from 'axios';
import Stats from './Stats'
// import envTrucho from '../../envTrucho';

import { useSelector, useDispatch } from "react-redux";
import DrawerHomeNavigator from '../../Navigators_test/DrawerHomeNavigator'
import { setUserToken } from '../../Redux/Actions/userActions';

const envTrucho = '192.168.100.13';

const width = Dimensions.get("window").width

const Auxilio = (props) => {

    const dispatch = useDispatch();


    let student = useSelector((store) => store.userInfo.usuario);

    const [token, setToken] = useState('');

    const handleInputChange = function (e) {
        setToken({
            ...token,
            token: e.nativeEvent.text
        });
    };

    const handleOnPress = () => {
        axios.put(`http://${envTrucho}:5000/user/student/${student.id}`, {
            githubToken: token.token
        }).then(resp => {
            dispatch(setUserToken(token.token))
        }).catch(err => {
            console.log(err)
        })
    };



    return (


        <View
            style={{
                flexDirection: "column",
                height: 150,
                padding: 0,
                top: 40,
            }}

        >
            <Thumbnail
                scaleX={3} scaleY={3} style={{ margin: 30 }}
                // style={{ height: 100, width: 100 }}
                source={{
                    uri:
                        "https://png.pngitem.com/pimgs/s/252-2529729_picture-freeuse-explosion-like-text-bubbles-transprent-hd.png",
                }}
            />

            <Text>Ud. no posee un Token personal para ingresar</Text>

            <Form>
                <Item floatingLabel>
                    <Label>Ingrese su token personal</Label>
                    <Input
                        value={token}
                        onSubmit
                        onChange={handleInputChange}
                        style={{ borderBottomColor: 'black' }}
                        onPress={() => {
                            handleOnPress();
                        }}
                    />
                </Item>
                <Button
                    onPress={handleOnPress}
                    style={{ alignSelf: 'center', marginTop: 30 }}
                >
                    <Text >Submit</Text>
                </Button>
            </Form>
            <Text>Para obtener su Token Personal de Github Ud. Debe:</Text>
            <List>
                <ListItem>
                    <Text>1- Dirigite a:  </Text>
                    <Text onPress={() => { Linking.openURL('https://github.com/') }} >https://github.com</Text>
                </ListItem>
                <ListItem>
                    <Text>2- Despliega la ventana de tu perfil (Arriba a la derecha), y selecciona la opcion "Settings"</Text>
                </ListItem>
                <ListItem>
                    <Text>3- Selecciona la opcion "Developer Settings" (Abajo a la izquierda)</Text>
                </ListItem>
                <ListItem>
                    <Text>4- Selecciona la opcion "Personal access token"</Text>
                </ListItem>
                <ListItem>
                    <Text>5- Genera un nuevo token con la opcion "Generate new token"</Text>
                </ListItem>
                <ListItem>
                    <Text>6- Sobre la note, simplemente pon "Henry App", y selecciona todos los checkboxes del scope "repo"</Text>
                </ListItem>
                <ListItem>
                    <Text>7 - Genera el nuevo token, copialo y pegalo arriba!</Text>
                </ListItem>
            </List>
        </View>

    )
}

export default Auxilio;