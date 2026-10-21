import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: colors.primary,
    marginBottom: spacing.md,
  },
  logo: {
    fontFamily: fonts.display,
    fontSize: 64,
    color: colors.primary,
    letterSpacing: 3,
    lineHeight: 68,
  },
  role: {
    color: colors.textMuted,
    fontSize: fonts.sizeSmall,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  hint: {
    textAlign: 'center',
  },
});
