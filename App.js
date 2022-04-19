import React, { Component } from 'react';
import {Text, View, StatusBar, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
     };
  }

  render() {
    return (
    <SafeAreaView style={{height:'100%'}}>
    
    <ScrollView>
    <StatusBar barStyle="dark-content" backgroundColor="#ffff"/>
        <View style={{height:50}}>
            <View style={style.top_nav}>
               <View style={style.top_nav_icon}>
                 <View style={style.top_nav_iconImage}>
                   <Image 
                    source={{uri:'https://i.pinimg.com/originals/32/1a/3d/321a3dc78b3432e04d89704e506d8546.jpg'}}
                    style={{width:30, height:30, borderRadius:50, marginRight:10}}/>
                </View>
                <View style={style.top_nav_iconTwitter}>
                  <AntDesign name="twitter" size={22} color="#1DA1F2"/>
                </View>
                <View style={style.top_nav_iconStar}>
                  <MaterialCommunityIcons name="star-four-points-outline" size={22} color="#1DA1F2"/>
                </View>
              </View>
            </View> 
        </View>
    
        <View style={{ height:'auto'}}>
              <View style={style.content}>
                                    <View style={style.content_container}>
                                          <Image 
                                          source={{uri:'https://i.pinimg.com/originals/49/4f/e0/494fe0dee99a3f4e955bb405cc58a715.jpg'}}
                                          style={{width:40, height:40, borderRadius:50, marginRight:5}}/>
                                        <View style={{marginLeft:10}}>
                                          <Text style={{fontWeight:'bold', color:"#14171A", fontSize:16}}>Jaker
                                            <Text style={{fontSize:13, color:"#657786", fontWeight:'normal'}}> @jaker
                                              <Entypo name="dot-single" size={10} color="#657786"/> 10 menit
                                                <View style={{paddingLeft:95}}>
                                                  <Entypo name="dots-three-vertical" size={11} color="#657786"/>
                                                </View>
                                            </Text>
                                          </Text>
                                          <View style={{flexDirection:'column'}}>
                                            <Text style={{maxWidth:280, color:'#14171A'}}>Tidak semua orang punya gaji, Tapi semua orang punya rezeki. <Text style={{color:"#1DA1F2"}}>#QUOTES #RENUNG..</Text>
                                            </Text>
                                          </View>
                                          <View>
                                            <Image
                                              source={{uri:"https://i.pinimg.com/originals/11/d4/15/11d415791dd08be04ebf565bc23adce7.jpg"}}
                                              style={{width:300, height:350, borderRadius:20, marginTop:10}}
                                            />
                                          </View>
                                          <View style={style.content_container_iconAction}>
                                            <EvilIcons name="comment" size={20} color="#657786"/>
                                            <Text style={{color:'#657786',marginTop:-2}}>
                                              201
                                            </Text>
                                            <Text style={{marginLeft:40, color:'#657786'}}>
                                              <EvilIcons name="retweet" size={23} color="#657786" marginLeft="40"/>
                                            </Text>
                                            <Text style={{color:'#657786', marginTop:-1}}>
                                              130
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40}}>
                                              <AntDesign name="hearto" size={14} color="#657786"/> 80
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40, marginTop:2}}>
                                              <EvilIcons name="share-google" size={20} color="#657786"/>
                                            </Text>
                                          </View>
                                        </View> 
                                  </View>
                          </View>
                          <View style={style.content}>
                                    <View style={style.content_container}>
                                      <Image 
                                        source={{uri:'https://i.pinimg.com/originals/b0/69/bc/b069bc48fcf4f202470ee92b6bab0153.jpg'}}
                                        style={{width:40, height:40, borderRadius:50, marginRight:5}}/>
                                        <View style={{marginLeft:10}}>
                                          <Text style={{fontWeight:'bold', color:"#14171A", fontSize:16}}>Vespanation
                                            <Text style={{fontSize:13, color:"#657786", fontWeight:'normal'}}> @vespantion
                                              <Entypo name="dot-single" size={10} color="#657786"/> 5 menit
                                                <View style={{paddingLeft:100}}>
                                                  <Entypo name="dots-three-vertical" size={11} color="#657786"/>
                                                </View>
                                            </Text>
                                          </Text>
                                          <View style={{flexDirection:'column'}}>
                                            <Text style={{maxWidth:280, color:'#14171A'}}>Jangan biarkan pabrik mengatur warna kesukaan kita. <Text style={{color:"#1DA1F2"}}>#Vesmet #vesmodrnclassis</Text>
                                            </Text>
                                          </View>
                                          <View>
                                            <Image
                                              source={{uri:"https://i.pinimg.com/originals/71/10/60/711060f911346b61787c886b7cf6db7b.jpg"}}
                                              style={{width:300, height:350, borderRadius:20, marginTop:10}}
                                            />
                                          </View>
                                          <View style={{marginTop:10, flexDirection:'row', marginBottom:17}}>
                                            <EvilIcons name="comment" size={20} color="#657786"/>
                                            <Text style={{color:'#657786',marginTop:-2}}>
                                              149
                                            </Text>
                                            <Text style={{marginLeft:40, color:'#657786'}}>
                                              <EvilIcons name="retweet" size={23} color="#657786" marginLeft="40"/>
                                            </Text>
                                            <Text style={{color:'#657786', marginTop:-1}}>
                                              49
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40}}>
                                              <AntDesign name="hearto" size={14} color="#657786"/> 9
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40, marginTop:2}}>
                                              <EvilIcons name="share-google" size={20} color="#657786"/>
                                            </Text>
                                          </View>
                                        </View> 
                                  </View>
                          </View>
                          <View style={style.content}>
                                    <View style={style.content_container}>
                                      <Image 
                                        source={{uri:'https://i.pinimg.com/originals/3b/b5/2f/3bb52fd1930101f71ad1ef30bbd37aa0.jpg'}}
                                        style={{width:40, height:40, borderRadius:50, marginRight:5}}/>
                                        <View style={{marginLeft:10}}>
                                          <Text style={{fontWeight:'bold', color:"#14171A", fontSize:16}}>Ngopikuy
                                            <Text style={{fontSize:13, color:"#657786", fontWeight:'normal'}}> @siningopikuy
                                              <Entypo name="dot-single" size={10} color="#657786"/> 40 menit
                                                <View style={{paddingLeft:100}}>
                                                  <Entypo name="dots-three-vertical" size={11} color="#657786"/>
                                                </View>
                                            </Text>
                                          </Text>
                                          <View style={{flexDirection:'column'}}>
                                            <Text style={{maxWidth:280, color:'#14171A'}}>Ariefdsgn<Text style={{color:"#1DA1F2"}}>Dimana bumi di pijak, Di situ Kopi Disentuh</Text>
                                            </Text>
                                          </View>
                                          <View>
                                            <Image
                                              source={{uri:"https://i.pinimg.com/originals/11/29/8c/11298cc4733bf4dd804514ce994528f7.jpg"}}
                                              style={{width:300, height:350, borderRadius:20, marginTop:10}}
                                            />
                                          </View>
                                          <View style={{marginTop:10, flexDirection:'row', marginBottom:17}}>
                                            <EvilIcons name="comment" size={20} color="#657786"/>
                                            <Text style={{color:'#657786',marginTop:-2}}>
                                              49
                                            </Text>
                                            <Text style={{marginLeft:40, color:'#657786'}}>
                                              <EvilIcons name="retweet" size={23} color="#657786" marginLeft="40"/>
                                            </Text>
                                            <Text style={{color:'#657786', marginTop:-1}}>
                                              42
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40}}>
                                              <AntDesign name="hearto" size={14} color="#657786"/> 1
                                            </Text>
                                            <Text style={{color:'#657786', marginLeft:40, marginTop:2}}>
                                              <EvilIcons name="share-google" size={20} color="#657786"/>
                                            </Text>
                                          </View>
                                        </View> 
                                  </View>
                          </View>
        </View>
        </ScrollView>
        <View style={{}}>
              <View style={style.bottom_nav}>
                <View style={style.bottom_nav_icon}>
                  <View style={style.bottom_nav_iconHome}>
                    <Feather name="home" size={26} color="#14171A"/>
                  </View>
                  <View style={style.bottom_nav_iconSearch}>
                    <AntDesign name="search1" size={26} color="#14171A"/>
                  </View>
                  <View style={style.bottom_nav_iconNotif}>
                    <Ionicons name="notifications-outline" size={26} color="#14171A"/>
                  </View>
                  <View style={style.bottom_nav_iconMail}>
                    <AntDesign name="mail" size={26} color="#14171A"/>
                  </View>
                </View>
              </View>
          </View>
     
    </SafeAreaView>
     );
  }
}

