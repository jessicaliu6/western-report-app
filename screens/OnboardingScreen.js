import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


//import LoginPNG from '../assets/icons/westernreport.png';

var styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },
    image: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
});

const OnboardingScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#000000',
            alignItems: 'center'
        }}>
            <Image source={require('../assets/icons/westernreport.png')} style={styles.image} />
        </View>
    );
};

// <LoginPNG
//height={300}
// width={300}/>

export default OnboardingScreen;