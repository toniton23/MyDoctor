import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "../utils/colors";
import { Header, MassageList, Gap } from "../components";
import { Toni, Ela, Susi, Sunny, Shay } from "../asset";

const DokterUmum = ({ navigation }) => {
  return (
    <View>
      <View style={styles.top}>
        <Header
          title="Pilih Dokter Umum"
          onPress={() => navigation.navigate("MainApp")}
        />
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerBody}>
            <View style={styles.wrapperChat}>
              <MassageList
                image={Toni}
                name="Ali Ridwan"
                chat="Dokter Umum"
                onPress={() => navigation.navigate("DokterProfile")}
              />
              <Gap height={16} />
            </View>

            <View style={styles.wrapperChat}>
              <MassageList
                image={Ela}
                name="Jenny Mulyani"
                chat="Dokter Umum"
                onPress={() => navigation.navigate("DokceProfile")}
              />
              <Gap height={16} />
            </View>
            <View style={styles.wrapperChat}>
              <MassageList image={Susi} name="Yuli Bachir" chat="Dokter Umum" />
              <Gap height={16} />
            </View>
            <View style={styles.wrapperChat}>
              <MassageList
                image={Sunny}
                name="Surya Firdaus"
                chat="Dokter Umum"
              />
              <Gap height={16} />
            </View>
            <View style={styles.wrapperChat}>
              <MassageList
                image={Shay}
                name="Fitri Caroline"
                chat="Dokter Umum"
              />
              <Gap height={16} />
            </View>
            <View style={styles.wrapperChat}>
              <MassageList image={Toni} name="Ali Ridwan" chat="Dokter Umum" />
              <Gap height={16} />
            </View>
            <View style={styles.wrapperChat}>
              <MassageList image={Toni} name="Ali Ridwan" chat="Dokter Umum" />
              <Gap height={16} />
            </View>
          </View>
        </ScrollView>
      </View>
      <Text></Text>
    </View>
  );
};

export default DokterUmum;

const styles = StyleSheet.create({
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
    height: "75%",
    backgroundColor: "white",
    borderRadius: 25,
    paddingTop: 20,
  },
  top: { width: "100%", height: "25%" },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
