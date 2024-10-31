import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function History({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.box}>
                <Icon name='time-outline' size={35} />
                <View style={styles.groupDetail}>
                    <Text style={styles.history}>Rental Mobil</Text>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Model</Text>
                        <Text style={styles.value}>:   Avanza</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Harga</Text>
                        <Text style={styles.value}>:   Rp. 2.000.000</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Tgl. Peminjaman</Text>
                        <Text style={styles.value}>:   08 Okt 2024</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Tgl. Pengembalian</Text>
                        <Text style={styles.value}>:   10 Okt 2024</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Status</Text>
                        <Text style={styles.success}>:   Selesai</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Icon name='time-outline' size={35} />
                <View style={styles.groupDetail}>
                    <Text style={styles.history}>Rental Mobil</Text>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Model</Text>
                        <Text style={styles.value}>:   Lamborghini</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Harga</Text>
                        <Text style={styles.value}>:   Rp. 20.000.000</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Tgl. Peminjaman</Text>
                        <Text style={styles.value}>:   15 Okt 2024</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Tgl. Pengembalian</Text>
                        <Text style={styles.value}>:   20 Okt 2024</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Status</Text>
                        <Text style={styles.success}>:   Selesai</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Icon name='time-outline' size={35} />
                <View style={styles.groupDetail}>
                    <Text style={styles.history}>Rental Mobil</Text>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Model</Text>
                        <Text style={styles.value}>:   Fortuner</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Harga</Text>
                        <Text style={styles.value}>:   Rp. 9.000.000</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Tgl. Peminjaman</Text>
                        <Text style={styles.value}>:   24 Okt 2024</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Tgl. Pengembalian</Text>
                        <Text style={styles.value}>:   29 Okt 2024</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Status</Text>
                        <Text style={styles.danger}>:   Belum Selesai</Text>
                    </View>
                </View>
            </View>
            <View style={styles.box}>
                <Icon name='time-outline' size={35} />
                <View style={styles.groupDetail}>
                    <Text style={styles.history}>Rental Mobil</Text>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Model</Text>
                        <Text style={styles.value}>:   Pajero Sport</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Harga</Text>
                        <Text style={styles.value}>:   Rp. 8.000.000</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Tgl. Peminjaman</Text>
                        <Text style={styles.value}>:   25 Okt 2024</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Tgl. Pengembalian</Text>
                        <Text style={styles.value}>:   31 Okt 2024</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Status</Text>
                        <Text style={styles.danger}>:   Belum Selesai</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const { height } = Dimensions.get('window');
const vh = (number) => { return height * number };

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 10
    },
    history:{
        marginBottom: 10,
        fontWeight: '600',
        fontSize: 18
    },
    flex: {
        flexDirection: 'row',
    },
    title: {
        width: 120,
        fontSize: 15
    },
    value: {
        fontSize: 15
    },
    success: {
        color: 'green'
    },
    danger: {
        color: 'red'
    }
});

export default History;
