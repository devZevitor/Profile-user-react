import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  thumb: {
    height: 170,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: spacing.sm + 4,
  },
  thumbLight: {
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    fontFamily: fonts.display,
    fontSize: 38,
    color: colors.primaryDark,
    letterSpacing: 2,
    textTransform: 'uppercase',
    paddingHorizontal: spacing.md,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  number: {
    fontFamily: fonts.display,
    fontSize: 34,
    color: colors.primary,
    width: 52,
  },
  info: {
    flex: 1,
  },
  name: {
    color: colors.textLight,
    fontSize: fonts.sizeBody + 1,
    fontWeight: fonts.weightBold,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  type: {
    color: colors.textMuted,
    fontSize: fonts.sizeSmall,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  description: {
    color: colors.textSoft,
    fontSize: fonts.sizeBody,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
