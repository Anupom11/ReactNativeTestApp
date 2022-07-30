import React,  {useState} from 'react';
import {FlatList, View, Text, StyleSheet} from "react-native";

function GoalItem(props) {
   return (
        <View style={{marginBottom: 20}}>
            <FlatList
                data={props.courseGoals}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={({item, index})=> {
                    return (
                        <View>
                            <Text style={styles.goalItem}> {item} </Text>
                        </View>
                    );
                }} />

        </View>         

    );
}

export default GoalItem;

const  styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0aee',
        padding: 8,
        color: 'white',
    },
});