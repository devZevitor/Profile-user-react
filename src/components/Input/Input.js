import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { colors } from '../../styles/colors';
import { styles } from './Input.styles';

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={hidden}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setHidden((current) => !current)}>
            <Text style={styles.toggle}>{hidden ? 'Mostrar' : 'Ocultar'}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
