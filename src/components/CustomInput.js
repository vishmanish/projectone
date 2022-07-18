import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import { vh } from '../constants/deviceDimension'


const getInputTextStyle = type => {
  switch (type) {
    case 'flat':
      return (
        InputBoxStyle = {
          backgroundColor: 'pink',
          height: 20 * vh,
          width: '100%',
          paddingLeft: 5
        }
      );
    case 'BottomBorder':
      return (
        InputBoxStyle = {
          backgroundColor: 'red',
          height: 20 * vh,
          width: '100%',
          paddingLeft: 10
        }
      );
    default:
      return (
        InputBoxStyle = {
          backgroundColor: 'black',
          color: 'white',
          height: 20 * vh,
          width: '100%',
          paddingLeft: 15
        }

      )

  }
}

const CustomInput = ({ type, ...props }) => {
  console.log("props value", type, "*******", props);
  console.log("#####", props.inputFocus);
  const [focus, setFocus] = useState(props.inputFocus)// set the state
  const blurFunc = () => {
    setFocus(false)
  }
  const focusFunc = () => {
    setFocus(true)
  }

  return (
    <View
      style={[styles.container, props.style,
      ]}
    >
      <TextInput
        setFocus={focus} //whatever focus state holds
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        onBlur={blurFunc}
        onFocus={focusFunc}
        onChangeText={props.onChangeText}
        autoCapitalize='none'
        underlineColorAndroid="transparent"
        maxLength={props.maxTextLength}
        minLength={props.minTextLength}
        // style={[styles.textinputbox, focus ? styles.focused : styles.notFocused]}
        style={[getInputTextStyle, focus ? styles.focused : styles.notFocused]}
        secureTextEntry={props.secureText}
        keyboardType={props.keyBoard}
        multiline={props.NumberOfLine}
        value={props.value}
      />
    </View>
  )
}

export default CustomInput;

const styles = StyleSheet.create({
  container: {

    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
  },
  textinputbox: {
    backgroundColor: '#fff',
    height: 5 * vh,
    width: '100%',
    paddingLeft: 5,
  },
  focused: {
    // fontFamily: Font.INTER_SEMIBOLD,
    fontSize: 12,
    color: '#000',
    backgroundColor: '#fff',
    borderColor: 'green',
    borderWidth: 1,
  },
  notFocused: {
    // fontFamily: Font.INTER_REGULAR,
    // fontSize: FontSize.SMALL,
    fontSize: 12,
    color: '#000',
    backgroundColor: '#c8c8c8'
  },
})

