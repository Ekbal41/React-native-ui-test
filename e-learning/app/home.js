import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack } from "expo-router";
import Thumbnaill from "../assets/images/vedio.jpg";
import Like from "../assets/images/like.png";
import Book from "../assets/images/book.png";
import PlayItem from "../components/PlayItem";
import ForumItem from "../components/ForumItem";
import { useState } from "react";

export default function Home() {
  const [listOpen, setListOpen] = useState(true);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <Image
          source={Thumbnaill}
          style={{
            width: 420,
            height: 200,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Judul lorem ipsum dolor sit amet conse cteur adipsing elit
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#377D41" }}>Asif Ekbal</Text>
          <Text style={{ color: "#377D41" }}>1h 54 min </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#377D41",
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Play Episode 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#377D41",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Download Vedio
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            paddingVertical: 10,
          }}
        >
          ectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <view>
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={Like}
            />
            <Text>Like</Text>
          </view>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                transform: [{ rotate: "180deg" }],
              }}
              source={Like}
            />
            <Text>Dislike</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={Book}
            />
            <Text>Save</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 5,
            }}
            onPress={() => setListOpen(true)}
          >
            <Text
              style={{
                color: "#377D41",
                fontWeight: 800,
              }}
            >
              Playlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setListOpen(false)}>
            <Text
              style={{
                color: "#377D41",
                fontWeight: 800,
              }}
            >
              Forum{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
        {listOpen ? (
          <ScrollView
            style={{
              maxHeight: 200,
            }}
          >
            <PlayItem title={"Intro"} />
            <PlayItem title={"Basic Of Java"} />
            <PlayItem title={"Java Fandamentals"} />
            <PlayItem title={"What Is Spring Boot"} />
            <PlayItem title={"Spring Boot"} />
          </ScrollView>
        ) : (
          <ScrollView
            style={{
              maxHeight: 200,
            }}
          >
            <ForumItem title={"FaQ"} />
            <ForumItem title={"General Discution"} />
          </ScrollView>
        )}
        
        </View>
      </View>
    </SafeAreaView>
  );
}
