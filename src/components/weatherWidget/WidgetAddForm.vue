<template>
  <div v-if="loading" class="widget-is-edit widget-is-edit_loading"/>
  <form class="form">
    <input class="form__input" type="text" @change="findCity"/>
    <button @click="addWidget" class="btn-base btn-base_add" type="button">
      <WidgetIcon :name="`addIcon`"/>
      <span class="btn-base__text">Add city</span>
    </button>
  </form>
  <WidgetError :errorMessage="errMsg" v-if="errMsg"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Widget from '@/types/widget'
import { getWidgetData } from '@/api/widget';
import WidgetError from '@/components/weatherWidget/WidgetError.vue'
import WidgetIcon from '@/components/weatherWidget/WidgetIcon.vue'

export default defineComponent({
  name: "WidgetAddForm",
  components: {
    WidgetError,
    WidgetIcon
  },
  data() {
    return {
      city: '',
      widgetData: {} as Widget,
      errMsg: '',
      loading: false
    }
  },
  methods: {
    findCity(e: Event){
      const target = e.target as HTMLInputElement;
      this.city = target.value;
    },
    setWidgetData(widgetData: Widget){
      this.$emit('addWidget', widgetData)
      this.errMsg = ''
      this.loading = false
    },
    showErrorMessage(error: string){
      this.errMsg = error
      this.loading = false
    },
    async addWidget() {
      this.loading = true
      await getWidgetData(this.city, this.setWidgetData, this.showErrorMessage)
    }
  }
})
</script>
