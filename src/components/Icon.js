import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import RNIMigration from 'react-native-vector-icons/RNIMigration';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';

const getIconFont = type => {
    switch (type) {
        case 'antDesign':
            return AntDesign;

        case 'entypo':
            return EntypoIcons;

        case 'evilIcons':
            return EvilIcons;

        case 'feather':
            return FeatherIcons;

        case 'fontAwesome':
            return FontAwesome;

        case 'fontAwesome5':
            return FontAwesome5;

        case 'fontAwesome5Pro':
            return FontAwesome5Pro;

        case 'fontisto':
            return FontistoIcons;

        case 'foundation':
            return FoundationIcons;

        case 'entypo':
            return Ionicons;

        case 'entypo':
            return MaterialCommunityIcons;
        case 'materialIcons':
            return MaterialIcons;

        case 'octicons':
            return Octicons;

        case 'rNIMigration':
            return RNIMigration;

        case 'simpleLineIcons':
            return SimpleLineIcons;

        case 'zocialIcon':
            return ZocialIcon;
        default:
            return MaterialIcons;
    }
};


const Icon = ({ type, ...props }) => {
    const FontIcon = getIconFont(type);
    return <FontIcon {...props} />
};

export default Icon;



//uses are given below ---
// first import this file where you want to use and use like this
// <Icon
// name="doubleright"
// size={50}
// color='#f0fc'
// type='antDesign'   //mention it other wise it can be taken at default
// />