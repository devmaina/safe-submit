<template>
  <div>
    <h1>Submissions</h1>
    <div v-for="submission in submissions" :key="submission.id">
      <p>{{ submission.fieldName }} - {{ submission.userName }} - {{ submission.query }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmissionsPage',
  data() {
    return {
      submissions: [] // Fetch submissions from the backend
    };
  },
  async created() {
    // Fetch submissions from the backend when the page is created
    // You might want to use a backend API for this
    // Example: Fetch submissions from a Firebase database
    // this.submissions = await fetchSubmissions();
  }
};
</script>
