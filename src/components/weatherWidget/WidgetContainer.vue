<template>
  <div class="widgets" @drop.prevent="onDrop" @dragover.prevent @dragenter.prevent @dragstart="onDragStart">
      <button @click="toggleEditMode" class="btn-base btn-base_edit">
      <WidgetIcon :name="`editIcon`"/><span class="btn-base__text">Edit</span>
    </button>
    <div class="widgets__item" v-for="(widget,index) in widgetData" :key="`${ index }_${ new Date().getTime()}`">
      <WidgetCardIsEdit v-if="editMode" :city="widget.name" :id="index" draggable="true" @removeWidget="removeWidget(index)"/>
      <WidgetCard v-else :widget="widget"/>
    </div>
    <WidgetAddForm v-if="editMode" @addWidget="addWidget"/>
  </div>
</template>

<script lang="ts" setup>
import Widget from '@/types/widget'
import { ref, onMounted } from 'vue'
import WidgetCardIsEdit from '@/components/weatherWidget/widgetItem/WidgetCardIsEdit.vue'
import WidgetCard from '@/components/weatherWidget/widgetItem/WidgetCard.vue'
import WidgetIcon from '@/components/weatherWidget/WidgetIcon.vue'
import WidgetAddForm from '@/components/weatherWidget/WidgetAddForm.vue'
import { getWidgetData } from '@/api/widget'

const editMode = ref(false)
const draggableElementId = ref(-1)
const widgetData = ref<Widget[]>([])

onMounted(async() => {
  const defaultCity = 'Vorkuta';
  await getWidgetData(defaultCity, addWidget)
})

const toggleEditMode = () => editMode.value = !editMode.value

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
</script>