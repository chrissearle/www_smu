<script setup lang="ts">
const {categoryLink} = useLinks()

const {data} = await useAsyncData('NavCategories', () => queryContent().where({'category': {$exists: true}}).only('category').find())

const uniqueFilter = (value: string, index: number, self: string[]) => {
  return self.indexOf(value) === index;
}

const categories = data.value?.map((c) => {
  if (Array.isArray(c.category)) {
    return c.category;
  }
  return c.category.split(",");
}).flat().map((c) => c.trim()).filter(uniqueFilter).sort()
</script>

<template>
  <div class="d-none d-md-flex" v-if="categories?.length > 0">
    <v-spacer/>

    <v-btn v-for="category in categories" :to="categoryLink(category)">
      {{ category }}
    </v-btn>
  </div>
</template>
