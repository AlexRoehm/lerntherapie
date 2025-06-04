<template>
  <div class="bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://lerntherapiefreiburg.de/wp-content/uploads/2018/03/backgr.png');">
    <!-- Header with Logo and Menu -->
    <Header hero-img="header.jpg">
      <template v-slot:desktop-menu>
        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6 font-extrabold uppercase text-xs tracking-wider">
          <div v-for="item in menu" class="flex flex-col">
            <a :href="item.slug">{{ item.text }}</a>
            <div :class="getStyle(item.slug)" class="h-1 mt-1"></div>
          </div>
        </nav>
      </template>
      <template v-slot:mobile-menu>
        <!-- Mobile Menu -->
        <a v-for="item in menu" :href="item.slug" :class="getStyle(item.slug) + ' px-4 py-2 bg-gray-600'">{{ item.text
        }}</a>
      </template>
      <template v-slot:hero-header>
        <!-- Hero Section -->
        <section>
          <div class="max-w-4xl mx-auto text-white text-center sm:py-40 md:py-50 py-24 sm:px-6">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 px-6">Integrative Lerntherapie Freiburg</h1>
            <p class="text-xl md:text-2xl px-6">Praxis für Integrative Lerntherapue - A. Röhm</p>
          </div>
        </section>
      </template>
    </Header>
    <Content class="bg-white">
        <NuxtLink to="integrative-lerntherapie">
          <div class="text-center text-2xl text-accent-500 py-18">
            Integrative Lerntherapie hilft bei Lernstörungen im Lesen, Schreiben oder Rechnen sowie bei Schwierigkeiten
          mit der Aufmerksamkeit bzw. Konzentration. (mehr ...)
          </div>
        </NuxtLink>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-18 py-18">
          <NuxtLink class="flex flex-col justify-center items-center text-light-500"
            to="lese-und-oder-rechtschreibtherapie">
            <Icon name="material-symbols:edit-outline-sharp" class="text-accent-500" size="4em" />
            <strong class="my-4 text-center">Hilfe bei Lese-Rechtschreibstörung</strong>
            <div class="text-center">
              Wenn Ihr Kind stockend liest, Wörter errät und den Text dabei nicht versteht (…) beim Schreiben einzelne
              Buchstaben austauscht, Wörter stets unterschiedlich falsch schreibt (…), über wenig Rechtschreibregeln und
              -strategien verfügt und sich schämt und verweigert, dann wird eine Lese-Rechtschreibtherapie Ihrem Kind
              helfen.
              (mehr ...)
            </div>
          </NuxtLink>
          <NuxtLink class="flex flex-col justify-center items-center text-light-500"
            to="lese-und-oder-rechtschreibtherapie">
            <Icon name="tdesign:calculation" class="text-accent-500" size="4em" />
            <strong class="my-4 text-center">Hilfe bei Lese-Rechtschreibstörung</strong>
            <div class="text-center">
              Wenn Ihr Kind stockend liest, Wörter errät und den Text dabei nicht versteht (…) beim Schreiben einzelne
              Buchstaben austauscht, Wörter stets unterschiedlich falsch schreibt (…), über wenig Rechtschreibregeln und
              -strategien verfügt und sich schämt und verweigert, dann wird eine Lese-Rechtschreibtherapie Ihrem Kind
              helfen.
              (mehr ...)
            </div>
          </NuxtLink>
          <NuxtLink class="flex flex-col justify-center items-center text-light-500"
            to="lese-und-oder-rechtschreibtherapie">
            <Icon name="material-symbols:key-outline-rounded" class="text-accent-500" size="4em" />
            <strong class="my-4 text-center">Hilfe bei Lese-Rechtschreibstörung</strong>
            <div class="text-center">
              Wenn Ihr Kind stockend liest, Wörter errät und den Text dabei nicht versteht (…) beim Schreiben einzelne
              Buchstaben austauscht, Wörter stets unterschiedlich falsch schreibt (…), über wenig Rechtschreibregeln und
              -strategien verfügt und sich schämt und verweigert, dann wird eine Lese-Rechtschreibtherapie Ihrem Kind
              helfen.
              (mehr ...)
            </div>
          </NuxtLink>
        </div>
        <NuxtLink to="positive-lernstruktur">
          <div
          class="bg-cover bg-fixed w-full h-120 bg-no-repeat my-18 flex items-center justify-center p-30 text-xl md:text-4xl text-gray-500 text-center"
          style="background-image: url('/img/tags.jpg');">
          Da Lesen, Schreiben und Rechnen Basiskompetenzen für das weitere Lernen sind, haben Betroffene oft auch
          Probleme
          in anderen Bereichen ... und geraten in den "Teufelskreis Lernstörung
          </div>
        </NuxtLink>
        <div class="text-light-500 my-18">
          <div class="text-4xl mb-6 text-center">Kontakt</div>
          <div class="text-2xl mb-4">
            Praxisadresse
          </div>
          <div class="text-md mb-4">
            Simone-de-Beauvoir Weg 8<br/>
            79111 Freiburg
          </div>
          <div class="text-md mb-4">
            Telefon: 0761-4774755
          </div>
          <img src="/img/1.png">
        </div>
      <div class="grid grid-cols-4 text-light-500 w-full text-2xl font-bold mb-10">
        <img src="/img/slider1.jpg" />
        <img src="/img/slider2.jpg" />
        <img src="/img/slider5.jpg" />
        <img src="/img/slider3.jpg" />

        <div class="text-center my-10">Lesen</div>
        <div class="text-center my-10">Schreiben</div>
        <div class="text-center my-10">Rechnen</div>
        <div class="text-center my-10">Lernen</div>
      </div>
      </Content>

    <Footer/>
  </div>
</template>

<script setup>
const route = useRoute();
const menu = ref(
)
const getStyle = (slug) => {
  return (slug == '/' ? 'bg-gray-600' : '')
}

</script>