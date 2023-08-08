import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView,  ScrollView, Dimensions} from 'react-native';
import FormHeader from './app/components/FormHeader';
import FormSelectorButton from './app/components/FormSelectorButton';
import LoginForm from './app/components/LoginForm';
import SignUpForm from './app/components/SignUpForm';
import React, { useRef, useState } from 'react';

const {width} = Dimensions.get('window');

export default function App() {
  console.log('Hi');
  const scrollView = useRef();
  // const [hoverChange, setHoverChange] = useState(true);

  return (
    <SafeAreaView style={styles.wrapper} >
      <View style={{flex: 1, paddingTop: 60}} >
        <View style={{height: 80}}>
          <FormHeader leftHeading={'Welcome '} rightHeading={'Back'} subHeading={'Youtube Task Manager'}/>
        </View>

        <View style={{flexDirection:'row', paddingHorizontal: 20,  marginBottom: 10}}>
          <FormSelectorButton onPress={()=>{scrollView.current.scrollTo({x: 0})}} style={styles.borderLeft} backgroundColor={'rgba(27,27,51, 1)'} title={'Login'}/>

          <FormSelectorButton onPress={()=>{scrollView.current.scrollTo({x: width})}} style={styles.borderRight} backgroundColor={'rgba(27,27,51, 0.4)'} title={'Sign Up'}/>
        </View>

        <ScrollView ref={scrollView} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          <ScrollView>
            <LoginForm/>
          </ScrollView>
          <ScrollView>
            <SignUpForm/>
          </ScrollView>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },

  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});
