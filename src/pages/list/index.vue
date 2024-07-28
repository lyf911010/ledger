<script setup lang="ts">
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'

  const router = useRouter();

  let list = ref([]);
  
  const localList = localStorage.getItem('ledger');
  if (localList) {
    list.value = JSON.parse(localList);
  }

  const onEdit = (item: any, date: Date, id: number) => {
    router.push({
      name: 'home',
      query: {
        id,
        money: item.money,
        tag: item.tag,
        date,
        type: 'edit'
      }
    })
  }
</script>

<template>
  <div v-for="(i, j) in list" :key="j">
    <p>
      {{ i.date }}
    </p>
    <van-row v-for="(item, index) in i.list" gutter="20" align="center">
      <van-col span='8'>金额: {{ item.money }}</van-col>
      <van-col span='8'>标签: {{ item.tag }}</van-col>
      <van-col span="8">
        <van-button type="primary" size="small" @click="onEdit(item, i.date, index)">编辑</van-button>
      </van-col>
    </van-row>
  </div>
</template>