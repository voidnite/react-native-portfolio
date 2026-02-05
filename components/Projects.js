import { StyleSheet, Text, View } from "react-native";

export default function Projects() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projects</Text>
            <Text style={styles.item}>• Blog App</Text>
            <Text style={styles.item}>• Citizen Reporting App</Text>
            <Text style={styles.item}>• Portfolio App</Text>
            <Text style={styles.item}>• Web Warriors Wizard</Text>
            <Text style={styles.item}>• CV App</Text>
            <Text style={styles.item}>• Void Nite</Text>
            <Text style={styles.item}>• Arcade Classic</Text>
            <Text style={styles.item}>• Amaka medica</Text>
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
    item: {
        color: "#ddd",
    },
});
