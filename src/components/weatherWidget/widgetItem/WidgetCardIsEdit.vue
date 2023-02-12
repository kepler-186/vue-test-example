<template>
  <div class="widget-is-edit" data-el="draggable">
    <WidgetIcon :name="`moveIcon`"/><span class="widget-is-edit__text">{{props.city}}</span>
    <button class="btn btn-delete" @click="removeWidget"><WidgetIcon :name="`deleteIcon`"/></button>
  </div>
</template>

<script lang="ts" setup>
import WidgetIcon from '@/components/weatherWidget/WidgetIcon.vue';
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['removeWidget'])
const props = defineProps({
  city: {
      type: String
    }
})

const removeWidget = () =>  emit('removeWidget')
</script>