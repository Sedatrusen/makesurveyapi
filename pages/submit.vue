<template>
  <b-container>
    <div>
      <b-card
        text-variant="white"
        :title="Detail.surveyname"
        body-class="text-center"
        class="card text-white bg-info mb-3"
        header-tag="nav"
      >
        <b-card-text>
          Your response has been recorded.Thank you for your time
        </b-card-text>
      </b-card>
    </div>
  </b-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: this.Detail.surveyname,
    }
  },
  computed: {
    ...mapState({
      Detail: (state) => state.survey.Details,
    }),
  },
}
</script>
