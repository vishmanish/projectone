import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { fetchSelectedTheme, defaultTheme } from '../../utils/services';

export default function Button(props) {
    const { onPress, title, testID } = props;
    const selectedTheme = fetchSelectedTheme[0]
        ? fetchSelectedTheme[0]
        : defaultTheme;
    return (
        <View style={styles.loginButtonSection}>
            <TouchableOpacity
                testID={testID}
                style={[
                    styles.button,
                    {
                        backgroundColor: selectedTheme.secondaryColor,
                        borderColor: selectedTheme.secondaryColor,
                    },
                ]}
                onPress={onPress}>
                <Text
                    style={[
                        styles.text,
                        {
                            color: selectedTheme.backgroundColor,
                        },
                    ]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: '40%',
        backgroundColor: '#00b5f1',
        borderColor: '#00b5f1',
        borderWidth: 1,
        borderRadius: 7,
        fontStyle: 'italic',
        justifyContent: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: 'center',
    },
    loginTextSection: {
        width: '100%',
        height: '30%',
    },

    loginButtonSection: {
        alignItems: 'center',
    },
});
