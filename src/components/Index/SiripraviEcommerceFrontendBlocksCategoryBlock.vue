<template>
  <h3>List of Categories</h3>
  <div v-if="block">
    <section class="container mx-auto bg-white">
      <div class="row">
        <template v-for="category in block.extras.elements.categories">
          <div v-if="category.slug" :key="category.id">
            <div class="card" style="width: 18rem">
              <img
                v-bind:src="category.imageSrc.source"
                class="card-img-top img-fluid"
              />

              <div class="card-body">
                <h5 class="card-title">{{ category.name }}</h5>
                <p class="card-text">{{ category.teaser }}</p>

                <a
                  class="btn btn-primary"
                  :href="`/category/${category.id}/${category.slug}`"
                  >View All</a
                >
              </div>
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
