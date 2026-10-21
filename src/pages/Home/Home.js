import { Image, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button/Button';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Toolbar from '../../components/Toolbar/Toolbar';
import { profile } from '../../data/profile';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import { styles } from './Home.styles';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.screen}>
      <Toolbar
        title="Home"
        actions={[
          { label: 'Sobre', onPress: () => navigation.navigate('Sobre') },
          { label: 'Contato', onPress: () => navigation.navigate('Contato') },
        ]}
      />
      <ScrollView>
        <View style={styles.hero}>
          <Text style={styles.bigWord} numberOfLines={1} adjustsFontSizeToFit>
            PORTFÓLIO
          </Text>

          <View style={styles.photoBox}>
            <Image source={profile.photo} style={styles.photo} resizeMode="cover" />
            <View style={styles.tint} />
            <LinearGradient
              style={styles.tint}
              colors={['rgba(10,10,10,0)', colors.background]}
              start={{ x: 0.5, y: 0.4 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>

          <View style={styles.heroContent}>
            <Text style={styles.hello}>Bem-vindo! Eu sou</Text>
            <Text style={styles.name}>{profile.nickname.toUpperCase()}</Text>
            <Text style={styles.role}>{profile.role}</Text>
            <Text style={styles.heroText}>{profile.heroDescription}</Text>
            <View style={styles.stats}>
              {profile.stats.map(({ value, label }) => (
                <View key={label} style={styles.stat}>
                  <Text style={styles.statValue}>{value}</Text>
                  <Text style={styles.statLabel}>{label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={16} color={colors.primary} />
            <Text style={styles.locationText}>{profile.location}</Text>
          </View>

          <SectionHeader title="PROJETOS SELECIONADOS" />
          {profile.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}

          <Button
            title="Sair"
            variant="outline"
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
