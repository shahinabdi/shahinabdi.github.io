<template>
  <div class="education">
    <h2>Education</h2>
    <div
      v-for="education in educations"
      :key="education.id"
      class="education-card"
    >
      <h3>{{ education.title }}</h3>
      <p class="institution">{{ education.company }}</p>
      <p class="date">{{ education.date }}</p>
      <ul>
        <li v-for="(detail, index) in education.details" :key="index">
          {{ detail }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const educations = ref([
  {
    id: 5,
    title: 'M.Sc. Data Science & Management',
    company: 'IASchool- GroupeGEMA, Paris',
    date: '2020 - 2022',
    details: [
      'Specialized in advanced data analysis techniques and machine learning algorithms.',
      'Completed key projects including predictive analysis of market trends and development of ML models for fraud detection.',
      'Gained proficiency in Python, R, and various data visualization tools.',
    ],
  },
  {
    id: 6,
    title: 'M.Sc. Astronomy and Astrophysics',
    company: 'Paris Observatory, Meudon',
    date: '2017 - 2020',
    details: [
      'Focused on advanced concepts in astronomy and astrophysics.',
      'Conducted research project on spectral analysis of the solar corona.',
      'Developed strong analytical and problem-solving skills through complex astronomical calculations.',
    ],
  },
  {
    id: 7,
    title: 'Professional Training',
    company: 'Various Institutions',
    date: 'November 2023',
    details: [
      'Completed intensive course on Distributed Version Control with Git (2 days) at IJCLab - CNRS.',
      'Attended advanced Python programming for scientific applications (4 days) at Pythagore FD - CNRS.',
      'Enhanced skills in version control, collaborative coding, and scientific programming techniques.',
    ],
  },
])
</script>

<style scoped>
.education {
  max-width: 50vw;
  margin: 0 auto;
}
h2 {
  color: #ffffff;
  margin-bottom: 1.5rem;
}
.education-card {
  background: #2c2c2e;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: 0.3s;
  border-radius: 10px;
}
.education-card:hover {
  transform: scale(1.05);
}
h3 {
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.institution {
  color: #00adb5;
  margin-bottom: 0.25rem;
}
.date {
  color: #00adb5;
  margin-bottom: 1rem;
}
ul {
  padding-left: 1.5rem;
  margin-bottom: 0;
}
li {
  margin-bottom: 0.5rem;
}
li:last-child {
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .education {
    max-width: 90%;
    margin: 0 0;
  }
}
</style>
