<template>
  <div class="home-content">
    <Button type="primary">Primary</Button>
    <hr>
    <div class="scroll-content">
      scroll-content-views
    </div>
  </div>
</template>

<script>
  import { Button } from 'ant-design-vue';

  import "./home.css";

  export default {
    name: "Home",
    components: { Button },
    data: () => ({

    }),
    mounted() {

    },
    methods: {
    }
  }
</script>
