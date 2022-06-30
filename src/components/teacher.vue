<template>
  <h1>你的学生</h1>
  <el-table :data="students" style="width: 100%">
    <el-table-column label="学生姓名" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 0px">{{ scope.row.name }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="学号" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: -20px">{{ scope.row.cardNumber }}</span>
        </div>
      </template>
    </el-table-column>

  </el-table>
  你好：{{this.teacher.name}} 你听说了吗？ →王波荣获东北林业大学10佳教师！
</template>


<script>
import axios from "axios";

export default {
  name: "teacher.vue",
  data:function (){
    return{

      teacher:JSON.parse(this.$route.query.user),
      students:[]
    }
  },
  created() {
    axios.get("http://localhost:8080/user/getMyStudent",{
      params:{
        cardNumber:this.teacher.cardNumber
      }
    }).then(res=>{
      this.students = res.data
    })
  }
}
</script>

<style scoped>

</style>