<script setup lang="ts">
const {tagsLink} = useLinks()

const props = defineProps<{
  tags: string | string[]
}>()

</script>

<template>
  <div class="mt-1 flex flex-wrap gap-2">
    <TagsBadges :tags="props.tags"/>
  </div>
</template>