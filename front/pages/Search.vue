<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          color="indigo"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline red lighten-2">
          Add movie on Lists.
        </v-card-title>

        <v-divider></v-divider>

        <v-spacer></v-spacer>
        <Search_form></Search_form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Search_form from "./Search_form";
export default {
  components: {Search_form}
}
</script>
