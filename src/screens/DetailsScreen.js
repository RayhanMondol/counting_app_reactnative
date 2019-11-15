import React,{Component} from 'react';
import { View, Text,StyleSheet,Image,Button } from 'react-native';
export default class DetailsScreen extends Component{
  static navigationOptions = {
    title:"Recipe detail"
  }
  homeGO = ()=>{
    const {navigation} = this.props;
    navigation.navigate('Home');
}
     render(){
       const { navigation } = this.props;
       const item = navigation.getParam('item',{});
      return (
           <View >
              <Image resizeMode="cover"  style={styles.img}  source={{uri:item.recipe_img_url}} />
              <View style={{backgroundColor:'#1E1E1E',marginLeft:8,marginRight:13}}>
               <Text style={styles.name}>{item.recipe_name}</Text>
              </View>
              <View  style={styles.desc}>
              <Text>{item.desc}</Text>
              </View>
              <View style={styles.button} >
            <Button onPress={this.homeGO}   title={"Back to Home"}/>
            </View>
        </View>
           
      );
     }
 
}



const styles = StyleSheet.create({
  name:{
    fontSize:20,
    marginLeft:13,
    
    color:'white'
  },  
  desc:{
    overflow:'hidden',
    marginTop:10,
    margin:8
  },
  button:{
    marginTop:25,
    overflow:'hidden',
    backgroundColor:'#FF0000',
    margin:8
  },
  img: {
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  height:250,
  width:300,
  marginTop:20,
  marginLeft:8,
  color:'white',
  backgroundColor:'white',
  marginHorizontal:5,
  // Android
  elevation: 5
  }
})