<script setup lang="ts">
// types
import type { Project } from '@/types'

/**
 * page metadata
 * ================================================================
 */
useHead({
  title: "Create Turborepo (vue-nuxt:docs)",
  meta: [{ name: "description", content: "Generated by create turbo" }],
});

/**
 * route
 * ================================================================
 */
const route = useRoute()

/**
 * data fetching
 * ================================================================
 */
const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  slug
}`
const { data: projectData } = useSanityQuery<Partial<Project>>(
  projectQuery,
  {
    slug: route.params.slug
  }
)

</script>

<template>
  <h1 v-if="projectData">{{ projectData.title }}</h1>
</template>
