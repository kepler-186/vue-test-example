<template>
      <WidgetCardEditMode 
          v-if="props.editMode" 
          :city="props.widget.name" 
          :id="props.index"
          draggable="true" 
          @remove-element="$emit('removeWidgetEvent', index)"
        />
      <WidgetCardViewMode v-else :widget="props.widget"/>   
</template>

<script lang="ts" setup>
import WidgetCardEditMode from './WidgetCardEditMode.vue'
import WidgetCardViewMode from './WidgetCardViewMode.vue'
import Widget from '@/types/widget'
import { defineProps, PropType } from 'vue'
const props = defineProps({
  widget: {
      type: Object as PropType<Widget>,
      required: true
    },
    editMode: {type: Boolean, required: true},
    index: {type: Number, required: true},
    id: {type: Number}
})
</script>
