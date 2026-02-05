import { StyleSheet, Text, View } from "react-native";

export default function Hero() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Shula</Text>
            <Text style={styles.role}>React Native Developer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: "center",
    },
    name: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
    },
    role: {
        fontSize: 16,
        color: "#ccc",
    },
});
