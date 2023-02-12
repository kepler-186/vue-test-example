<template>
  <div class="widget-is-edit" data-el="draggable">
    <WidgetIcon :name="`moveIcon`"/><span class="widget-is-edit__text">{{props.city}}</span>
    <WidgetButton @onClickButton="removeWidget" :img="'deleteIcon'" className="btn-delete"/>
  </div>
</template>

<script lang="ts" setup>
import WidgetIcon from '@/components/weatherWidget/WidgetIcon.vue';
import WidgetButton from '@/components/weatherWidget/WidgetButton.vue';
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['removeWidget'])
const props = defineProps({
  city: {
      type: String
    }
})

const removeWidget = () =>  emit('removeWidget')
</script>