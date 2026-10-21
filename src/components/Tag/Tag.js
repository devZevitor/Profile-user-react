import { Text, View } from 'react-native';
import { styles } from './Tag.styles';

export default function Tag({ label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}
