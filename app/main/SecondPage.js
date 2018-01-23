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
import ShangPin2 from './ShangPinPage2';
import ShangPin3 from './ShangPin3';
import ComPrehensive from './Comprehensive';
import ClothesLength from './ClothesLength';
import Region from './RegionPage';
import Crowd from './CrowdPage';
import Screen from './ScreenPage'
var mp = false;
var op1 = false;
var op2 = false;
var op3 = false;
var op4 = false;
var op5 = false;
export default class SecondPage extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        data = [{title: '综合', image: require("../image/三角下标上.png"), flag: false}, {
            title: '衣长',
            image: require("../image/三角下标上.png"),
            flag: false
        }, {
            title: '地区', image: require("../image/三角下标上.png"), flag: false
        }, {title: '适用人群', image: require("../image/三角下标上.png"), flag: false}];
        this.state = {
            navTitle: '首页',
            dataSource: this.ds.cloneWithRows(data),
            show:true,
            show1:false,
            isShow: false,
            isShow1: false,
            isShow2: false,
            isShow3: false,
            isShow4: false,
            image: require('../image/分类.png'),
            image1: require('../image/三角下标上.png'),
            image2: require('../image/三角下标上.png'),
            image3: require('../image/三角下标上.png'),
            image4: require('../image/三角下标上.png'),
            baobei:[],
            num:'',
        };
    }
    initFinish() {
        this.fetchData();
    }
    fetchData = () => {

        fetch('http://10.2.1.92:8080/main/classification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

        }).then((response) => response.json())
            .then((responseData) => {
                console.log('FirstPageTwo', responseData.data)
                this.setState({
                    baobei: responseData.data,
                    renderPlaceholderOnly: 'success',

                });
            }).catch(
            (error) => {
            });
    }

    clickchanges1 = (rowData) => {
        console.log(rowData)
        let formData = new FormData();
        formData.append('composite',rowData);
        fetch('http://10.2.1.92:8080/main/classification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.data)
                this.setState({
                    baobei:responseData.data
                });
            }).catch(
            (error) => {
            });
    }
    clickchanges2 = (rowData) => {
        let formData = new FormData();
        formData.append('clothesLength',rowData);
        fetch('http://10.2.1.92:8080/main/classification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.data)
                this.setState({
                    baobei:responseData.data
                });
            }).catch(
            (error) => {
            });
    }
    clickchanges3 = (rowData) => {
        let formData = new FormData();
        formData.append('area',rowData);
        fetch('http://10.2.1.92:8080/main/classification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.data)
                this.setState({
                    baobei:responseData.data
                });
            }).catch(
            (error) => {
            });
    }
    clickchanges4 = (rowData) => {
        let formData = new FormData();
        formData.append('applicablePeople',rowData);
        fetch('http://10.2.1.92:8080/main/classification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.data)
                this.setState({
                    baobei:responseData.data
                });
            }).catch(
            (error) => {
            });
    }

    onclickChange1 = () => {
        op1 = !op1,
            op2 = false;
        op3 = false;
        op4 = false;
        this.setState({
            isShow: !this.state.isShow,
            isShow1: false,
            isShow2: false,
            isShow3: false,
        })
        if (op1 == true) {
            this.setState({
                image1: require("../image/三角下标.png"),
                image2: require('../image/三角下标上.png'),
                image3: require('../image/三角下标上.png'),
                image4: require('../image/三角下标上.png')
            })
        } else if (op1 == false) {
            this.setState({
                image1: require("../image/三角下标上.png"),
                image2: require('../image/三角下标上.png'),
                image3: require('../image/三角下标上.png'),
                image4: require('../image/三角下标上.png')
            })
        }
    }
    onclickChange2 = () => {
        op2 = !op2,
            op1 = false;
        op3 = false;
        op4 = false;
        this.setState({
            isShow: false,
            isShow1: !this.state.isShow1,
            isShow2: false,
            isShow3: false,

        })
        if (op2 == true) {
            this.setState({
                image1: require("../image/三角下标上.png"),
                image2: require("../image/三角下标.png"),
                image3: require('../image/三角下标上.png'),
                image4: require('../image/三角下标上.png')
            })
        } else if (op2 == false) {
            this.setState({
                image1: require("../image/三角下标上.png"),
                image2: require('../image/三角下标上.png'),
                image3: require('../image/三角下标上.png'),
                image4: require('../image/三角下标上.png')
            })
        }
    }
    onclickChange3 = () => {
        op3 = !op3
        op1 = false;
        op2 = false;
        op4 = false;
        this.setState({
            isShow: false,
            isShow1: false,
            isShow2: !this.state.isShow2,
            isShow3: false,

        })
        if (op3 == true) {
            this.setState({
                image1: require("../image/三角下标上.png"),
                image2: require('../image/三角下标上.png'),
                image3: require("../image/三角下标.png"),
                image4: require('../image/三角下标上.png')
            })
        } else if (op3 == false) {
            this.setState({
                image1: require("../image/三角下标上.png"),
                image2: require('../image/三角下标上.png'),
                image3: require('../image/三角下标上.png'),
                image4: require('../image/三角下标上.png')
            })
        }
    }
    onclickChange4 = () => {
        op4 = !op4,
            op1 = false;
        op3 = false;
        op2 = false;
        this.setState({
            isShow: false,
            isShow1: false,
            isShow2: false,
            isShow3: !this.state.isShow3,

        })
        if (op4 == true) {
            this.setState({
                image1: require("../image/三角下标上.png"),
                image2: require('../image/三角下标上.png'),
                image3: require('../image/三角下标上.png'),
                image4: require("../image/三角下标.png")
            })
        } else if (op4 == false) {
            this.setState({
                image1: require("../image/三角下标上.png"),
                image2: require('../image/三角下标上.png'),
                image3: require('../image/三角下标上.png'),
                image4: require('../image/三角下标上.png')
            })
        }
    }


    clickRowData = () => {
        mp = !mp
        if (mp == true) {
            this.setState({
                show1: true,
                show:false,
                image: require("../image/类目.png")
            })
        }
        else if (mp == false) {
            this.setState({
                show1:false,
                show:true,
                image: require("../image/分类.png")
            })
        }
    }
    clicks = () => {
        op5 = !op5
        console.log('12312312')
        this.setState({
            isShow4: !this.state.isShow4
        })
    }
    onchange = (data) => {
        console.log('SecondPage',data)
        this.onchanges(data),
        //this.onchanges1(data),
        //this.onnumber(number1,number2)
        this.setState({
            isShow4: !this.state.isShow4
        })


    }

    onchanges = (rowData)=>{
        console.log('111',rowData)
        let formData = new FormData();
        formData.append('brand',rowData[0]);
        formData.append('getModel',rowData[1]);
        formData.append('prices',rowData[2]);
        let qw = 'brand=' + rowData[0] + '&' + 'getModel=' + rowData[1] + '&' + 'prices=' + rowData[2];

        console.log('5665767658568','http://10.2.1.92:8080/main/classification?' + qw);

        // formData.append('clothesLength',rowData);
        // formData.append('area',rowData);
        // formData.append('applicablePeople',rowData);
        fetch('http://10.2.1.92:8080/main/classification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {

                console.log('------',responseData)
                this.setState({
                    baobei:responseData.data
                });
            }).catch(
            (error) => {
            });
    }
    onchanges1 = (rowData)=>{
        console.log(rowData)
        let formData = new FormData();
        formData.append('getModel',rowData);
        fetch('http://10.2.1.92:8080/main/classification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.data)
                this.setState({
                    baobei:responseData.data
                });
            }).catch(
            (error) => {
            });
    }
    suosuochange=(num)=>{
        let formData = new FormData();
        formData.append('keyWord',num);
        fetch('http://10.2.1.92:8080/main/classification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.data)
                this.setState({
                    baobei:responseData.data
                });
            }).catch(
            (error) => {
            });
    }
    render() {
            return (
                <View style={styles.Maxview}>
                    <View style={styles.firstview}>
                        <View style={styles.sousuo}>
                            <TouchableOpacity onPress={
                                () => {
                                    this.suosuochange(this.state.num);
                                }
                            }>
                            <Image source={require('../image/放大镜.png')}
                                   resizeMode="center"
                                   style={styles.imageviews1}/>
                            </TouchableOpacity>
                            <TextInput style={styles.sousuotext}
                                           maxLength={11}
                                           onChangeText={(text) => this.setState({num: text})}
                            />
                        </View>
                        <TouchableOpacity onPress={
                            () => {
                                this.clicks();
                            }
                        }>
                            <Text style={styles.textview1}>筛选</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bannerview}>
                        <TouchableOpacity onPress={
                            () => {
                                this.onclickChange1();
                            }
                        }>
                            <View style={styles.everyview}>
                                <Text style={styles.everytext}>综合</Text>
                                <Image source={this.state.image1}
                                       resizeMode="center"
                                       style={styles.imageviews}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={
                            () => {
                                this.onclickChange2();
                            }
                        }>
                            <View style={styles.everyview}>
                                <Text style={styles.everytext}>衣长</Text>
                                <Image source={this.state.image2}
                                       resizeMode="center"
                                       style={styles.imageviews}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={
                            () => {
                                this.onclickChange3();
                            }
                        }>
                            <View style={styles.everyview}>
                                <Text style={styles.everytext}>地区</Text>
                                <Image source={this.state.image3}
                                       resizeMode="center"
                                       style={styles.imageviews}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={
                            () => {
                                this.onclickChange4();
                            }
                        }>
                            <View style={styles.everyviews}>
                                <Text style={styles.everytext}>适用人群</Text>
                                <Image source={this.state.image4}
                                       resizeMode="center"
                                       style={styles.imageviewss}
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={
                            () => {
                                this.clickRowData();
                            }
                        }>
                            <View style={styles.fenlei}><Image source={this.state.image}
                                                               resizeMode="center"
                                                               style={styles.imageviews2}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shangpin}>
                        {this.state.show&&<ShangPin2 BaoBei={this.state.baobei}/>}
                        {this.state.show1&&<ShangPin3 BaoBei={this.state.baobei}/>}
                    </View>
                    <View style={styles.zongheview}>
                        {this.state.isShow && <ComPrehensive click2={this.clickchanges1}/>}
                        {this.state.isShow1 && <ClothesLength click3={this.clickchanges2}/>}
                        {this.state.isShow2 && <Region click4={this.clickchanges3}/>}
                        {this.state.isShow3 && <Crowd click5={this.clickchanges4}/>}
                    </View>
                    {this.state.isShow4 && <Screen click1={this.onchange} />}
                    <View>

                    </View>


                </View>
            );
        }
    }
