import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './Toolbar.styles';

export default function Toolbar({ title, onBack, actions = [] }) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top + 12 }]}>
      <View style={styles.side}>
        {onBack && (
          <Pressable onPress={onBack} hitSlop={10}>
            <Text style={styles.action}>← Home</Text>
          </Pressable>
        )}
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={[styles.side, styles.sideRight]}>
        {actions.map(({ label, onPress }) => (
          <Pressable key={label} onPress={onPress} hitSlop={10}>
            <Text style={styles.action}>{label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
