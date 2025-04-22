<template>
  <div class="bg-accent-500 h-30 flex justify-between px-30 pt-10">
    <div>
      &copy; Andrea Röhm, Freiburg, {{ year }}
  </div>
  <div class="flex">
    <NuxtLink class="pl-12" to="impressum">
        Impressum
    </NuxtLink>
  </div>
  
  </div>
</template>

<script lang="ts" setup>
import {FOOTER} from '~/content/footer'
var now = new Date()
const year = ref(now.getFullYear())
</script>