import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    YellowBox,
    StatusBar,
    ScrollView,
    SceneRendererProps,
    CheckBox, 
    Dimensions, 
    Button, 
    Platform, 
    FlatList,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CustomTopbar from './CustomTopbar'
import { Actions, ActionConst } from 'react-native-router-flux'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import CallIcon from 'react-native-vector-icons/Ionicons';
import MessageIcon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Dialpa from 'react-native-vector-icons/MaterialIcons';

const screenDimension = Dimensions.get('window');
const isBigDevice = screenDimension.height > 600;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
    'Warning: Encountered two children with the'
]);

export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    
    onMenuPress() {

        Actions.drawerOpen()
    }


    render() {
        return (
            <Fragment>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#7DB9B9" translucent = {true}/>
                <View>
                    <CustomTopbar title='Home' onLeftPress={() => this.onMenuPress()}></CustomTopbar>
                </View>
                <View>
                    <Text>Home</Text>
                </View>
            </Fragment>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    scene: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    tabbar: {
        backgroundColor: '#17E284',
    },
    tab: {
        width: 120,
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
    label: {
        fontWeight: 'bold',
    },
    search: {
        width: 318,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    chatview: {
        marginTop: 10,
        marginLeft: 40
    },
    myButton: {
        padding: 5,
        height: 40,
        width: 40,
        borderRadius: 400,
        backgroundColor: '#17E284',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position:'absolute',
        marginTop: deviceHeight / 1.4,
        right: 29.17,
       


    },
    myDialButton: {
        padding: 5,
        height: 40,
        width: 40,
        borderRadius: 400,
        backgroundColor: '#17E284',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position:'absolute',
        marginTop: deviceHeight / 1.4,
        right: 20,


    },
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 60,  
    },  




});