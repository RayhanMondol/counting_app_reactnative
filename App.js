import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import Header from './Components/Header'
export default class App extends Component{
     constructor(props){
       super(props);
       this.state = {
        HeaderTitle:'React Native Classroom',
        Count:0
       }
     }

     render(){
       const {HeaderTitle,Count} = this.state;
      return (
        <View style={{backgroundColor:'#4285F4',height:'100%'}}>
          
          <View style={{backgroundColor:'#FBBD05',height:80,display:'flex'}}>
            <Text style={{flex:1,marginTop:28,color:'#1E1E1E',fontSize:25,fontWeight:'bold',textAlign:'center'}}>{HeaderTitle}</Text>
          </View>
          <View  style={{marginTop:30,width:'50%',marginLeft:'25%'}}><Button 
           onPress={()=>{
             if(Count>=10){
               alert("Your counting is too much long")
               return false;
             }
            this.setState({
             Count:Count+1
            })}}
           title="Press me" color="#202B6D"  /></View>
          <View>
            <Text style={{textAlign:'center',marginTop:40,color:'white',fontWeight:'bold',fontSize:25}}>Counting : ( {Count} )</Text>
          </View>

          <View  style={{marginTop:90,width:'50%',marginLeft:'25%'}}><Button 
           onPress={()=>{
            this.setState({
             Count:0
            })}}
           title="Reset" color="#DC4D41"  />
           </View>
        </View>
      );
     }
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#673BB7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});