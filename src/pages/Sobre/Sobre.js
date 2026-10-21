import { ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import IconCircle from '../../components/IconCircle/IconCircle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Tag from '../../components/Tag/Tag';
import Toolbar from '../../components/Toolbar/Toolbar';
import { profile } from '../../data/profile';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import { styles } from './Sobre.styles';

export default function Sobre({ navigation }) {
  return (
    <View style={globalStyles.screen}>
      <Toolbar title="Sobre" onBack={() => navigation.navigate('Home')} />
      <ScrollView contentContainerStyle={globalStyles.content}>
        <Text style={globalStyles.label}>Sobre</Text>
        <Text style={globalStyles.title}>{profile.name.toUpperCase()}</Text>
        <Text style={globalStyles.text}>{profile.summary}</Text>

        <SectionHeader title="FORMAÇÃO" />
        {profile.education.map((item) => (
          <View key={item.title} style={styles.educationItem}>
            <View style={styles.educationInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemMeta}>{item.place}</Text>
            </View>
            <Text style={styles.period}>{item.period}</Text>
          </View>
        ))}

        <SectionHeader title="HABILIDADES" />
        {profile.stack.map((group) => (
          <View key={group.group}>
            <Text style={styles.groupTitle}>{group.group}</Text>
            <View style={styles.tags}>
              {group.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </View>
          </View>
        ))}

        <SectionHeader title="EXPERIÊNCIA" />
        {profile.experience.map((item, index) => (
          <View key={item.title} style={styles.step}>
            <Text style={styles.stepNumber}>
              {String(index + 1).padStart(2, '0')}
            </Text>
            <View style={styles.rail}>
              <IconCircle name={item.icon} />
              {index < profile.experience.length - 1 && (
                <View style={styles.line} />
              )}
            </View>
            <View style={styles.stepBody}>
              <Text style={styles.stepTitle}>{item.title}</Text>
              <Text style={styles.itemMeta}>
                {item.place} · {item.period}
              </Text>
              <Text style={[globalStyles.text, { marginTop: 6 }]}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}

        <LinearGradient
          colors={[colors.primaryDark, '#1A0306']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.quote}
        >
          <Text style={styles.quoteMark}>“</Text>
          <Text style={styles.quoteText}>{profile.quote}</Text>
          <Text style={styles.signature}>{profile.nickname}</Text>
        </LinearGradient>

        <SectionHeader title="IDIOMAS E CURSOS" />
        {[...profile.languages, ...profile.courses].map((item) => (
          <Text key={item} style={globalStyles.text}>
            {item}
          </Text>
        ))}

        <SectionHeader title="OBJETIVOS" />
        <Text style={globalStyles.text}>{profile.goals}</Text>

        <Text style={[globalStyles.mutedText, { marginTop: 16 }]}>Versão: 1.0</Text>
      </ScrollView>
    </View>
  );
}
