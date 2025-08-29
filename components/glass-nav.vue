<script setup lang="ts">
import { ref, computed } from 'vue'

const selected = ref('one')
const orb = useTemplateRef('orb')

// Map radio values to pixel `left` positions
const orbLeft = computed(() => {
  switch (selected.value) {
    case 'one':
      orb.value?.classList.remove('move-left')
      return '5px'
    case 'two':
      return '85px'
    case 'three':
      return '165px'
    default:
      return '5px'
  }
})
</script>

<template>
    <div class="glass relative top-9 left-1/2 -translate-x-1/2 flex justify-center items-center w-fit h-14 gap-4 p-4 rounded-full">
        <div ref="orb" class="glass absolute w-[85px] h-10 left-[5px] duration-700" :style="{ left: orbLeft }"></div>
        <label class="flex justify-center items-center w-16 z-10">
            <input type="radio" name="menu" value="one" v-model="selected" class="appearance-none" />
            Home
        </label>
        <label class="flex justify-center items-center w-16 z-10">
            <input type="radio" name="menu" value="two" v-model="selected" class="appearance-none" />
            About
        </label>
        <label class="flex justify-center items-center w-16 z-10">
            <input type="radio" name="menu" value="three" v-model="selected" class="appearance-none" />
            Contact
        </label>
    </div>
</template>