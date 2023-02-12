<template>
  <Suspense>
    <template #default>
      <WidgetContainer/>
    </template>
    <template #fallback>
      <WidgetCardSkeleton/>
    </template>
  </Suspense>
  <WidgetError :errorMessage="errMsg" v-if="errMsg"/>
</template>

<script lang="ts" setup>
import { onErrorCaptured, ref } from 'vue'
import WidgetContainer from '@/components/weatherWidget/WidgetContainer.vue'
import WidgetError from '@/components/weatherWidget/WidgetError.vue'
import WidgetCardSkeleton from '@/components/weatherWidget/widgetItem/WidgetCardSkeleton.vue'

const errMsg = ref('')
 onErrorCaptured(e => {
      errMsg.value = `Something went wrong ${e}`;
})
</script>

<style lang="scss">
  @import './../assets/css/styles.scss';
</style>