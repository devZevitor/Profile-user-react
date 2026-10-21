import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import Navigation from './src/navigation/navigation';
import { colors } from './src/styles/colors';

export default function App() {
  const [fontsLoaded] = useFonts({ BebasNeue_400Regular });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.background }} />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Navigation />
    </SafeAreaProvider>
  );
}
