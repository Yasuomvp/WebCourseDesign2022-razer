<template>

  <h1>用户表</h1>

  <el-table :data="userList" style="width: 100%">
    <el-table-column label="姓名" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 0px">{{ scope.row.name }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="工号/学号" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: -20px">{{ scope.row.cardNumber }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="选择/被选" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.selected }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="可选学生数" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.total }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Y是老师，N是学生" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.ist }}</span>
        </div>
      </template>
    </el-table-column>

  </el-table>

  <h1>关系表</h1>

  <el-table :data="relationList" style="width: 100%">
    <el-table-column label="老师工号" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 0px">{{ scope.row.teacherNumber }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="学生学号" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: -20px">{{ scope.row.studentNumber }}</span>
        </div>
      </template>
    </el-table-column>

  </el-table>


  <h1>老师的密码都是：131213</h1>
  <h1>学生 2019214081 的密码：Yasuomvp131213</h1>

</template>

<script>
import axios from "axios";

export default {
  name: "userList",
  data:function (){
    return{
      userList:[],
      relationList:[]
    }
  },
  created() {
    axios.get("http://localhost:8080/user/selectAllUsers").then(
        res=>{
          this.userList = res.data.users
          this.relationList = res.data.relationship
        }
    )
  }
}
</script>

<style scoped>

</style>