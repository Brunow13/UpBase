import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
} from "react-native";

export default class Signup extends Component {
  state = {
    ncard: "",
    tname: "",
    cpf: "",
    vali: "",
    cods: "",
  };
  handlefname = (text) => {
    this.setState({ ncard: text });
  };
  handlelname = (text) => {
    this.setState({ tname: text });
  };
  handleemail = (text) => {
    this.setState({ cpf: text });
  };
  handlePass = (text) => {
    this.setState({ vali: text });
  };
  handlerePass = (text) => {
    this.setState({ cods: text });
  };
  static navigationOptions = {
    title: "Signup",
  };
  mywork = () => {
    const { ncard, tname, cpf, vali, cods } = this.state;
    if (ncard == "" && tname == "" && cpf == "" && vali == "" && cods == "") {
      ToastAndroid.show("Preencha corretamente.", ToastAndroid.SHORT);
    } else {
      Keyboard.dismiss();
      ToastAndroid.show("Pagamento realizado com sucesso!", ToastAndroid.LONG);
      this.props.navigation.navigate("Home");
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerTop}>
          <Icon style={styles.arrow} name="arrow-left" size={24} color="#fff" />
          <Text style={styles.headerTitle}>Pagamento</Text>
        </View>
        <Text style={styles.header}>
          Insira os dados para concluir a contratação via cartão de crédito.
        </Text>
        <View style={styles.bloco}>
          <TextInput
            style={styles.Textinput}
            placeholder="Número do cartão"
            placeholderTextColor="#4d5957"
            underlineColorAndroid={"transparent"}
            onChangeText={this.handlefname}
          />
          <TextInput
            style={styles.Textinput}
            placeholder="Nome do titular"
            placeholderTextColor="#4d5957"
            underlineColorAndroid={"transparent"}
            onChangeText={this.handlelname}
          />
          <TextInput
            style={styles.Textinput}
            placeholder="CPF do titular"
            placeholderTextColor="#4d5957"
            underlineColorAndroid={"transparent"}
            onChangeText={this.handleemail}
          />
          <TextInput
            style={styles.Textinput}
            placeholder="Validade"
            placeholderTextColor="#4d5957"
            underlineColorAndroid={"transparent"}
            onChangeText={this.handlePass}
          />
          <TextInput
            style={styles.Textinput}
            placeholder="Código de segurança"
            placeholderTextColor="#4d5957"
            underlineColorAndroid={"transparent"}
            onChangeText={this.handlerePass}
          />
        </View>
        <TouchableOpacity style={styles.submitButton1} onPress={this.mywork}>
          <Text style={styles.submitButtonText1}> Pagar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton2} onPress={this.mywork}>
          <Text style={styles.submitButtonText2}> Voltar </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Icon style={styles.icons} name="home" size={24} color="#ccc" />
          <Icon style={styles.icons} name="clipboard" size={24} color="#ccc" />
          <Icon style={styles.icons} name="heart" size={24} color="#ccc" />
          <Icon style={styles.icons} name="user" size={24} color="#ccc" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#f5f5f5",
  },
  bloco: {
    borderRadius: 3,
    borderColor: "#ccc",
    borderWidth: 1,
    width: 300,
    marginLeft: 50,
    marginRight: 50,
  },
  arrow: {
    paddingTop: 40,
    paddingLeft: 10,
    alignSelf: "stretch",
    position: "absolute",
  },
  headerTop: {
    marginTop: 40,
    backgroundColor: "#006557",
    alignSelf: "stretch",
  },
  headerTitle: {
    color: "#fff",
    alignSelf: "stretch",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 40,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  header: {
    color: "#36485f",
    alignSelf: "stretch",
    fontSize: 18,
    textAlign: "center",
    borderBottomWidth: 0,
    borderColor: "#36485f",
    paddingBottom: 20,
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 30,
    fontWeight: "normal",
  },
  Textinput: {
    alignSelf: "stretch",
    paddingTop: 10,
    height: 60,
    borderBottomWidth: 1,
    padding: 20,
    marginTop: 0,
    width: 298,
    borderColor: "#ccc",
  },
  submitButton1: {
    backgroundColor: "#07689f",
    padding: 20,
    height: 60,
    borderRadius: 3,
    width: 300,
    marginLeft: 50,
    marginTop: 40,
  },
  submitButtonText1: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  submitButton2: {
    backgroundColor: "transparent",
    padding: 10,
    height: 60,
    borderRadius: 3,
    width: 300,
    marginLeft: 50,
    marginTop: 10,
  },
  submitButtonText2: {
    textAlign: "center",
    color: "#07689f",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    padding: 5,
    height: 100,
    paddingLeft: 40,
  },
  icons: {
    alignSelf: "stretch",
    textAlign: "center",
    alignItems: "center",
    color: "#c1c1c1",
    fontWeight: "bold",
    fontSize: 28,
    marginLeft: 15,
    marginRight: 5,
    paddingLeft: 20,
  },
});
