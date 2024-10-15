<template>
  <div class="app">
    <Sidebar
      :activeSection="activeSection"
      @section-change="changeSection"
      :class="{ 'mobile-hidden': isMobileMenuClosed }"
    />
    <div class="mobile-header">
      <button @click="toggleMobileMenu" class="hamburger-menu">☰</button>
      <h1>Shahin ABDI</h1>
    </div>
    <div v-if="!isMobileMenuClosed" class="mobile-menu">
      <div class="profile">
        <img src="/images/profile.jpg" alt="Shahin ABDI" />
        <h2>Shahin ABDI</h2>
        <p>Data Engineer | Python Developer</p>
        <p>Paris, France</p>
        <p>contact@shahinabdi.fr</p>
      </div>
      <nav>
        <ul>
          <li
            v-for="section in sections"
            :key="section.id"
            :class="{ active: activeSection === section.id }"
            @click="changeSection(section.id)"
          >
            {{ section.name }}
          </li>
        </ul>
      </nav>
    </div>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const router = useRouter()
const activeSection = ref('experiences')
const isMobileMenuClosed = ref(true)

const sections = [
  { id: 'experiences', name: 'Professional Experiences' },
  { id: 'education', name: 'Education' },
  { id: 'projects', name: 'Projects' },
  { id: 'publications', name: 'Publications' },
]

const changeSection = section => {
  activeSection.value = section
  router.push({ name: section })
  isMobileMenuClosed.value = true
}

const toggleMobileMenu = () => {
  isMobileMenuClosed.value = !isMobileMenuClosed.value
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #1c1c1e;
  color: #ffffff;
}

.app {
  display: flex;
  min-height: 100vh;
  width: 80vw;
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  width: 100vw;
  background-color: #1c1c1e;
}

.mobile-header {
  display: none;
  background-color: #2c2c2e;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.hamburger-menu {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2c2c2e;
  z-index: 999;
  overflow-y: auto;
  padding: 1rem;
  text-align: center;
}

.mobile-menu .profile {
  margin-bottom: 2rem;
}

.mobile-menu .profile img {
  width: 100px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.mobile-menu .profile h2 {
  margin: 0.5rem 0;
}

.mobile-menu .profile p {
  margin: 0.25rem 0;
}

.mobile-menu nav {
  display: flex;
  justify-content: center;
}

.mobile-menu nav ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 300px;
}

.mobile-menu nav ul li {
  padding: 1rem 0;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu nav ul li:last-child {
  border-bottom: none;
}

.mobile-menu nav ul li.active {
  color: #00adb5;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
  }

  .mobile-header {
    display: flex;
    align-items: center;
  }

  .mobile-header h1 {
    margin-left: 1rem;
  }

  .mobile-menu {
    display: block;
  }

  .main-content {
    padding-top: 4rem;
  }

  .mobile-hidden {
    display: none;
  }
}
</style>
