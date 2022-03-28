<script lang="ts" setup>
import FilterIcon from '~/assets/filter.svg'
import ArrowDownIcon from '~/assets/arrow-down.svg'
import Sidebar from '~/components/Sidebar.vue'

const state = reactive({
  showSidebar: false,
})

const toggleSidebar = () => {
  state.showSidebar = !state.showSidebar
}

const toolbarItems = [
  'Locationart',
  'Indoor / Outdoor',
  'Preise',
  'Locationgröße',
  'Catering',
  'Technik',
  'Mietzeitraum',
  'Raumeigenschaften',
  'Locationeigenschaften',
  'Lage der Location',
  'Entfernungen',
  'Außenfläche',
  'Internetverfügbarkeit',
  'Bühne',
  'Parken',
  'Übernachten',
]
</script>
<template>
  <div class="hidden md:block flex items-center h-[70px] md:h-[90px] px-5 bg-white border-b border-gray-300">
    <div class="grid gap-5 grid-cols-4 flex-1 items-end">
      <div>
        <div class="text-lg font-semibold">Standort</div>
        <div class="flex items-center h-10 px-3 relative border bg-white border-gray-400 rounded overflow-hidden">
          <input type="text" placeholder="Ort eingeben" />
        </div>
      </div>

      <div>
        <div class="text-lg font-semibold">Personen</div>
        <div class="flex items-center h-10 px-3 relative border bg-white border-gray-400 rounded overflow-hidden">
          ab&nbsp;
          <div class="font-bold">0</div>
          &nbsp;Personen
        </div>
      </div>

      <div>
        <div class="text-lg font-semibold">Anlass</div>
        <select class="flex items-center h-10 px-3 relative border bg-white border-gray-400 rounded overflow-hidden">
          <option selected>Alle Veranstaltungsarten</option>
        </select>
      </div>

      <div>
        <button
          class="flex items-center h-10 px-3 relative hover:bg-gray-200 transition-colors duration-200 ease-in-out border bg-white border-gray-400 rounded overflow-hidden"
          @click="toggleSidebar"
        >
          <span class="mr-3">Weitere Filter</span>
          <FilterIcon class="w-[20px] h-[20px] text-primary" />
        </button>
      </div>
    </div>
  </div>
  <Teleport to="#app">
    <Sidebar :visible="state.showSidebar" title="Weitere Filter" @hide="() => (state.showSidebar = false)">
      <template v-for="item of toolbarItems" :key="item">
        <div class="border-b border-gray-300">
          <div class="flex items-center justify-between px-6 py-5 h-12 font-bold text-xl">
            {{ item }}
            <ArrowDownIcon class="w-[20px] h-[20px] text-primary" />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex items-center justify-between">
          <div class="text-sm text-red-500">Filter löschen</div>
          <div class="bg-primary rounded px-3 py-2 text-white"><strong>243</strong> Locations anzeigen</div>
        </div>
      </template>
    </Sidebar>
  </Teleport>
</template>
