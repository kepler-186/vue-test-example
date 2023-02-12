<template>
  <div class="widget">
    <div class="widget__date">
    {{new Date().toDateString()}}
    </div>
    <div class="widget__title">{{props.widget.name}},
      {{props.widget.sys?.country}}
    </div>
    <div class="widget__header">
      <img
          alt="test"
          width="100"
          height="100"
          :src="`https://openweathermap.org/img/wn/${props.widget.weather[0].icon}@4x.png`"
      />
      <span class="widget__text-bg">
        {{Math.round(props.widget.main.temp)}}°C
      </span>
    </div>
    <div class="widget__content">
      <div class="widget__accent">
        Feels like: {{Math.round(props.widget.main.feels_like)}}°C
        <p>{{props.widget.weather[0].description}}</p>
      </div>
      <div class="widget__line">
        <span class="widget__text"><WidgetIcon :name="`windIcon`"/><span>{{props.widget.wind.speed}} m/s</span></span>
        <span class="widget__text"><WidgetIcon :name="`pressureIcon`"/><span>{{props.widget.main.pressure}} hPa</span></span>
      </div>
      <div class="widget__line">
        <span class="widget__text"><WidgetIcon :name="`dropsIcon`"/><span>Humidity: {{props.widget.main.humidity}}%</span></span>
        <span class="widget__text">Visibility: {{props.widget.visibility}}m</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Widget from '@/types/widget'
import WidgetIcon from '@/components/weatherWidget/WidgetIcon.vue'
import { defineProps, PropType } from 'vue'
const props = defineProps({
  widget: {
      type: Object as PropType<Widget>,
      required: true
    }
})
</script>
