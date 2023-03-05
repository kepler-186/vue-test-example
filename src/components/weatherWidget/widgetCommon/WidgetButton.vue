<template>
    <button type="button" :class="props.className" v-bind="$attrs">
      <WidgetIcon :name="props.img"/><span v-if="props.text" class="btn-base__text">{{props.text}}</span>
    </button>
</template>
<script lang="ts" setup>
  import WidgetIcon from './WidgetIcon.vue'
  import { defineProps } from 'vue'
  const props = defineProps({
    img: { type: String, required: true },
    text: {type: String},
    className:  {type: String}
  })
</script>