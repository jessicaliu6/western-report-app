import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list'

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7'
    },
    baseText: {
        color: '#414141',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 90
    },
    baseSmallText: {
        color: '#414141',
        fontSize: 16,
        fontWeight: '400',
        marginTop: 15,
        color: '#fff'
    },

    innerText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 25
    },
    backImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',

    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    checkmark: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    selectiveList: {
        marginBottom: 150,
        position: 'fixed',
    },
})


const SubmitScreen = ({ navigation }) =>  {

    return (

        <View style={[
            styles.container,
            {
                flexDirection: 'column',
            }
        ]}>

            <View style={{
                flex: 1.5,
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundColor: '#F3F3F3'
            }}>
                <Text style={styles.baseText}>Make a Report</Text>

                <View style={{
                    position:'relative',
                    top:-30,
                    left: -150,}}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('HomeScreen')}
                        >
                        <Image 
                        source={require('../assets/icons/left.png')} 
                        style={styles.backImage}
                        />                  
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{
                padding: 30,
                flex: 4.5,
                backgroundColor: '#E7E7E7',
            }}>

                <View style={{
                    flex: 1,
                    backgroundColor:'#50238C',
                    flexDirection:'row'
                }}>
                    <View style={{
                        flex: 1,
                        marginTop:15,
                        marginLeft:15,
                    }}>
                        <Image source={require('../assets/icons/checkmark.png')} style={styles.checkmark} />
                    </View>
                    

                    <View style={{
                        flex: 10,
                        marginLeft: 25,
                        marginTop:7,
                        padding:10,
                    }}>
                        <Text style={styles.baseSmallText}>Thanks! Your response has been submitted.</Text>
                    </View>
                    
                </View>

                <View style={{
                    flex: 3.5,
                    marginBottom:5
                }}>
                    
                </View>


            </View>

            <View style={{
                flex: 1.6,
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <Image source={require('../assets/icons/westernreport.png')} style={styles.image} />
            </View>

        </View>
    );
};

export default SubmitScreen;