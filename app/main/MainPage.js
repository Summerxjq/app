import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    AlertIOS


} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import Gestures from './GesturesPage'
import NavigatorView from '../component/AllNavigationView';
import LianXi from './LianXi'
import HomePage from './HomePage'
import Gesturesdeng from './GesturesdengPage'
import  StorageUtil from '../utils/StorageUtil'
import * as storageKeyNames from '../constant/storageKeyNames';
export default class MainPage extends BaseComponent {
    componentWillUnmount() {
    }
    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.state = {
            renderPlaceholderOnly: 'blank',
            num:'',
            password:''
        }
    }
    initFinish = () => {
        this.setState({renderPlaceholderOnly: 'success'});
    };
    _renderPlaceholderView() {
        return (
            <View style={{width: width, height: height,backgroundColor: fontAndClolr.COLORA3}}>
                {this.loadView()}
            </View>
        );
    }

    fetchData = () => {
        let formData = new FormData();
        formData.append('account', this.state.num,);
        formData.append('accountPassword', this.state.password,);
        fetch('http://10.2.1.92:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
            console.log(responseData)
                if (responseData.rspCode == '000000') {
                    console.log(responseData)
                    this.toNextPage({
                        name: 'Gesturesdeng',
                        component: Gesturesdeng,
                        params: {num:this.state.num}
                    });

                } else {
                    console.log('12312')
                    return (
                        alert(
                            '抱歉',
                            '请重新登录',
                            [{text: '确定', onPress: () => {
                                }},]
                        )
                    )
                }
            }).catch(
            (error)=> {

            });
    }
    render() {
        if (this.state.renderPlaceholderOnly !== 'success') {
            return this._renderPlaceholderView();
        }
        return (
            <View >
                <View style={styles.flex}>
                    <NavigatorView title="登录"/>

                </View>
                <View style={styles.Maxview}>
                    <View>
                        <TextInput style={styles.inputview1}
                                   placeholder="用户名"
                                   maxLength={11}
                                   onChangeText={(text) => this.setState({num: text})}
                        />
                    </View>
                    <View>
                        <TextInput style={styles.inputview2}
                                   placeholder="密码"
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
                        <TouchableOpacity onPress={() => {
                            this.toNextPage({
                                name: 'Registration',
                                component: Registration,
                                params: {
                                }
                            });
                        }}>
                            <Text style={styles.zhuceview}>没有账号？去注册></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dengluview}>
                        <TouchableOpacity onPress={() => {
                             this.toNextPage({
                                 name: 'HomePage',
                               component: HomePage,
                             });
                            //this.fetchData()
                        }}>
                        <Text style={styles.denglutext}>登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
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
        marginTop: Pixel.getPixel(80),
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
    Maxview: {
        marginTop: Pixel.getPixel(65),
        height: Pixel.getPixel(610),

    },
});

