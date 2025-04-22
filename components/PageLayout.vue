<template>
    <div class="bg-cover bg-center bg-no-repeat" style="background-image: url('https://lerntherapiefreiburg.de/wp-content/uploads/2018/03/backgr.png');">
    
      <Header />
      <Content>
        <div v-if="layout" class="flex flex-col md:flex-row  items-start">
        <slot />
      </div>
      <div v-else class="flex flex-col">
        <slot />
      </div>
      </Content>
    <Footer />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'PageLayout',
  props: {
    layout: String,
  }
})
</script>