/**
 * Created by xujiaqi on 2018/1/19.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ListView


} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';
export default class Calculator extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            currentNumber: this.props.number,
        };
    }
    componentWillReceiveProps(ss){
        console.log(ss)
        this.setState({
            currentNumber:ss.number,
        })
    }
    decrease = () => {
        let newNumber = this.state.currentNumber - this.props.step;
        if (newNumber < this.props.min) {
            newNumber = this.props.min;
        }
        this.setState({
            currentNumber: newNumber,
        })
    }
    render() {
        return (
            <View style={styles.jisuanview}>
                <TouchableOpacity onPress={
                    this.props.onDecrease  }
                >
                    <Text style={styles.jian}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={
                        this.props.onIncrease }
                >
                    <Text style={styles.jia}>+</Text>
                </TouchableOpacity>
                <Text style={styles.shuzi}>{this.state.currentNumber}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    shuzi: {
        height: Pixel.getPixel(20),
        width: Pixel.getPixel(50),
        marginLeft:Pixel.getPixel(30),
        overflow: "hidden",
        fontSize: 15,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth:1,
        marginTop:Pixel.getPixel(-26),
    },
    jia: {
        height: Pixel.getPixel(20),
        width:Pixel.getPixel(20),
        marginLeft:Pixel.getPixel(90),
        marginTop:Pixel.getPixel(-26),
        fontSize: 15,
    },
    jian: {
        height: Pixel.getPixel(30),
        width:Pixel.getPixel(30),
        marginLeft:Pixel.getPixel(10),
        fontSize: 20,
        marginTop:Pixel.getPixel(2),
    },
    jisuanview:{
        height: Pixel.getPixel(35),
        width:Pixel.getPixel(113),
        borderWidth:1,
        borderColor:"black"

    }
})



