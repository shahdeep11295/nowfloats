import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';

import PowerOffIcon from 'react-native-vector-icons/FontAwesome'
import ProfileIcon from 'react-native-vector-icons/AntDesign'
import TopIcon from 'react-native-vector-icons/Entypo'
import { Actions } from 'react-native-router-flux';
import PasswordIcon from 'react-native-vector-icons/Ionicons';

{/* <PasswordIcon style={{ marginLeft: 20 }} name="md-lock" size={32} color="#17E284" /> */ }


const screenDimension = Dimensions.get('window')
const isBigDevice = screenDimension.height > 600

class Sidemenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

            arrMenu: [
                {
                    'key': '1',
                    'menuIcon': 'home',
                    'menuName': 'Home'
                },
                {
                    'key': '2',
                    'menuIcon': 'story',
                    'menuName': 'Our Story'
                },
                {
                    'key': '3',
                    'menuIcon': 'meet',
                    'menuName': 'Meet To Doctor'
                },
                {
                    'key': '4',
                    'menuIcon': 'services',
                    'menuName': 'Our Services'
                },
                {
                    'key': '5',
                    'menuIcon': 'reload',
                    'menuName': 'Updates'
                },
                {
                    'key': '5',
                    'menuIcon': 'information',
                    'menuName': 'More Information'
                },
                {
                    'key': '5',
                    'menuIcon': 'contact',
                    'menuName': 'Contact'
                },
            ]
        }

    }


    onItemClick(index) {
        switch (index) {
            case 0:
                Actions.pop()
                break;

            case 1:
                Actions.Story()
                break;

            case 2:
                Actions.Meet()
                break;

            case 3:
                Actions.Services()
                break;

            case 4:
                Actions.Updates()
                break;
            case 5:
                Actions.Information()
                break;
            case 6:
                Actions.Contact()
                break;

            default:
                break;
        }
    }

    renderTopView() {
        return (
            <View style={styles.topiew}>
                <View style={{ flex: 3.2, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../Assets/logo.png')}
                        style={{ width: 70, height: 70, }} />
                </View>
                {/* <View style={{ flex: 7, borderWidth: 0, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 5 }}>
                    <Text style={{ fontSize: (isBigDevice) ? 21 : 18, color: '#fff', fontWeight: 'bold', textAlign: 'left', marginTop: 20 }}>David</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', alignItems: 'center', borderWidth: 0 }}>
                        <Text style={{ borderWidth: 0, color: '#fff', fontSize: (isBigDevice) ? 15 : 13, textAlign: 'left', marginTop: 20 }}>David@gmail.com </Text>
                    </View>
                </View> */}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTopView()}
                <View style={{ flex: 6.8, backgroundColor: '#fff' }}>
                    <FlatList style={{ marginTop: 5 }}
                        data={this.state.arrMenu}
                        extraData={this.state.arrMenu}
                        scrollEnabled={false}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity style={styles.menuItemView}
                                onPress={() => this.onItemClick(index)}
                            >

                                <Image style={{ height: 20, width: 20, borderWidth: 0, margin: 22 }}
                                    source={{ uri: item.menuIcon }}
                                    resizeMode='contain'
                                />
                                <Text style={{ fontSize: (isBigDevice) ? 15 : 13, fontWeight: 'bold', color: '#7DB9B9' }}>{item.menuName}</Text>
                            </TouchableOpacity>
                        }
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={styles.AddNewbutton}>
                            <Text style={styles.submitButtonText}> Get Appointment </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.AddNewbutton2}>
                            <Text style={styles.submitButtonText2}>Call +91-234567890</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
        borderWidth: 0,
    },
    topiew: {
        flex: 3.1,
        borderWidth: 0,
        backgroundColor: '#7DB9B9',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    menuItemView: {
        height: 50,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    AddNewbutton: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 15,
        width: 130,
        marginLeft: 10,
        borderRadius: 100,
        height: 40,
    },
    submitButtonText: {
        textAlign: 'center',
        color: '#7DB9B9',
    },
    AddNewbutton2: {
        backgroundColor: '#7DB9B9',
        padding: 10,
        margin: 15,
        width: 130,
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 100,
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
    },
    submitButtonText2: {
        textAlign: 'center',
        color: '#fff',
    },
})

module.exports = Sidemenu