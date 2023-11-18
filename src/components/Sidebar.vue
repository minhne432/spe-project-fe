<template>
  <nav class="sidebar" :class="{ close: !isSidebarOpen }">
    <header>
      <div class="image-text">
        <span class="image">
          <img src="@/assets/logo.png" alt="logo" />
        </span>

        <div class="text header-text">
          <span class="name">Bookstore</span>
          <span class="user-name">Admin</span>
        </div>
      </div>

      <i class="bx bx-chevron-right toggle" @click="toggleSidebar"></i>
    </header>

    <div class="menu-bar">
      <div class="menu">
        <ul class="menu-links">
          <!-- Home -->
          <li class="nav-links">
            <a href="#">
              <i class="bx bx-home-alt icon"></i>
              <span class="text nav-text">Home</span>
            </a>
          </li>
          <!-- Notification -->
          <li class="nav-links">
            <a href="#">
              <i class="bx bx-bell icon"></i>
              <span class="text nav-text">Notification</span>
            </a>
          </li>
          <!-- Profile -->
          <li class="nav-links">
            <a href="#">
              <i class="bx bx-user icon"></i>
              <span class="text nav-text">Profile</span>
            </a>
          </li>
          <!-- Setting -->
          <li class="nav-links">
            <a href="#">
              <i class="bx bx-cog icon"></i>
              <span class="text nav-text">Setting</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Logout section -->
      <div class="footer">
        <li class="">
          <a href="/Login">
            <i class="bx bx-log-out icon"></i>
            <span class="text nav-text">Logout</span>
          </a>
        </li>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<style>
body {
  height: 100vh;
  background: var(--body-color);
  transition: var(--tran-04);
}
/* ===== Sidebar ===== */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  padding: 10px 14px;
  background: var(--sidebar-color);
  transition: var(--tran-05);
  z-index: 100;
}
/* use to calc shopindex page later */
.sidebar.close {
  width: 88px;
}
/* ===== Reusable CSS */
.sidebar .text {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  transition: var(--tran-03);
  white-space: nowrap;
  opacity: 1;
}
.sidebar.close .text {
  opacity: 0;
}
.sidebar .image {
  min-width: 60px;
  display: flex;
  align-items: center;
}
.sidebar li {
  height: 50px;
  margin-top: 20px;
  list-style: none;
  display: flex;
  align-items: center;
}
.sidebar li .icon {
  min-width: 60px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar li .icon,
.sidebar li .text {
  color: var(--text-color);
  transition: var(--tran-02);
}
.sidebar header {
  position: relative;
}
.sidebar .image-text img {
  width: 55px;
  border-radius: 6px;
}

.sidebar header .image-text {
  display: flex;
  align-items: center;
}

header .image-text .header-text {
  display: flex;
  flex-direction: column;
}

.header-text .name {
  font-weight: 600;
}
.header-text .user-name {
  margin-top: -2px;
}

.sidebar header .toggle {
  position: absolute;
  top: 50%;
  right: -40px;
  transform: translate(-50%) rotate(180deg);
  height: 25px;
  width: 27px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
  color: var(--sidebar-color);
  font-size: 25px;
  transition: var(--tran-03);
}
.sidebar.close header .toggle {
  transform: translate(-50%);
}

.sidebar li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: var(--tran-04);
}

.sidebar li a:hover {
  background: var(--primary-color);
  border-radius: 5px;
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: var(--sidebar-color);
}

.sidebar .menu-bar {
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
