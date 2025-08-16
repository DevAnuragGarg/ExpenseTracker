import { StatusBar, StyleSheet, View } from 'react-native';
import { RealmProvider } from '@realm/react';
import { Navigation } from './src/navigation/NavigationStack';
import { Expense } from './src/db/models/Expense';

function App() {
  return (
    <RealmProvider schema={[Expense]}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Navigation />
      </View>
    </RealmProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
