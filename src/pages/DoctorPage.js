import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeProfile from "../components/HomeProfile";
import { Gap, Card, RatedDoctor, GoodNews } from "../components";
import { colors } from "../utils/colors";
import {
  Dokter,
  Gigi,
  Mata,
  Ibu,
  Alexa,
  Sunny,
  Poe,
  Gedung,
  Lemon,
  Jeruk,
  Hamil,
  Shay,
} from "../asset";
import { ScrollView } from "react-native-gesture-handler";

const Doctor = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeProfile
          pict={Shay}
          name="Putri Melinda"
          desc="Marketing Manager"
        />
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerBody}>
            <Text style={styles.konsul}>
              Mau konsultasi dengan siapa hari ini.?
            </Text>
            <Gap height={16} />
            <View style={styles.card}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card
                  image={Dokter}
                  title="Dokter Umum"
                  onPress={() => navigation.navigate("DokterUmum")}
                />
                <Card
                  image={Gigi}
                  title="Dokter Gigi"
                  onPress={() => navigation.navigate("DokterGigi")}
                />
                <Card
                  image={Mata}
                  title="Dokter Mata"
                  onPress={() => navigation.navigate("DokterMata")}
                />
                <Card
                  image={Ibu}
                  title="Ibu & Anak"
                  onPress={() => navigation.navigate("DokterIbu")}
                />
                <Card
                  image={Hamil}
                  title="Dokter Kandungan"
                  onPress={() => navigation.navigate("DokterKandungan")}
                />
              </ScrollView>
            </View>
            <Gap height={16} />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Top Rated Doctor
            </Text>
            <Gap height={16} />
            <RatedDoctor
              image={Alexa}
              name="Shinta Nuraini"
              job="Dokter Umum"
            />
            <Gap height={16} />
            <RatedDoctor image={Sunny} name="Wahyudin Oey" job="Dokter Gigi" />
            <Gap height={16} />
            <RatedDoctor image={Poe} name="Jamilah Wahab" job="Dokter Mata" />
            <Gap height={30} />
            <Text style={styles.good}>GoodNews</Text>
            <Gap height={16} />
            <GoodNews
              header="Is it safe to stay at home during corona virus?"
              title="Today"
              image={Gedung}
            />
            <Gap height={16} />
            <GoodNews
              header="Consume yellow citrus helps you healtier"
              title="Today"
              image={Lemon}
            />
            <Gap height={16} />
            <GoodNews
              header="Learn how to make a proper orange juice at home"
              title="Today"
              image={Jeruk}
            />
            <Gap height={16} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  good: { fontWeight: "bold", fontSize: 16 },
  card: { flexDirection: "row" },
  konsul: {
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 300,
    color: colors.dongker,
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
    backgroundColor: "white",
    width: "100%",
    height: "85%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  top: {
    backgroundColor: colors.default,
    width: "100%",
    height: "15%",
    paddingTop: 30,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
