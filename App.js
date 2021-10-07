import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export default function App() {
  const [click, setClick] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <ButtonContainer onPress={() => setClick(true)}>
        <ButtonText>Submit</ButtonText>
      </ButtonContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  hover: {
    backgroundColor: "black",
    color: "white",
  },
});

const ButtonContainer = styled.TouchableOpacity`
  width: 150px;
  height: 60px;
  border-radius: 5px;
  background: white;
  border: 2px solid black;
  text-align: center;
`;

const ButtonText = styled.Text`
  font-size: 25px;
  color: black;
  text-align: center;
  margin: 10px;
`;
