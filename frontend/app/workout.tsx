import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Workout() {
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [result, setResult] = useState('');

  const generateWorkout = () => {
    let plan = "";

    if (goal.toLowerCase() === "weight loss") {
      if (level.toLowerCase() === "beginner") {
        plan = "Jumping Jacks\nSquats\nWalking\nPlank";
      } else {
        plan = "Burpees\nRunning\nMountain Climbers\nHIIT";
      }
    } else if (goal.toLowerCase() === "weight gain") {
      if (level.toLowerCase() === "beginner") {
        plan = "Push-ups\nBodyweight Squats\nLunges\nPlank";
      } else {
        plan = "Bench Press\nDeadlift\nSquats\nPull-ups";
      }
    } else {
      plan = "Enter valid inputs";
    }

    setResult(plan);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Planner 🏋️</Text>

      <TextInput
        placeholder="Goal (weight loss / weight gain)"
        style={styles.input}
        onChangeText={setGoal}
      />

      <TextInput
        placeholder="Level (beginner / advanced)"
        style={styles.input}
        onChangeText={setLevel}
      />

      <TouchableOpacity style={styles.button} onPress={generateWorkout}>
        <Text style={styles.buttonText}>Generate Workout</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', textAlign: 'center' },
  result: { marginTop: 20, fontSize: 16 },
});