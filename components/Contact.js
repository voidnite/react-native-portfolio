import { StyleSheet, Text, View } from "react-native";

export default function Contact() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact</Text>
            <Text style={styles.text}>Email: okwukashulammite@gmail.com</Text>
            <Text style={styles.text}>GitHub: github.com/voidnite</Text>
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
    },
    text: {
        color: "#ddd",
    },
});
