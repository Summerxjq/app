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
export default class SecondPage extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        data = [{title: '综合',image:require("../image/三角下标上.png"),flag: false}, {title: '衣长',image:require("../image/三角下标上.png"), flag: false}, {
            title: '地区', image:require("../image/三角下标上.png"),flag: false}, {title: '适用人群', image:require("../image/三角下标上.png"),flag: false}];
        this.state = {
            navTitle: '首页',
            dataSource: this.ds.cloneWithRows(data),
            isShow:true,
        };

    }
    renderRow = (rowData, sectionId, rowId) => {
        console.log('-------flag', rowData.flag);
        return (
            <View style={[styles.everyview,]}>
                <Text style={[styles.everytext, rowData.flag ? {color: 'red'} : {}]}>{rowData.title}</Text>
                    <Image source={rowData.image}
                           resizeMode="center"
                           style={styles.imageviews}/>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.Maxview}>
                <View style={styles.firstview}>
                    <View style={styles.sousuo}>
                        <Image source={require('../image/放大镜.png')}
                               resizeMode="center"
                               style={styles.imageviews1}/>
                    </View>
                    <Text style={styles.textview1}>筛选</Text>

                </View>
                <View style={styles.bannerview}>
                    <ListView  contentContainerStyle={styles.container}
                        showsVerticalScrollIndicator={false}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageviews:{
        height:Pixel.getPixel(18),
        width:Pixel.getPixel(18),
        marginTop:Pixel.getPixel(-28),
        marginLeft:Pixel.getPixel(68),

    },
    container:{
        flexDirection:'row'
    },
    everyview:{
        height:Pixel.getPixel(40),
        width:Pixel.getPixel(85),
        borderColor:"aliceblue",
        borderWidth:1,
        backgroundColor:'white'

    },
    everytext:{
       textAlign:'center',
        lineHeight:Pixel.getPixel(40),
    },
    bannerview:{
        height:Pixel.getPixel(40),
        flexDirection:'row',


    },
    textview1:{
        color:'white',
        fontSize:18,
        marginTop:Pixel.getPixel(-22),
        marginLeft:Pixel.getPixel(305),

    },
    imageviews1:{
         marginTop: Pixel.getPixel(-10),
        marginLeft:Pixel.getPixel(210),
    },
    firstview: {

        marginTop: Pixel.getPixel(20),
        height: Pixel.getPixel(50),
        backgroundColor: 'red'
    },
    sousuo: {
        marginLeft:Pixel.getPixel(20),
        marginTop: Pixel.getPixel(10),
        width:Pixel.getPixel(250),
        height: Pixel.getPixel(30),
        borderRadius: 10,
        borderWidth:1,
        borderColor: 'darkgray',
        backgroundColor:"white"

    },
    Maxview: {
        height: Pixel.getPixel(610),

    },
});