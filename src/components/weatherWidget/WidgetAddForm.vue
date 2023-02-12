<template>
  <div v-if="loading" class="widget-is-edit widget-is-edit_loading"/>
  <form class="form">
    <input class="form__input" type="text" @change="findCity"/>
    <WidgetButton @on-click-button="addWidget" :text="'Add city'" :img="'addIcon'" :className="'btn-base'"/>
  </form>
  <WidgetError :errorMessage="errMsg" v-if="errMsg"/>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import Widget from '@/types/widget'
import { getWidgetData } from '@/api/widget';
import WidgetError from '@/components/weatherWidget/WidgetError.vue'
import WidgetButton from '@/components/weatherWidget/WidgetButton.vue'

const city = ref('')
const errMsg = ref('')
const loading = ref(false)
const emit = defineEmits(['addWidgetEvent'])

const findCity = (e: Event) => {
  const target = e.target as HTMLInputElement;
  city.value = target.value;
}

const setWidgetData = (widgetData: Widget) => {
  emit('addWidgetEvent', widgetData)
  errMsg.value = ''
  loading.value = false
}

const showErrorMessage = (error: string) => {
  errMsg.value = error
  loading.value = false
}

const addWidget = async() => {
  loading.value = true
  await getWidgetData(city.value, setWidgetData, showErrorMessage)
}
</script>
