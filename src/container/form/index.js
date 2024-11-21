import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native-web";

const companies = [
  { name: "Dominos", id: 1 },
  { name: "Swiggy", id: 2 },
  { name: "Zomato", id: 3 },
  { name: "FlipKart", id: 4 },
  { name: "Amazon", id: 5 },
  { name: "Myntra", id: 6 },
];

const formArray = [
  { name: "companyName", type: "Dropdown" },
  { name: "code", type: "TextInput" },
  { name: "value", type: "TextInput" },
  { name: "details", type: "TextInput" },
  { name: "price", type: "TextInput" },
];

const Form = () => {
  const [form, setFormData] = useState({
    code: "",
    companyName: "",
    value: "",
    details: "",
    price: "",
  });

  const onChangeText = ({ name, value }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log("Form", form);
  return (
    <View style={styles.container}>
      <Text>Upload Document</Text>
      {formArray.map((item) => {
        return (
          <View style={styles.inputBox}>
            <Text>{item.name}</Text>
            <TextInput
              key={item.name}
              style={styles.input}
              onChangeText={(value) => onChangeText({ value, name: item.name })}
              value={form[item.name]}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    margin: 30,
    maxWidth: 500,
  },
  inputBox: {
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default Form;
