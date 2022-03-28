<script setup lang="ts">
import StackIcon from '~/assets/stack.svg'
import Grid from '~/components/Grid.vue'
import Card from '~/components/Card.vue'
import Toolbar from '~/components/Toolbar.vue'

const items = await (await fetch('http://localhost:3001/items')).json()
</script>
<template>
  <Toolbar />

  <div class="flex flex-col px-5">
    <div class="py-8">
      <!-- Results count -->
      <div class="flex items-center mb-6 md:mb-12">
        <StackIcon class="w-[24px] h-[24px] mr-3" />
        <div class="md:text-lg font-semibold text-gray-900">{{ items.length > 0 ? items.length : 'Keine' }} Ergebnisse</div>
      </div>

      <!-- Cards grid -->
      <Grid>
        <template v-for="item of items" :key="item.id">
          <Card v-bind="item" />
        </template>
      </Grid>
    </div>
  </div>
</template>
