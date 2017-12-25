/**
 * Created by xujiaqi on 2017/12/21.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    RefreshControl,
    TextInput

} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import NavigatorView from '../component/AllNavigationView';
import BaseComponent from '../component/BaseComponent';
import MainPage from './MainPage';
export default class ViewOne extends BaseComponent {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            renderPlaceholderOnly: 'blank',
            dataSource: ds.cloneWithRows(['初次', '电话邀约', '已购买', '置换','复购'])
        }


    }

    compareIdAndChangeTextColor = (index, data, selectId) => {
        if (index == selectId && index >= 0) {
            let textview = <Text style={[styles.b, {color: 'green'}]}>{data}</Text>;
            return textview;
        }
       else  {
            let textview = <Text style={styles.b}>{data}</Text>;
            return textview;
        }
    }
    render() {
        return (
            <View>

                <NavigatorView title='客户状态'/>

                <ListView style={styles.a}
                    dataSource={this.state.dataSource}

                    renderRow={this.renderRow}/>


            </View>
        )

    }
    renderRow = (rowData,sectionID,rowID,highlightRow) => {
        console.log(rowData);
        return (
            <View>
                   <TouchableOpacity onPress={()=>{


                       this.props.changeNum(rowData, rowID);

                       this.backPage();
                   }}>
                       {this.compareIdAndChangeTextColor(rowID, rowData, this.props.selectNum)}
                   </TouchableOpacity>
                    <View style={styles.c}></View>





            </View>
        )
    }


}
const styles = StyleSheet.create({
    a:{
        marginTop:Pixel.getPixel(68),
        backgroundColor: 'darkgray'
    },
    b:{
        height:Pixel.getPixel(40),
        marginTop:Pixel.getPixel(18),
        fontSize:20,
        textAlign:"center",
        color:"black"


    },
    c:{
        height:Pixel.getPixel(1),
        backgroundColor:"black"
    },
    buttonText: {
        textAlign: "center",
        color: "white"


    },
    button: {
        width: Pixel.getPixel(80),
        height: Pixel.getPixel(40),
        borderRadius: 20,
        backgroundColor: "#05c5c2",
        justifyContent: "center",
        overflow: "hidden",
        marginTop: Pixel.getPixel(20),
        marginLeft: Pixel.getPixel(150)
    },
    ViewText: {
        height: Pixel.getPixel(40),
        backgroundColor: "darkgrey",
        marginTop: Pixel.getPixel(80)
    },
    TextInputs: {
        height: Pixel.getPixel(40),

    }


});


