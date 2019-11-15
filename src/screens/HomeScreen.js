import React,{Component} from 'react';
import { View, Text,FlatList } from 'react-native';
import RecipeItem from '../components/RecipeItem';
const apiData = [
    {
    recipe_id:'1',
    recipe_name:'Chicken Curry',
    desc:'Heat oil in a non-stick pan, add onion paste and sauté till turns golden in colour. Add ginger-garlic paste and sauté for 2-3 minutes. Then add slit green chilies, tomato puree, mix and sauté for 3-4 minutes. Add yogurt and sauté for 2-3 minutes.',
    recipe_img_url:'https://images-gmi-pmc.edge-generalmills.com/3512d6fb-41d3-41e7-a66d-f234a5942b6a.jpg',
    },
    {
    recipe_id:'2',
    recipe_name:'Chal',
    desc:'Heat oil in a non-stick pan, add onion paste and sauté till turns golden in colour. Add ginger-garlic paste and sauté for 2-3 minutes. Then add slit green chilies, tomato puree, mix and sauté for 3-4 minutes. Add yogurt and sauté for 2-3 minutes.',

    recipe_img_url:'https://i.ytimg.com/an_webp/jnxVuygJGYY/mqdefault_6s.webp?du=3000&sqp=CLjttO4F&rs=AOn4CLAVTeCLvSBl0ugrB7prKkwoUNLrdQ',
    },
    {
        recipe_id:'3',
        recipe_name:'Dal',
        desc:'Heat oil in a non-stick pan, add onion paste and sauté till turns golden in colour. Add ginger-garlic paste and sauté for 2-3 minutes. Then add slit green chilies, tomato puree, mix and sauté for 3-4 minutes. Add yogurt and sauté for 2-3 minutes.',

        recipe_img_url:'https://i.ytimg.com/an_webp/kzVcz8X_waw/mqdefault_6s.webp?du=3000&sqp=CJj8tO4F&rs=AOn4CLClea_eKhqJteIjl7kyfxgQx6nBeQ',
    },
    {
        recipe_id:'4',
        recipe_name:'Gom',
        desc:'Heat oil in a non-stick pan, add onion paste and sauté till turns golden in colour. Add ginger-garlic paste and sauté for 2-3 minutes. Then add slit green chilies, tomato puree, mix and sauté for 3-4 minutes. Add yogurt and sauté for 2-3 minutes.',
        recipe_img_url:'https://i.ytimg.com/an_webp/ss2u2zVB9mg/mqdefault_6s.webp?du=3000&sqp=CJj_tO4F&rs=AOn4CLATOCHVakm6yBTTZECKEkzYf5NHFg',
    },
    {
        recipe_id:'5',
        recipe_name:'Muri',
        desc:'Heat oil in a non-stick pan, add onion paste and sauté till turns golden in colour. Add ginger-garlic paste and sauté for 2-3 minutes. Then add slit green chilies, tomato puree, mix and sauté for 3-4 minutes. Add yogurt and sauté for 2-3 minutes.',
        recipe_img_url:'https://i.ytimg.com/an_webp/Zgcz1XZWCX4/mqdefault_6s.webp?du=3000&sqp=CP7ttO4F&rs=AOn4CLAFxhSqp--lWjWpZczvBG2Q3BZz6w',
    },
    {
        recipe_id:'6',
        recipe_name:'Ruti',
        desc:'Heat oil in a non-stick pan, add onion paste and sauté till turns golden in colour. Add ginger-garlic paste and sauté for 2-3 minutes. Then add slit green chilies, tomato puree, mix and sauté for 3-4 minutes. Add yogurt and sauté for 2-3 minutes.',
        recipe_img_url:'https://i.ytimg.com/an_webp/OQWCirmPotc/mqdefault_6s.webp?du=3000&sqp=CLedte4F&rs=AOn4CLA5EEmhXiulTFGkPiudLAlBru7NGg',
    },
    {
        recipe_id:'7',
        recipe_name:'mula',
        desc:'Heat oil in a non-stick pan, add onion paste and sauté till turns golden in colour. Add ginger-garlic paste and sauté for 2-3 minutes. Then add slit green chilies, tomato puree, mix and sauté for 3-4 minutes. Add yogurt and sauté for 2-3 minutes.',
        recipe_img_url:'https://i.ytimg.com/an_webp/bFDUQDPY2LM/mqdefault_6s.webp?du=3000&sqp=CNKLte4F&rs=AOn4CLCfJOwaB7g71nX1OlvnW3h68z2LuQ',
    },
    {
        recipe_id:'8',
        recipe_name:'Vandi',
        desc:'Heat oil in a non-stick pan, add onion paste and sauté till turns golden in colour. Add ginger-garlic paste and sauté for 2-3 minutes. Then add slit green chilies, tomato puree, mix and sauté for 3-4 minutes. Add yogurt and sauté for 2-3 minutes.',
        recipe_img_url:'https://i.ytimg.com/an_webp/f3X2HmGesvI/mqdefault_6s.webp?du=3000&sqp=CNzptO4F&rs=AOn4CLADTEuVzkM938ReLKJLQtZHZM-NcA',
    }
];
export default class HomeScreen extends Component{
     static navigationOptions = {
       title:"Home Screen"
     }
     recipeItem =  ({ item,index }) => {
         const {navigation} = this.props;
        return <RecipeItem  navigation={navigation} item={item} />
    }
     render(){
      return (
        <View>
        <FlatList 
        data={apiData}
        renderItem={this.recipeItem}
        keyExtractor={item => item.recipe_id}
        contentContainerStyle={{marginTop:15,marginBottom:50}}
        />
        </View>
      );
     }
 
}