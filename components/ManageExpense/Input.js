import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, invalid, style, textInputConfig }) {

    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    if (invalid)
 {
    inputStyles.push(styles.invalidInput);
 }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontFamily: 'Barlow_400Regular',
        fontSize: 12,
        color: GlobalStyles.colors.primary50,
        marginBottom: 4
    },
    input: {
        fontFamily: 'Barlow_400Regular',
        backgroundColor:GlobalStyles.colors.primary50,
        color: GlobalStyles.colors.primary700,
        padding:6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel: {
        fontFamily: 'Barlow_400Regular',
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        fontFamily: 'Barlow_400Regular',
        backgroundColor: GlobalStyles.colors.error50
    }
});
