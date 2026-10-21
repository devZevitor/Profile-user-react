import { Pressable, Text } from 'react-native';
import { styles } from './Button.styles';

export default function Button({ title, onPress, variant = 'primary', style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, variant === 'outline' && styles.textOutline]}>
        {title}
      </Text>
    </Pressable>
  );
}
