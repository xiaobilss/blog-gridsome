<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(http://localhost:1337${about.cover.url})`,
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>{{ about.title }}</h1>
              <span class="subheading">{{ about.autograph }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="about.message"></div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
 about : allStrapiAbout {
    edges {
      node{
        id
        title
        message
        autograph
        cover {
          url
        }
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: "About us",
  },
  computed: {
    about() {
      return this.$page.about.edges[0].node;
    },
  },
};
</script>
