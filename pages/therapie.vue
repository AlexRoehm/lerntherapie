<script lang="ts" setup>
const { data: posts } = await useAsyncData(() => {
  return queryCollection('articles')
    .select('title', 'path', 'image', 'category', 'description', 'id', 'date')
    .where('category', 'LIKE', '%therapie%')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
    <PageLayout>    
  <div class="flex justify-center md:mt-10 mb-20">

  <div class="w-full grid grid-col-1 lg:grid-cols-3 gap-10 lg:gap-8 justify-items-center text-light-500">
  <div
      v-for="post in posts"
      :key="post.id"
    >
      <Card :post="post" />
    </div>
  </div>
</div>
    </PageLayout>
</template>