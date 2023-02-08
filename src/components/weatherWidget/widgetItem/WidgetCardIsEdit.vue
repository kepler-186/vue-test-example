<template>
  <div class="widget-is-edit" data-el="draggable">
    <WidgetIcon :name="`moveIcon`"/><span class="widget-is-edit__text">{{city}}</span>
    <button class="btn btn-delete" @click="removeWidget"><WidgetIcon :name="`deleteIcon`"/></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WidgetIcon from '@/components/weatherWidget/WidgetIcon.vue';

export default defineComponent({
  name: "WidgetCardIsEdit",
  components: {
    WidgetIcon
  },
  props: {
    city: {
      type: String
    }
  },
  methods: {
    removeWidget(){
      this.$emit('removeWidget');
    }
  }
})
</script>