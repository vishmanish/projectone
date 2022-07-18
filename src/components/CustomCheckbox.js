import React from 'react';
import { StyleSheet, Image } from 'react-native';
import unchecked from './../../assets/images/Circle.png';
import checked from './../../assets/images/checked.png';

import { TouchableOpacity } from 'react-native';

const CheckBox = ({
    selected,
    onPress,
    style,
    textStyle,
    size = 30,
    color = '#211f30',
    text = '',
    ...props
}) => (
    <TouchableOpacity
        style={[styles.checkBox, style]}
        onPress={onPress}
        {...props}>
        <Image
            source={{ uri: selected ? checked : unchecked }}
            style={[styles.image]}
        />
    </TouchableOpacity>
);

export default CheckBox;

const styles = StyleSheet.create({
    checkBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
    },
});
