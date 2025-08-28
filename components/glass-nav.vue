<script setup lang="ts">
import { ref, computed } from 'vue'

const selected = ref('one')

// Map radio values to pixel `left` positions
const orbLeft = computed(() => {
  switch (selected.value) {
    case 'one':
      return '5px'
    case 'two':
      return '85px' // 90px orb + 10px gap approx
    case 'three':
      return '165px'
    default:
      return '5px'
  }
})
</script>

<template>
    <div class="glass relative top-9 left-1/2 -translate-x-1/2 flex justify-center items-center w-fit h-14 gap-4 p-4 rounded-full">
        <div ref="orb" class="glass absolute w-[85px] h-10 left-[5px] transition-all duration-300"  :style="{ left: orbLeft }"></div>
        <label class="flex justify-center items-center w-16">
            <input type="radio" name="menu" value="one" v-model="selected" checked class="appearance-none" />
            One
        </label>
        <label class="flex justify-center items-center w-16">
            <input type="radio" name="menu" value="two" v-model="selected" class="appearance-none" />
            Two
        </label>
        <label class="flex justify-center items-center w-16">
            <input type="radio" name="menu" value="three" v-model="selected" class="appearance-none" />
            Three
        </label>
    </div>
</template>