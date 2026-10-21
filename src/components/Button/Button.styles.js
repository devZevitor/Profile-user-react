import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
    borderWidth: 1,
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.primary,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: colors.textLight,
    fontSize: fonts.sizeSmall + 1,
    fontWeight: fonts.weightBold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  textOutline: {
    color: colors.primary,
  },
});
