<template>
    <div class="certificate-container">
        <q-table
        class="data-table"
      title="Files"
      :columns="columns"
      :rows="certificate"
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
import useStore from '../stores/store'
import axios from 'axios'

onMounted(() => {
  getCertificate()
});

const store = useStore()
const columns = ref([
  { name: 'name',label: 'Name', field:'name', align: 'center' },
  { name: 'pcc',label: 'PCC', field:'pcc', align: 'center' },
  { name: 'processed',label: 'Status', field:'processed', align: 'center' },
  { name: 'actions', label: 'Actions', field: '', align:'center' },
])
let certificate = ref()
let loading = ref(true)


const getCertificate = async () => {
  try {
    const response = await axios.get(`certificate/certificate`);
    certificate.value = response.data.certificate
    console.log(certificate.value);
    loading.value=false
  } catch (err) {
    console.log(err);
  }
};

const printCertificate = async (row) => {
    loading.value=true
    const data = {
        csvId:row.row._id,
        key:row.row.key
    }
  try {
    await axios.post(`certificate/add`,data);
    await getcertificate()
    loading.value=false
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss">
.certificate-container{
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