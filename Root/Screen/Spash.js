import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            Actions.root({ type: ActionConst.RESET })
            // Actions.sidemenu({ type: ActionConst.RESET })
        }, 2500);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar barStyle="light-content" backgroundColor='red'/> */}
                
                <ImageBackground
                    style={{ width: 100, height: 100, borderWidth: 0 }}
                    source={require('../Assets/logo.png')}
                    resizeMode='contain'
                />
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
    }
})

module.exports = Splash