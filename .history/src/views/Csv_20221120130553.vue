<template>
    <div class="csv-container">
        <q-file outlined >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <q-btn color="primary" label="upload" @click="upload"></q-btn>
    </div>
</template>

<script></script>
<style lang="scss">
.csv-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
</style>