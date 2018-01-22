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
import Zan from './ZanPage';
import Photo from './PhotoView'
export default class FourthPage extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:[],

        };
    }
    initFinish() {
        this.fetchData();
    }
    fetchData = () => {
        let formData = new FormData();
        formData.append('account', this.state.num,);
        formData.append('accountPassword', this.state.password,);
        fetch('http://10.2.1.92:8080/mine/getMineInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.data)
                this.setState({
                    dataSource: this.ds.cloneWithRows(responseData.data),
                    renderPlaceholderOnly: 'success',

                });
            }).catch(
            (error) => {
            });
    }
    setTime = (time) => {
        var newTime = new Date(time * 1);
        var Y = newTime.getFullYear()+'年';
        var M = (newTime.getMonth() + 1 < 10 ? '0'+newTime.getMonth() + 1 : newTime.getMonth() + 1) + '月';
        var D = (newTime.getDate() < 10 ? '0' + newTime.getDate() : newTime.getDate() ) + '日';
        return Y+M+D;
    }
    renderRow = (rowData, sectionId, rowId) => {
        return (
            <View style={styles.sview}>
                <View style={styles.touxiang}>
                    <Image source={{uri:rowData.mine.storeUrl}}
                           resizeMode="stretch"
                           style={styles.imageviews}/>
                </View>
                <Text style={styles.etext}>{rowData.mine.storeTitle}</Text>
                <Text style={styles.datatext}>{this.setTime(rowData.mine.releaseDate)}</Text>
                <Text style={styles.texttext}>{rowData.mine.storeDescribe}</Text>
                <View style={styles.imageview}>
                    <Photo photo={rowData.picList}/>
                </View>
                <View style={styles.zans}>
                    <Zan message={rowData}/>
                </View>

            </View>
        )
    }
    render() {
        if(this.state.renderPlaceholderOnly !== 'success') {
            return null;
        }else {
            return (
                <View style={styles.Maxview}>
                    <ListView contentContainerStyle={styles.container}
                              dataSource={this.state.dataSource}
                              renderRow={this.renderRow}
                    />
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    zans:{},
    imageviews:{
        width: Pixel.getPixel(50),
        height: Pixel.getPixel(50),
    },

    xiaoxiview:{
        width: Pixel.getPixel(35),
        height: Pixel.getPixel(30),
        marginTop: Pixel.getPixel(-25),
        marginLeft: Pixel.getPixel(330),


    },
    texttext:{
        marginTop: Pixel.getPixel(20),
        marginLeft: Pixel.getPixel(20),
        width:Pixel.getPixel(300),
        height:Pixel.getPixel(32),
    },
    datatext: {
        width:Pixel.getPixel(250),
        height: Pixel.getPixel(20),
        marginLeft: Pixel.getPixel(70),
        marginTop: Pixel.getPixel(10),
    },
    etext: {
        marginTop: Pixel.getPixel(-45),
        marginLeft: Pixel.getPixel(70),
    },
    touxiang: {
        width: Pixel.getPixel(50),
        height: Pixel.getPixel(50),
        backgroundColor: 'green',
        borderRadius: 25,
        overflow: 'hidden',
        marginTop: Pixel.getPixel(10),
        marginLeft: Pixel.getPixel(10),

    },
    imageview: {
        marginTop:Pixel.getPixel(5),
        width: Pixel.getPixel(300),
        flex:1,
        marginLeft: Pixel.getPixel(20),

    },
    sview: {
       flex:1,
        backgroundColor: 'white',
    },
    Maxview: {
        marginTop:Pixel.getPixel(10),
        height: Pixel.getPixel(600),
    },
});

