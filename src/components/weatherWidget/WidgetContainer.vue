<template>
  <div class="widgets" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent @dragstart="onDragStart($event)">
      <button @click="toggleEditMode()" class="btn-base btn-base_edit">
      <WidgetIcon :name="`editIcon`"/><span class="btn-base__text">Edit</span>
    </button>
    <div class="widgets__item" v-for="(widget,index) in widgetData" :key="`${ index }_${ new Date().getTime()}`">
      <WidgetCardIsEdit v-if="editMode" :city="widget.name" :id="index" draggable="true" @removeWidget="removeWidget(index)"/>
      <WidgetCard v-else :widget="widget"/>
    </div>
    <WidgetAddForm v-if="editMode" @addWidget="addWidget"/>
  </div>
</template>

<script lang="ts">
import Widget from '@/types/widget'
import { defineComponent } from 'vue'
import WidgetCardIsEdit from '@/components/weatherWidget/widgetItem/WidgetCardIsEdit.vue'
import WidgetCard from '@/components/weatherWidget/widgetItem/WidgetCard.vue'
import WidgetIcon from '@/components/weatherWidget/WidgetIcon.vue'
import WidgetAddForm from '@/components/weatherWidget/WidgetAddForm.vue'
import { getWidgetData } from '@/api/widget'

export default defineComponent({
  name: 'WidgetContainer',
  components: {
    WidgetCardIsEdit,
    WidgetCard,
    WidgetAddForm,
    WidgetIcon
  },

  data() {
    return {
      editMode: false,
      draggableElementId: -1,
      widgetData: [ ] as Widget[] 
    }
  },

  methods: {
   toggleEditMode(): void {
    this.editMode = !this.editMode
   },

  draggableElement (event: Event) {
    const currentElement = event.target as HTMLElement;
    return currentElement?.hasAttribute('[data-el="draggable"]') ?
        currentElement : currentElement.closest('[data-el="draggable"]')
  },

  onDragStart(event: Event) {
    const elementStart =  this.draggableElement(event);
    this.draggableElementId = elementStart ? Number(elementStart.id) : -1
  },

   onDrop(event: Event) {
    event.preventDefault();
    const source = Number(this.draggableElement(event)?.id)
    if (source !== this.draggableElementId) {
      this.swapWidgetDataItems(source, this.draggableElementId)
    }
  },

 swapWidgetDataItems(source: number, destination: number) {
    [this.widgetData[source], this.widgetData[destination]] = [this.widgetData[destination], this.widgetData[source]]
  },

  removeWidget(index: number) {
    this.widgetData.splice(index, 1)
  },

  addWidget (widget: Widget) {
    this.widgetData.push(widget);
  }
  } ,
  async mounted() {
      const defaultCity = 'Vorkuta';
      await getWidgetData(defaultCity, this.addWidget)
  }
})
</script>