<template>
  <div class="widget-is-edit">
    <WidgetIcon :name="'moveIcon'"/><span class="widget-is-edit__text">{{props.city}}</span>
    <WidgetButton @click="$emit('removeElement')" :img="'deleteIcon'" className="btn-delete"/>
  </div>
</template>

<script lang="ts" setup>
  import WidgetIcon from '@/components/weatherWidget/widgetCommon/WidgetIcon.vue';
  import WidgetButton from '@/components/weatherWidget/widgetCommon/WidgetButton.vue';
  import { defineProps } from 'vue'

  const props = defineProps({
    city: { type: String, required: true }
  })
</script>