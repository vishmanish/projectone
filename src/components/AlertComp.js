import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Modal } from 'react-native'
import * as Colors from '../constants/Colors'


const vw = Dimensions.get('window').width / 100;

const vh = Dimensions.get('window').height / 100;


export default function AlertComp(props) {
    return (
        <Modal animationType="slide"
            transparent={true}
            visible={props.visible}>

            <View style={styles.mainView}>

                <View style={styles.underView}>

                    <Text style={styles.msgText}>{props.message}</Text>

                    <TouchableOpacity style={styles.alertBtn}
                        onPress={props.press1}>

                        <Text style={styles.btnText}>hello text</Text>

                    </TouchableOpacity>

                </View>

            </View>

        </Modal>


    )
}

const styles =
    StyleSheet.create({

        mainView: {

            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(100, 100, 100, 0.8)',
        },
        underView: {
            // backgroundColor: Colors.COLOR.DISABLECOLOR,
            margin: 2 * vh,
            borderRadius: 2 * vh,
            padding: 5 * vh,
            alignItems: 'center',
            justifyContent: 'center',
        },
        msgText: {
            fontSize: 5 * vw,
            // color: Colors.COLOR.DARKBLACk,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        alertBtn: {
            // backgroundColor: Colors.COLOR.BUTTONBACKGROUNDCOLOR,
            padding: 1 * vh,
            marginTop: 5 * vh,
            borderRadius: 3 * vh,
            width: 50 * vw,
            height: 6 * vh,
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnText: {
            fontSize: 5 * vw,
            color: 'white',
            fontWeight: 'bold'
        },
    });

