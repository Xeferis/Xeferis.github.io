<script setup>
const props = defineProps(['to', 'label'])
let link = false
if (props.to) {
  link = true
}
</script>
<template>
  <button v-if="!link"  type="button" class="glass-btn">
    {{ label }}
  </button>
  <a v-else :href="to" class="glass-btn">
    {{ label }}
  </a>
</template>
