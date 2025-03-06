import './style.css'

// Toggle menu functionality
const toggleBtn = document.querySelector('.toggle-btn')
const navLinks = document.querySelector('.nav-links')
const closeBtn = document.querySelector('.close-btn')

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active')
})

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
    navLinks.classList.remove('active')
  }
})

