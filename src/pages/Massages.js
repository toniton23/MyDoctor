import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "../utils/colors";
import { MassageList, Gap } from "../components";
import { Susi, Toni, Ela } from "../asset";

const Massages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.header}>Massages</Text>
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerBody}>
            <View style={styles.wrapperChat}>
              <MassageList
                image={Susi}
                name="Susi Hasibuan"
                chat="Baik bu, terimakasih atas waktunya"
                onPress={() => navigation.navigate("Chating")}
              />
            </View>
            <Gap height={16} />
            <View style={styles.wrapperChat}>
              <MassageList
                image={Toni}
                name="Toni susilo"
                chat="siang pak, saya sakit apa ya pa..?"
                onPress={() => navigation.navigate("Chating")}
              />
            </View>
            <Gap height={16} />
            <View style={styles.wrapperChat}>
              <MassageList
                image={Ela}
                name="Ela Sinta Dewi"
                chat="Oh tentu saja tidak, jeruk itu bagus ko dan murah pula"
                onPress={() => navigation.navigate("Chating")}
              />
            </View>
            <Gap height={16} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Massages;

const styles = StyleSheet.create({
  wrapperChat: {
    borderWidth: 0.1,
    color: colors.secondary,
    borderRadius: 25,
  },
  innerBody: {
    height: "100%",
    width: "96%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginRight: "2%",
    marginLeft: "2%",
  },
  body: {
    width: "100%",
    height: "85%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 40,
    color: "white",
  },
  top: { width: "100%", height: "15%", backgroundColor: colors.default },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
