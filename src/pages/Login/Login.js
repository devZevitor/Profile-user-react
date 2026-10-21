import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { VALID_PASSWORD, VALID_USER } from '../../config/credentials';
import { profile } from '../../data/profile';
import { globalStyles } from '../../styles/global';
import { styles } from './Login.styles';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin() {
    if (!user.trim()) return setError('Informe o usuário.');
    if (!password) return setError('Informe a senha.');
    if (user.trim() !== VALID_USER || password !== VALID_PASSWORD) {
      return setError('Usuário ou senha inválidos.');
    }
    handleClear();
    navigation.replace('Home');
  }

  function handleClear() {
    setUser('');
    setPassword('');
    setError('');
  }

  return (
    <ScrollView
      style={globalStyles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Image source={profile.photo} style={styles.avatar} />
        <Text style={styles.logo}>{profile.appName.toUpperCase()}</Text>
        <Text style={styles.role}>
          {profile.nickname} · {profile.role}
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Login</Text>
        <Input
          label="Usuário"
          value={user}
          onChangeText={setUser}
          placeholder="Digite seu usuário"
        />
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
        />
        {error !== '' && <Text style={globalStyles.errorText}>{error}</Text>}
        <Button title="Entrar" onPress={handleLogin} />
        <Button title="Limpar" onPress={handleClear} variant="outline" />
      </View>

      <Text style={[globalStyles.mutedText, styles.hint]}>
        Login simulado, sem persistência de dados.
      </Text>
    </ScrollView>
  );
}
