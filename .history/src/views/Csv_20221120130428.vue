<template>
    <div class="csv-container">
        <q-file outlined >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
    </div>
</template>

<script></script>
<style lang="scss">
.csv-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>