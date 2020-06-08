<template>
  <div class="unusual-card-content">
    <div class="unusual-card-project-team">
      {{ projectName ? projectName : "项目名称" }} - {{ teamName ? teamName : "项目小组" }}
    </div>
    <div class="unusual-card-team-member">
      <span v-if="teamMember.length">
        <span v-for="(index, item) in teamMember" :key="'teamMember' + item">{{ index }}
          <span v-if="item !== teamMember.length-1">、</span>
        </span>
      </span>
      <span v-else>"项目小组人员"</span>
    </div>
    <div class="unusual-card-unusual-account">
      {{ account ? account : "异常原因" }}
    </div>
  </div>
</template>

<script>
  import "./unusual-card.css"

  export default {
    name: "UnusualCard",
    props: {
      projectName: {
        default: "",
        type: String
      },
      teamName: {
        default: "",
        type: String
      },
      teamMember: {
        default: () => ([]),
        type: Array
      },
      account: {
        default: "",
        type: String
      }
    }
  }
</script>
