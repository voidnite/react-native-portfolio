import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Skills() {
    const [showSkills, setShowSkills] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Skills</Text>

            <Pressable
                style={styles.button}
                onPress={() => setShowSkills(!showSkills)}
            >
                <Text style={styles.buttonText}>
                    {showSkills ? "HIDE SKILLS" : "SHOW SKILLS"}
                </Text>
            </Pressable>

            {showSkills && (
                <View style={styles.skillList}>
                    <Text style={styles.skill}>• JavaScript</Text>
                    <Text style={styles.skill}>• React</Text>
                    <Text style={styles.skill}>• React Native</Text>
                    <Text style={styles.skill}>• Firebase</Text>
                    <Text style={styles.skill}>• UI/UX designer</Text>
                    <Text style={styles.skill}>• Cordova</Text>
                    <Text style={styles.skill}>• Typescript</Text>
                    <Text style={styles.skill}>• Graphic designer</Text>
                </View>
            )}
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
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#1e90ff",
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    skillList: {
        marginTop: 15,
    },
    skill: {
        color: "white",
        fontSize: 16,
        marginBottom: 5,
    },
});
