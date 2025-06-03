<template>
 <div>  
      <Header />
      <Content class="bg-white">
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