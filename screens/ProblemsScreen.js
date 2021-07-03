import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

export default class ProblemScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
          data:[
            {id: "1", name: "Problem 1 Name goes here. And This is a long name"},
            {id: "2", name: "Problem 2"},
            {id: "3", name: "Problem 3"},
            {id: "4", name: "Problem 4"},
            {id: "5", name: "Problem 5"}
          ]}
      ],
      isLoading: false
    };
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={st.container}>
        {isLoading ? <ActivityIndicator color="red" size={70}/> : (
          <FlatList
            data={data[0].data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item, index }) => (
                <View style={st.item}>
                    <Text style={st.text}>{index+1}.</Text>
                    <Text style={st.text}> {item.name}</Text>
                </View>
            )}
          />
        )}
      </View>
    );
  }
};

const st = StyleSheet.create({
    container:{
        flex: 1, 
        padding: 5, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: "100%",
    },
    item:{
        backgroundColor: 'purple',
        width: 380,
        padding: 15,
        marginBottom: 5,
        borderRadius: 8,
        flex: 1,
        flexDirection: 'row',
    },
    text:{
        fontSize: 22,
        color: '#fff'
    }
})