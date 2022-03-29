import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

const { colors } = theme;

export default StyleSheet.create({
    cardWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 8,
        paddingHorizontal: 4,
        backgroundColor: colors.gray10,
        borderRadius: 10
    },
    header: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '800',
        lineHeight: 30,
    },
    description: {
        color: colors.black,
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 20,
        overflow: 'hidden',
    },
    action: {
        color: colors.primary,
        fontSize: 16,
        lineHeight: 30,
    },
    imageWrapper: {
        width: 100,
        height: 100,
        backgroundColor: colors.gray10,
        borderRadius: 10,
        margin: 5,
    },
    image: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        borderRadius: 10,
    },
    infoWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        width: 250,
        padding: 10
    }
});
