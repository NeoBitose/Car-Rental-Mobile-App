import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

function Home({ navigation }) {
    return (
        <SafeAreaView style={{
            padding: 20
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                color: '#841584',
                marginBottom: 15,
                textAlign: 'center'
            }}>
                NeoRental
            </Text>
            <Text style={{
                fontSize: 17
            }}>
                Selamat Datang,
            </Text>
            <Text style={{
                fontSize: 20,
                fontWeight: '600'
            }}>
                Ahmad Alif Ramadhan
            </Text>
            <Image source={require("../assets/images/cars/car19.min.jpg")} style={{
                width: '100vw',
                height: vh(0.3),
                marginTop: 20,
                borderRadius: 10
            }}>
            </Image>
            <Text style={{
                marginTop: 10,
                fontSize: 22,
                fontWeight: '600'
            }}>
                New year 2024 25% off promo
            </Text>
            <View style={{
                marginTop: 10,
                width: 40,
                height: 8,
                backgroundColor: '#000',
                borderRadius: 10
            }}>
            </View>
            <View style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '600'
                }}>
                    Top Vehicle
                </Text>
                <Text style={{
                    fontSize: 15
                }}>
                    See all
                </Text>
            </View>
            <View style={{
                height: 300
            }}>
                <ScrollView horizontal={true} style={styles.container}>
                    {/* Card 1 */}
                    <View style={styles.card}>
                        <Image
                            source={require("../assets/images/cars/car11.min.jpg")}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Card 1</Text>
                        <Text style={styles.description}>
                            This is the description for Card 1.
                        </Text>
                    </View>

                    {/* Card 2 */}
                    <View style={styles.card}>
                        <Image
                            source={require("../assets/images/cars/car12.min.jpg")}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Card 2</Text>
                        <Text style={styles.description}>
                            This is the description for Card 2.
                        </Text>
                    </View>

                    {/* Card 3 */}
                    <View style={styles.card}>
                        <Image
                            source={require("../assets/images/cars/car13.min.jpg")}
                            style={styles.image}
                        />
                        <Text style={styles.title}>Card 3</Text>
                        <Text style={styles.description}>
                            This is the description for Card 3.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const { height } = Dimensions.get('window');
const vh = (number) => { return height * number };

const styles = StyleSheet.create({
    container: {
        height: 400,
        flex: 1,
        paddingVertical: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
        marginRight: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // For Android shadow effect
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
});

export default Home;
