<template>
    <div class="csvs-container">
        <q-table
        class="data-table"
      title="Files"
      :columns="columns"
      :rows="csvs"
      row-key="name"
      :loading="loading"
    >
    <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn  color="grey" @click="process(props)" icon="edit"></q-btn>
            </q-td>          
          </template>
</q-table>
    </div>
</template>

<script setup>
import { inject, ref, onMounted, onBeforeMount } from "vue";
import axios from 'axios'

onMounted(() => {
  getCsvs()
});

const columns = ref([
  { name: 'name',label: 'Name', field:'name', align: 'center' },
  { name: 'key',label: 'PCC', field:'key', align: 'center' },
  { name: 'actions', label: 'Actions', field: '', align:'center' },
])
let csvs = ref([])
let loading = ref(true)


const getCsvs = async () => {
  try {
    const response = await axios.get(`csv/csv`);
    csvs.value = response.data.csvs
    loading.value=false
  } catch (err) {
    console.log(err);
  }
};

const process = async (data) => {
    return console.log(data.row.key);
  try {
    const response = await axios.get(`csv/csv`);
    csvs.value = response.data.csvs
    loading.value=false
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss">
.csvs-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .data-table{
        width: 600px;
    }
}
</style>