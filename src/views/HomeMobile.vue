<template>
  <div class="home-mobile-content">
    <Button type="info">默认按钮</Button>
  </div>
</template>

<script>
  import { Button } from "vant"
  import "./home-mobile.css"

  export default {
    name: "HomeMobile",
    components: { Button },
    data: () => ({

    }),
    mounted() {
    }
  }
</script>
