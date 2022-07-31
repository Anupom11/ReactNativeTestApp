import React,  {useState} from 'react';
import {FlatList, View, Text, StyleSheet, Pressable} from "react-native";

function GoalItem(props) {

    function selectedItem(item) {
        props.deleteItem(item);
    }

    const renderItem=(item)=> {
        return <View>
            <Pressable onPress={()=> selectedItem(item)}>
                <Text style={styles.goalItem}> {item} </Text>
            </Pressable>
        </View>
    }

   return (
        <View style={{marginBottom: 20}}>
            <FlatList
                data={props.courseGoals}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={({item, index})=> (renderItem(item))} />
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