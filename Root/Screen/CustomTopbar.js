import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar, Image } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import MenuIcon from 'react-native-vector-icons/Entypo'
import BackIcon from 'react-native-vector-icons/Ionicons';


class CustomTopbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       
    }

    render() {

        const { title, isBackIcon, onLeftPress } = this.props

        return (
            <View style={{ backgroundColor: '#7DB9B9' }}>
                {/* <StatusBar barStyle="light-content"/> */}
                <View style={{ height: (DeviceInfo.hasNotch()) ? 84 : 64, borderWidth: 0, flexDirection: 'row', marginTop: (DeviceInfo.hasNotch()) ? 10 : 10 }}>
                        
                           
                    
                    <TouchableOpacity
                        onPress={onLeftPress}
                        style={{ flex: 2, borderWidth: 0, justifyContent: 'center', alignItems: 'center', marginTop: (DeviceInfo.hasNotch()) ? 30 : 0 }}

                    >

                        {
                            isBackIcon
                                ?
                                <BackIcon name="md-arrow-back" size={32} color="#ffffff" />
                                :
                                <MenuIcon name="menu" size={32} color="#ffffff" />
                        }


                    </TouchableOpacity>
                    
                    <View style={{ flex: 6, borderWidth: 0, justifyContent: 'center', alignItems: 'center', marginTop: (DeviceInfo.hasNotch()) ? 30 : 0 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: '700' }}>{title}</Text>
                    </View>
                    <View style={{ flex: 2, borderWidth: 0, marginTop: (DeviceInfo.hasNotch()) ? 30 : 0 }}>

                    </View>
                </View>
            </View >
        );
    }
}
module.exports = CustomTopbar