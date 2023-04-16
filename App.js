import React from 'react';
import { StyleSheet,StatusBar, Text, SafeAreaView, Platform } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import History from './src/components/History';
import QuotatiosList from './src/components/QuotationList';
import Quotation from './src/components/QuotationList/Quotation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar 
      backgroundColor='#ea7517' 
      barStyle="dark-content"
      />
      <CurrentPrice/>
      <History/>
      <QuotatiosList/>
      <Quotation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
