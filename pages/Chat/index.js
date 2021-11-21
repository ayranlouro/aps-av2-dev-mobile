import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import firebaseApp from "../../services/firebase";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "mensagens"), where("lido", "!=", true)),
      (querySnapShot) => {
        const tmp = [];

        querySnapShot.forEach(async (document) => {
          tmp.push({
            id: document.id,
            ...document.data(),
          });
        });

        setMessages(tmp);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const db = getFirestore(firebaseApp);

  async function handleMessage() {
    try {
      await addDoc(collection(db, "mensagens"), {
        lido: false,
        mensagem: "olá",
      });
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          handleMessage();
        }}
      >
        <Text>Enviar</Text>

      </TouchableOpacity>
      {messages.map((item) => {
        <Text key={item.id}>{item.id}</Text>;
      })}
    </View>
  );
};

export default Chat;
