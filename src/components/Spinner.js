import * as Colors from '../../utils/colors';
import React, { Component } from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class SpinnerLoader extends Component {
    render() {
        return (
            <View>
                <Spinner
                    visible={this.props.showProgress}
                    color={Colors.colorAccent}
                    textContent={'Please wait'}
                    size="large"
                />
            </View>
        );
    }
}

export default SpinnerLoader;
