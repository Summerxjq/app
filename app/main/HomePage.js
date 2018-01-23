/**
 * Created by xujiaqi on 2018/1/3.
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
    TabBarIOS,
    ScrollView,
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
import First from './FirstPage';
import Second from './SecondPage';
import Third from './ThirdPage';
import Fourth from './FourthPage'
export default class HomePage extends BaseComponent {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        data = [{title: '首页',image:require("../image/首页2.png"),flag: true}, {title: '分类',image:require("../image/类目.png"), flag: false}, {
            title: '购物车', image:require("../image/购物车.png"),flag: false}, {title: '我的', image:require("../image/我的.png"),flag: false}];
        this.state = {
            navTitle: '首页',
            dataSource:this.ds.cloneWithRows(data),
            isShow:true,
            View:<First/>,

        };
        this.num = "棣栭〉";
    }

    renderRow = (rowData, sectionId, rowId) => {
        console.log('-------flag', rowData.flag);
        return (
            <View style={[styles.sview,]}>
                <TouchableOpacity onPress={() => {
                        this.clickRowData(rowData.title, rowId);
                    }} style = {{alignItems:"center"}}>
                    <Image source={rowData.image}
                           resizeMode="center"
                           style={styles.imageviews}/>
                    <Text
                        style={[styles.etext, rowData.flag ? {color: 'red'} : {}]}>{rowData.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    clickRowData = (title, rowId) => {
        data.map((value) => {
            value.flag=false;
        });
        //data[rowID].flag=true;

        if (title == '首页') {
            console.log('123')
            this.setState({
             View:<First/>,
             image:require("../image/首页2.png")
            })
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            data = [{title: '首页',image:require("../image/首页2.png"),flag: true}, {title: '分类',image:require("../image/类目.png"), flag:false}, {
                title: '购物车', image:require("../image/购物车.png"),flag: false}, {title: '我的', image:require("../image/我的.png"),flag: false}];
            this.setState({
                dataSource: ds.cloneWithRows(data),
            });
        }
        if (title == '分类') {
            this.setState({
                navTitle: '分类',
                View:<Second/>,
            })
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            data = [{title: '首页',image:require("../image/首页.png"),flag: false}, {title: '分类',image:require("../image/类目2.png"), flag:true}, {
                title: '购物车', image:require("../image/购物车.png"),flag: false}, {title: '我的', image:require("../image/我的.png"),flag: false}];
            this.setState({
                dataSource: ds.cloneWithRows(data),
            });
        }
        if (title == '购物车') {
            this.setState({
                navTitle: '购物车',
                View:<Third/>
            })
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            data = [{title: '首页',image:require("../image/首页.png"),flag: false}, {title: '分类',image:require("../image/类目.png"), flag:false}, {
                title: '购物车', image:require("../image/购物车2.png"),flag: true}, {title: '我的', image:require("../image/我的.png"),flag: false}];
            this.setState({
                dataSource: ds.cloneWithRows(data),
            });
        }
        if (title == '我的') {
            this.setState({
                navTitle: '我的',
                View:<Fourth/>

            })
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            data = [{title: '首页',image:require("../image/首页.png"),flag: false}, {title: '分类',image:require("../image/类目.png"), flag:false}, {
                title: '购物车', image:require("../image/购物车.png"),flag: false}, {title: '我的', image:require("../image/我的2.png"),flag:true}];
            this.setState({
                dataSource: ds.cloneWithRows(data),
            });
        }



    }


    render() {
        return (
            <View style={styles.Maxview}>
                <View style={styles.chaoshi}>{this.state.View}</View>
                <View style={styles.tabview}>
                    <ListView contentContainerStyle={styles.container}
                              dataSource={this.state.dataSource}
                              renderRow={this.renderRow}
                    />
                </View>
            </View>
        )
    }


}

var styles = StyleSheet.create({
    chaoshi:{
        marginTop:Pixel.getPixel(20),

    },
    Maxview:{
        height:height,
        width:width
    },
    imageviews: {
        width: Pixel.getPixel(30),
        height: Pixel.getPixel(30),
    },
    etext: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 14,
        fontSize: 15
    },
    container: {
        flexDirection: 'row',
    },
    sview: {
        width: Pixel.getPixel(width/4),
        height: Pixel.getPixel(60),
        marginTop: Pixel.getPixel(3),
    },
    tabview: {
        height: Pixel.getPixel(56),
        borderTopColor: 'darkgray',
        borderTopWidth: 1,
        flexDirection: 'row',
        position:'absolute',
        bottom:0

    },
})