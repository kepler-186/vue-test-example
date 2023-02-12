
<template>
  <div class="error-message">{{ props.errorMessage }}</div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  errorMessage: {
      type: String
    }
})
</script>
