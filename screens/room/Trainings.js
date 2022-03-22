import * as React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
// import {Storage, sessionStorage } from '../classes/Storage'
import axios from 'axios';
import Training from './Training';

export default function Trainings({trainings, navigation}) {

  const renderItem = ({item}) => {
    console.log(item)
    return <Training item={item} navigation={navigation}/>
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FlatList
          style={{width:'90%'}}
          data={trainings}
          renderItem={renderItem}
          keyExtractor={training => training.id}
        >
        </FlatList>
       
      </View>
    );
  }