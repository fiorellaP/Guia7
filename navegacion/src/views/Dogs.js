import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, Text, View, Image } from "react-native";
const dataDogs = [
  {
    id: 1,
    nombre: "Husky siberiano",
    img: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26155623/Siberian-Husky-standing-outdoors-in-the-winter.jpg",
    color:
      "Todos los colores, desde el negro hasta el blanco puro, e incluyen muchos colores y marcas diferentes.",
  },
  {
    id: 2,
    nombre: "Pastor aleman",
    img: "https://www.ctvsh.com/sites/default/files/styles/large/public/german-shepherd-dog-breed-info.jpg?itok=mPeDrQWU",
    color: "Negro, gris, azulado, rojo y negro, negro y gris, dorado",
  },
  {
    id: 3,
    nombre: "Pomeranio",
    img: "https://d.newsweek.com/en/full/1833669/pomeranian.jpg",
    color: "Negro, negro y tostado, Azulado, chocolate, Naranja, crema, rojo",
  },
  {
    id: 4,
    nombre: "Poodle",
    img: "https://thehappypuppysite.com/wp-content/uploads/2019/01/Poodle-Colors-long.jpg",
    color: "Negro, blanco, sable, gris, café, crema, durazno",
  },
  {
    id: 5,
    nombre: "Golden Retriever",
    img: "https://dogsshop.in/wp-content/uploads/2021/07/golden-reteiever.jpg",
    color: "Chocolate, dorado, tostado, café",
  },
];

const Dogs = () => {
  return (
    <>
      <SafeAreaView >
        <FlatList
          data={dataDogs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image style={styles.img} source={{ uri: `${item.img}` }} />

              <View style={styles.containerInfo}>
                <Text style={styles.texto}>{item.nombre}</Text>
                <Text style={{ textAlign: "justify", fontSize: 16, marginVertical: 4, }} >
                  {item.color}
                </Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
    paddingLeft: 5,
    marginBottom: 5,
    borderTopWidth: 1,
  },

  img: {
    width: 150,
    height: 130,
    resizeMode: "stretch",
  },

  containerInfo: {
    position: "absolute",
    height: 100,
    left: 160,
    right: 10,
    margin: 5,
    paddingTop: 10,
    paddingBottom:5,
    justifyContent: "center",
  },
  texto: {
    paddingLeft: 20,
    fontSize: 20,
    marginVertical: 5,
  },
});

export default Dogs;
