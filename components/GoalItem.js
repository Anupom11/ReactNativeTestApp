import React,  {useState} from 'react';
import {FlatList, View, Text, StyleSheet, Pressable} from "react-native";

function GoalItem(props) {

    function selectedItem(item) {
        props.deleteItem(item);
    }

    const renderItem=(item)=> {
        return <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color:'#dddddd'}} 
                onPress={()=> selectedItem(item)}>
                <Text style={styles.goalText}> {item} </Text>
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
    goalText: {
        padding: 8,
        color: 'white',
    },
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0aee',
    }

});
