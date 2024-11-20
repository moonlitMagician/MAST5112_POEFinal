import React, { useState } from "react";
import { Text, TextInput, Button, ScrollView, View } from "react-native";
import { useRouter } from "expo-router"; 
import { Picker } from "@react-native-picker/picker";
import { useMenu } from "./menuContext";
import styles from "./styles";

export default function AddMenuPage() {
  const { addMenuItem } = useMenu(); 
  const router = useRouter(); 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [course, setCourse] = useState("");
  const [notification, setNotification] = useState(""); 
  const handleAddItem = () => {
    if (name && description && price && course) {
      const newItem = {
        name,
        description,
        price: parseFloat(price),
        course,
        image,
      };
      addMenuItem(newItem); // adding item to the menu

      // showing the user item was added
      setNotification("Item successfully added!");

      // send user to main menu
      setTimeout(() => {
        setNotification(""); 
        router.push('/'); 
      }, 2000);
    } else {
      setNotification("Please fill all fields!"); 
    }
  };

  return (
    <ScrollView>
      <Text style={{
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
  color: 'black ' 
}}>Add a new menu item:</Text>  


      {notification && (
        <Text style={styles.notification}>{notification}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Name of the dish"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description of the dish"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price of the dish"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.pickerInput}
      >
        <Picker.Item label="Select your course" value="" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Image (Enter the URL)"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Add to menu" onPress={handleAddItem} />
    </ScrollView>
  );
}
