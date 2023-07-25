import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native";

import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list';
import { getReports } from '../services/WesternReportService';
import MapView, { PROVIDER_GOOGLE, Marker }  from 'react-native-maps';

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
        fontSize: 20,
        fontWeight: '400',
        marginTop: 15,
    },
    baseSmallText2: {
        color: '#414141',
        fontSize: 20,
        fontWeight: '400',
        marginTop: 10,

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
    selectiveList: {
        marginBottom: 150,
        position: 'fixed',
    },
    map:{
        height:'100%'
    }
})


const HomeScreen = ({ navigation }) =>  {

    const [category, setCategory] = useState("");
    const [reports, setReports] = useState([]);

    const categories = [
        { key: '1', value: 'Ice and Snow'},
        { key: '2', value: 'Heating and Cooling'},
        { key: '3', value: 'Malfunctioning Equipment'},
        { key: '4', value: 'Restroom Issues' },
        { key: '5', value: 'Electrical Issues'},
        { key: '6', value: 'Plumbing' },
        { key: '7', value: 'Security and Crime Prevention' },
    ];

    useFocusEffect(useCallback(()=> {        
        const fetchData = async () => {
            result = await getReports();
            setReports(result);
            // setCategory('');
        }
        fetchData();
        
    }, []));

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
                <Text style={styles.baseText}>Home</Text>
            </View>

            <View style={{
                justifyContent: 'center',
                padding: 30,
                flex: 4.5,
                backgroundColor: '#E7E7E7',
            }}>

                <View style={{
                    flex: 0.7,
                    marginTop: -20,
                }}>
                    
                    <Text style={styles.baseSmallText}>Make a Report</Text>
                </View>

                <View style={{
                    flex: .9,
                    marginTop:5,
                    marginBottom: 12,
                    zIndex: 2
                }}>
                    <SelectList style={styles.selectiveList}
                        setSelected={(val) => setCategory(val)}
                        data={categories}
                        save="value"
                        dropdownStyles={{
                            backgroundColor: '#F3F3F3',
                            top:-5 , 
                            opacity:100, 
                            height:200}}
                        boxStyles={{
                            borderColor: "#50238C",
                            borderWidth: 2,
                            backgroundColor: "#F3F3F3",
                            position: "relative", 
                            height: 60,
                            alignItems: 'center',
                        }}
                    />
                </View>

                <View style={{
                    marginBottom: -10
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RequestScreen' , { category })}
                    style={{
                        backgroundColor: '#50238C',
                        padding: 13,
                        borderRadius: 10,
                        width:100,
                        marginBottom: 20,
                        alignSelf:'flex-end'
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#eee'
                        }}>Next</Text>

                </TouchableOpacity>
                </View>

                <View style={{
                    flex:.6,
                    zIndex: 1,
                    marginBottom:7
                    }}> 
                    <Text style={styles.baseSmallText2}>Activity</Text>
                </View>   

                <View style={{
                    flex: 5,
                    zIndex: 1,

                }}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                            latitude: 43.0096,
                            longitude: -81.2737,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        {reports.map((report, index) => (
                            <Marker
                                key={index}
                                coordinate={report.location}
                                title={report.category}
                                description={report.description}
                            />
                        ))}
                    </MapView>

                </View>
            </View>

            <View style={{
                flex: 1.6,
                alignItems: 'center',
            }}>
                <Image source={require('../assets/icons/westernreport.png')} style={styles.image} />
            </View>
        </View>
    );
};

export default HomeScreen;