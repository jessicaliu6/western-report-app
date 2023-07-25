import React from 'react';
import { View, Image, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    baseText: {
        color: 'white',
        fontSize: 70,
        fontWeight: 'bold',
        marginTop: 130
    },
    baseSmallText: {
        color: 'white',
        fontSize: 25,
        marginBottom: 60
    },
    innerText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 25
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    nameText: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
        height: 28,
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
        color: 'white'
    }
});

const MainLoginScreen = ({ navigation }) => {

    return (
        <View style={[
            styles.container,
            {
                flexDirection: 'column',
            }
        ]}>

            <View style={{
                justifyContent: 'center',
                padding: 40,
                flex: 6,
                backgroundColor: '#50238C'
            }}>
                <Text style={styles.baseText}>Hello</Text>
                <Text style={styles.baseSmallText}>We are here to help.</Text>

                <View style={styles.nameText}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="First Name"
                        placeholderTextColor={"#d3d3d3"}
                        keyboardType="default"
                    />

                </View>

                <View style={styles.nameText}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Last Name"
                        placeholderTextColor={"#d3d3d3"}
                        keyboardType="default"
                    />
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={{
                        backgroundColor: '#000',
                        padding: 20,
                        borderRadius: 12,
                        marginBottom: 30,
                        marginTop: 10
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#eee'
                        }}>Enter</Text>

                </TouchableOpacity>

            </View>

            <View style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <Image source={require('../assets/icons/westernreport.png')} style={styles.image} />
            </View>

        </View>
    );
};


export default MainLoginScreen;