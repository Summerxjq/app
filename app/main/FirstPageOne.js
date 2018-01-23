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
var Swiper = require('react-native-swiper');

export default class FirstPageOne extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.state = {
            renderPlaceholderOnly: 'blank',
            banners:[],
            goods_types:[],
        }
    }

    initFinish(){
        this.fetchData();
    }

    fetchData = () => {
        fetch('http://10.2.1.92:8080/main/businessAffairs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'account:this.state.num&accountPassword:this.state.password'
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('FirstPageOne',responseData.data)
                this.setState({
                    banners:responseData.data.banners,
                    goods_types:responseData.data.goods_types,
                    renderPlaceholderOnly:'success'
                });
            }).catch(
            (error)=> {
            });
    }
    render() {

            if(this.state.renderPlaceholderOnly!=='success'){
                return null;
            }else{
                return(<View style={styles.Maxview}>
                    <View style={styles.lunboview}>
                        <Swiper height={Pixel.getPixel(200)}
                                width={Pixel.getPixel(375)}
                                autoplay={true}
                        >{this.state.banners.map((value, index) => {
                            return(<Image key={index+'image'} source={{uri:value.picUrl}}
                                          style={styles.photoviews}/>)
                        })}
                        </Swiper>
                    </View>
                    <View style={styles.pubu}>
                        {this.state.goods_types.map((value, index) => {
                                if(index==0){
                                    return(
                                        <View key={index+'images'}style={styles.photo1}>
                                            <Text style={styles.text1}>{value.goodsTypeName}</Text>
                                            <Image source={{uri:value.goodsTypePicUrl}}
                                                     resizeMode="stretch"
                                                     style={styles.photoview1}/>
                                        </View>
                                        )
                                }
                            if(index==1){
                                return(
                                    <View key={index+'images'}style={styles.photo1}>
                                        <Text style={styles.text1}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                               resizeMode="stretch"
                                               style={styles.photoview1}/>
                                    </View>
                                )

                            }
                            if(index==2){
                                return(
                                    <View key={index+'images'} style={styles.photo3}>
                                        <Text style={styles.text3}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                                 resizeMode="stretch"
                                                 style={styles.photoview3}/>
                                    </View>
                                )

                            }
                            if(index==3){
                                return(
                                    <View key={index+'images'}style={styles.photo1}>
                                        <Text style={styles.text1}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                                 resizeMode="stretch"
                                                 style={styles.photoview1}/>
                                    </View>
                                )

                            }
                            if(index==4){
                                return(
                                    <View key={index+'images'}style={styles.photo3}>
                                        <Text style={styles.text3}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                               resizeMode="stretch"
                                               style={styles.photoview3}/>
                                    </View>
                                )

                            }
                            if(index==5){
                                return(
                                    <View key={index+'images'}style={styles.photo1}>
                                        <Text style={styles.text1}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                               resizeMode="stretch"
                                               style={styles.photoview1}/>
                                    </View>
                                )

                            }
                            if(index==6){
                                return(
                                    <View key={index+'images'}style={styles.photo1}>
                                        <Text style={styles.text1}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                               resizeMode="stretch"
                                               style={styles.photoview1}/>
                                    </View>
                                )

                            }
                            if(index==7){
                                return(
                                    <View key={index+'images'}style={styles.photo1}>
                                        <Text style={styles.text1}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                               resizeMode="stretch"
                                               style={styles.photoview1}/>
                                    </View>
                                )

                            }
                            if(index==8){
                                return(
                                    <View key={index+'images'}style={styles.photo1}>
                                        <Text style={styles.text1}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                               resizeMode="stretch"
                                               style={styles.photoview1}/>
                                    </View>
                                )

                            }
                            if(index==9){
                                return(
                                    <View key={index+'images'}style={styles.photo1}>
                                        <Text style={styles.text1}>{value.goodsTypeName}</Text>
                                        <Image source={{uri:value.goodsTypePicUrl}}
                                               resizeMode="stretch"
                                               style={styles.photoview1}/>
                                    </View>
                                )

                            }
                        })}



                    </View>
                </View>)
                }

    }
}
const styles = StyleSheet.create({
    photoview3:{
        height: Pixel.getPixel(70),
        width: Pixel.getPixel(165),
        marginLeft:Pixel.getPixel(15),
    },
    photo3:{

        height: Pixel.getPixel(100),
        width: Pixel.getPixel(189),
        borderColor:'#F3F5F9',
        borderWidth:1
    },
    text1:{
        height:Pixel.getPixel(20),
        textAlign:'center'
    },
    text3:{
        height:Pixel.getPixel(20),
        marginLeft:Pixel.getPixel(15),
    },
    photoview1:{
        height: Pixel.getPixel(70),
        width: Pixel.getPixel(60),
        marginLeft:Pixel.getPixel(15),
    },
    photo1:{

        height: Pixel.getPixel(100),
        width: Pixel.getPixel(93),
        borderColor:'#F3F5F9',
        borderWidth:1
    },
    everyphoto:{
        marginLeft:Pixel.getPixel(10),
        height: Pixel.getPixel(120),
        width: Pixel.getPixel(100),
    },
    pubu:{
        flexDirection:'row',
        height:Pixel.getPixel(320),
        flexWrap:'wrap',
        backgroundColor:"white"
    },
    photoviews:{
        height: Pixel.getPixel(200),
        width: Pixel.getPixel(375),
        resizeMode:"stretch"
    },
    lunboview: {
        marginTop:Pixel.getPixel(20),
        height: Pixel.getPixel(200),
        backgroundColor:'blue'
    },
    Maxview: {
        height: Pixel.getPixel(610),
    },
});
