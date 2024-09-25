<template>
    <div>
      <el-container>
        <el-header>联系人通讯录</el-header>
        <el-main>
          <el-table :data="contacts">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="phone" label="电话"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contacts: [
          { name: '张三', phone: '1234567890', email: 'zhangsan@example.com' },
          { name: '李四', phone: '9876543210', email: 'lisi@example.com' },
          // 添加更多联系人数据
        ],
      };
    },
  };
  </script>