/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    ListView,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class AppTest extends Component {
    constructor(props){
        super(props);

        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2});
        this.state={
            dataSource:ds.cloneWithRows(['全部'])

        };
        //fetch('https://mywebsite.com/mydata.json')
    }

    getMoviesFromApiAsync = () => {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                //return responseJson.movies;
                console.log(JSON.stringify(responseJson.movies));
                let datas = responseJson.movies;
                this.updateView(datas);
            })
            .catch((error) => {
                console.error(error);
            });
    }


    updateView = (array) => {
        console.log(array);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2});
        this.setState({
            dataSource: ds.cloneWithRows(array)
        });
    };


   render(){
       return(
           <View>
               <View style={{width:375,height:80,backgroundColor:"lightseagreen"}}>
                   <Text style={{lineHeight:80,marginLeft:170,color:"white",fontSize:20}}>圈子</Text>
               </View>
               <View style={{width:375,height:10,backgroundColor:"gainsboro"}}></View>
               <ListView style={{width:750}}
                   dataSource={this.state.dataSource}
                   renderRow={this.renderRow}

                   />
               <View style={{width:375,height:400,backgroundColor:"gainsboro"}}></View>
           </View>
       )

   }

    renderRow = (rowData) => {
       console.log(rowData);
        return (
        <View style={{height: 44}}>
            <TouchableOpacity onPress={this.getMoviesFromApiAsync}>
                <Text style={{marginTop:13,marginBottom:14,marginLeft:15,fontSize:15}}>{rowData.title==undefined? rowData:rowData.title}</Text>
            </TouchableOpacity>
            <View style={{width:375,height:1,backgroundColor:"gainsboro"}}></View>
            <Image source={require('./image/p7.png')} style={{width:22,height:11,marginLeft:345,marginTop:-28}}></Image>
        </View>

        )
    };
}







AppRegistry.registerComponent('AppTest', () => AppTest);
