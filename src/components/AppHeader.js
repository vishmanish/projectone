import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { vw, vh } from '../constants/deviceDimension';
import { Badge, Surface, Title } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';

console.log("vh aand vw value", vh, vw);
const AppHeader = ({
    menu,
    back,
    rxLogo,
    title,
    bellIcon,
    rightFunction,
    optionalBadge,
    optionalFunc,
    openDrawer,
    props,
}) => {
    return (
        <Surface style={styles.header}>
            <View
                style={
                    title === 'BottomTabName' ||
                        title === 'BottomTabName' ||
                        title === 'BottomTabName'
                        ? [styles.view1, { backgroundColor: '#fff', flex: 2 }]
                        : styles.view1
                }>
                {menu && (
                    <TouchableOpacity onPress={openDrawer} style={{ paddingRight: 1 * vh }}>
                        <Feather name="menu" size={IconSize} color={Colors.Button_color} />
                    </TouchableOpacity>
                )}
                {back && (
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                        style={{ paddingRight: 1 * vh }}>
                        <Image source={imageUrl.ChevronLeft} />
                    </TouchableOpacity>
                )}
                {rxLogo && (
                    <TouchableOpacity style={{ paddingRight: 1 * vh }}>
                        <Image source={imageUrl.PurelyRxIcon} style={styles.rxlogo} />
                    </TouchableOpacity>
                )}
            </View>
            <View
                style={
                    title === 'BottomTabName' ||
                        title === 'BottomTabName' ||
                        title === 'BottomTabName'
                        ? [styles.view2, { backgroundColor: '#fff', flex: 6 }]
                        : styles.view2
                }>
                <Title style={styles.titleStyle}>{title}</Title>
            </View>
            <View
                style={
                    title === 'BottomTabName' ||
                        title === 'BottomTabName' ||
                        title === 'BottomTabName'
                        ? [styles.rightView, { backgroundColor: '#fff', flex: 2 }]
                        : styles.rightView
                }>
                {bellIcon && (
                    <TouchableOpacity>
                        <Image source={imageUrl.NotificationBell} />
                    </TouchableOpacity>
                )}
                {optionalFunc && (
                    <TouchableOpacity style={styles.rowView} onPress={optionalFunc}>
                        <Feather name="bell" size={IconSize} color={Colors.HeaderColor} />
                        {optionalBadge && (
                            <Badge style={styles.badgeStyle}>
                                {optionalBadge}
                            </Badge>
                        )}
                    </TouchableOpacity>
                )}
                {rightFunction && (
                    <TouchableOpacity>
                        <Feather
                            name="more-vertical"
                            size={IconSize}
                            color={Colors.white}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </Surface>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        height: 8 * vh,
        elevation: 1 * vh,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.White,
    },
    view1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2 * vh,
    },
    view2: {
        flex: 8,
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    rightView: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    titleStyle: {
        color: Colors.HeaderColor,
        fontSize: 4 * vh,
        fontFamily: 'CormorantGaramond-BoldItalic',
        lineHeight: 50,
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    rxlogo: {
        height: 4 * vh,
        width: 9 * vw,
    },
    badgeStyle: {
        position: 'absolute',
        top: -4,
        right: -4,
    },
})