/**
 * Created by xujiaqi on 2018/1/2.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    AlertIOS,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
let userNum;
let userName;
import * as fontAndClolr from '../constant/fontAndColor';
import NavigatorView from '../component/AllNavigationView'
import BaseComponent from '../component/BaseComponent';
import Gestures from './GesturesPage';

export default class RegistrationPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            num: '',
            password: '',

        };
    }
    _onPressListItem() {
        this.setState((previousState) => {
            return ({
                show: !previousState.show,
            })
        });
    }
    fetchData = () => {
        fetch('http://10.2.1.92:8080/regist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'account='+this.state.num+'&accountPassword='+this.state.password+'&nick='+this.state.name
        }).then((response) => response.json())
            .then((responseData) => {
                if (responseData.rspCode == '000000') {
                    console.log(responseData)
                    this.toNextPage({
                        name: 'Gestures',
                        component: Gestures,
                        params: {num:this.state.num}
                    });
                } else {
                    return (
                        alert(
                            '抱歉',
                            '请重新注册',
                            [{text: '确定', onPress: () => {
                                    /*this.toNextPage({
                                        name: 'RegistrationPage',
                                        component: RegistrationPage,
                                        params: {}});*/}},]
                        )
                    )
                }
            }).catch(
            (error) => {
            });
    }
    _userNumChange = (text) =>{
        this.setState({num: text});
        userNum = text;
    }
    _clear= () =>{
        this.setState({
            show:false
        })
        ;
    }
    render() {
        let v = this.state.show ? <View style={styles.photoview}>

            <TouchableOpacity style={{backgroundColor:'transparent',height:Pixel.getPixel(height -60*3),width:width}} onPress={() => this._clear()}/>
            <View style={styles.everyview}><Text style={styles.everytext}>去拍照</Text></View>
            <View style={styles.everyview}><Text style={styles.everytext}>去相册选择</Text></View>
            <View style={styles.everyview}><Text style={styles.everytext}>取消</Text></View>
        </View> : null;
        return (
            <View>
                <View style={styles.flex}>
                    <NavigatorView title="注册"/>
                </View>
                <View style={styles.Maxview}>
                    <View>
                        <TextInput style={styles.inputview1}
                                   placeholder="用户名"
                                   maxLength={11}
                                   onChangeText={(text) => this._userNumChange( text)}
                        />
                    </View>
                    <View>
                        <TextInput style={styles.inputview2}
                                   placeholder="密码"
                                   password={true}
                                   onChangeText={(text) => this.setState({password: text})}
                        />
                    </View>
                    <View>
                        <TextInput style={styles.inputview3}
                                   placeholder="验证码"
                        />
                    </View>
                    <View style={styles.imageview}>
                        <Image source={require('../image/yzm.png')}/>
                    </View>
                    <View>
                        <TextInput style={styles.inputview4}
                                   placeholder="昵称"
                                   onChangeText={(text) => this.setState({name: text})}
                        />
                    </View>
                    <View style={styles.inputview5}>
                        <Text style={styles.imagetext}>请上传店铺展示照片</Text>
                        <View style={styles.imageviews2}>
                            <TouchableOpacity onPress={() => this._onPressListItem()}>
                                <Text style={styles.jiatext}>+</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.dengluview}>
                        <TouchableOpacity onPress={() => {

                            this.fetchData()
                        }}>
                            <Text style={styles.denglutext}>注册</Text>
                        </TouchableOpacity>
                    </View>
                    {v}
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    everytext: {
        textAlign: 'center',
        lineHeight: Pixel.getPixel(60),
        fontSize: 15
    },
    everyview: {
        height: Pixel.getPixel(60),
        borderTopColor: 'darkgray',
        borderTopWidth: 1,
        backgroundColor: 'white',
        width:width,

    },
    photoview: {
        position:'absolute',
        bottom:0
    },
    jiatext: {
        color: 'darkgray',
        fontSize: 50,
        marginTop: Pixel.getPixel(10),
        marginLeft: Pixel.getPixel(28),
    },
    imageviews2: {
        height: Pixel.getPixel(90),
        width: Pixel.getPixel(90),
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'darkgray',
        marginTop: Pixel.getPixel(10),
        marginLeft: Pixel.getPixel(10),
    },
    imagetext: {
        fontSize: 15,
        marginLeft: Pixel.getPixel(10),
        marginTop: Pixel.getPixel(10)
    },
    imageview: {
        marginLeft: Pixel.getPixel(210),
        marginTop: Pixel.getPixel(-40),
    },
    zhuceview: {
        marginLeft: Pixel.getPixel(200),
        marginTop: Pixel.getPixel(40),
        textDecorationLine: 'underline',
        textDecorationColor: 'red',
        fontSize: 15,
        color: 'red'
    },
    denglutext: {
        lineHeight: Pixel.getPixel(40),
        textAlign: 'center',
        color: 'white',
        fontSize: 15
    },
    dengluview: {
        width: Pixel.getPixel(250),
        height: Pixel.getPixel(40),
        backgroundColor: 'red',
        marginTop: Pixel.getPixel(40),
        marginLeft: Pixel.getPixel(60),
    },
    inputview1: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(300),
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        marginLeft: Pixel.getPixel(37),
        marginTop: Pixel.getPixel(40),
    },
    inputview2: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(300),
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        marginLeft: Pixel.getPixel(37),
        marginTop: Pixel.getPixel(40),
    },
    inputview3: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(160),
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        marginLeft: Pixel.getPixel(37),
        marginTop: Pixel.getPixel(40),
    },
    inputview4: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(300),
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        marginLeft: Pixel.getPixel(37),
        marginTop: Pixel.getPixel(40),
    },
    inputview5: {
        height: Pixel.getPixel(140),
        width: Pixel.getPixel(300),
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        marginLeft: Pixel.getPixel(37),
        marginTop: Pixel.getPixel(20),
    },
    Maxview: {
        marginTop: Pixel.getPixel(65),
        height: Pixel.getPixel(610),

    },
});

