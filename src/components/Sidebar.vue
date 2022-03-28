<script lang="ts" setup>
import IconCancel from '~/assets/cancel.svg'

interface Props {
  title?: string
  visible?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['hide'])
const state = reactive({
  visible: props.visible,
  bounds: {
    width: 0,
    height: 0,
  },
})
const element = templateRef<HTMLElement>('el', null)

onMounted(() => {
  if (element.value) {
    state.bounds = element.value.getBoundingClientRect()
  }
})
watch(
  () => props.visible,
  (v) => (state.visible = v),
)

onClickOutside(element, () => {
  emit('hide')
  state.visible = false
})
</script>
<template>
  <div v-if="state.visible" class="bg-black bg-opacity-50 fixed inset-0" @click="() => (state.visible = false)" />
  <div
    ref="el"
    class="fixed top-0 h-full xl:max-w-[500px] transition-all duration-400 ease-in-out bg-white w-full"
    :style="{ right: state.visible ? 0 : `-${state.bounds.width}px`, opacity: state.visible ? 100 : 0 }"
  >
    <div class="relative flex flex-col h-full">
      <div class="px-6 py-5 flex items-center justify-between bg-gray-100 font-bold text-xl">
        {{ props.title }}
        <button @click="() => (state.visible = false)">
          <IconCancel class="text-gray-700 hover:text-black w-[18px] h-[18px]" />
        </button>
      </div>
      <div class="flex-1 overflow-y-scroll overflow-x-hidden">
        <slot>Some content here</slot>
      </div>
      <div class="p-6">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
