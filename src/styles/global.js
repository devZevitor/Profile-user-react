import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 4,
  md: 8,
  lg: 20,
};

export const MAX_WIDTH = 560;

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
  },
  title: {
    fontFamily: fonts.display,
    fontSize: fonts.sizeTitle,
    color: colors.textLight,
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fonts.sizeSubtitle,
    fontWeight: fonts.weightBold,
    color: colors.textLight,
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: fonts.sizeSmall,
    fontWeight: fonts.weightBold,
    color: colors.primary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  text: {
    fontSize: fonts.sizeBody,
    color: colors.textSoft,
    lineHeight: 21,
    marginBottom: spacing.sm,
  },
  mutedText: {
    fontSize: fonts.sizeSmall,
    color: colors.textMuted,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  errorText: {
    color: colors.error,
    fontSize: fonts.sizeSmall,
    marginBottom: spacing.sm,
  },
});
