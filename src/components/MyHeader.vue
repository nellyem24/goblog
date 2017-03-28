<template>
  <header>
    <nav class="top-nav teal lighten-2">
      <div class="container">
        <div class="nav-wrapper">
          <a class="page-title">Grid1</a>
          <a href="#" data-activates="nav-mobile" class="button-collapse top-nav full hide-on-large-only">
            <i class="material-icons">menu</i>
          </a>
        </div>
        <ul id="nav-mobile" class="side-nav fixed">
          <li v-for="c in categorys">
            <a href={{c.url}}>{{ c.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    categorys: {
      type: Array,
      default: () => [{text: 'index', url: '/'}],
    },
  },
  created() {
    (function ($) {
      $(function () {
        $('.button-collapse').sideNav({ 'edge': 'left' })
      })
    })(jQuery)
  },
}
</script>

<style>
nav.top-nav {
  height: 128px;
  line-height: 128px;
}
nav .nav-wrapper a.page-title {
  font-size: 48px;
}
@media only screen and (max-width: 992px) {
  nav.top-nav {
    text-align: center;
    height: 64px;
    line-height: 64px;
  }
  nav .nav-wrapper a.button-collapse.top-nav i  {
    font-size: 24px;
  }
  nav .nav-wrapper a.page-title {
    padding: 32px;
    font-size: 24px;
  }
}
</style>
