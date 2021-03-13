<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>辅助性工具</span>
      </div>
      <div class="text item" @click="open('http://ckw1999.gitee.io/crud-generator/')">crud生成器</div>
      <div class="text item" @click="open('https://ckangwen.github.io/vue-form-schema-generator/')">
        schema-form生成器
      </div>
      <div class="text item" @click="open('https://www.makeapie.com/explore.html#sort=rank~timeframe=all~author=all')">
        图标收集
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  methods: {
    open(url) {
      window.open(url)
    }
  },
};
</script>
<style>
  .box-card {
    width: 50%;
    margin: 0 auto;
  }
  .text {
    font-size: 14px;
    color: #409eff;
    cursor: pointer;
  }

  .item {
    margin-bottom: 18px;
  }

</style>