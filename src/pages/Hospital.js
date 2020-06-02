import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { colors } from "../utils/colors";
import { Rs1, Rs3, Rs4 } from "../asset/img";
import ListRs from "../components/ListRs";
import Gap from "../components/Gap";

const Massages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground source={Rs1} style={styles.image}>
          <View style={styles.wrapperHeader}>
            <Text style={styles.header}>Nearby Hospitals</Text>
            <Text style={styles.tiga}>3 Tersedia</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerBody}>
            <View style={styles.wrapperList}>
              <ListRs
                image={Rs1}
                title="Rumah Sakit Harapan Jiwa"
                desc="Jl Slipi Jaya"
              />
            </View>
            <Gap height={16} />
            <View style={styles.wrapperList}>
              <ListRs
                image={Rs3}
                title="Rumah Sakit Pelita Kasih"
                desc="Jl Bek Murad"
              />
            </View>
            <Gap height={16} />
            <View style={styles.wrapperList}>
              <ListRs
                image={Rs4}
                title="Rumah Sakit Ibu dan Anak"
                desc="Jl Cideng Barat"
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
  wrapperList: {
    width: "100%",
    height: 76,
    borderWidth: 0.1,
    borderRadius: 25,
  },
  wrapperHeader: { marginTop: 50, alignItems: "center", marginTop: 100 },
  image: { width: "100%", height: 300 },
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
    height: "70%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
  },
  tiga: { color: "white", fontSize: 15 },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  top: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
