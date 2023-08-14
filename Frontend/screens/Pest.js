import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WhiteHorizontalLine from './components/WhiteHorizontalLine';

function Pest({ navigation }) {
  const navigateToLeafScreen = () => {
    navigation.navigate('LeafRust');}
  const navigateToLooseScreen = () => {
    navigation.navigate('LooseSmut');
  };
  const navigateToRootScreen = () => {
    navigation.navigate('RootRot');
  };
  const navigateToSeptoriaScreen = () => {
    navigation.navigate('Septoria');
  };
  const navigateToStripeScreen = () => {
    navigation.navigate('StripeRust');
  };
  
  
function Flashcard({label, imagePath}) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Image source={imagePath} style={styles.image} />
    </View>
  );
};

return(
<ScrollView>
  <View>
    <TouchableOpacity style={styles.button} onPress={navigateToLeafScreen} >
    <Flashcard
      label={'Leaf Rust'}
      imagePath={require('../assets/leafrust.png') }
      
      >
      
      </Flashcard>
      <View>
      <WhiteHorizontalLine/>
        <Text style={styles.text}>Cause: Puccinia Triticina Fungus</Text>
      </View>
    </TouchableOpacity>
    {/* <Button title="Go to New Screen" onPress={navigateToNewScreen} /> */}
    <TouchableOpacity style={styles.button} onPress={navigateToStripeScreen} >
    <Flashcard
      label={'Stripe Rust'}
      imagePath={require('../assets/wheat.png') }
      >
      </Flashcard>
      <View>
      <WhiteHorizontalLine/>
        <Text style={styles.text}>Cause: Puccinia Striiformis f.sp.Tritci </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={navigateToSeptoriaScreen} >
    <Flashcard
      label={'Septoria'}
      imagePath={require('../assets/septoria.png') }
      >
      </Flashcard>
      <View>
      <WhiteHorizontalLine/>
        <Text style={styles.text}>Cause: Septoria Lycopercisi Fungus</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={navigateToLooseScreen} >
    <Flashcard
      label={'Loose Smut'}
      imagePath={require('../assets/loose.png') }
      >
      </Flashcard>
      <View>
      <WhiteHorizontalLine/>
        <Text style={styles.text}>Cause: Ustilago Tritci</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={navigateToRootScreen} >
    <Flashcard
      label={'Root Rot'}
      imagePath={require('../assets/root.png') }
      >
      </Flashcard>
      <View>
      <WhiteHorizontalLine/>
        <Text style={styles.text}>Cause: Overwatering, Soil Fungi</Text>
      </View>
    </TouchableOpacity>
  </View>
</ScrollView>
)
    // <ScrollView style={styles.main}>
    // <View>
    //   <Flashcard
    //   label={'Leaf Rust'}
    //   imagePath={require('../assets/leafrust.png') }
    //   >
    //   <View style={styles.line}></View>
      
    //   </Flashcard>
    // </View>
    // <View>
    // <TouchableOpacity style={styles.button} onPress={navigateToAnotherScreen}>
    //   <Text style={styles.buttonText}>Take a Picture</Text>
    // </TouchableOpacity>
    // </View>
    // </ScrollView>
    

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightgray',
    // marginTop: "5",
    // marginLeft: 15,
    // marginRight: 15,
    // borderRadius: 10,

   },
   card: {
    flex: 1,
    flexDirection: 'row',
      backgroundColor: 'peru',
      marginTop: "5%",
      marginBottom: "5%",
  },
  image: {
      width: "25%",
      height: "100%",
      // marginBottom: "5%",
      resizeMode: 'cover',
      marginRight: "auto",
      marginBottom: "5%"
  },
  label: {
    flex: 1,
      fontSize: 40,
      color: 'white',      
  },
  line: {
    height: 1,
    backgroundColor: 'black',
  },
  button: {
    backgroundColor:'peru',
    padding: 10,
    borderRadius: 5,
    marginLeft: "2%",
    marginRight: "2%",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    marginTop: "2%"
    },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginTop: "auto",
    color:'white',
    fontSize: 15,

  }
  })
export default Pest;