import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem} key={props.index}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.index)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.textvalue}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderColor: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
