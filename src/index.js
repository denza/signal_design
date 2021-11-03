// Test import of styles
import '@/styles/tailwind.scss'

// Import Alpine.js
import Alpine from 'alpinejs'
import '@/js/parallax'
// Import AOS animation library
// import * as AOS from '@/js/aos'
import AOS from 'aos'
import '@/styles/aos.css'

AOS.init()

window.Alpine = Alpine

Alpine.start()

// // Test import of a JavaScript module
// import { example } from '@/js/example'

// // Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// // Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// const heading = document.createElement('h1')
// heading.textContent = example()

// // Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)
