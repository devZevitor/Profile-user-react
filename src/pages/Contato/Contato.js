import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import Button from '../../components/Button/Button';
import IconCircle from '../../components/IconCircle/IconCircle';
import Toolbar from '../../components/Toolbar/Toolbar';
import { profile } from '../../data/profile';
import { globalStyles } from '../../styles/global';
import { styles } from './Contato.styles';

const shortUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '');

export default function Contato({ navigation }) {
  const { email, phone, linkedin, github, address } = profile.contact;
  const emailUrl = `mailto:${email}`;
  const phoneUrl = `tel:${phone.replace(/\D/g, '')}`;

  const rows = [
    { icon: 'mail-outline', label: 'E-mail', value: email, url: emailUrl },
    { icon: 'logo-linkedin', label: 'LinkedIn', value: shortUrl(linkedin), url: linkedin },
    { icon: 'logo-github', label: 'GitHub', value: shortUrl(github), url: github },
    { icon: 'call-outline', label: 'Telefone', value: phone, url: phoneUrl },
    { icon: 'location-outline', label: 'Endereço', value: address },
  ];

  return (
    <View style={globalStyles.screen}>
      <Toolbar title="Contato" onBack={() => navigation.navigate('Home')} />
      <ScrollView contentContainerStyle={globalStyles.content}>
        <Text style={globalStyles.label}>Contato</Text>
        <Text style={styles.heading}>
          VAMOS TRABALHAR <Text style={styles.accent}>JUNTOS</Text>
        </Text>
        <Text style={globalStyles.text}>
          Estou aberto a novas oportunidades e projetos. Vamos construir algo
          incrível juntos.
        </Text>

        {rows.map(({ icon, label, value, url }) => (
          <Pressable
            key={label}
            style={styles.row}
            disabled={!url}
            onPress={() => Linking.openURL(url)}
          >
            <IconCircle name={icon} />
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>{label}</Text>
              <Text style={styles.rowValue}>{value}</Text>
            </View>
          </Pressable>
        ))}

        <View style={styles.actions}>
          <Button title="Enviar e-mail" onPress={() => Linking.openURL(emailUrl)} />
          <Button title="Ligar" variant="outline" onPress={() => Linking.openURL(phoneUrl)} />
        </View>
      </ScrollView>
    </View>
  );
}
