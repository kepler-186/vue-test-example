<template>
  <div class="widgets" @drop.prevent="onDrop" @dragover.prevent @dragenter.prevent @dragstart="onDragStart">
    <WidgetButton @on-click-button="toggleEditMode" :text="'Edit'" :img="'editIcon'" className="btn-base"/>
    <WidgetCard
        v-for="(widget,index) in widgetData" 
        :widget="widget" 
        :key="index"
        :edit-mode="editMode" 
        :index="index"
        @remove-widget-event="removeWidget(index)"
        />
    <WidgetAddForm v-if="editMode" @add-widget-event="addWidget"/>
  </div>
</template>

<script lang="ts" setup>
import Widget from '@/types/widget'
import { ref } from 'vue'
import WidgetCard from '@/components/weatherWidget/widgetItem/WidgetCard.vue'
import WidgetButton from '@/components/weatherWidget/WidgetButton.vue'
import WidgetAddForm from '@/components/weatherWidget/WidgetAddForm.vue'
import { getWidgetData } from '@/api/widget'

const editMode = ref(false)
const draggableElementId = ref(-1)
const widgetData = ref<Widget[]>([])

const toggleEditMode = () =>  editMode.value = !editMode.value

const draggableElement = (event: DragEvent) => {
    const currentElement = event.target as HTMLElement;
    return currentElement?.hasAttribute('[data-el="draggable"]') ?
        currentElement : currentElement.closest('[data-el="draggable"]')
  }

  const onDragStart = (event: DragEvent) => {
    const elementStart =  draggableElement(event);
    draggableElementId.value = elementStart ? Number(elementStart.id) : -1
  }

  const onDrop = (event: DragEvent) => {
    const source = Number(draggableElement(event)?.id)
    if (source !== draggableElementId.value) {
      swapWidgetDataItems(source, draggableElementId.value)
    }
  }
 
  const swapWidgetDataItems = (source: number, destination: number) => {
    [widgetData.value[source], widgetData.value[destination]] = [widgetData.value[destination], widgetData.value[source]]
  }

  const removeWidget = (index: number) => widgetData.value.splice(index, 1)
  const addWidget = (widget: Widget) =>  widgetData.value.push(widget)

  await getWidgetData('Omsk', addWidget)
</script>