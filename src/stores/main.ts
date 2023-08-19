import { defineStore } from "pinia";
import axios from "axios";
import type { Client, Transaction } from "@/types";

type State = {
  userName: UserPayload["name"];
  userEmail: UserPayload["email"];
  userAvatar: UserPayload["avatar"];

  /* Field focus with ctrl+k (to register only once) */
  isFieldFocusRegistered: boolean;

  /* Sample data (commonly used) */
  clients: Client[];
  history: Transaction[];
};

type UserPayload = {
  name: string | null;
  email: string | null;
  avatar: string | null;
};

export const useMainStore = defineStore("main", {
  state: (): State => ({
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
  }),
  actions: {
    setUser(payload: Partial<UserPayload>) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },

    fetch(sampleDataKey: "clients" | "history") {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            this[sampleDataKey] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});
