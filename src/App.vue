<template>
  <div class="container">
    <h1>使用说明</h1>
    <ElButton type="primary">解析数据</ElButton>
    <div class="info-section">
      <p>以下内容为自动获取，若获取失败请手动填写。</p>
      <p>版本信息：待获取</p>
      <p>手机号：待获取</p>
      <p>昵称：待获取</p>
      <p>wxid：待获取</p>
    </div>
    <ElButton>获取信息</ElButton>
    <div class="status-section">
      <p>设置微信路径，启动进度：0%</p>
      <p>微信路径状态：未就绪</p>
    </div>
  </div>
</template>

<script>
import { ElButton } from 'element-plus';
export default {
  name: 'DataPage',
  components: {
    ElButton,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.info-section {
  margin-top: 20px;
}

.status-section {
  margin-top: 20px;
}
</style>