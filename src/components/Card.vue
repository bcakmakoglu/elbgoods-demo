<script lang="ts" setup>
import UserIcon from '~/assets/user.svg'
import CateringIcon from '~/assets/catering.svg'
import FavIcon from '~/assets/heart.svg'

interface Props {
  id: number
  title: string
  zipCode: string
  area: string | null
  city: string
  country: string
  capacityMin: number
  capacityMax: number
  rooms: number | null
  cateringType: string
  price: string
  image: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="relative group">
    <!-- Image + Callout -->
    <div class="relative rounded overflow-hidden mb-2">
      <img
        class="w-full transform transition-transform duration-300 hover:scale-108 ease-in-out rounded overflow-hidden"
        :src="props.image"
        alt=""
        :srcset="`${props.image}&w=320 320w, ${props.image}&w=640 640w`"
      />
      <div class="text-left absolute bottom-0 left-0 bg-primary text-white rounded-bl rounded-tr p-2 pt-1 leading-4">
        <template v-if="props.price.includes('€')">
          <span class="text-sm">ab</span>
          <br />
        </template>
        <span class="font-bold">{{ props.price }}</span>
      </div>
    </div>

    <!-- Infos -->
    <div class="flex flex-col text-left">
      <div class="text-lg font-semibold">{{ props.title }}</div>
      <div class="text-xs text-primary">
        {{ props.zipCode }} {{ props.city }} {{ props.area ? `- ${props.area}` : '' }}, {{ props.country }}
      </div>
      <div class="flex items-center mt-1">
        <UserIcon class="w-[16px] h-[16px] mr-2" />
        <div class="text-[13px] text-gray-500">
          <template v-if="props.rooms">
            {{ props.rooms > 1 ? `${props.rooms} Räume` : `${props.rooms} Raum` }} ({{ props.capacityMin }} -
            {{ props.capacityMax }})
          </template>
          <template v-else> {{ props.capacityMin }} - {{ props.capacityMax }} </template>
        </div>
      </div>
      <div class="flex items-center mt-1">
        <CateringIcon class="w-[16px] h-[16px] mr-2" />
        <div class="text-[13px] text-gray-500">
          {{ props.cateringType }}
        </div>
      </div>
    </div>

    <!-- Fav-Icon -->
    <button
      class="hidden group-hover:block flex justify-center items-center rounded text-sm transition focus:outline-none m-2 absolute right-0 top-0 shadow-lg w-[40px] h-[50px] transform hover:scale-108 bg-white text-red-500 hover:bg-gray-100"
    >
      <FavIcon class="w-[18px] h-[18px]" />
    </button>
  </div>
</template>
