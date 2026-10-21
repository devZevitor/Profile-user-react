import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: spacing.md - 4,
    paddingHorizontal: spacing.md,
  },
  side: {
    width: 110,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideRight: {
    justifyContent: 'flex-end',
    gap: spacing.md,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.textLight,
    fontFamily: fonts.display,
    fontSize: fonts.sizeTitle - 6,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  action: {
    color: colors.primary,
    fontSize: fonts.sizeSmall,
    fontWeight: fonts.weightBold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});
