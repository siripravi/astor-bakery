<template>
  <div class="wrapper">
    <section class="container sweeties">
      <h3 class="title">Best Seller</h3>
      <div class="sweeties__items">
        <div
          v-for="product in allProducts.dataProvider"
          :key="product.id"
          class="sweeties__item"
        >
          <div class="sweeties__item__img">
            <img
              v-bind:src="product.imageSrc.source"
              class="best-seller__item-image"
            />
          </div>
          <div class="sweeties__item__name line-clamp-2">
            <a :href="'/products/' + product.slug + '/' + product.id">{{ product.name }}</a>
          </div>
          <div class="sweeties__item__prices">
            <div class="sweeties__item__price">
              {{ FormatToVND(product.price_from) }}
            </div>
            <div class="sweeties__item__original-price">
              {{ FormatToVND(product.price_from) }}
            </div>
          </div>
          <ButtonComponent variant="secondary">Add to cart +</ButtonComponent>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { filteredVariantPrice } from "../../utils/functions";
import ButtonComponent from "../UI/ButtonComponent.vue";
import { FormatToVND } from "../../utils/Formatter";
defineProps(["allProducts"]);

const productImage = (product) =>
  product.cover_image_id
    ? product.images.sourceUrl
    : process.env.placeholderSmallImage;
</script>
