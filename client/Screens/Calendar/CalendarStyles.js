import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginRight: 15,
        marginTop: 17,
        marginLeft: 10
    },
    emptyDate: {
      flex: 0.7,
      borderBottomColor: '#cfcfcf',
      borderBottomWidth: 0.5,
      marginRight: 15,
      marginLeft:10,
      marginBottom: 10,
    },
    day: {
        borderRadius: 5,
        alignItems: 'center',
        height:50,
        width:50,
        marginLeft: 5,
        marginTop: 17
    },
    textDay: {
      fontSize: 20, 
      fontWeight: "bold",
    },
    textNum: {
      fontSize: 13, 
    }
})

const stylesModal = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    modalLink: {
      marginBottom: 15,
      textAlign: "center",
      color: 'blue'
    },
    modalTextTitle: {
        textDecorationLine: "underline",
        fontSize: 25
    }
})

export {styles, stylesModal};