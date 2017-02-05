import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import NavigationBar from '../common/navBar';


export default class help extends Component {
    render() {
        return (
            <View>
                <NavigationBar
                    title={'帮助中心'}
                    leftText={'设置'}
                    leftAction={ this._backToFront.bind(this) }
                />
                <Text>
                    帮助
                </Text>
            </View>
        );
    }
    _backToFront (){
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({

});

module.exports = help;