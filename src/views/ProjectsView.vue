<template>
  <div class="projects">
    <h2>Projects</h2>
    <div v-for="project in projects" :key="project.id" class="project-card">
      <h3>{{ project.title }}</h3>
      <p class="date">{{ project.date }}</p>
      <ul>
        <li v-for="(detail, index) in project.details" :key="index">
          {{ detail }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'PLATO Mission',
    date: 'Ongoing',
    type: 'Professional Project',
    details: [
      "Developing and optimizing Python code for ESA's PLATO mission.",
      'Improved code performance by 40% through refactoring and pythonization.',
      'Implemented rigorous unit and integration tests, reducing bugs by 30%.',
      'Integrated optimized code into the data processing pipeline, accelerating analysis by 25%.',
      'Collaborating with international teams to enhance exoplanet detection algorithms.',
    ],
  },
  {
    id: 2,
    title: 'RENOIR Web Application',
    date: 'Completed',
    type: 'Professional Project',
    details: [
      'Developed a web application using Django framework.',
      'Implemented user authentication and authorization systems.',
      'Created dynamic data visualization tools for scientific data analysis.',
      'Integrated database management functionalities for efficient data handling.',
      'Ensured responsive design for optimal user experience across devices.',
    ],
  },
  {
    id: 3,
    title: 'FAO Database Analysis',
    date: '2021',
    type: 'University Project',
    details: [
      'Analyzed FAO database using Python and R.',
      'Developed data visualization and analysis tools.',
      'Deployed the project using R Shiny for interactive web-based presentation.',
      'Showcased data analysis and visualization skills in an agricultural context.',
    ],
  },
  {
    id: 4,
    title: 'Gaia DR2 Data Analysis with Machine Learning',
    date: '2022',
    type: 'University Project',
    details: [
      'Implemented machine learning algorithms to classify stars using Gaia DR2 data.',
      'Developed a Flask web application for model deployment and user interaction.',
      'Trained the model to accurately classify different types of stars based on Gaia DR2 parameters.',
      'Demonstrated proficiency in astronomical data analysis and machine learning techniques.',
    ],
  },
  {
    id: 5,
    title: 'Expert Advisors for MT4/MT5',
    date: 'Ongoing',
    type: 'Personal Project',
    details: [
      'Developed multiple Expert Advisors (EAs) for MetaTrader 4 and 5 platforms.',
      'Utilized MQL language to create automated trading strategies.',
      'Implemented various trading algorithms and risk management techniques.',
      'Continuously optimized and back-tested EAs for improved performance.',
    ],
  },
  {
    id: 6,
    title: 'AI-Powered Trader Statement Analysis Dashboard',
    date: 'Ongoing',
    type: 'Personal Project',
    details: [
      'Developing a web application for analyzing trader statements using AI.',
      'Implementing a dashboard using Django (backend) and React (frontend).',
      'Incorporating AI algorithms for pattern recognition and performance analysis.',
      'Containerizing the application using Docker for easy deployment and scalability.',
      'Focusing on creating an intuitive user interface for effective data visualization.',
    ],
  },
  {
    id: 7,
    title: 'Trading Dashboard for cTrader',
    date: 'Ongoing',
    type: 'Personal Project',
    details: [
      'Developed a custom trading dashboard for cTrader platform using C#.',
      'Implemented real-time market data visualization and analysis tools.',
      'Created user-friendly interface for monitoring multiple trading accounts and instruments.',
      'Integrated advanced risk management features and performance analytics.',
      'Utilized C# to ensure high performance and seamless integration with cTrader API.',
    ],
  },
])
</script>

<style scoped>
.projects {
  max-width: 50vw;
  margin: 0 auto;
}
h2 {
  color: #ffffff;
  margin-bottom: 1.5rem;
}
.project-card {
  background: #2c2c2e;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: 0.3s;
  border-radius: 10px;
}
.project-card:hover {
  transform: scale(1.05);
}
h3 {
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0.5rem;
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
  .projects {
    max-width: 90%;
    margin: 0 0;
  }
}
</style>
