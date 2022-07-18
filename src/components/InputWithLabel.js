import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

class InputWithLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            lableName,
            testID,
            onChange,
            errorMessage,
            value,
            maxLength,
        } = this.props;
        return (
            <View style={InitWindowStyles.root}>
                <View style={InitWindowStyles.rowContainer}>
                    <View style={InitWindowStyles.rootLableContainer}>
                        <Text testID={'label' + testID} style={InitWindowStyles.text}>
                            {lableName}
                        </Text>
                        <View style={InitWindowStyles.textInputView}>
                            <TextInput
                                testID={testID}
                                autoCorrect={false}
                                secureTextEntry={
                                    testID === 'password' || testID === 'confirmPassword'
                                        ? true
                                        : false
                                }
                                onChangeText={onChange}
                                value={value}
                                maxLength={maxLength}
                                style={InitWindowStyles.textInput}
                            />
                            {errorMessage != null ? (
                                <Text style={InitWindowStyles.error}>
                                    {errorMessage != null || errorMessage !== undefined
                                        ? errorMessage
                                        : null}
                                </Text>
                            ) : null}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default InputWithLabel;
const { width } = Dimensions.get('window');
const InitWindowStyles = StyleSheet.create({
    root: {
        flex: 1,
        paddingVertical: '0.5%',
    },
    text: {
        flex: 0.3,
        justifyContent: 'flex-end',
        textAlign: 'right',
        fontSize: width > 480 ? 19 : 10,
    },
    rowContainer: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rootLableContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    textInputView: {
        flex: 0.7,
        justifyContent: 'center',
    },
    textInput: {
        maxWidth: 700,
        height: 30,
        marginLeft: 5,
        backgroundColor: '#e8e5e5',
        borderColor: 'black',
    },
    error: {
        flex: 0.7,
        marginLeft: '2%',
        color: 'red',
        paddingVertical: 2,
        textAlign: 'left',
    },
});
