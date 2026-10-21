import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  educationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm + 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  educationInfo: {
    flex: 1,
    paddingRight: spacing.md,
  },
  itemTitle: {
    color: colors.textLight,
    fontSize: fonts.sizeBody,
    fontWeight: fonts.weightBold,
  },
  itemMeta: {
    color: colors.textMuted,
    fontSize: fonts.sizeSmall,
    marginTop: 2,
  },
  period: {
    color: colors.primary,
    fontSize: fonts.sizeSmall,
  },
  groupTitle: {
    color: colors.textMuted,
    fontSize: fonts.sizeTiny + 1,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginTop: spacing.sm,
    marginBottom: spacing.sm,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  step: {
    flexDirection: 'row',
  },
  stepNumber: {
    fontFamily: fonts.display,
    fontSize: 22,
    color: colors.primary,
    width: 34,
    paddingTop: 8,
  },
  rail: {
    alignItems: 'center',
    width: 44,
    marginRight: spacing.md,
  },
  line: {
    flex: 1,
    width: 1,
    backgroundColor: colors.primaryDark,
    marginVertical: spacing.xs,
  },
  stepBody: {
    flex: 1,
    paddingBottom: spacing.lg,
  },
  stepTitle: {
    color: colors.primary,
    fontSize: fonts.sizeSmall + 1,
    fontWeight: fonts.weightBold,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: 2,
  },
  quote: {
    borderRadius: radius.md,
    padding: spacing.lg,
    marginVertical: spacing.md,
    overflow: 'hidden',
  },
  quoteMark: {
    fontFamily: fonts.display,
    fontSize: 56,
    lineHeight: 56,
    color: colors.textLight,
  },
  quoteText: {
    color: colors.textLight,
    fontSize: fonts.sizeSubtitle + 2,
    lineHeight: 26,
    marginBottom: spacing.md,
  },
  signature: {
    fontFamily: fonts.script,
    fontStyle: 'italic',
    fontSize: 26,
    color: colors.textLight,
  },
});
