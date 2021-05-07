<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="title"
      :counter="40"
      :rules="titleRules"
      label="Title"
      required
    ></v-text-field>

    <v-select
      v-model="status"
      :items="statusItems"
      :rules="[v => !!v || 'Status is required']"
      label="Status"
      required
    ></v-select>

    <v-select
      v-model="rate"
      :items="rateItems"
      :rules="[v => !!v || 'Rating is required']"
      label="Rating"
      required
    ></v-select>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    title: '',
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 40) || 'Title must be less than 40 characters',
    ],
    status: '',
    statusItems: [
      'Want to Watch',
      'Watching now',
      'Watched',
    ],
    rate: '',
    rateItems: [
      'Unwatch',
      '1 star',
      '2 star',
      '3 star',
      '4 star',
      '5 star',
    ],
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
