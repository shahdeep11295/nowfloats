import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    Button,
    ScrollView,
    CheckBox,
    TextInput,
    Dimensions,
    Platform, Picker, Alert, AppRegistry, ActivityIndicator, StatusBar
} from 'react-native';


import { Actions, Reducer } from 'react-native-router-flux';

const screenDimension = Dimensions.get('window');
const isBigDevice = screenDimension.height > 600;
import DeviceInfo from 'react-native-device-info';
import MenuIcon from 'react-native-vector-icons/Entypo';
import BackIcon from 'react-native-vector-icons/Ionicons';

const shadowStyle = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
}

class Story extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, isBackIcon, onLeftPress } = this.props;
        return (
            <View>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#7DB9B9" translucent={true} />
                <View style={{ backgroundColor: '#7DB9B9' }}>
                    {/* <StatusBar barStyle="light-content"/> */}
                    <View
                        style={{
                            height: DeviceInfo.hasNotch() ? 84 : 64,
                            borderWidth: 0,
                            flexDirection: 'row',
                            marginTop: DeviceInfo.hasNotch() ? 10 : 10,
                        }}>
                        <TouchableOpacity
                            onPress={onLeftPress}
                            style={{
                                flex: 2,
                                borderWidth: 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: DeviceInfo.hasNotch() ? 30 : 0,
                            }}>
                            {isBackIcon ? (
                                <MenuIcon
                                    name="menu"
                                    size={32}
                                    color="#ffffff"
                                />
                            ) : (
                                    <BackIcon
                                        name="md-arrow-back"
                                        size={32}
                                        color="#ffffff"
                                        onPress={() => Actions.Home()}
                                    />
                                )}
                        </TouchableOpacity>
                        <View
                            style={{
                                flex: 6,
                                borderWidth: 0,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: DeviceInfo.hasNotch() ? 30 : 0,
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'white',
                                    fontWeight: '700'
                                }}>
                                Story
              </Text>
                        </View>
                        <View
                            style={{
                                flex: 2,
                                borderWidth: 0,
                                marginTop: DeviceInfo.hasNotch() ? 30 : 0,
                            }}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', height: 1 }} />
                <ScrollView>
                <View style={{ backgroundColor: '#7DB9B9' }}>
                    
                        <Text style={{ fontSize: (isBigDevice) ? 30 : 15, color: '#fff', fontWeight: 'bold', marginTop: 20, marginLeft: 35 }}>
                        Our Story
                        </Text>

                       
                       
                       

                            
                        
                        <View style={{height:100}}/>

                    
                </View>
                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    Typestyle: {
        height: 400,
        width: 340,
        marginLeft: 35,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
    },
    AddNewbutton: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 20,
        width: 280,
        marginLeft: 30,
        borderRadius: 5,
        height: 40,
    },
    submitButtonText: {
        textAlign: 'center',
        color: '#7DB9B9',
        fontWeight: 'bold',
    },
})

module.exports = Story
