import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
} from "react-native";

const dataCats = [
  {
    id: 1,
    nombre: "Abisinio",
    img: "https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_111934933-768x612.jpg",
    color: "rojos, azul, leonado",
  },
  {
    id: 2,
    nombre: "Azul ruso",
    img: "https://nfnatcane.es/blog/wp-content/uploads/2019/05/gato-azul-ruso-tumbado.jpg",
    color: "Azul con puntas plateadas",
  },
  {
    id: 3,
    nombre: "Birmano",
    img: "https://www.petsonic.com/blog/wp-content/uploads/2018/09/gato-birmano-3.jpg",
    color: "Punto de sellado, punto azul, punto chocolate, punto lila",
  },
  {
    id: 4,
    nombre: "Maine Coon",
    img: "https://www.razasdegato.xyz/wp-content/uploads/2020/11/gato-maine-coon-800x500.jpg",
    color:
      "Más comúnmente atigrado marrón, pero son posibles otros colores y patrones",
  },
  {
    id: 5,
    nombre: "Del Himalaya",
    img: "https://mihermosogato.com/wp-content/uploads/2021/06/Portada-gato-Himalayo.jpg",
    color:
      "Cuerpo de blanco a leonado con puntos de color como: chocolate, lila, azul, rojo...",
  },
];

const Cats = () => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={dataCats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image style={styles.img} source={{ uri: `${item.img}` }} />

              <View style={styles.containerInfo}>
                <Text style={styles.texto}>{item.nombre}</Text>
                <Text
                  style={{
                    textAlign: "justify",
                    fontSize: 16,
                    marginVertical: 4,
                  }}
                >
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

export default Cats;
