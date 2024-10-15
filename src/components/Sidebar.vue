<template>
  <div class="sidebar">
    <div class="profile">
      <img src="/images/profile.jpg" alt="Shahin ABDI" />
      <h2>Shahin ABDI</h2>
      <p>Data Engineer | Python Developer</p>
      <p>Paris, France</p>
      <p>contact@shahinabdi.fr</p>
    </div>
    <nav class="nav">
      <ul>
        <li
          v-for="section in sections"
          :key="section.id"
          :class="{ active: activeSection === section.id }"
          @click="$emit('section-change', section.id)"
        >
          {{ section.name }}
        </li>
      </ul>
    </nav>
    <hr />
    <div class="skills">
      <h3>Skills</h3>
      <div class="skills-container">
        <div v-for="skill in skills" :key="skill.name" class="skill">
          <div class="circle">
            <svg width="75" height="75">
              <circle
                cx="37.5"
                cy="37.5"
                r="33.5"
                fill="none"
                stroke="#333"
                stroke-width="4"
              />
              <circle
                class="progress"
                cx="37.5"
                cy="37.5"
                r="33.5"
                fill="none"
                stroke="#00ffff"
                stroke-width="4"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="circumference"
                transform="rotate(-90 37.5 37.5)"
              />
            </svg>
            <div class="percentage">{{ skill.level }}%</div>
          </div>
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="coding">
      <h3>Coding</h3>
      <div class="coding-container">
        <div v-for="skill in codingSkills" :key="skill.name" class="skill">
          <div class="circle">
            <svg width="75" height="75">
              <circle
                cx="37.5"
                cy="37.5"
                r="33.5"
                fill="none"
                stroke="#333"
                stroke-width="4"
              />
              <circle
                class="progress"
                cx="37.5"
                cy="37.5"
                r="33.5"
                fill="none"
                stroke="#00ffff"
                stroke-width="4"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="circumference"
                transform="rotate(-90 37.5 37.5)"
              />
            </svg>
            <div class="percentage">{{ skill.level }}%</div>
          </div>
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="other-skills">
      <h3>Other Skills</h3>
      <div class="other-skills-container">
        <p v-for="skill in otherSkills" :key="skill">{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps(['activeSection'])
const emit = defineEmits(['section-change'])

const sections = ref([
  { id: 'experiences', name: 'Professional Experiences' },
  { id: 'education', name: 'Education' },
  { id: 'projects', name: 'Projects' },
  { id: 'publications', name: 'Publications' },
])

const skills = ref([
  { name: 'OOP', level: 90 },
  { name: 'Pandas', level: 87 },
  { name: 'Django', level: 82 },
  { name: 'AWS', level: 75 },
])

const codingSkills = ref([
  { name: 'Python', level: 86 },
  { name: 'R', level: 70 },
  { name: 'C#', level: 60 },
])

const otherSkills = ref([
  'Pyspark',
  'Spark',
  'Docker',
  'Kubernetes',
  'Jira',
  'HTML',
  'UI/UX',
  'CSS',
  'ETL',
  'Linux',
  'MySQL',
  'JavaScript',
  'MongoDB',
  'Azure',
  'Terraform',
  'CI/CD',
  'Airflow',
])

const circumference = computed(() => 2 * Math.PI * 33.5)

onMounted(() => {
  setTimeout(() => {
    const circles = document.querySelectorAll('.progress')
    circles.forEach((circle, index) => {
      const skill = [...skills.value, ...codingSkills.value][index]
      const offset =
        circumference.value - (skill.level / 100) * circumference.value
      circle.style.strokeDashoffset = offset
    })
  }, 300) // Small delay to ensure DOM is ready
})

const dashOffset = level => {
  return circumference.value - (level / 100) * circumference.value
}
</script>

<style scoped>
.sidebar {
  width: 300px;
  background: #2c2c2e;
  padding: 2.5rem;
  box-sizing: border-box;
  overflow-y: auto;
}
.profile {
  text-align: center;
  margin-bottom: 20px;
}

.profile img {
  width: 100px;
  border-radius: 50%;
}

.profile h2 {
  margin: 10px 0 5px;
}

hr {
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.8);
  margin: 20px 0;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.skills,
.coding,
.other-skills {
  margin-bottom: 20px;
}

.skills h3,
.coding h3,
.other-skills h3 {
  margin-bottom: 10px;
}

.nav ul {
  list-style: none;
  padding: 0;
}

.nav ul li {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.nav ul li:hover {
  background: #00b9db;
}

.skills-container,
.coding-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.skill {
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.skill p {
  margin-top: 10px;
  text-align: center;
}

.circle {
  position: relative;
  width: 75px;
  height: 75px;
}

.circle svg {
  position: absolute;
  top: 0;
  left: 0;
}

.circle .percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  color: #00ffff;
}
.circle .progress {
  transition: stroke-dashoffset 1s ease-in-out;
}

.other-skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.other-skills-container p {
  margin: 0;
  padding: 5px 10px;
  background: #1c1c1e;
  border-radius: 5px;
  border: 1px solid #000;
  transition: transform 0.3s;
  flex: 1 1 auto;
  text-align: center;
}

.other-skills-container p:hover {
  transform: scale(1.1);
  background: #00b9db;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
