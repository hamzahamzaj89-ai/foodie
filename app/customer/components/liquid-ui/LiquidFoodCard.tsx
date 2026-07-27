import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";


const { width } = Dimensions.get("window");


export default function LiquidFoodCard() {
  return (
    <View style={styles.card}>

      {/* Liquid border */}
      <View style={styles.border} />


    
    






      {/* Food Image */}

      <View style={styles.imageContainer}>

        <Image
          source={require("@/assets/images/burger.png")}

          style={styles.image}

          contentFit="cover"
        />


        {/* Image dark overlay */}

        


        {/* Rating */}

        <View style={styles.rating}>
          <Text style={styles.ratingText}>
            ⭐ 4.8
          </Text>
        </View>


      </View>


      
{/* Bottom liquid glow */}
   <LinearGradient
          colors={[
            "transparent",
            "rgba(255,255,255,0.02)",
            "rgba(255,255,255,0.08)",
            
            
          ]}
          style={StyleSheet.absoluteFillObject}
        />



      {/* Content */}

      <View style={styles.content}>

        <Text style={styles.title}>
          Zinger Burger
        </Text>

            <View className="flex flex-row justify-center">
                 <Text style={styles.description} className="font-semibold">
                       From $14.99
          </Text>
            </View>
    

        <View style={styles.bottom}>

          <Text style={styles.price}>
           
          </Text>


  <View className="flex flex-1 flex-row justify-center">
    
          <Pressable className=" px-8 " style={styles.button}>
            <Text className="font-bold" style={styles.plus}>
            Add to Cart  +
            </Text>
          </Pressable>

  </View>

        </View>


      </View>



    </View>
  );
}





const styles = StyleSheet.create({

card:{


  width:165,
  height:280,

  backgroundColor:"black",

  borderRadius:15,


  overflow:"hidden",

  shadowColor:"#000",

 

  shadowOpacity:.55,

  shadowRadius:60,

  elevation:20,

},



border:{


position:"absolute",

inset:0,


borderRadius:25,




borderColor:"rgba(255,255,255,.18)"


},



refraction:{


position:"absolute",

left:10,

right:10,

top:12,

height:170,


borderRadius:20,


overflow:"hidden",


opacity:.15,


},



refractionImage:{


width:"100%",

height:"100%",


transform:[
{
scale:1.2
}
],


opacity:.4,


filter:"blur(10px)"


},




highlight:{


position:"absolute",

inset:0,




},




imageContainer:{


height:150,

padding: 8,
borderRadius:22,


overflow:"hidden",

},



image:{


width:"100%",

height:"100%",
backgroundColor: "transparent",

borderRadius:20,


},




imageGradient:{


position:"absolute",

inset:0,


},



rating:{


position:"absolute",


right:12,

top:12,


paddingHorizontal:12,

paddingVertical:7,


borderRadius:999,


backgroundColor:"rgba(0,0,0,.35)",


borderWidth:1,


borderColor:"rgba(255,255,255,.05)",



},




ratingText:{


color:"#fff",

fontSize:13,


},




content:{


marginTop:5,
  paddingLeft:10,
  paddingRight: 10



},




title:{


fontSize:22,


fontWeight:"700",

color:"#fff",


},




description:{


marginTop:6,


fontSize:14,


lineHeight:22,


color:"#A5ABB8",


},



bottom:{


marginTop:10,
 paddingBottom: 2,

flexDirection:"row",


justifyContent:"space-between",


alignItems:"center",


},



price:{


fontSize:28,


fontWeight:"800",


color:"#fff",


},

bottomGlow:{


position:"absolute",

left:0,

right:0,

bottom:0,

height:140,


borderRadius:25,


},




button:{





height:45,


borderRadius:14,


backgroundColor:"#FF8A2B",


alignItems:"center",

justifyContent:"center",



shadowColor:"#FF8A2B",

padding: 5,

shadowOpacity:.25,

shadowRadius:20,


},



plus:{





},


});