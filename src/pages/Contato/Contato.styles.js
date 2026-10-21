import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.display,
    fontSize: 52,
    lineHeight: 52,
    color: colors.textLight,
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  accent: {
    color: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  rowText: {
    marginLeft: spacing.md,
    flex: 1,
  },
  rowLabel: {
    color: colors.textMuted,
    fontSize: fonts.sizeTiny,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  rowValue: {
    color: colors.textLight,
    fontSize: fonts.sizeBody + 1,
    marginTop: 2,
  },
  actions: {
    marginTop: spacing.lg,
  },
});
