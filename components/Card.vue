<template>
  <div class="max-w-100 h-full">
    <nuxt-link :to="post.path">
      <div class="flex flex-col h-full">
        <img :src="'/img/'+post.image"/>
        <div class="bg-white h-full p-10">
          <strong>{{ post.title }}</strong>
          <div class="text-xs mt-4 leading-relaxed">
            {{ post.description }}
          </div>
        </div>
      </div>
    </nuxt-link>

  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Card',
  props: {
    post: Object,
  },
  setup(props, ctx) {
  }
})
</script>
