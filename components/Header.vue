<template>
  <div>
    <!-- With hero image -->
    <div class="bg-cover bg-center bg-no-repeat" :style="{ 'background-image': `url(${heroImg})` }">
      <div v-if="hero">
        <header class="text-white absolute fixed top-0 w-full">
          <div class="max-w-7xl mx-auto flex items-center p-4 ">
            <!-- Logo -->
            <a href="/">
              <img src="https://lerntherapiefreiburg.de/wp-content/uploads/2018/03/web-logo-w.png" alt="Logo"
                :class="navHeight" />
            </a>
            <div class="flex-grow"></div>
            <div class="invisible md:visible">
                           <!-- Desktop Menu -->
            <nav class="hidden md:flex space-x-6 font-extrabold uppercase text-xs tracking-wider">
              <div v-for="item in menu" class="flex flex-col">
                <a :href="item.slug" >{{ item.text }}</a>
                <div :class="getStyle(item.slug)" class="h-1 mt-1"></div>
             </div>
          </nav>
            </div>

            <!-- Mobile Menu Button -->
            <button id="menuBtn" class="visible md:invisible" @click="hidden = !hidden">
              <Icon name="ci:hamburger-lg"/>
            </button>
          </div>
        </header>
        <div v-if="!hidden" class="relative top-16 z-10 flex flex-col bg-silver-600">
              <a v-for="item in menu" :href="item.slug" :class="getStyle(item.slug)+' px-4 py-2 bg-gray-600'">{{ item.text }}</a>
        </div>           
      </div>
      <div v-else class="">
        <header class="text-white shadow fixed top-0 w-full bg-accent-500">
          <div class="max-w-7xl mx-auto flex items-center p-4 ">
            <!-- Logo -->
            <a href="/" class="flex items-center space-x-3">
              <img src="https://lerntherapiefreiburg.de/wp-content/uploads/2018/03/web-logo-w.png" alt="Logo"
              :class="navHeight" />
            </a>
            <div class="flex-grow"></div>
                                       <!-- Desktop Menu -->
                                       <nav class="hidden md:flex space-x-6 font-extrabold uppercase text-xs tracking-wider">
              <div v-for="item in menu" class="flex flex-col">
                <a :href="item.slug" >{{ item.text }}</a>
                <div :class="getStyle(item.slug)" class="h-1 mt-1"></div>
             </div>
          </nav>
            <!-- Mobile Menu Button -->
            <button id="menuBtn" class="visible md:invisible" @click="hidden = !hidden">
              <Icon name="ci:hamburger-lg"/>
            </button>
          </div>
        </header>
        <div v-if="!hidden" class="relative top-16 z-10 flex flex-col bg-light-500">
              <a v-for="item in menu" :href="item.slug" :class="getStyle(item.slug)+' px-4 py-2 bg-light-500'">{{ item.text }}</a>
        </div>   
      </div>
      <div class="py-20 z-20">
        <slot name="hero-header"></slot>

      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { MAINMENU } from '~/content/menu'
export default defineComponent({
  name: 'Header',
  props: {
    heroImg: String,
  },
  setup(props, ctx) {
    const scroll = ref(0)
    const width = ref(0)
    const hidden = ref(true)
    const menu = ref(MAINMENU)
    const route = useRoute()

    const scrolled = (ev) => {
      scroll.value = ev.target.scrollingElement.scrollTop
      hidden.value = true
    }

    const resize = () => {
      width.value = window.innerWidth
    }

    const hero = computed(() => props.heroImg && scroll.value < 20)

    const navHeight = computed(() => {
      if (width.value<640)
        return "h-10"
      if (scroll.value > 20)
        return "h-12"
      else if (scroll.value > 10)
        return "h-14"
      else if (scroll.value > 4)
        return "h-16"
      return "h-20"
    })

    const getStyle = (slug) => {
      return (route.path.endsWith(slug)?'bg-gray-600':'')
    }

    onMounted(() => {
      document.addEventListener('scroll', scrolled);
      window.addEventListener('resize', resize);
      resize()
    })

    onBeforeUnmount(() => {
      document.removeEventListener('scroll', scrolled);
      window.removeEventListener('resize', resize);
    })
    return {
      navHeight,
      hidden,
      menu,
      hero,
      getStyle
    }
  }
})
</script>