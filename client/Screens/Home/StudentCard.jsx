import React from "react"
import { Container, Icon, Content, Card, CardItem, Text, Switch, Body, Button, View, Thumbnail, List, ListItem, Left, Right } from "native-base";
import { Image, StyleSheet } from 'react-native'


export default function StudentCard({ data }) {
    // data = { haguerrerob }
    if (!data && Object.keys(data).length === 0) return null;

    console.log(data)

    const {
        cellphone,
        cohort,
        email,
        github,
        group,
        id,
        instructor,
        lastName,
        module,
        name,
        projectManagers,
        startDay,
    } = data

    return <Content padder>
        <Card style={{}}>
            <CardItem bordered>
                <Body>
                    <Text style={styles.titles}>
                        {name} {lastName}
                    </Text>
                    <Text style={styles.titles}>
                        Github: {github}{"\n"}
                    </Text>
                </Body>
            </CardItem>
            <CardItem footer bordered >
                <Text>Datos</Text>
            </CardItem>
            <CardItem  >
                <Text>Instructor: {instructor && Object.keys(instructor).length > 0 ? `${instructor.firstName} ${instructor.lastName}` : 'ninguno'} </Text>
            </CardItem>
            <CardItem  >
                <Text>Cohorte actual: {cohort}</Text>
            </CardItem>
            {/* <CardItem  >
                <Text>Fecha Ingreso: {startDay.slice(0, 10)}</Text>
            </CardItem> */}
            <CardItem  >
                <Text>Modulo Actual {module}</Text>
            </CardItem>
        </Card>
    </Content>
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: '#AED6F1',
        height: 550


    },
    card: {
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#AED6F1'

    },
    image: {
        borderRadius: 50,
        width: 80,
        height: 80,
        marginTop: 10
    },
    titles: {
        fontFamily: 'monospace',
        fontStyle: 'normal',
        fontSize: 20,
    },
    list: {
        paddingTop: -100
    }

})
