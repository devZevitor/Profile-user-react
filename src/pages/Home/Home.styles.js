import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { MAX_WIDTH, spacing } from '../../styles/global';

export const styles = StyleSheet.create({
  hero: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
  },
  bigWord: {
    textAlign: 'center',
    fontFamily: fonts.display,
    fontSize: 72,
    color: colors.primary,
    letterSpacing: 2,
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },
  photoBox: {
    width: '86%',
    aspectRatio: 1,
    alignSelf: 'flex-end',
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(70, 0, 8, 0.5)',
  },
  heroContent: {
    marginTop: -110,
    paddingHorizontal: spacing.lg,
  },
  hello: {
    fontFamily: fonts.script,
    fontStyle: 'italic',
    fontSize: 22,
    color: colors.textLight,
  },
  name: {
    fontFamily: fonts.display,
    fontSize: 64,
    lineHeight: 66,
    color: colors.textLight,
    letterSpacing: 1,
  },
  role: {
    color: colors.primary,
    fontSize: fonts.sizeSmall + 1,
    fontWeight: fonts.weightBold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginVertical: spacing.sm,
  },
  heroText: {
    color: colors.textSoft,
    fontSize: fonts.sizeBody,
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  stat: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },
  statValue: {
    fontFamily: fonts.display,
    fontSize: 32,
    color: colors.primary,
    lineHeight: 34,
  },
  statLabel: {
    color: colors.textMuted,
    fontSize: fonts.sizeTiny,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  body: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    padding: spacing.lg,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  locationText: {
    color: colors.textMuted,
    fontSize: fonts.sizeSmall,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginLeft: spacing.sm,
  },
});
