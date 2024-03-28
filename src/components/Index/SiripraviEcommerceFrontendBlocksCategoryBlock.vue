<template>
  <h3>List of Categories</h3>
  <div v-if="block">
    <section class="container mx-auto bg-white">
      <div
        class="grid gap-2 px-2 pt-2 pb-2 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-3"
      >
        <template v-for="category in block.extras.elements.categories">
          <div v-if="category.slug" :key="category.id">
            <div
              class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg"
            >
              <a
                class="text-black cursor-pointer hover:underline"
                :href="`/category/${category.id}/${category.slug}`"
              >
                <svg
                  class="w-5 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path></svg><span>25 mins</span>
                <div class="relative">
                  <img
                    v-bind:src="category.imageSrc.source"
                    class="w-full h-32 sm:h-48 object-cover"
                  />
                  <div class="m-4">
                    <span class="font-bold">5 Bean chilli Spew</span
                    ><span class="block text-sm">Recipe by Mario</span>
                  </div>
                  <div
                    class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium"
                  >
                    <h2>{{ category.name }}</h2>
                  </div>
                </div>
                <h3>{{ category.teaser }}</h3>
              </a>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    block: Object,
  },
};
</script>
