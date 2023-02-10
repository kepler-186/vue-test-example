<template>
<svg v-if="name ==='addIcon'" fill="#ffffff" width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier">
  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3a1,1,0,0,1,0,2Z"/>
</g>
</svg>

<svg v-if="name ==='deleteIcon'" fill="#ff0000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier">
  <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"/>
</g>
</svg>

<svg v-if="name ==='editIcon'" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V11.5C20 10.9477 20.4477 10.5 21 10.5C21.5523 10.5 22 10.9477 22 11.5V12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2H12.5C13.0523 2 13.5 2.44772 13.5 3C13.5 3.55228 13.0523 4 12.5 4H12Z" fill="#ffffff"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2156 2.82088C17.7412 2.29528 18.4541 2 19.1974 2C19.9407 2 20.6535 2.29528 21.1791 2.82088C21.7047 3.34648 22 4.05934 22 4.80265C22 5.54596 21.7047 6.25883 21.1791 6.78443L20.396 7.56757C20.0055 7.9581 19.3723 7.9581 18.9818 7.56757L16.4324 5.01824C16.0419 4.62771 16.0419 3.99455 16.4324 3.60402L17.2156 2.82088ZM15.0182 6.43245C14.6277 6.04192 13.9945 6.04192 13.604 6.43245L9.14269 10.8938C9.01453 11.0219 8.92362 11.1825 8.87966 11.3583L8.02988 14.7575C7.94468 15.0982 8.04453 15.4587 8.29291 15.7071C8.54129 15.9555 8.90178 16.0553 9.24256 15.9701L12.6417 15.1204C12.8175 15.0764 12.9781 14.9855 13.1062 14.8573L17.5676 10.396C17.9581 10.0055 17.9581 9.37231 17.5676 8.98179L15.0182 6.43245Z" fill="#ffffff"/> </g>
</svg>

<svg v-if="name ==='moveIcon'" width="24px" height="24px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#2c3e50">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier">
  <path class="move-icon" d="M13,22.5,7.82,17.36a2,2,0,0,1-.59-1.43,2,2,0,0,1,2-2,2,2,0,0,1,1.43.59L12,15.82V6.38a2,2,0,0,1,1.74-2,1.87,1.87,0,0,1,1.51.56,1.83,1.83,0,0,1,.57,1.34V12l5,.72a1.91,1.91,0,0,1,1.64,1.89h0a17.18,17.18,0,0,1-1.82,7.71l-.09.18"/>
  <polyline class="move-icon" points="7.23 11.04 4.36 13.91 1.5 11.04"/>
  <line class="move-icon" x1="4.36" y1="6.27" x2="4.36" y2="13.91"/>
  <polyline class="move-icon" points="5.32 4.36 8.18 1.5 11.04 4.36"/>
  <line class="move-icon" x1="8.18" y1="9.14" x2="8.18" y2="1.5"/>
</g>
</svg>

<svg v-if="name ==='pressureIcon'" fill="#000000" width="18px" height="18px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier">
  <path d="M8.127 13.6c-.689 1.197-.225 2.18.732 2.732.956.553 2.041.465 2.732-.732.689-1.195 5.047-11.865 4.668-12.084-.379-.219-7.442 8.888-8.132 10.084zM10 6c.438 0 .864.037 1.281.109.438-.549.928-1.154 1.405-1.728A9.664 9.664 0 0 0 10 4C4.393 4 0 8.729 0 14.766c0 .371.016.742.049 1.103.049.551.54.955 1.084.908.551-.051.957-.535.908-1.086A10.462 10.462 0 0 1 2 14.766C2 9.85 5.514 6 10 6zm7.219 1.25c-.279.75-.574 1.514-.834 2.174C17.4 10.894 18 12.738 18 14.766c0 .316-.015.635-.043.943a1.001 1.001 0 0 0 1.992.182c.033-.37.051-.748.051-1.125 0-2.954-1.053-5.59-2.781-7.516z"/>
  </g>
</svg>

<svg v-if="name ==='dropsIcon'" fill="#000000" height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 230.516 230.516" xml:space="preserve">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M153.26,42.918c-1.552-1.592-4.35-1.592-5.903,0c-2.907,2.988-71.16,73.617-71.16,113.487 c0,40.865,33.248,74.111,74.111,74.111c40.863,0,74.111-33.246,74.111-74.111C224.419,116.535,156.167,45.905,153.26,42.918z M150.308,222.282c-36.324,0-65.877-29.553-65.877-65.877c0-32.138,52.705-90.537,65.877-104.629 c13.176,14.089,65.877,72.475,65.877,104.629C216.185,192.729,186.633,222.282,150.308,222.282z"/> <path d="M88.654,62.791c0-21.572-34.402-57.564-38.326-61.597c-1.552-1.592-4.35-1.592-5.903,0 C40.5,5.227,6.097,41.219,6.097,62.791c0,22.76,18.516,41.276,41.278,41.276S88.654,85.55,88.654,62.791z M47.375,95.832 c-18.218,0-33.043-14.823-33.043-33.041c0-14.103,21.656-40.425,33.043-52.737c11.391,12.308,33.043,38.62,33.043,52.737 C80.419,81.009,65.594,95.832,47.375,95.832z"/> <path d="M43.258,78.176c-6.811,0-12.352-5.541-12.352-12.352c0-2.274-1.842-4.117-4.117-4.117s-4.117,1.844-4.117,4.117 c0,11.351,9.236,20.587,20.587,20.587c2.276,0,4.117-1.844,4.117-4.117S45.534,78.176,43.258,78.176z"/> <path d="M150.308,197.578c-22.702,0-41.173-18.469-41.173-41.173c0-2.274-1.842-4.117-4.117-4.117 c-2.275,0-4.117,1.844-4.117,4.117c0,27.243,22.163,49.408,49.408,49.408c2.276,0,4.117-1.844,4.117-4.117 S152.583,197.578,150.308,197.578z"/> </g> </g> </g> </g>
</svg>

  <svg  v-if="name ==='windIcon'" width="21px" height="21px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h9.11A1.89 1.89 0 0 0 16 6.11v0c0-1.615-1.894-2.486-3.12-1.435L12.5 5M3 12h14.902C19.06 12 20 12.94 20 14.098v0c0 2.152-2.853 2.91-3.92 1.041L16 15M5 16h6.11A1.89 1.89 0 0 1 13 17.89v0c0 1.615-1.894 2.486-3.12 1.435L9.5 19"></path> </g>
  </svg>

</template>
 
<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  name: {
      type: String,
      required: true
    }
})
</script>