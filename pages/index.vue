<script setup>
import Articles from "@/components/Articles.vue";

const { data } = await useFetch(() => '/api/_content/query?only=_id,title,description,_path, date, author')
// const { data } = await useFetch(() => '/api/_content/query')

</script>

<template>
  <div>
    <Articles :articles="data" />
  </div>
</template>
