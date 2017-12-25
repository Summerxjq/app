/**
 * Created by xujiaqi on 2017/12/19.
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

} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();

export default class View2 extends Component {

    render() {
        return (
            <View style={{flex:1,height:Pixel.getPixel(40)}}>
                <Text style={{fontSize:14,color:"#dcdcdc",marginTop:Pixel.getPixel(10),marginLeft:Pixel.getPixel(15)}}>订单号：12312331221</Text>
                <Text style={{fontSize:14,color:"#dcdcdc",marginTop:Pixel.getPixel(-17),marginLeft:Pixel.getPixel(180)}}>订单日期：2019/09/09</Text>
            </View>

        );
    }

}
