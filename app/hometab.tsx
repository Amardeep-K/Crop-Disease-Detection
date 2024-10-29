import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeTab() {
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Image 
                    style={styles.profileImage}
                    source={{ uri: 'https://example.com/profile.jpg' }} // Replace with the actual image URL
                />
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Welcome!</Text>
                    <Text style={styles.userName}>User</Text>
                </View>
                <Icon name="notifications-outline" size={24} color="#fff" style={styles.notificationIcon} />
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#666"
                />
                <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
            </View>

            {/* Upload Section */}
            <View style={styles.uploadContainer}>
                <TouchableOpacity style={styles.uploadButton}>
                    <Text style={styles.uploadText}>Upload or Take a Photo</Text>
                    <Icon name="cloud-upload-outline" size={20} color="#fff" />
                </TouchableOpacity>
                <Image 
                    style={styles.wheatImage}
                    source={{ uri: 'https://www.pngkit.com/png/full/18-188276_rice-png.png' }} // Replace with the actual wheat image URL
                />
            </View>

            {/* Services Section */}
            <Text style={styles.servicesText}>Our Services</Text>
            <View style={styles.servicesContainer}>
                <TouchableOpacity style={styles.serviceItem}>
                    <FontAwesome name="dashboard" size={24} color="#1B5E20" />
                    <Text style={styles.serviceText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                    <FontAwesome name="search" size={24} color="#1B5E20" />
                    <Text style={styles.serviceText}>Detect Disease</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                    <FontAwesome name="stethoscope" size={24} color="#1B5E20" />
                    <Text style={styles.serviceText}>Predict Disease</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                    <FontAwesome name="comments" size={24} color="#1B5E20" />
                    <Text style={styles.serviceText}>Treatment & Advisory</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation */}
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F5E9',
    },
    header: {
        backgroundColor: '#4CAF50',
        height: 150,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    welcomeContainer: {
        marginLeft: 15,
        flex: 1,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userName: {
        color: '#fff',
        fontSize: 16,
    },
    notificationIcon: {
        marginRight: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginTop: -20,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        fontSize: 16,
    },
    searchIcon: {
        marginLeft: 10,
    },
    uploadContainer: {
        backgroundColor: '#C8E6C9',
        margin: 20,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    uploadText: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
    },
    wheatImage: {
        width: '100%',
        height: 60,
        marginTop: 10,
    },
    servicesText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1B5E20',
        marginLeft: 20,
        marginBottom: 10,
    },
    servicesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: 20,
    },
    serviceItem: {
        backgroundColor: '#fff',
        width: '40%',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    serviceText: {
        color: '#1B5E20',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
});
