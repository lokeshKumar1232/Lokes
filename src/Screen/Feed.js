import React,{useState,useEffect} from "react";
import {View,Text,FlatList,TextInput,TouchableOpacity} from "react-native"
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Feed = () =>{
    
    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])
    const [value,setValue] = useState("")
    const navigation = useNavigation()
    useEffect(()=>{
        apiCall();
    },[])

    const apiCall = () =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res?.data)
            setFilterData(res?.data)
            setData(res?.data)

        })
        .catch((err)=>{
            console.log(err)

        })
    }
    const searchFilterFunction = (text) => {
        if (text) {
          const newData = filterData.filter(
            function (item) {
              const itemData = item.title
                  ? item.title.toUpperCase()
                  : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            }
          );
          setData(newData);
          setValue(text);
        } else {
          setFilterData(data);
          setValue(text);
        }
      };
    const renderItem = ({item}) =>{
        return(
            <View style={{
                marginHorizontal:20,
                marginVertical:10,
                backgroundColor:"#ffffff",
                paddingHorizontal:24,
                paddingVertical:10
            }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'#000000'
                }}>
                    {item.title}
                </Text>
                <Text style={{
                    fontSize:16,
                    color:'#000000'
                }}>
                    {item.body}
                </Text>
            </View>
        )

    }

    return(
        <View style={{
            flex:1
        }}>
            <Text style={{
                alignSelf:'center',
                marginTop:24,
                fontSize:24,
                fontWeight:'bold',
                color:"#000000"
            }}>
                Feed
            </Text>
            <View>
                <TextInput
                placeholder="Enetr title name"
                style={{
                    marginHorizontal:24,
                    borderWidth:1,
                    paddingLeft:24,
                    marginVertical:10
                }}
                onChangeText={(txt)=>searchFilterFunction(txt)}
                />

            </View>
           <FlatList
           data={data}
           renderItem={renderItem}
           />
           <TouchableOpacity 
           style={{
            alignItems:'center',
            marginVertical:10
           }}
           onPress={()=>{
            navigation.navigate("Addnewpost")
           }}
           >
            <Text>
                Add New Post
            </Text>
           </TouchableOpacity>
           
          
        </View>
    )
}
export default Feed