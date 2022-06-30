<template>
  <el-table id="table" v-show="flag" :data="teachers" style="width: 100%">
    <el-table-column label="教师姓名" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 0px">{{ scope.row.name }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="工号" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: -20px">{{ scope.row.cardNumber }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="已选学生数" width="180">
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


    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleSelect(scope.$index, scope.row)">选中</el-button>
      </template>
    </el-table-column>
  </el-table>


  你选择了：{{this.teacher.name}}

<!--  {{this.student}}-->
<!--  {{this.teachers}}-->
</template>
<script>


import axios from "axios";

export default {
  data:function (){
    return{
      teachers:[],
      student:JSON.parse(this.$route.query.user),
      teacher:{},
      flag:true
    }
  },
  methods:{
    init:function () {
      axios.get("http://localhost:8080/user/selectAllTeachers").then(
          res => {
            this.teachers = res.data
          }
      )

      if (this.student.selected == 1){
        this.handleSelect = ()=>{

        };
        this.flag=false
      }
      axios.get("http://localhost:8080/user/getOne",{
        params:{
          studentCardNumber:this.student.cardNumber
        }
      }).then(res=>{
        this.teacher = res.data
      })
    },

    handleSelect:function (index,row){

      if(window.confirm("确认选中？")){
        axios.get("http://localhost:8080/user/selectOneTeacher",{
          params:{
            teacherCardNumber:JSON.parse(row.cardNumber),
            studentCardNumber:this.student.cardNumber
          }
        }).then(()=>{
            this.init()
        })
      }
    }
  },
  created() {
    this.init();


  }
}


</script>


