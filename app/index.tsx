import React,   { useState } from "react";
import { Text, View, ScrollView, Image, Button } from "react-native";
import { useMenu } from "./menuContext"; 
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker"; 
import styles from "./styles";

export default function MenuPage() {
  const { menu } = useMenu(); 
  const menuTotal = menu.length;
  const [selectedCourse, setSelectedCourse] = useState('All'); 
  const router = useRouter();


  const averagePrice = menuTotal > 0
    ? (menu.reduce((acc, item) => acc + item.price, 0) / menuTotal).toFixed(2) // calc for avg prices
    : 0;


  const filteredMenu   = selectedCourse === 'All'
    ? menu
    : menu.filter((item) => item.course === selectedCourse);

  return (
    <ScrollView>
      <Text style={styles.textMainHeader}>Chef Christoffel - Private Chef</Text>
      <Text style={styles.textMainHeader}>Menu Items: {filteredMenu.length}</Text>
      <Text style={styles.textMainHeader}>Average Price: R {averagePrice}</Text> 

      {/* course filter logic */}
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={{ width: '100%', marginVertical: 10 }}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      {filteredMenu.map((menuItem, index) => (
        <View style={styles.menuDisplaybox} key={index}>
          <Image source={{ uri: menuItem.image }} style={styles.menuImage} />
          <Text style={styles.textHeader}>{menuItem.name}</Text>
          <Text style={styles.textContent}>Description: {menuItem.description}</Text>
          <Text style={styles.textContent}>Price: R {menuItem.price}</Text>
          <Text style={styles.textHeader}>Course: {menuItem.course}</Text>
        </View>
      ))}

      <Button title="Add to Menu" onPress={() => router.push('/add-menu')} />
    </ScrollView>
  );
}
  