const styles = StyleSheet.create({
    sousuotext:{
        marginTop: Pixel.getPixel(-38),
        height: Pixel.getPixel(28),
        width: Pixel.getPixel(200),
        borderRadius:10,
    },
    everyviews: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(100),
        borderColor: "aliceblue",
        borderWidth: 1,
        backgroundColor: 'white'
    },

    zongheview: {

        marginTop: Pixel.getPixel(-500),
        height: Pixel.getPixel(200),
    },
    shangpin: {
        marginTop: Pixel.getPixel(1),
        height: Pixel.getPixel(500),
        width: Pixel.getPixel(375),
        backgroundColor: 'white',
    },
    fenlei: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(65),
        backgroundColor: 'white',
        marginLeft: Pixel.getPixel(0),
    },
    imageviews2: {
        marginLeft: Pixel.getPixel(23),
        marginTop: Pixel.getPixel(10),
        width: Pixel.getPixel(20),
        height: Pixel.getPixel(20),
    },
    imageviews: {
        height: Pixel.getPixel(18),
        width: Pixel.getPixel(18),
        marginTop: Pixel.getPixel(-28),
        marginLeft: Pixel.getPixel(45),
    },
    imageviewss: {
        height: Pixel.getPixel(18),
        width: Pixel.getPixel(18),
        marginTop: Pixel.getPixel(-28),
        marginLeft: Pixel.getPixel(75),
    },

    everyview: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(70),
        borderWidth: 1,
        borderColor:'#F3F5F9',
        backgroundColor: 'white'
    },
    everytext: {
        marginLeft: Pixel.getPixel(15),
        lineHeight: Pixel.getPixel(38),
    },
    bannerview: {
        height: Pixel.getPixel(40),
        flexDirection: 'row',
    },
    textview1: {
        color: 'white',
        fontSize: 18,
        marginTop: Pixel.getPixel(-22),
        marginLeft: Pixel.getPixel(305),
    },
    imageviews1: {
        marginTop: Pixel.getPixel(-10),
        marginLeft: Pixel.getPixel(210),
    },
    firstview: {
        marginTop: Pixel.getPixel(20),
        height: Pixel.getPixel(50),
        backgroundColor: 'red'
    },
    sousuo: {
        marginLeft: Pixel.getPixel(20),
        marginTop: Pixel.getPixel(10),
        width: Pixel.getPixel(250),
        height: Pixel.getPixel(30),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'darkgray',
        backgroundColor: "white"
    },
    Maxview: {
        height: Pixel.getPixel(610),
    },
});