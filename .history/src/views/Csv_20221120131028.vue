<template>
    <div class="csv-container">
        <q-file class="text-field" outlined >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <q-btn color="primary" label="upload" @click="upload"></q-btn>
    </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import axios from 'axios'

const file = ref();

const upload = async () => {
  const data = {
    data:file
  };
  try {
    const response = await axios.post(`/auth/login`, data);
    file.value = ''
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss">
.csv-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .text-field{
        margin-right: 2rem;
    }
}
</style>