/**
 * Created by xujiaqi on 2018/1/4.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    TextInput,
    TouchableOpacity


} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';
import FirstOne from './FirstPageOne'
import FirstTwo from './FirstPageTwo'
var Swiper = require('react-native-swiper');
var images = [
    'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',
    'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
];
export default class FirstPage extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.state = {
            View:<FirstOne/>
        }
    }

    renderImg() {
        var imageViews = [];
        for (var i = 0; i < images.length; i++) {
            imageViews.push(
                <Image
                    key={i}
                    style={{flex: 1}}
                    source={{uri: images[i]}}
                />
            );
        }
        return imageViews;
    }
    clickChange = (title, rowID) => {
        return(
            this.setState({
                View:<FirstOne/>,



            })
        )
    }
    clickChangeTwo = (title, rowID) => {
        return(
            this.setState({
                View:<FirstTwo/>,



            })
        )
    }


    render() {

        return (
            <View style={styles.Maxview}>
                <View style={styles.bigview}>
                    {this.state.View}
                </View>
                <View style={styles.secondview}>
                    <TouchableOpacity onPress={
                        ()=>{
                            this.clickChange();
                        }
                    } >
                    <View>
                        <Image source={require("../image/shangwu.png")}
                               style={styles.imageviews}/>
                        <Text style={styles.textview}>商务</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        ()=>{
                            this.clickChangeTwo();
                        }
                    } >
                    <View>
                        <Image source={require("../image/chaoshi.png")}
                               resizeMode="stretch"
                               style={styles.imageviews}/>
                        <Text style={styles.textviews}>超市</Text>
                    </View>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bigview:{
        marginTop:Pixel.getPixel(20),
        height:Pixel.getPixel(520),

    },
    textview:{
        fontSize:25,
        marginTop:Pixel.getPixel(-45),
       textAlign:'center',
        color:'darkgoldenrod'
    },
    textviews:{
        fontSize:25,
        marginTop:Pixel.getPixel(-45),
        marginLeft:Pixel.getPixel(75),
        color:'lightcoral'
    },
    imageviews: {
        height: Pixel.getPixel(70),

    },
    secondview: {
        flexDirection: 'row',
        height: Pixel.getPixel(70),

    },
    Maxview: {
        height: Pixel.getPixel(610),

    },
});
