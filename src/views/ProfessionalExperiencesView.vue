<template>
  <div class="experiences">
    <h2>Professional Experiences</h2>
    <div
      v-for="experience in experiences"
      :key="experience.id"
      class="experience-card"
    >
      <h3>{{ experience.title }}</h3>
      <p class="company">{{ experience.company }}</p>
      <p class="date">{{ experience.date }}</p>
      <ul>
        <li v-for="(detail, index) in experience.details" :key="index">
          {{ detail }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    title: 'Python Developer',
    company: 'Institute of Space Astrophysics',
    date: 'July 2023 - Present',
    details: [
      "Optimized Python code for ESA's PLATO mission, improving performance by 40%.",
      'Implemented rigorous unit and integration tests, reducing bugs by 30%.',
      'Successfully integrated optimized code into the data processing pipeline, accelerating analysis by 25%.',
    ],
  },
  {
    id: 2,
    title: 'Python Developer',
    company: 'Institute of Space Astrophysics',
    date: 'August 2021 - June 2023',
    details: [
      'Developed a robust database management platform using Django, increasing data processing efficiency by 35%.',
      'Created an intuitive user interface, reducing user training time by 50%.',
      'Implemented a CI/CD pipeline, cutting deployment time by 60%.',
    ],
  },
  {
    id: 3,
    title: "Master's Intern",
    company: 'LATMOS-CNRS',
    date: 'March 2020 - September 2020',
    details: [
      'Optimized Python programs for complex atmospheric calculations, reducing computation time by 45%.',
      'Managed and analyzed extensive atmospheric datasets using MongoDB and R.',
      'Conducted large-scale simulations of terrestrial spectra for improved understanding of atmospheric phenomena.',
    ],
  },
  {
    id: 4,
    title: 'Research Assistant',
    company: 'IAS-IAP',
    date: 'April 2018 - April 2019',
    details: [
      'Co-authored "New deep coronal spectra from the 2017 total solar eclipse", published in A&A, 632 (2019) A86.',
      'Contributed to "Pointing the NTT at the Sun: Studying the Solar Corona During the Total Eclipse", The Messenger, 177, 54-55 (2019).',
      'Conducted spectral analysis of the solar corona, enhancing understanding of solar physics.',
    ],
  },
])
</script>

<style scoped>
.experiences {
  max-width: 50vw;
  margin: 0 auto;
}

h2 {
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.experience-card {
  background: #2c2c2e;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: 0.3s;
  border-radius: 10px;
}
.experience-card:hover {
  transform: scale(1.05);
}

h3 {
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.company {
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
  .experiences {
    max-width: 90%;
    margin: 0 0;
  }
}
</style>
