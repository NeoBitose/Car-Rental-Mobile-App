import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function Search({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.box}>
                <Icon name="search" size={20} color="#888" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search for data..."
                    placeholderTextColor="#888"
                />
            </View>
        </SafeAreaView>
    );
}

const { height } = Dimensions.get('window');
const vh = (number) => { return height * number };

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 10
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
});

export default Search;
