import { StyleSheet, View, StatusBar, Platform } from 'react-native'
import React from 'react'

const StatusBarComp = () => {
    return (
        <View
            style={styles.statusBarStyle}>
            <StatusBar
                translucent
                backgroundColor="#00BCD4"
                barStyle="light-content"
                networkActivityIndicatorVisible={true}
            />
        </View>
    )
}

export default StatusBarComp

const styles = StyleSheet.create({
    statusBarStyle: {
        backgroundColor: '#00BCD4',
        height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    }
})