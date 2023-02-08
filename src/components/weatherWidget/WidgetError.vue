
<template>
  <div class="error-message">{{ errorMessage }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "WidgetError",
  props: {
    errorMessage: {
      type: String
    }
  },
})
</script>
