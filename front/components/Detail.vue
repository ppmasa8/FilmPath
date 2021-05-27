<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="1000px"
    >
      <v-card>
        <v-card-title>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: [movie]
}
</script>
