import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Button, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

function IdentifyProblem({ navigation }) {
  const navigateToCameraScreen = () => {
    navigation.navigate('Camera');}
  const navigateToGalleryScreen = () => {
    navigation.navigate('Gallery');
  };
 
  function Flashcard({label, imagePath}) {
    return (
      <View style={styles.card}>
        <Text style={styles.label}>{label}</Text>
        <Image source={imagePath} style={styles.image} />
      </View>
    );
  }
  return (
    <ScrollView style={styles.main}>
      <View>
        <Text style={styles.heading}>Heal Your Crop !</Text>
      </View>
      <View style={{backgroundColor: 'peru', height: "auto", marginBottom: "5%", marginTop: "5%", marginLeft: "2%", marginRight: "2%", borderRadius: 10,}}>
        <View style={styles.container}>

        
        <Flashcard style={styles.flash}
        label={'Take a Picture'}
        imagePath={require('../assets/camera.png') }
        >
        </Flashcard>
        <Flashcard style={styles.flash}
        imagePath={require('../assets/bar-chart.png') }
        label={'See Diagnosis'}
        >
        </Flashcard>
        <Flashcard style={styles.flash}
        imagePath={require('../assets/medicine.png') }
        label={'Get Remedy'}
        >
        </Flashcard>        
          
        </View>
        </View>
      <View >
        <TouchableOpacity style={styles.button} onPress={navigateToCameraScreen}>
        
        <Text style={styles.buttonText}>Take a Picture</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText} marginTop={"2%"} marginBottom={"2%"}>OR</Text>
        <TouchableOpacity style={styles.button}  onPress={navigateToGalleryScreen}>
        <Text style={styles.buttonText}>Select From The Gallery</Text>
        </TouchableOpacity>
      {/* <Button title="Take a Picture"  onPress={navigateToAnotherScreen} />  */}
      </View>
      
    
    </ScrollView>
    
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightgray',
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 10,

   },
   heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: "5%",
    marginTop: "2%",
  fontFamily: 'sans-serif'   
},
container : {
  flex: 1,
  flexDirection: 'row',
    width : '100%',
    height : '100%',
    marginBottom : "5%",
    borderRadius : 15,
    
    overflow : 'hidden',
    marginTop: "5%",
   
  },
  card: {
    flex: 1,
    
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 10,
      elevation: 3,
      marginBottom: "2%",
      marginLeft: "2%",
      marginRight: "2%",
      alignItems: 'center',
      
      
  },
  image: {
    flex: 1,
    flexDirection: 'column',
      width: 50,
      height: 40,
      marginBottom: 10,
      resizeMode: 'cover',
      marginTop: "5%",
      
  },
  label: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  button: {
    backgroundColor:'peru',
    padding: 10,
    borderRadius: 5,
    marginLeft: "5%",
    marginRight: "5%",
    borderWidth: 1,
    borderColor: 'black',

  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }

  }
  );
  
  
export default IdentifyProblem;
