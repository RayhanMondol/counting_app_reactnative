import React,{ Component } from 'react'
import { Text,View,Image,StyleSheet,Button } from 'react-native'
export default class RecipeItem extends Component{
    recipe_detail = ()=>{
        const {navigation,item} = this.props;
        navigation.navigate('Details',{item});
    }
    render(){
        const {item} = this.props;
        return(
            <View style={{margin:0}}>
              <Image   style={styles.img}  source={{uri:item.recipe_img_url}} />
              <View style={{backgroundColor:'#1E1E1E',marginLeft:8,marginRight:13}}>
               <Text style={styles.name}>{item.recipe_name}</Text>
              </View>
              <View style={{marginLeft:8,marginBottom:8,marginRight:13,marginTop:0}}>
               <Button title={"view details"}    onPress={this.recipe_detail}/>    
              </View>
            </View>
                    
        )
    }
}


const styles = StyleSheet.create({
    name:{
      fontSize:20,
      margin:5,
      color:'white'
    },  
    img:{
        width:300,
        height:205,
        marginBottom:0,
        flex:1,
        marginHorizontal:8
    },
    cart: {
       height:10,
       shadowColor: "#000",
       marginLeft:5,
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
   
    }
})