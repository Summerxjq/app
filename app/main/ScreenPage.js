/**
 * Created by xujiaqi on 2018/1/8.
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
import PinPai from './PinPaiPage';
import LingXing from './LingXingPage';
import Second from './ScreenPage';
let pingData='';
let yiLing='';
let price='';
let selectTypes=[];
export default class Screen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            brandList:[],
            getModelList:[],
            text1:'最高价',
            text2:'最低价',
            num1:'',
            num2:''

        }
    }
    initFinish() {
        this.fetchData();
    }
    fetchData = () => {
        let formData = new FormData();
        fetch('http://10.2.1.92:8080/main/getBrandAndModel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('筛选', responseData.data)
                this.setState({
                    brandList:responseData.data.brandList,
                    getModelList: responseData.data.getModelList,
                    renderPlaceholderOnly: 'success',

                });
            }).catch(
            (error) => {
            });
    }

    renderRow = (rowData, sectionId, rowId) => {
        return (

            <View style={styles.everyview}>
                <Text style={styles.everytext}>{rowData.name}</Text>
            </View>
        )
    }
    clickcz= () => {
        data.map((value) => {
            value.flag = false;
        });
        datas.map((value) => {
            value.flags = false;
        });
    }
    render() {
        return (
            <View style={styles.Maxview}>
                <View style={styles.everyview}>
                    <Text style={styles.pinpaitext}>品牌</Text>
                    <View style={styles.pinpaiviews}>
                    <PinPai pin={this.state.brandList} pingClick={(data)=>{
                        pingData=data;
                    }}/>
                    </View>

                </View>
                <View style={styles.priceview}>
                    <Text style={styles.pinpaitext}>价格区间</Text>
                    <View style={styles.priceview2}>
                        <TextInput
                            style={styles.price1}
                            placeholder="最低价"
                            onChangeText={(text) => this.setState({num1: text})}
                        />
                        <View style={styles.heixian}></View>
                        <TextInput
                            style={styles.price2}
                            placeholder="最高价"
                            onChangeText={(text) => this.setState({num2: text})}
                        />
                    </View>
                </View>
                <View style={styles.everyview2}>
                    <Text style={styles.pinpaitext}>领型</Text>
                    <View style={styles.lingxingview}>
                      <LingXing ling={this.state.getModelList} clickRowData={(data)=>{
                          yiLing=data;
                      }}/>
                    </View>
                </View>
                <View style={styles.chongzhi}>
                    <View style={styles.chongzhiview}>
                        <TouchableOpacity onPress={
                            () => {
                                this.clickcz();
                            }}><Text style={styles.chongzhitext}>重置</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity  onPress={
                        ()=>{
                            console.log('Screen',pingData)
                            selectTypes=[];
                            selectTypes.push(pingData);
                            selectTypes.push(yiLing);
                            if(this.state.num1=='' || this.state.num2==''){
                                selectTypes.push('');
                            }else{
                                selectTypes.push(this.state.num1+'-'+this.state.num2);
                            }

                            this.props.click1(selectTypes)
                        }
                    }>
                    <View style={styles.quedingview}><Text style={styles.chongzhitext}>确定</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    heixian:{
        height:Pixel.getPixel(2),
        backgroundColor:'black',
        width:Pixel.getPixel(50),
        marginLeft:Pixel.getPixel(125),
        marginTop:Pixel.getPixel(-15),
    },
    price2:{
        marginLeft:Pixel.getPixel(180),
        marginTop:Pixel.getPixel(-15),
        height:Pixel.getPixel(30),
        width:Pixel.getPixel(100),
        borderRadius:10,
        backgroundColor: 'aliceblue',
        textAlign:'center',
        color:'black'
    },
    price1:{
        marginLeft:Pixel.getPixel(15),
        marginTop:Pixel.getPixel(20),
        height:Pixel.getPixel(30),
        width:Pixel.getPixel(100),
        borderRadius:10,
        backgroundColor: 'aliceblue',
        textAlign:'center'
    },
    priceview2:{
        height:Pixel.getPixel(90),
    },
    lingxingview:{
        width: Pixel.getPixel(300),
        height: Pixel.getPixel(190),
    },
    quedingview:{
        height:Pixel.getPixel(60),
        width:Pixel.getPixel(150),
        backgroundColor:'red',
        marginTop:Pixel.getPixel(-60),
        marginLeft:Pixel.getPixel(150),
    },
    chongzhitext:{
        fontSize:18,
        textAlign:'center',
        lineHeight:Pixel.getPixel(60),
    },
    chongzhiview:{

        height:Pixel.getPixel(60),
        width:Pixel.getPixel(150),
        borderColor:'green',
        borderWidth:1
    },
    pinpaitext:{
        fontSize:18,
        marginLeft:Pixel.getPixel(15),
        marginTop:Pixel.getPixel(10),
        height:Pixel.getPixel(30),
    },
    chongzhi:{
        width:Pixel.getPixel(300),
        height:Pixel.getPixel(60),
        marginTop:Pixel.getPixel(80),
    },
    priceview:{
        height:Pixel.getPixel(120),
        marginTop:Pixel.getPixel(0),
    },
    everytext: {
        fontSize: 15,
        textAlign: 'center',
        lineHeight: Pixel.getPixel(45),
    },
    container: {
        marginLeft: Pixel.getPixel(4),

    },
    everyview: {
        width: Pixel.getPixel(300),
        height: Pixel.getPixel(180),
        backgroundColor: 'white',
    },
    everyview2: {
        width: Pixel.getPixel(300),
        height: Pixel.getPixel(150),
        backgroundColor: 'white',
    },
    pinpaiviews:{
        width: Pixel.getPixel(300),
        height: Pixel.getPixel(190),
    },
    pinpai: {
        height: Pixel.getPixel(50),
    },
    Maxview: {
        width: Pixel.getPixel(295),
        height: Pixel.getPixel(590),
        backgroundColor: 'white',
        marginTop: Pixel.getPixel(-292),
        marginLeft: Pixel.getPixel(80),
        borderLeftWidth:1,
        borderLeftColor:'darkgray'
    },
});
