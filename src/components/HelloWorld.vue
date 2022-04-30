<script setup>
import { ref } from 'vue'
import {sayHello} from "../api/hello";


const count = ref(0)
const message = ref("财音后台管理")
const clicknum = ref(0)

const hello=()=>{
  sayHello().then(res=>{
    console.log(res);
    message.value = res.data
  })
}
</script>

<template>
  <h1>{{ message }}</h1>
  <q-btn outline color="primary" label="Outline" @click="clicknum++">
    点击次数{{clicknum}}
  </q-btn>
  <br>
  <br>
  <q-btn outline color="primary" label="Outline" @click="hello">
    {{message}}
  </q-btn>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
