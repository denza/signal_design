// import { AlpineToast } from 'alpine-toast'
import { AlpineToast } from './alpinetoast.js'

const toasterConfig = {
  containerClasses: 'fixed max-w-16  right-6 top-3 overflow-x-hidden space-y-2 z-90',
  onHideClasses: 'translate-x-full',
  onShowClasses: 'translate-x-full',
  progressBarClasses: 'h-1 bg-gray-2 bg-opacity-50 transition-all absolute bottom-0 left-0 right-0',
  showProgressBar: true,
  toastClasses:
    'bg-primary border text-white block p-4 text-xs transition-transform duration-1000 transform translate-x-full',
}
const error = {
  toastClasses:
    'border-red-dark bg-red border text-white block p-4 text-xs transition-transform duration-1000 transform translate-x-full',
}
const warning = {
  toastClasses:
    'border-yellow-500 bg-yellow-400 border text-white block p-4 text-xs transition-transform duration-1000 transform translate-x-full',
}
const success = {
  toastClasses:
    'border-green-400 bg-green-500 border text-white block p-4 text-xs transition-transform duration-1000 transform translate-x-full',
}
const info = {
  toastClasses:
    'border-primary bg-primary border text-white block p-4 text-xs transition-transform duration-1000 transform translate-x-full',
}

const toaster = new AlpineToast(toasterConfig)

// Wait until the DOM loads then convert to toasts
document.addEventListener('DOMContentLoaded', () => {
  toaster.start()
})

if (document.getElementById('infoBtn') != null) {
  document.getElementById('infoBtn').onclick = (e) => {
    e.preventDefault()
    toaster.newToast(document.getElementById('infoBtn').dataset.toast, info, { duration: 4000 })
  }
}

if (document.getElementById('successBtn') != null) {
  document.getElementById('successBtn').onclick = (e) => {
    e.preventDefault()
    toaster.newToast(document.getElementById('successBtn').dataset.toast, success, {
      duration: 4000,
    })
  }
}

if (document.getElementById('warningBtn') != null) {
  document.getElementById('warningBtn').onclick = (e) => {
    e.preventDefault()
    toaster.newToast(document.getElementById('warningBtn').dataset.toast, warning, {
      duration: 4000,
    })
  }
}

if (document.getElementById('errorBtn') != null) {
  document.getElementById('errorBtn').onclick = (e) => {
    e.preventDefault()
    toaster.newToast(document.getElementById('errorBtn').dataset.toast, error, { duration: 4000 })
  }
}
