<template>
    <div class="csvs-container">
      <q-btn  color="primary" @click="getReport()" label="get report"></q-btn>
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
              <q-btn v-if="props.row.processed != 'Processed'"  color="primary" @click="process(props)" label="Process"></q-btn>
            </q-td>          
          </template>
</q-table>
    </div>
</template>

<script setup>
import { inject, ref, onMounted, onBeforeMount } from "vue";
import axios from 'axios'
import useStore from '../stores/store'

onMounted(() => {
  getCsvs()
});

const columns = ref([
  { name: 'name',label: 'Name', field:'name', align: 'center' },
  { name: 'pcc',label: 'PCC', field:'pcc', align: 'center' },
  { name: 'processed',label: 'Status', field:'processed', align: 'center' },
  { name: 'actions', label: 'Actions', field: '', align:'center' },
])
const store = useStore()
let csvs = ref([])
let loading = ref(true)


const getCsvs = async () => {
  try {
    const response = await axios.get(`csv/csv`);
    response.data.csvs.forEach(csv=>csv.pcc = csv.user.username)
    csvs.value = response.data.csvs
    loading.value=false
  } catch (err) {
    console.log(err);
  }
};

const getReport = async () => {
  try {
    await axios.get(`auth/report/${store.email}`);
  } catch (err) {
    console.log(err);
  }
};

const process = async (row) => {
    loading.value=true
    const data = {
        csvId:row.row._id,
        key:row.row.key
    }
  try {
    await axios.post(`certificate/add`,data);
    await getCsvs()
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
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    .data-table{
        width: 600px;
    }
}
</style>