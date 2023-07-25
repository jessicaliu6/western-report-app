import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { addReport, uploadPhoto } from '../services/WesternReportService';
import * as ImagePicker from 'expo-image-picker';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7'
    },
    baseText: {
        color: '#414141',
        fontSize: 30,
        fontWeight: 500,
        marginTop: 90
    },
    baseTinyText: {
        color: '#aaa',
        fontSize: 11,
        fontWeight: '700',
        top: -10
    },
    baseSmallText: {
        color: '#111',
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 2,

    },
    backImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',

    },
    textInput: {
        flex: 1,
        borderColor: '#999',
        borderWidth: .5,
        borderRadius: 5,
        fontSize: 14.5,
        fontWeight: '500',
        maxHeight: 120,
        paddingHorizontal: 10
    },
    text2: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 13,
        color: '#333',
        padding: 15,
        marginLeft: 37
    },
    image: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginTop: 10,
        marginLeft: 16,
    },
    image2: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginTop: 10,
        marginLeft: 16
    }
});

const RequestScreen = ({ navigation, route }) => {

    const { category } = route.params;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState({});

    const [photo, setPhoto] = useState(null);

    /**
     * Choose a photo using ImagePicker and save to state
     */
    const pickPhoto = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setPhoto(result.assets[0]);
        }
    };

    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View
          style={{
            flex: 1.5,
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#F3F3F3",
          }}
        >
          <Text style={styles.baseText}>Make a Report</Text>

          <View
            style={{
              position: "relative",
              top: -30,
              left: -150,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Image
                source={require("../assets/icons/left.png")}
                style={styles.backImage}
              />
            </TouchableOpacity>
          </View>

          <View style={{ top: -20 }}>
            <Text style={styles.baseTinyText}> {route.params.value} </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            padding: 30,
            flex: 4.7,
            backgroundColor: "#E7E7E7",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: 1,
            }}
          >
            <View style={{ flex: 1, marginRight: 5 }}>
              <Text style={styles.baseSmallText}>First Name *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="eg. Claire"
                name="first_name"
                required
                placeholderTextColor={"#bbb"}
                keyboardType="default"
                onChangeText={setFirstName}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={styles.baseSmallText}>Last Name *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="eg. Lin"
                name="last_name"
                required
                placeholderTextColor={"#bbb"}
                keyboardType="default"
                onChangeText={setLastName}
              />
            </View>
          </View>

          <View
            style={{
              flex: 1,
              marginTop: 7,
            }}
          >
            <Text style={styles.baseSmallText}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type phone number"
              placeholderTextColor={"#bbb"}
              keyboardType="default"
              onChangeText={setPhoneNumber}
            />
          </View>

          <View
            style={{
              flex: 1,
              marginTop: 7,
              zIndex: 1,
            }}
          >
            <Text style={styles.baseSmallText}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type email"
              placeholderTextColor={"#bbb"}
              keyboardType="default"
              onChangeText={setEmail}
            />
          </View>

          <View
            style={{
              flex: 1,
              marginTop: 15,
              marginBottom: -5,
              zIndex: 3,
            }}
          >
            <GooglePlacesAutocomplete
              placeholder="Search location"
              name="location"
              required
              onFocus={() => setIsFocus(true)}
              fetchDetails={true}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                // console.log(details);
                setLocation({
                  name: details.name,
                  address: details.formatted_address,
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
              }}
              query={{
                key: "AIzaSyBkwx5lkjbHUuX8odvp9IWsIobRa2ZoOOQ",
                language: "en",
              }}
              styles={{
                listView: {
                  height: 150,
                  zIndex: 15,
                  position: "absolute",
                  marginTop: 40,
                },
                textInput: {
                  borderColor: "#999",
                  borderRadius: 5,
                  fontSize: 14.5,
                  fontWeight: "500",
                  color: "#000",
                  backgroundColor: "#F3F3F3",
                },
              }}
            />
          </View>

          <View
            style={{
              flex: 2.5,
              zIndex: 1,
            }}
          >
            <Text style={styles.baseSmallText}> Description * </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Describe the issue"
              placeholderTextColor={"#bbb"}
              name="description"
              required
              keyboardType="default"
              multiline={true}
              onChangeText={setDescription}
            />
          </View>

          <View
            style={{
              flex: 1,
              zIndex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#F3F3F3",
                margin: 3,
                borderRadius: 5,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={pickPhoto}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#F3F3F3",
                    marginTop: 3,
                  }}
                >
                  <Image
                    source={require("../assets/icons/files.png")}
                    style={styles.image2}
                  />
                </View>

                <View
                  style={{
                    flex: 4,
                  }}
                >
                  <Text style={styles.text2}> Open library </Text>
                </View>

                <View
                  style={{
                    flex: 4,
                  }}
                >
                    {photo != null && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={styles.image2}
                    />
                    )}
                </View>

              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1.4,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              let report = {
                category,
                firstName,
                lastName,
                phoneNumber,
                email,
                description,
                location,
                hasImage: photo != null,
              };
              try {
                report = await addReport(report);
                if (photo != null)
                    await uploadPhoto(report, photo);
                navigation.navigate("SubmitScreen", report);
              } catch (error) {
                console.error(error);
              }
            }}
            style={{
              backgroundColor: "#F3F3F3",
              padding: 16,
              borderRadius: 5,
              marginTop: 20,
              width: 150,
              borderWidth: 1,
              borderColor: "#387CFF",
              shadowColor: "rgba(0,0,0, .4)",
              shadowOffset: { height: 1, width: 1 },
              shadowOpacity: 1,
              shadowRadius: 1,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: 15,
                color: "#387CFF",
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default RequestScreen;
