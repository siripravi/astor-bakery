<template>
  <section>
    {{ allProducts }}
    <div class="flex flex-wrap items-center">
      <template v-for="product in allProducts.dataProvider">
        <div
          v-if="product.slug"
          :key="product.id"
          class="flex flex-col mt-6 sm:w1/2 md:w-1/3 lg:1/4 xl:w-1/4"
        >
          <a :href="'/products/' + product.slug + '/' + product.id">
           <img v-bind:src="product.images[0].source" class="w-full" />  
           <!-- <img
              id="product-image"
              class="container mx-auto transition duration-700 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-95"
              :alt="product.name"
              :src="productImage(product)"
            />-->
          </a>
          <div class="flex justify-center pt-3">
            <p class="text-xl font-bold text-center cursor-pointer">
              {{ product.name }} Hello
            </p>
          </div>
          <div v-if="product.onSale" class="flex justify-center mt-2">
            <div class="text-lg text-gray-900 line-through">
              <span v-if="product.variations">
                {{ filteredVariantPrice(product.price, "right") }}</span
              >
              <span v-else>{{ product.regularPrice }}</span>
            </div>
            <div class="ml-4 text-xl text-gray-900">
              <span v-if="true">{{
                filteredVariantPrice(product.price_from)
              }}</span>
              <span v-else>{{ product.price_from }}</span>
            </div>
          </div>
          <div v-else>
            <p class="mt-2 text-xl text-center text-gray-900">
              {{ product.price_from }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { filteredVariantPrice } from "../../utils/functions";

defineProps(["allProducts"]);

const productImage = (product) =>
  product.cover_image_id ? product.images.sourceUrl : process.env.placeholderSmallImage;
</script>
