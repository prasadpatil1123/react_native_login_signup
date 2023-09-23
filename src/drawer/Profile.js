import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    profilePicture: 'https://example.com/profile.jpg', // Replace with your image URL
    fitnessStats: {
      weight: 75, // in kilograms
      height: 1.75, // in meters
      goal: 'Lose Weight', // or any other fitness goal
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileAge}>{user.age} years old</Text>
      </View>
      <View style={styles.fitnessStats}>
        <Text style={styles.fitnessHeader}>Fitness Stats</Text>
        <View style={styles.statItem}>
          <FontAwesomeIcon name="weight" size={24} color="black" />
          <Text style={styles.statLabel}>Weight: {user.fitnessStats.weight} kg</Text>
        </View>
        <View style={styles.statItem}>
          <FontAwesomeIcon name="height" size={24} color="black" />
          <Text style={styles.statLabel}>Height: {user.fitnessStats.height} m</Text>
        </View>
        <View style={styles.statItem}>
          <FontAwesomeIcon name="bullseye" size={24} color="black" />
          <Text style={styles.statLabel}>Goal: {user.fitnessStats.goal}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileHeader: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileAge: {
    fontSize: 18,
  },
  fitnessStats: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  fitnessHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statLabel: {
    marginLeft: 10,
    fontSize: 18,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Profile;
