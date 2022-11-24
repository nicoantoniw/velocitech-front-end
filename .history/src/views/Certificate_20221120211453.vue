<template>
    <div class="certificate-container">
        <q-table
        class="data-table"
      title="License"
      :columns="columns"
      :rows="certificate"
      row-key="name"
      :loading="loading"
    >
    <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn  color="primary" @click="downloadCertificate(props)" label="Download"></q-btn>
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
  { name: 'firstName',label: 'Name', field:'firstName', align: 'center' },
  { name: 'lastName',label: 'Last Name', field:'lastName', align: 'center' },
  { name: 'age',label: 'Age', field:'age', align: 'center' },
  { name: 'licenseCode',label: 'License Code', field:'licenseCode', align: 'center' },
  { name: 'licenseRegistrationDate',label: 'Registration Date', field:'licenseRegistrationDate', align: 'center' },
  { name: 'licenseExpirationDate',label: 'Expiration Date', field:'licenseExpirationDate', align: 'center' },
  { name: 'email',label: 'Email', field:'email', align: 'center' },
  { name: 'actions', label: 'Actions', field: '', align:'center' },
])
let certificate = ref([])
let loading = ref(true)


const getCertificate = async () => {
  try {
    const response = await axios.get(`certificate/certificate`);
    certificate.value[0] = response.data.certificate
    loading.value=false
  } catch (err) {
    console.log(err);
  }
};

const downloadCertificate = async (row) => {
    loading.value=true
  try {
    await axios.get(`certificate/download`);
    await getCertificate()
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
        width: 70%
    }
}
</style>