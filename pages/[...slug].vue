<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('article' + route.path, async () => {
  const t = await queryCollection('articles').path(route.path)
  if (!t) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
  return t.first()
})


const imgsrc = computed(() => '/img/' + page.value.image)
const imgclass = computed(() => (page.value?.layout == 'columns' ? 'w-32' : 'w-full'))

</script>

<template>
  <PageLayout v-if="page" :layout="page?.layout">
    <div class="mb-10 mr-10 md:mt-30 mt-20">
      <a :href="imgsrc"><img v-if="page?.image" :src="imgsrc" :class="imgclass" class="object-scale-down" /></a>
    </div>
    <ContentRenderer class="text-light-500 mb-18 md:mt-30 mt-20" id="html-content" :value="page" />
  </PageLayout>
</template>