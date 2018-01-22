/**
 * Created by xujiaqi on 2018/1/17.
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
import Commodity from './CommodityPage';
import ShopPing from './ShopPingPage';
import Yuan from './yuan'
export default class GouWuShangPin extends BaseComponent {

    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.shangpin),
          /*  isShow:true,*/

        }
        this.sArray = [];
        console.log(this.props.shangpin)
    }

    componentWillMount() {
        let shopData = this.props.shangpin;
        let nameArray = [];
        shopData.map((item) => {
            nameArray.push(item.storeName);
        });
        let storeNameArray = Array.from(new Set(nameArray));
        let shopinnerArray = [];
        storeNameArray.map((item) => {
            shopinnerArray.push(
                {
                    store: item,
                    shopclick:false,
                    dataContent: []
                }
            )
        })
        for (let j = 0; j < shopData.length; j++) {
            for (k = 0; k < shopinnerArray.length; k++) {
                if (shopData[j].storeName == shopinnerArray[k].store) {

                    shopinnerArray[k].dataContent.push(
                        {
                            goodsID: shopData[j].id,
                            goodsName: shopData[j].goodsName,
                            goodsPrices: shopData[j].goodsPrices,
                            goodsPicUrl: shopData[j].goodsPicUrl,
                            goodsclick:false,
                            goodsNumber:1,
                        }
                    )
                }
            }
        }

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.sArray = shopinnerArray;
        this.setState({
            dataSource: ds.cloneWithRows(this.sArray)
        })

    }
    onclick = () => {
        let status = this.state.isShow;
        this.setState({
            isShow:!status,
            // isShow1:true
        })
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.shangpin),
            isShow:!status,
            // isShow1:false
        }
    }

    clickyuan1 = (rowID) => {
        this.sArray[rowID].shopclick=!this.sArray[rowID].shopclick;

        for(let i=0;i<this.sArray[rowID].dataContent.length;i++){
           this.sArray[rowID].dataContent[i].goodsclick=this.sArray[rowID].shopclick
        }
        let alltrue = true;
        for(let i=0;i<this.sArray.length;i++){
            if(this.sArray[i].shopclick==false){
                alltrue=false
            }
        }
        this.props.changeSelectAll(alltrue)


        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let ss =[];
        ss =this.sArray;
        this.setState({
            dataSource: ds.cloneWithRows(ss)
        })
    }
    clickyuan2 = (rowID,srowID) => {
        this.sArray[rowID].dataContent[srowID].goodsclick=!this.sArray[rowID].dataContent[srowID].goodsclick;
        let alltrue = true;
        for(let i=0;i<this.sArray[rowID].dataContent.length;i++){
            if(this.sArray[rowID].dataContent[i].goodsclick==false){
                alltrue=false
            }
        }
        this.sArray[rowID].shopclick=alltrue;

        let alltrues = true;
        for(let i=0;i<this.sArray.length;i++){
            if(this.sArray[i].shopclick==false){
                alltrues=false
            }
        }
        let pricr='';
        price=this.sArray[rowID].dataContent[srowID].goodsPrices*this.sArray[rowID].dataContent[srowID].goodsNumber
        this.props.changeSelectAll(alltrues)


        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let ss =[];
        ss =this.sArray;
        this.setState({
            dataSource: ds.cloneWithRows(ss)
        })

    }

    changeAll =(isShow) => {
        for(let i=0;i<this.sArray.length;i++){
            for(let j = 0;j<this.sArray[i].dataContent.length;j++){
                this.sArray[i].dataContent[j].goodsclick = isShow;
            }
            this.sArray[i].shopclick = isShow;

        }

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let ss =[];
        ss =this.sArray;
        this.setState({
            dataSource: ds.cloneWithRows(ss)
        })
    }

    increaseList = (rowID,id) => {
        this.sArray[rowID].dataContent[id].goodsNumber += 1;

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let ss =[];
        ss =this.sArray;
        this.setState({
            dataSource: ds.cloneWithRows(ss)
        })

    }

    decreaseList = (rowID,id) => {
        if( this.sArray[rowID].dataContent[id].goodsNumber > 1){
            this.sArray[rowID].dataContent[id].goodsNumber -= 1;
        }else if(
            this.sArray[rowID].dataContent[id].goodsNumber =1
        ){
            this.sArray[rowID].dataContent[id].goodsNumber =1
        }


        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let ss =[];
        ss =this.sArray;
        this.setState({
            dataSource: ds.cloneWithRows(ss)
        })
    }
    renderRow = (rowData,selectID,rowID) => {
        return (
            <View style={styles.sview}>
                <View style={styles.shopview}>
                    <View style={styles.yuan}>
                        <Yuan click={rowData.shopclick} clickyuan={()=>{this.clickyuan1(rowID)}}/>
                    </View>
                    <Text style={styles.shoptext}>{rowData.store}</Text>
                </View>
                <View style={styles.gouwushangpin}>
                    <Commodity things={rowData}  clickyuan={(srowID)=>{this.clickyuan2(rowID,srowID)}}
                    onIncreaseList = {(id)=>{this.increaseList(rowID,id)}} onDecreaseList = {(id)=>{this.decreaseList(rowID,id)}}/>
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
                          enableEmptySections={true}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    yuan: {
        height: Pixel.getPixel(24),
        width: Pixel.getPixel(24),
        borderRadius: 12,
        marginLeft: Pixel.getPixel(10),
        marginTop: Pixel.getPixel(10),
    },
    gouwushangpin: {
        flex: 1,
    },
    Maxview: {
        height: Pixel.getPixel(480),

    },
    container: {
        marginTop: Pixel.getPixel(0),
    },
    sview: {
        flex: 1
    },
    shoptext: {
        fontSize: 15,
        marginLeft: Pixel.getPixel(50),
        marginTop: Pixel.getPixel(-25),
    },
    shopview: {
        height: Pixel.getPixel(40),
        backgroundColor: '#BAB0BC',
        marginTop: Pixel.getPixel(10),
    },


});
