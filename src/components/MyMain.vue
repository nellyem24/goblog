<template>
  <main>
    <div class="container">
      <div id="app" class="row">
        <div class="col s12 m9 l10">
          <div id="introduction" class="section scrollspy">
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
          </div>
          <div id="structure" class="section scrollspy">
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
            <p>Content </p>
          </div>
          <div id="initialization" class="section scrollspy">
            <p>Content </p>
          </div>
        </div>
        <div id="my-toc" class="col hide-on-small-only m3 l2">
          <div class="toc-wrapper pin-top">
            <ul class="section table-of-contents">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#structure">Structure</a></li>
              <li><a href="#initialization">Intialization</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    tocs: {
      type: Array,
      default: () => [{text: 'index', url: '/'}],
    },
  },
  created() {
    $(document).ready(function() {
      $('.scrollspy').scrollSpy()
    })
  },
}
</script>

<style>
blockquote {
  border-left: 5px solid #009688;
}
</style>
