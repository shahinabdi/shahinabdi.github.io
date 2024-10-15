<template>
  <div class="publications">
    <h2>Publications</h2>
    <div
      v-for="publication in publications"
      :key="publication.id"
      class="publication-card"
    >
      <h3>{{ publication.title }}</h3>
      <p class="journal">{{ publication.journal }}</p>
      <p class="date">{{ publication.date }}</p>
      <a
        :href="publication.link"
        target="_blank"
        rel="noopener noreferrer"
        class="publication-link"
        >View Publication</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const publications = ref([
  {
    id: 1,
    title: 'Total solar eclipse 2017 in USA: deep coronal spectra',
    journal: 'SF2A',
    date: 'December 1, 2019',
    link: 'https://ui.adsabs.harvard.edu/abs/2019sf2a.conf..363K/abstract',
  },
  {
    id: 2,
    title: 'New deep coronal spectra from the 2017 total solar eclipse',
    journal: 'Astronomy & Astrophysics',
    date: 'December 1, 2019',
    link: 'https://www.aanda.org/articles/aa/abs/2019/12/aa35681-19/aa35681-19.html',
  },
  {
    id: 3,
    title: 'Eclipse 2017: new results on the dynamical inner-corona',
    journal: 'SF2A',
    date: 'December 1, 2019',
    link: 'https://ui.adsabs.harvard.edu/abs/2019sf2a.conf..361K/abstract',
  },
  {
    id: 4,
    title:
      'Pointing the NTT at the Sun: Studying the Solar Corona During the Total Eclipse',
    journal: 'The Messenger',
    date: 'September 1, 2019',
    link: 'https://www.eso.org/sci/publications/messenger/archive/no.177-sep19/messenger-no177-54-55.pdf',
  },
])
</script>

<style scoped>
.publications {
  max-width: 50vw;
  margin: 0 auto;
}
h2 {
  color: #ffffff;
  margin-bottom: 1.5rem;
}
.publication-card {
  background: #2c2c2e;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: 0.3s;
  border-radius: 10px;
}
.publication-card:hover {
  transform: scale(1.05);
}
h3 {
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.journal {
  color: #00adb5;
  margin-bottom: 0.25rem;
}
.date {
  color: #00adb5;
  margin-bottom: 1rem;
}
.publication-link {
  display: inline-block;
  color: #ffd700;
  text-decoration: none;
  border: 1px solid #ffd700;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.3s;
}
.publication-link:hover {
  background-color: #ffd700;
  color: #2c2c2e;
}
@media (max-width: 768px) {
  .publications {
    max-width: 90%;
    margin: 0 0;
  }
}
</style>
