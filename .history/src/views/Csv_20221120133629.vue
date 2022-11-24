<template>
    <div class="csv-container">
        <q-file v-model="file" class="text-field"  outlined >
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
    const fd = new FormData();
      fd.append("file", file);
  try {
    const response = await axios.post(`csv/add`, fd);
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
        width: 500px;
    }
}
</style>