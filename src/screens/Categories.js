import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Layout from '../../components/Layout';
import AppHeader from '../../components/AppHeader';
import { vh, vw } from '../../constants/deviceDimension';
import Icon from '../../components/Icon';
import CustomInput from '../../components/CustomInput';
import CustomOtp from '../../components/CustomOtp';

const Categories = (props) => {



    return (
        <Layout>
            <View>
                <AppHeader
                    title='All Category'
                />
                <View style={styles.headerSection} >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#FB29B0', width: 80, height: 80, }}>
                            <Icon
                                name="lock"
                                size={50}
                                color='#fff'
                                type="evilIcons"
                            />
                        </View>
                        <View style={{ marginVertical: 2 * vh }}>
                            <Text style={{ fontSize: 25, alignItems: 'center', fontWeight: 'bold' }}> Sign in</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bodySection}>
                    <View style={{ marginTop: 10 }}>
                        <CustomInput
                            placeholder="abcd"
                            placeholderTextColor="#000"
                            maxTextLength={10}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <CustomInput
                            placeholder="Defg"
                            placeholderTextColor="#000"
                            maxTextLength={10}

                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <CustomOtp />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <CustomInput
                            placeholder="Defg"
                            placeholderTextColor="#000"
                            maxTextLength={10}
                            type='flat'
                            inputFocus='true'
                        />
                    </View>
                </View>
            </View>
        </Layout>
    )
}


export default Categories

const styles = StyleSheet.create({
    headerSection: {
        backgroundColor: 'pink',
    },
    bodySection: {
        backgroundColor: 'yellow',
        height: 50 * vh,
    },
})