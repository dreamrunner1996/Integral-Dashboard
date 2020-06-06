<template>
  <div class="integrate-card-content">
    <div class="integrate-card-image">
      <img v-if="imgUrl" :src="imgUrl" alt="#">
      <img v-else src="./../assets/userInfo.png" alt="#" />
    </div>
    <div class="integrate-card-information">
      <div class="integrate-card-information-text">
        {{ name }}
      </div>
      <div class="integrate-card-information-integration">
        当前积分: {{ integration }}
      </div>
    </div>
    <div class="integrate-card-award">
      <img v-if="showJB" :src="jbImgUrl[rank - 1]" alt="#" />
    </div>
  </div>
</template>

<script>
  import "./integrate-card.css"

  export default {
    name: "IntegrateCard",
    props: {
      imgUrl: {
        default: "",
        type: String
      },
      name: {
        default: "张三丰",
        type: String
      },
      integration: {
        default: 0,
        type: Number
      },
      rank: {
        default: 0,
        type: Number
      }
    },
    computed: {
      showJB: function() {
        switch (this.rank) {
          case 1:
            return true
          case 2:
            return true
          case 3:
            return true
          default:
            return false
        }
      }
    },
    data: () => ({
      jbImgUrl: [
        require("./../assets/jb1.png"),
        require("./../assets/jb2.png"),
        require("./../assets/jb3.png")
      ]
    })
  }
</script>

<style scoped>

</style>
