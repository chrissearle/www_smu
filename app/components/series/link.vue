<script setup lang="ts">
const {seriesLink} = useLinks()

const props = defineProps<{
  series: string
}>()

</script>

<template>
  <div class="mt-1 flex flex-wrap gap-2">
    <UBadge
        variant="soft"
    >
      <NuxtLink :to="seriesLink(series)">
        <UIcon name="i-heroicons-user-group" class="h-4 w-4" />
        {{ series }}
      </NuxtLink>
    </UBadge>
  </div>
</template>