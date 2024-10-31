import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function Profile({ navigation }) {
    return (
        <SafeAreaView>
            <View style={{
                paddingHorizontal: 20,
                paddingTop: 60,
                paddingBottom: 40,
                flexDirection: 'row',
                gap: 15,
                alignItems: 'center',
                backgroundColor: '#363636'
            }}>
                <Image source={require("../assets/images/user.png")} />
                <View>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 18,
                        color: 'white'
                    }}>
                        Ahmad Alif Ramadhan
                    </Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 15
                    }}>
                        ramadhanalif430@gmail.com
                    </Text>
                </View>
            </View>
            <View style={{ padding: 20, marginTop:30 }}>
                <View style={styles.groupMenu}>
                    <Icon name="person-circle" size={25} />
                    <Text style={{fontSize:18}}>My Profile</Text>
                </View>
                <View style={styles.groupMenu}>
                    <Icon name="time" size={25} />
                    <Text style={{fontSize:18}}>Activity</Text>
                </View>
                <View style={styles.groupMenu}>
                    <Icon name="settings" size={25} />
                    <Text style={{fontSize:18}}>Settings</Text>
                </View>
                <View style={styles.groupMenu}>
                    <Icon name="help" size={25} />
                    <Text style={{fontSize:18}}>Help</Text>
                </View>
                <View style={styles.groupMenu}>
                    <Icon name="information-circle-outline" size={25} />
                    <Text style={{fontSize:18}}>About</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const { height } = Dimensions.get('window');
const vh = (number) => { return height * number };

const styles = StyleSheet.create({
    groupMenu: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginBottom:45
    }
});

export default Profile;
