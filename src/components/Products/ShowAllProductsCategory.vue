<template>
   <div v-if="allProducts">
    <section class="container mx-auto bg-white">
      <div
        class="grid gap-2 px-2 pt-2 pb-2 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-3"
      >
        <template v-for="product in allProducts.dataProvider">
          <div
            v-if="product.slug"
            :key="product.id"
            class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg"
          >
           
              <a :href="'/products/' + product.slug + '/' + product.id">
                <div class="relative">
                  <img v-bind:src="product.imageSrc.source" class="w-full" />

                  <div
                    class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium"
                  >
                    Veg
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-medium mb-2">{{ product.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4"></p>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-lg"
                      >${{ product.price_from }}</span
                    >
                    <button
                      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </a>
          
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import { filteredVariantPrice } from "../../utils/functions";

defineProps(["allProducts"]);

const productImage = (product) =>
  product.cover_image_id
    ? product.images.sourceUrl
    : process.env.placeholderSmallImage;
</script>
