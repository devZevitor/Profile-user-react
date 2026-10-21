import { Image, Linking, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Tag from '../Tag/Tag';
import { colors } from '../../styles/colors';
import { styles } from './ProjectCard.styles';

export default function ProjectCard({ project, index }) {
  return (
    <View style={styles.container}>
      <View style={[styles.thumb, project.image && styles.thumbLight]}>
        {project.image ? (
          <Image source={project.image} style={styles.image} resizeMode="contain" />
        ) : (
          <Text style={styles.placeholder}>{project.name}</Text>
        )}
      </View>

      <View style={styles.row}>
        <Text style={styles.number}>{String(index + 1).padStart(2, '0')}</Text>
        <View style={styles.info}>
          <Text style={styles.name}>{project.name}</Text>
          <Text style={styles.type}>{project.type}</Text>
        </View>
        {project.url && (
          <Pressable onPress={() => Linking.openURL(project.url)} hitSlop={10}>
            <Ionicons name="arrow-forward" size={24} color={colors.primary} />
          </Pressable>
        )}
      </View>

      <Text style={styles.description}>{project.description}</Text>
      <View style={styles.tags}>
        {project.stack.map((item) => (
          <Tag key={item} label={item} />
        ))}
      </View>
    </View>
  );
}
