import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {
        const { placeHolder, testID, onChangeText } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        testID={testID}
                        secureTextEntry={testID === 'password' ? true : false}
                        underlineColorAndroid="transparent"
                        placeholder={placeHolder}
                        placeholderTextColor="#fff"
                        autoCapitalize="none"
                        style={[styles.input, styles.inputSpacing]}
                        onChangeText={onChangeText}
                    />
                    {this.props.type === 'password' ? (
                        <TouchableOpacity
                            onPress={() => this.props.hidePassword()}
                            style={styles.passwordView}>
                            <Icon
                                name={this.props.eyeOpen ? 'eye' : 'eye-slash'}
                                size={20}
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
        );
    }
}
export default Inputs;
const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    input: {
        height: 50,
        marginHorizontal: '20%',
        backgroundColor: '#81888a',
        borderColor: '#81888a',
        borderWidth: 1,
        borderRadius: 7,
        textAlign: 'left',
        paddingHorizontal: 0,
        fontStyle: 'italic',
    },
    passwordView: { position: 'absolute', right: 10, top: 12 },
    inputSpacing: { marginHorizontal: 0, paddingHorizontal: 10, borderWidth: 0 },
});
