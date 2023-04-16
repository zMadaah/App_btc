import styles from './styles'
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { Fragment } from "react";

export default function QuotatiosList(){
    return(
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity 
                style={styles.buttonQuery}
                onPress={() => {}}
                >
                    <Text style={styles.textButtonQuery}>7 Dias</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonQuery}
                onPress={() => {}}
                >
                    <Text style={styles.textButtonQuery}>15 Dias</Text>
                </TouchableOpacity>   
                <TouchableOpacity 
                style={styles.buttonQuery}
                onPress={() => {}}
                >
                    <Text style={styles.textButtonQuery}>30 Dias</Text>
                </TouchableOpacity>                
            </View>
        </Fragment>
            
    )
    
}