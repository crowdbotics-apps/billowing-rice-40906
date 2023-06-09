import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text, TouchableOpacity } from "react-native";

const HomePage = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.title}>Home page</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.optionText}>My Life</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.optionText}>Adventures</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.optionText}>Challenges</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.optionText}>Contests</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#4b7bec",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  optionText: {
    color: "#fff",
    textAlign: "center"
  }
});
export default HomePage;