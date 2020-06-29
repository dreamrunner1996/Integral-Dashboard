<template>
  <div class="extra-list-content">
    <div class="extra-item-head">
      <div class="project-task">
        <div class="project-name">{{ project }}</div>
        <div class="task-name">{{ task }}</div>
      </div>
      <div class="branch-name">
        <span style="color: #FFFFFF ;font-size: 20px; font-weight: bold; line-height: 20px"> ➥ </span>
        <span v-for="(item, index) in branch" :key="'branchItem'+index">
          {{ item }}
          <span style="color: #FFFFFF; font-size: 25px" v-if="index+1 !== branch.length"> ➪ </span>
        </span>
      </div>
      <div class="time-member">
        <div class="time-content">{{ time }}</div>
        <div class="member-content">{{ memberString }}</div>
      </div>
    </div>
    <div class="extra-item-body">
      <div>{{ extra }}</div>
    </div>
  </div>
</template>

<script>
  import "./extraList.css"

  export default {
    name: "ExtraList",
    props: {
      time: {
        default: '',
        type: String
      },
      project: {
        default: '',
        type: String
      },
      task: {
        default: '',
        type: String
      },
      member: {
        default: () => ([]),
        type: Array
      },
      extra: {
        default: '',
        type: String
      },
      branch: {
        default: () => ([]),
        type: Array
      }
    },
    computed: {
      branchString: function () {
        let bs = ''
        if(this.branch.length) {
          this.branch.forEach((res, index) => {
            if(index === this.branch.length - 1) {
              bs += res
            }
            else { bs += res + " => " }
          })
        }
        return bs
      },
      memberString: function () {
        let ms = ''
        if(this.member.length) {
          this.member.forEach((res, index) => {
            if(index === this.member.length - 1) {
              ms += res
            }
            else { ms += res + '、' }
          })
        }
        return ms
      }
    },
    data: () => ({})
  }
</script>
