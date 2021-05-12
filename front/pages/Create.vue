<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2 mb-4"
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
        <v-card-title>
          <span class="headline">Add movies on Lists.</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <template>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="movie.title"
                      :counter="40"
                      :rules="titleRules"
                      label="Title"
                      required
                    ></v-text-field>

                    <v-select
                      v-model="movie.status"
                      :items="statusItems"
                      :rules="[v => !!v || 'Status is required']"
                      label="Status"
                      required
                    ></v-select>

                    <v-select
                      v-model="movie.rate"
                      :items="rateItems"
                      :rules="[v => !!v || 'Rating is required']"
                      label="Rating"
                      required
                    ></v-select>
                  </v-form>
                </template>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="validate"
            :disabled="!valid"
            v-on:click="createMovie"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      movie: {
        title: '',
        status: '',
        rate: '',
      },
      valid: true,
      dialog: false,
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 40) || 'Title must be less than 40 characters',
      ],
      statusItems: [
        'ToDo',
        'Doing',
        'Done',
      ],
      rateItems: [
        0,
        1,
        2,
        3,
        4,
        5,
      ],
    }
  },

  methods: {
    validate () {
      this.$refs.form.validate()
    },

    createMovie: function (){
      const url = 'http://localhost:3000/api/v1/movies'
      this.$axios.post(url, { movie: this.movie }).then((res) => {
        this.$router.push({ path: '/' })
      }, (error) => {
        console.log(error);
      });
    },
  }

}
</script>
