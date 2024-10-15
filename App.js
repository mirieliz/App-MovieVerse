import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from './app/welcome';

export default function App() {
  return (
    // <View style={styles.container}>
    <SafeAreaProvider>
      <View className="flex-1 ">
            <StatusBar style="auto" />
            <Welcome />
      </View>
    </SafeAreaProvider>
    
      
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
