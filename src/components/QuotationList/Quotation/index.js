import React from "react";
import {View, Text, Image } from "react-native";
import styles from "../styles";


export default function Quotation(){
    return(
        <View style={styles.Main}>
            <View style={styles.contetxLeft}>
                <View style={styles.BoxLogo}>
                    <Image 
                    style={styles.Logo}
                    source={require('../../../img/images.jpg')}
                    />
                    <Text style={styles.Dayquotation}>16/04/2023</Text>
                </View>
                <View style={styles.contetxRight}>
                    <Text style={styles.Price}>$983,88</Text>
                </View>
            </View>
        </View>
    )
}