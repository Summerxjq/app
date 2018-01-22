/**
 * Created by xujiaqi on 2018/1/10.
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
import Calculator from './Calculator';
import Yuan from './yuan'
export default class CommodityPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            navTitle: '首页',
            dataSource: this.ds.cloneWithRows(this.props.things.dataContent),
        };
        console.log('---------'+this.props.things)
    }

    componentWillReceiveProps(ss){
        this.setState({
            dataSource:this.ds.cloneWithRows(ss.things.dataContent),
        })
    }
    renderRow = (rowData, sectionId, rowId) => {
        return (
            <View style={styles.sview}>
                <View style={styles.yuan}>
                    <Yuan click={rowData.goodsclick} clickyuan = {()=>{this.props.clickyuan(rowId)}}/>
                </View>
                <Image source={{uri:rowData.goodsPicUrl}}
                       resizeMode="stretch"
                       style={styles.imageviews}
                />
                <Text style={styles.xiezitext}>{rowData.goodsName}</Text>
                <Text style={styles.yansetext}>颜色:</Text>
                <Text style={styles.yansetext2}>蓝色</Text>
                <Text style={styles.chimatext}>尺码:</Text>
                <Text style={styles.chimatext2}>XL</Text>
                <Text style={styles.pricetext}>{rowData.goodsPrices}</Text>
                <View style={styles.jisuan}>
                    <Calculator number={rowData.goodsNumber} onIncrease={()=>{this.props.onIncreaseList(rowId)}}
                                onDecrease = {()=>{this.props.onDecreaseList(rowId)}}/>
                </View>
            </View>
        )
    }
    render() {
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
const styles = StyleSheet.create({
    jisuan:{
        height: Pixel.getPixel(35),
        width:Pixel.getPixel(113),
        marginTop:Pixel.getPixel(-30),
        marginLeft:Pixel.getPixel(250),
    },
    pricetext:{
        fontSize:17,
        height:Pixel.getPixel(25),
        width:Pixel.getPixel(80),
        color:'red',
        marginLeft:Pixel.getPixel(200),
        marginTop:Pixel.getPixel(5),

    },
    chimatext:{
        color:'#D8D5DF',
        fontSize:13,
        height:Pixel.getPixel(30),
        width:Pixel.getPixel(40),
        marginLeft:Pixel.getPixel(290),
        marginTop:Pixel.getPixel(-30),
    },
    chimatext2:{
        color:'#D8D5DF',
        fontSize:13,
        height:Pixel.getPixel(30),
        width:Pixel.getPixel(40),
        marginLeft:Pixel.getPixel(320),
        marginTop:Pixel.getPixel(-30),
    },
    yansetext:{
        color:'#D8D5DF',
        fontSize:13,
        height:Pixel.getPixel(30),
        width:Pixel.getPixel(40),
        marginLeft:Pixel.getPixel(200),
        marginTop:Pixel.getPixel(-15),
    },
    yansetext2:{
        color:'#D8D5DF',
        fontSize:13,
        height:Pixel.getPixel(30),
        width:Pixel.getPixel(40),
        marginLeft:Pixel.getPixel(240),
        marginTop:Pixel.getPixel(-29),
    },
    xiezitext:{
        height:Pixel.getPixel(60),
        width:Pixel.getPixel(160),
        marginLeft:Pixel.getPixel(200),
        marginTop:Pixel.getPixel(-100),
    },
    yuan:{
        height:Pixel.getPixel(24),
        width:Pixel.getPixel(24),
        borderRadius:12,
        marginLeft:Pixel.getPixel(10),
        marginTop:Pixel.getPixel(50),
    },
    sview:{
        height:Pixel.getPixel(130),
        marginTop:Pixel.getPixel(1),
        backgroundColor:'white'
    },
    imageviews:{
        marginLeft:Pixel.getPixel(50),
        marginTop:Pixel.getPixel(-60),
        width:Pixel.getPixel(140),
        height:Pixel.getPixel(100),
    },

    Maxview:{
       flex:1

    },
});


