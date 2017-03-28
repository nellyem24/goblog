<template>
  <footer class="page-footer teal darken-1">
    <div class="container">
      <div class="row">
        <div class="col l3 s12">
          <h5 class="white-text">Page</h5>
          <ul><li v-for="p in pages">
            <a class="grey-text text-lighten-3" href={{p.url}}>{{ p.text }}</a>
          </li></ul>
        </div>
        <div class="col l7 offset-l2 s12">
          <p class="grey-text text-lighten-4">{{ text }}</p>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <a class="grey-text text-lighten-4">© CC BY-SA 4.0</a>
        <a class="grey-text text-lighten-4 right" href="http://creativecommons.org/licenses/by-sa/4.0/deed.zh" target="_blank">Attribution-ShareAlike 4.0 International</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'You can use rows and columns here to organize your footer content.',
    },
    pages: {
      type: Array,
      default: () => [{text: 'about', url: '/'}, {text: 'about2', url: '/'}],
    },
  },
}
</script>

<style>
</style>
