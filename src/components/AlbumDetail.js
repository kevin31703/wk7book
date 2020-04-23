 
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const AlbumDetail = () => {
  return (
   <ScrollView style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
        <View style={styles.imageboxStyle}>
            <View style={styles.imageoutlineStyle}>
         <Image
         style={styles.imageStyle}
         source={{
            uri:
               "https://github.com/kevin31703/inspic/blob/master/image/drawable-xxxhdpi/img_the_immortalists.png?raw=true",
         }}
           />
            </View>
         </View>
        <View style={styles.maintitlebox}>
          <Text style={styles.maintitleStyle}>The Immortalists</Text>
          <Text style={styles.titleStyle}>Chloe Benjamin</Text>
          <Text style={styles.articleStyle}>If you were told the date of your death, how would it shape your…</Text>
              <View style={styles.lineStyle}>
                <Text style={styles.linedownStyle}></Text>
              </View>
              <View style={styles.lineStyle2}>
                <Text style={styles.lineupStyle}></Text>
              </View>
              <Text style={styles.buttomtextStyle}>50% completed</Text>
        </View>
      </View>

      <View style={styles.cardSectionStyle}>
      <View style={styles.imageboxStyle}>
        <View style={styles.imageoutlineStyle}>
          <Image
          style={styles.imageStyle}
          source={{
              uri:
                "https://github.com/kevin31703/inspic/blob/master/image/drawable-xxxhdpi/img_gristmillroad.png?raw=true",
          }}
            />
              </View>
         </View>
         <View style={styles.maintitlebox}>
          <Text style={styles.maintitleStyle}>Grist Mill Road</Text>
          <Text style={styles.titleStyle}>Christopher J.</Text>
          <Text style={styles.articleStyle}>Twenty-six years ago Hannah had her eye shot out. Now she wants…</Text>
              <View style={styles.lineStyle}>
                <Text style={styles.linedownStyle}></Text>
              </View>
              <Image
          style={styles.startStyle}
          source={{
              uri:
                "https://github.com/kevin31703/inspic/blob/master/image/drawable-hdpi/btn_start_read_pressed.png?raw=true",
          }}
            />
        </View>
      </View>

      <View style={styles.cardSectionStyle}>
      <View style={styles.imageboxStyle}>
      <View style={styles.imageoutlineStyle}>
          <Image
          style={styles.imageStyle}
          source={{
              uri:
              "https://github.com/kevin31703/inspic/blob/master/image/drawable-xxxhdpi/img_streetartactivitybook.png?raw=true",
          }}
            />
              </View>
       </View>
       <View style={styles.maintitlebox}>
          <Text style={styles.maintitleStyle}>Street Art Activity Book</Text>
          <Text style={styles.titleStyle}>Mitchell Beazley</Text>
          <Text style={styles.articleStyle}>Street art is colorful, vibrant, diverse and exciting.Now, you can create…</Text>
              <View style={styles.lineStyle}>
                <Text style={styles.linedownStyle}></Text>
              </View>
              <View style={styles.lineStyle2}>
                <Text style={styles.lineupStyle2}></Text>
              </View>
              <Text style={styles.buttomtextStyle}>70% completed</Text>
        </View>
      </View>

      <View style={styles.cardSectionStyle}>
        <View style={styles.imageboxStyle}>
            <View style={styles.imageoutlineStyle}>
         <Image
         style={styles.imageStyle}
         source={{
            uri:
               "https://github.com/kevin31703/inspic/blob/master/image/drawable-xxxhdpi/img_the_immortalists.png?raw=true",
         }}
           />
            </View>
         </View>
        <View style={styles.maintitlebox}>
          <Text style={styles.maintitleStyle}>The Immortalists</Text>
          <Text style={styles.titleStyle}>Chloe Benjamin</Text>
          <Text style={styles.articleStyle}>If you were told the date of your death, how would it shape your…</Text>
              <View style={styles.lineStyle}>
                <Text style={styles.linedownStyle}></Text>
              </View>
              <View style={styles.lineStyle2}>
                <Text style={styles.lineupStyle}></Text>
              </View>
              <Text style={styles.buttomtextStyle}>50% completed</Text>
        </View>
      </View>

   </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    height:470,
    marginTop:10,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  cardSectionStyle: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1.15,
    flexDirection:"row"
  },
  imageboxStyle:{
    height:180,
    width:160,
    backgroundColor:"#FFFFFF",
    padding:10,
    justifyContent:"center",
    alignContent:"center"
  },
  imageStyle: {
    width:110,
    height:150,
    margin:5
  },
  imageoutlineStyle:{
      height:180,
      width:138,
      marginRight:1,
      backgroundColor:"#FFFFFF",
      justifyContent:"center",
      alignSelf:"center",
      shadowColor:"#000",
      shadowOffset:{width:0, height:2},
      shadowOpacity:0.1,
      shadowRadius:2,
  },
  maintitlebox:{
    height:140,
    left:-18,
    marginTop:10,
    backgroundColor:"#FFFFFF"
  },
  maintitleStyle:{
    fontSize:18,
    fontWeight:"600",
    marginTop:8,
  },
  titleStyle:{
    color:"#666666",
    marginTop:3,
    fontSize:14,
    fontWeight:"500"
  },
  articleStyle:{
    width:180,
    height:45,
    marginTop:8,
    fontSize:12,
    color:"#AAAAAA",
  },
  linedownStyle:{
    height:4,
    width:180,
    borderRadius:2,
    marginTop:8,
    borderWidth:2,
    borderColor:"#666666",
  },
  lineupStyle:{
    height:4,
    width:95,
    borderRadius:2,
    marginTop:8,
    borderWidth:2,
    borderColor:"#00b49f"
  },
  lineStyle:{
    marginBottom:-12
  },
  buttomtextStyle:{
    width:180,
    height:40,
    marginTop:13,
    fontSize:12,
    color:"#AAAAAA",
  },
  lineupStyle2:{
    height:4,
    width:120,
    borderRadius:2,
    marginTop:8,
    borderWidth:2,
    borderColor:"#00b49f"
  },
  startStyle:{
    height:26,
    width:91,
    borderRadius:6,
    marginTop:20
  }
});

export default AlbumDetail;