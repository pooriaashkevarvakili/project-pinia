<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<div class="flex items-center justify-center">
  <span class="text-red-500 text-base">pooria</span>
</div>
</template>

<style scoped>

</style>
