import React,{useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator

} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const Addnewpost = () =>{
    const [title,settitle] = useState("")
    const [description,setDescription] = useState("")
    const [visible,setVisible] = useState(false)
    const navigation=useNavigation()
    
    const storeUser = async () => {
        const newData=[{
            title:title,
            description:description }  
        ]
        setVisible(true)
        try {
          await AsyncStorage.setItem("data", JSON.stringify(newData));
          getUser()
          setVisible(false)
          navigation.goBack()
        } catch (error) {
          console.log(error);
        }
      };
      const getUser = async () => {
        try {
          const userData = JSON.parse(await AsyncStorage.getItem("data"))
          console.log("29==>",userData)
        } catch (error) {
         console.log(error); 
        }
      };
    return(
        <View style={{
            flex:1,
            marginHorizontal:20,
           marginTop:40

        }}>
            {visible?<ActivityIndicator/>:null}
            <TextInput 
            placeholder="Enter Post Title"
            onChangeText={(txt)=>settitle(txt)}
            style={{
                borderWidth:1,

            }}

            />
            <TextInput 
            placeholder="Enter Post Description"
            onChangeText={(txt)=>setDescription(txt)}
style={{
                borderWidth:1,
                marginTop:20
                
            }}
            />
            <TouchableOpacity style={{
                alignItems:'center',
                marginTop:20
            }}
            onPress={()=>{
                storeUser()
            }}
            
            >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}
export default Addnewpost