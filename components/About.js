import { StyleSheet, Text, View } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Me</Text>
            <Text style={styles.text}>
                I am a beginner React Native developer learning how to build mobile apps.
                I am also a frontend Developer
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
    },
    text: {
        color: "#ddd",
    },
});
