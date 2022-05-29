<template>
  <b-container
    ><div>
      <b-card
        text-variant="white"
        :title="Detail.surveyname"
        body-class="text-center"
        class="card text-white bg-info mb-3"
        header-tag="nav"
      >
        <b-card-text>
          {{ Detail.surveyDescription }}
        </b-card-text>
      </b-card>
    </div>
    <div v-for="(item, index) in items" :key="item.id" class="sablon">
      <div v-if="item.id == 0 || item.id == 2">
        <p>{{ item.question }}</p>
        <b-form-checkbox
          :id="item.answer1"
          v-model="response[index].answer1"
          :name="item.answer1"
          value="true"
          unchecked-value="false"
        >
          {{ item.answer1 }}
        </b-form-checkbox>
        <b-form-checkbox
          :id="item.answer2"
          v-model="response[index].answer2"
          :name="item.answer2"
          value="true"
          unchecked-value="false"
        >
          {{ item.answer2 }}
        </b-form-checkbox>
        <b-form-checkbox
          :id="item.answer3"
          v-model="response[index].answer3"
          :name="item.answer3"
          value="true"
          unchecked-value="false"
        >
          {{ item.answer3 }}
        </b-form-checkbox>
        <b-form-checkbox
          :id="item.answer4"
          v-model="response[index].answer4"
          :name="item.answer4"
          value="true"
          unchecked-value="false"
        >
          {{ item.answer4 }}
        </b-form-checkbox>
      </div>
      <div v-if="item.id == 1">
        <b-form-group
          id="input-group-1"
          :label="item.question"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="response[index].answer1"
            class="border-bottom rounded-pill"
            type="text"
            placeholder="Enter answer"
          ></b-form-input>
        </b-form-group>
      </div>
    </div>

    <b-btn
      block
      variant="primary"
      to="/submit"
      @click="submit({ userid, surveyname })"
      >submit</b-btn
    >
  </b-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      surveyname: this.$route.params.id,
      userid: this.$route.params.userid,
    }
  },
  head() {
    return {
      title: this.$route.params.id,
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.survey.Questions,
      Detail: (state) => state.survey.Details,
      response: (state) => state.survey.response,
    }),
  },
  created() {
    this.$store.dispatch('survey/addQuestions', {
      userid: this.$route.params.userid,
      surveyname: this.$route.params.id,
    })
  },
  methods: {
    ...mapActions({
      submit: 'survey/submit',
    }),
  },
}
</script>
<style>
body {
  background-color: transparent;
}
.sablon {
  background-color: white;
  margin: 1em;
  padding: 1em;
  border-radius: 16px;
}
</style>
