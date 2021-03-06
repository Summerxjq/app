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
export default class ShangPinPage extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            navTitle: '首页',
            dataSource: this.ds.cloneWithRows(this.props.shangPinData),
        };
    }
    onclickchange=(data) => {
        let formData = new FormData();
        formData.append('goodsId',data.id,);
        formData.append('account',11111111112 ,);
        fetch('http://10.2.1.92:8080/shoppingCart/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('gouwuche',responseData)
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    dataSource:ds.cloneWithRows(responseData.data),
                    renderPlaceholderOnly:'success'
                });
            }).catch(
            (error)=> {
            });
    }
    renderRow = (rowData, sectionId, rowID) => {
console.log('超市'+this.props.shangPinData)
        return (
            <View style={[styles.everyview,]}>
                <Image source={{uri:rowData.goodsPicUrl}}
                       resizeMode="stretch"
                       style={styles.imageviews}/>
                <Text style={styles.etext}>{rowData.goodsName}</Text>
                <Text style={styles.text}>¥</Text>
                <Text style={styles.text1}>{rowData.goodsOriginalPrices}</Text>
                <Text style={styles.text2}>¥</Text>
                <Text style={styles.text3}>{rowData.goodsPrices}</Text>
                <Text style={styles.text4}>{rowData.highPraiseNum}</Text>
                <Text style={styles.text5}>条评价</Text>
                <Text style={styles.text6}>好评</Text>
                <Text style={styles.text7}>{rowData.highPraiseProbability}</Text>
                <Text style={styles.text8}>%</Text>
                <TouchableOpacity  onPress={() => {
                    this.onclickchange(rowData)
                }}>
                <Image source={require('../image/购物车2.png')}
                       resizeMode="center"
                       style={styles.gouwu}/>
                </TouchableOpacity>
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
    gouwu:{
        height:Pixel.getPixel(30),
        width: Pixel.getPixel(30),
        marginLeft:Pixel.getPixel(330),
        marginTop:Pixel.getPixel(-38),

    },
    text8:{
        width:Pixel.getPixel(35),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(297),
        marginTop:Pixel.getPixel(-18),

    },
    text7:{
        width:Pixel.getPixel(35),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(265),
        marginTop:Pixel.getPixel(-17),

    },
    text6:{
        width:Pixel.getPixel(35),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(235),
        marginTop:Pixel.getPixel(-15),

    },
    text5:{
        width:Pixel.getPixel(60),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(178),
        marginTop:Pixel.getPixel(-16),
    },
    text4:{
        width:Pixel.getPixel(40),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(150),
        marginTop:Pixel.getPixel(8),
    },
    text3:{
        width:Pixel.getPixel(50),
        fontSize:12,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(230),
        marginTop:Pixel.getPixel(-16),
        textDecorationLine:'line-through'
    },
    text2:{
        width:Pixel.getPixel(50),
        fontSize:12,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(220),
        marginTop:Pixel.getPixel(-15),

    },
    text:{
        width:Pixel.getPixel(20),
        fontSize:18,
        color:'red',
        marginLeft:Pixel.getPixel(150),
        marginTop:Pixel.getPixel(7),
    },
    text1:{
       width:Pixel.getPixel(70),
        color:'red',
        fontSize:18,
        marginLeft:Pixel.getPixel(165),
        marginTop:Pixel.getPixel(-22),

    },
    etext:{
        width:Pixel.getPixel(210),
        marginLeft:Pixel.getPixel(150),
        marginTop:Pixel.getPixel(-85),
    },
    imageviews:{
        marginTop:Pixel.getPixel(10),
        marginLeft:Pixel.getPixel(10),
        height:Pixel.getPixel(90),
        width:Pixel.getPixel(130),
    },
    Maxview:{
        flex:1,
    },
    everyview:{
        height:Pixel.getPixel(110),
        borderBottomColor:'aliceblue',
        borderBottomWidth:1
    }
});
