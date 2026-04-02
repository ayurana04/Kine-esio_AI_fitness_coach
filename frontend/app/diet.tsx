import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Diet() {
  const [goal, setGoal] = useState('');
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState('');

  const generateDiet = () => {
    let plan = "";

    if (goal.toLowerCase() === "weight loss") {
      plan = "Breakfast: Oats + Fruits\nLunch: Roti + Sabzi\nDinner: Salad + Soup";
    } else if (goal.toLowerCase() === "weight gain") {
      plan = "Breakfast: Milk + Banana\nLunch: Rice + Dal + Paneer\nDinner: Roti + Chicken";
    } else {
      plan = "Enter valid goal";
    }

    if (budget === "low") {
      plan += "\n(Budget Friendly Options Included)";
    }

    setResult(plan);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Diet Planner 🥗</Text>

      <TextInput
        placeholder="Goal (weight loss / weight gain)"
        style={styles.input}
        onChangeText={setGoal}
      />

      <TextInput
        placeholder="Budget (low / medium / high)"
        style={styles.input}
        onChangeText={setBudget}
      />

      <TouchableOpacity style={styles.button} onPress={generateDiet}>
        <Text style={styles.buttonText}>Generate Diet</Text>
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
    backgroundColor: 'green',
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', textAlign: 'center' },
  result: { marginTop: 20, fontSize: 16 },
});