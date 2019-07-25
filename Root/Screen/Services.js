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
    YellowBox,
    CheckBox,
    TextInput,
    Dimensions,
    Platform, Picker, Alert, AppRegistry, ActivityIndicator, StatusBar
} from 'react-native';


import { Actions, Reducer } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import data from '../Assets/Data.json'

const screenDimension = Dimensions.get('window');
const isBigDevice = screenDimension.height > 600;
import DeviceInfo from 'react-native-device-info';
import MenuIcon from 'react-native-vector-icons/Entypo';
import BackIcon from 'react-native-vector-icons/Ionicons';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
    'Warning: Encountered two children with the',
    'Warning: Failed child context type'
]);


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

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        return fetch('https://api.myjson.com/bins/11qrgh')
        .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson.info
                    });
                })
                    .catch((error) => {
                                    console.log(error)
                                })
    }

    //     async componentDidMount(){
    //         let formData = new FormData();
    //        // formData.append('id',value.id);
    //         const url ='https://api.myjson.com/bins/11z4dt'
    //         fetch(url,{
    //             method:"POST",
    //             //body:formData
    //         })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log(responseJson)
    //             this.setState({
    //                 isLoading: false,
    //                 dataSource: responseJson
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })

    //    //.done();
    // }


    render() {
        const { title, isBackIcon, onLeftPress } = this.props;

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
                <ActivityIndicator size="large" />
        
              </View>
              
            );
        }        
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
                                Our Services
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
                            Services
                        </Text>

                        <FlatList
                            data={this.state.dataSource}
                            // extraData={this.state}
                            // ItemSeparatorComponent={this.FlatListItemSeparator}
                            // keyExtractor={(item, index) => index.toString()}
                            numColumns={1}
                            renderItem={({ item, index }) => (

                                <View style={[styles.Typestyle, shadowStyle]}>

                                    <Image style={{ height: 150, width: Platform.OS === 'ios' ? 310 : 340, borderTopLeftRadius: 10, borderTopRightRadius: 10, right: 1, }}
                                        source={{ uri: item.image }}
                                    />

                                    <Text style={{ fontSize: (isBigDevice) ? 25 : 15, color: '#000', marginTop: 20, marginLeft: 30 }}>
                                        {item.service_name}
                                    </Text>

                                    <Text style={{ fontSize: (isBigDevice) ? 15 : 15, fontWeight: 'bold', color: '#7DB9B9', marginTop: 10, marginLeft: 30 }}>
                                        INR {item.price}
                                    </Text>

                                    <Text style={{ fontSize: (isBigDevice) ? 15 : 15, color: '#000', marginTop: 20, marginLeft: 30, fontWeight: '100' }}>
                                        {item.description}
                                    </Text>

                                    <TouchableOpacity
                                        style={styles.AddNewbutton}
                                        onPress={() => Actions.BookAppointment()}>
                                        <Text style={styles.submitButtonText}> Book Appointment </Text>
                                    </TouchableOpacity>


                                </View>
                            )}

                        />

                        {/* <View style={[styles.Typestyle, shadowStyle]}>

                            <Image style={{ height: 150, width: Platform.OS === 'ios' ? 310 : 340, borderTopLeftRadius: 10, borderTopRightRadius: 10, right: 1, }}
                                source={require('../Assets/image1.png')}
                            />

                            <Text style={{ fontSize: (isBigDevice) ? 25 : 15, color: '#000', marginTop: 20, marginLeft: 30 }}>
                                Holistic Healthcare Package
                            </Text>

                            <Text style={{ fontSize: (isBigDevice) ? 15 : 15, fontWeight: 'bold', color: '#7DB9B9', marginTop: 10, marginLeft: 30 }}>
                                INR 1,230
                            </Text>

                            <Text style={{ fontSize: (isBigDevice) ? 15 : 15, color: '#000', marginTop: 20, marginLeft: 30, fontWeight: '100' }}>
                                Our preventative healthcare package that covers every dacet ch. Read More
                            </Text>

                            <TouchableOpacity
                                style={styles.AddNewbutton}
                                onPress={() => Actions.BookAppointment()}>
                                <Text style={styles.submitButtonText}> Book Appointment </Text>
                            </TouchableOpacity>


                        </View>

                        <View style={[styles.Typestyle, shadowStyle]}>

                            <Image style={{ height: 150, width:Platform.OS === 'ios' ? 310 : 340, borderTopLeftRadius: 10, borderTopRightRadius: 10, right: 1, }}
                                source={require('../Assets/image2.png')}
                            />

                            <Text style={{ fontSize: (isBigDevice) ? 25 : 15, color: '#000', marginTop: 20, marginLeft: 30 }}>
                                Holistic Healthcare Package
                            </Text>

                            <Text style={{ fontSize: (isBigDevice) ? 15 : 15, fontWeight: 'bold', color: '#7DB9B9', marginTop: 10, marginLeft: 30 }}>
                                INR 1,230
                            </Text>

                            <Text style={{ fontSize: (isBigDevice) ? 15 : 15, color: '#000', marginTop: 20, marginLeft: 30, fontWeight: '100' }}>
                                Our preventative healthcare package that covers every dacet ch. Read More
                            </Text>

                            <TouchableOpacity
                                style={styles.AddNewbutton}
                                onPress={() => Actions.BookAppointment()}>
                                <Text style={styles.submitButtonText}> Book Appointment </Text>
                            </TouchableOpacity>


                        </View>

                        <View style={[styles.Typestyle, shadowStyle]}>

                            <Image style={{ height: 150, width: Platform.OS === 'ios' ? 310 : 340, borderTopLeftRadius: 10, borderTopRightRadius: 10, right: 1, }}
                                source={require('../Assets/image3.png')}
                            />

                            <Text style={{ fontSize: (isBigDevice) ? 25 : 15, color: '#000', marginTop: 20, marginLeft: 30 }}>
                                Holistic Healthcare Package
                            </Text>

                            <Text style={{ fontSize: (isBigDevice) ? 15 : 15, fontWeight: 'bold', color: '#7DB9B9', marginTop: 10, marginLeft: 30 }}>
                                INR 1,230
                            </Text>

                            <Text style={{ fontSize: (isBigDevice) ? 15 : 15, color: '#000', marginTop: 20, marginLeft: 30, fontWeight: '100' }}>
                                Our preventative healthcare package that covers every dacet ch. Read More
                            </Text>

                            <TouchableOpacity
                                style={styles.AddNewbutton}
                                onPress={() => Actions.BookAppointment()}>
                                <Text style={styles.submitButtonText}> Book Appointment </Text>
                            </TouchableOpacity>


                        </View> */}

                        {/* <Text style={{ fontSize: (isBigDevice) ? 20 : 15, color: '#fff', fontWeight: 'bold', marginTop: 20, alignSelf: 'flex-end', marginRight: 35, }}>
                            VIEW ALL SERVICES
                        </Text> */}

                        <View style={{ height: 100 }} />


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
        width: Platform.OS === 'ios' ? 310 : 340,//340,
        marginLeft: 35,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
    },
    AddNewbutton: {
        backgroundColor: '#7DB9B9',
        padding: 10,
        marginTop: 20,
        width: Platform.OS === 'ios' ? 250 : 270,
        marginLeft: 30,
        borderRadius: 5,
        height: 40,
    },
    submitButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
})

module.exports = Services
