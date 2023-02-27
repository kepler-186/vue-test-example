<template>
  <div class="widget-is-edit" data-el="draggable">
    <WidgetIcon :name="'moveIcon'"/><span class="widget-is-edit__text">{{props.city}}</span>
    <WidgetButton @click="$emit('removeElement')" :img="'deleteIcon'" className="btn-delete"/>
  </div>
</template>

<script lang="ts" setup>
import WidgetIcon from '@/components/weatherWidget/WidgetIcon.vue';
import WidgetButton from '@/components/weatherWidget/WidgetButton.vue';
import { defineProps } from 'vue'

const props = defineProps({
  city: { type: String, required: true }
})
</script>