import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
  state: () => ({
    data: [],
  }),
  actions: {
    async fetchData() {
      // Lógica de busca de dados
    },
  },
});
