import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { styles } from './IconCircle.styles';

export default function IconCircle({ name, size = 44 }) {
  return (
    <View
      style={[
        styles.circle,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Ionicons name={name} size={size * 0.45} color={colors.primary} />
    </View>
  );
}
