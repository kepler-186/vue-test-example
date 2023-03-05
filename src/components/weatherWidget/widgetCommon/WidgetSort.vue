<template>
  <div class="widgets" @drop.prevent="onDrop" @dragover.prevent @dragenter.prevent @dragstart="onDragStart">
    <slot name="sort" :draggableElementId="draggableElementId" :sourceId="sourceId"></slot>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const draggableElementId = ref(-1)
  const sourceId = ref(-1)

  const draggableElement = (event: DragEvent) => {
    const currentElement = event.target as HTMLElement;
    return currentElement?.hasAttribute('[draggable="true"]') ?
        currentElement : currentElement.closest('[draggable="true"]')
  }

  const onDragStart = (event: DragEvent) => {
    const elementStart =  draggableElement(event);
    draggableElementId.value = elementStart ? Number(elementStart.id) : -1
  }

  const onDrop = (event: DragEvent) => {
    const elementEnd =  draggableElement(event);
    sourceId.value = elementEnd ? Number(elementEnd.id) : -1;
  }
</script>