const style = StyleSheet.create({
  top_nav:{
    marginTop:10,
    flexDirection:'row', 
    borderBottomWidth:1, 
    borderBottomColor:'#E1E8ED'
  },
  top_nav_icon:{
    marginHorizontal:20, 
    flexDirection:'row', 
    marginBottom:8
  },
  top_nav_iconImage:{
    marginTop:5
  },
  top_nav_iconTwitter:{
    paddingLeft:130, 
    marginTop:7
  },
  top_nav_iconStar:{
    paddingLeft:140, 
    marginTop:6
  },
  content:{
    marginTop:10, 
    flexDirection:'row', 
    borderBottomWidth:1, 
    borderBottomColor:'#E1E8ED',
  },
  content_container:{
    flexDirection:'row', 
    marginHorizontal:20
  },
  content_container_iconAction:{
    marginTop:10, 
    flexDirection:'row', 
    marginBottom:12
  },
  bottom_nav:{
    flexDirection:'row',
    borderTopWidth:1,
    borderTopColor:'#E1E8ED'
  },
  bottom_nav_icon:{
    marginHorizontal:37,
    flexDirection:'row', 
    marginBottom:10,
    marginTop:4
  },
  bottom_nav_iconHome:{
    marginTop:5,
  },
  bottom_nav_iconSearch:{
    marginTop:5,
    marginLeft:70
  },
  bottom_nav_iconNotif:{
    marginTop:5,
    marginLeft:70
  },
  bottom_nav_iconMail:{
    marginTop:5,
    marginLeft:70
  }
})

export default App;