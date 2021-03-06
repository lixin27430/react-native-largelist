import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput
} from "react-native";
import {
  HeightUnequalExample,
  HeightEqualExample,
  MessageExample,
  ContactExample,
  MenuListExample,
  RefreshAndLoadingExample,
  IntensiveSectionExample
} from "./Examples";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: -1
    };
  }

  render() {
    switch (this.state.type) {
      case 0:
        return <HeightEqualExample />;
      case 1:
        return <HeightUnequalExample />;
      case 2:
        return <MessageExample />;
      case 3:
        return <ContactExample />;
      case 4:
        return <MenuListExample />;
      case 5:
        return <RefreshAndLoadingExample />;
      case 6:
        return <IntensiveSectionExample />;
    }
    return this.renderChoose();
  }

  renderChoose() {
    const examples = [
      "HeightEqualExample",
      "HeightUnequalExample",
      "MessageExample",
      "ContactExample",
      "MenuListExample",
      "RefreshAndLoadingExample",
      "IntensiveSectionExample"
    ];
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        {examples.map((str, index) =>
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => this.setState({ type: index })}
          >
            <Text style={styles.text}>
              {str}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  input: {
    fontSize: 16,
    width: 150,
    borderWidth: StyleSheet.hairlineWidth
  },

  text: {
    fontSize: 16,
    marginTop: 20
  },
  button: { alignItems: "center" }
});
