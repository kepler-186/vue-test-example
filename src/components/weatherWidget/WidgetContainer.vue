<template>
  <widget-sort>
    <template #sort="sortProps">
      <WidgetButton @click="toggleEditMode" :text="'Edit'" :img="'editIcon'" className="btn-base"/>
      <WidgetCard
        v-for="(widget,index) in widgetData"
        :widget="widget"
        :key="index"
        :edit-mode="editMode"
        :index="index"
        @remove-widget-event="removeWidget(index)"
        @dragend="swapWidgetDataItems(sortProps)"
      />
      <WidgetAddForm v-if="editMode" @add-widget-event="addWidget"/>
    </template>
  </widget-sort>
</template>

<script lang="ts" setup>
  import Widget from '@/types/widget'
  import Sort from '@/types/sort'
  import { ref } from 'vue'
  import WidgetSort from '@/components/weatherWidget/widgetCommon/WidgetSort.vue'
  import WidgetCard from '@/components/weatherWidget/widgetItem/WidgetCard.vue'
  import WidgetButton from '@/components/weatherWidget/widgetCommon/WidgetButton.vue'
  import WidgetAddForm from '@/components/weatherWidget/WidgetAddForm.vue'
  import { getWidgetData } from '@/api/widget'

  const editMode = ref(false)
  const widgetData = ref<Widget[]>([])
  const toggleEditMode = () =>  editMode.value = !editMode.value
 
  const swapWidgetDataItems = (sortProps: Sort) => {
    const {sourceId, draggableElementId} = sortProps;
    const dragElementsExist = sourceId >= 0 && draggableElementId >= 0;
    if (dragElementsExist && (sourceId !== draggableElementId)) {
      [widgetData.value[sourceId], widgetData.value[draggableElementId]] = [widgetData.value[draggableElementId], widgetData.value[sourceId]]
    }
  }
  const removeWidget = (index: number) => widgetData.value.splice(index, 1)
  const addWidget = (widget: Widget) =>  widgetData.value.push(widget)
  await getWidgetData('Omsk', addWidget)
</script>