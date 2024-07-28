<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute();
  const router = useRouter();


  let date = ref('请选择日期');
  let show = ref(false);
  let money = ref('');
  let tag = ref('');
  let pageType = ref('add');
  let editId = ref(0)

  const {type} = route.query;
  if (type === 'edit') {
    date.value = route.query.date
    money.value = route.query.money
    tag.value = route.query.tag
    pageType.value = type
    editId.value = +route.query.id
  }
  

  const formatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  const onConfirm = (value: Date) => {
    show.value = false;
    date.value = formatDate(value);
  }

  const showCalendar = () => {
    show.value = true;
  }

  const onSubmit = () => {
    let list = localStorage.getItem('ledger');
    if (pageType.value === 'edit') {
      let dailyList = JSON.parse(localStorage.getItem('ledger'));
      let dailyItem = dailyList.find(i => i.date === date.value);
      let list = dailyItem.list;
      let item = list.find((i, j) => j === editId.value);
      item.money = money.value
      item.tag = tag.value
      localStorage.setItem('ledger', JSON.stringify(dailyList));
      router.push({
        name: 'list'
      })
      return;
    }
    if (!list) {
      let dailyList = [];
      dailyList.push({
        date: date.value,
        list: [{
          money: money.value,
          tag: tag.value
        }]
      })
      localStorage.setItem('ledger', JSON.stringify(dailyList));
    } else {
      let dailyList = JSON.parse(localStorage.getItem('ledger'));
      let dailyItem = dailyList.find(i => i.date === date.value);
      if (dailyItem) {
        let list = dailyItem.list;
        list.push({
          money: money.value,
          tag: tag.value
        })
        localStorage.setItem('ledger', JSON.stringify(dailyList));
      } else {
        dailyList.push({
          date: date.value,
          list: [{
            money: money.value,
            tag: tag.value
          }]
        })
        localStorage.setItem('ledger', JSON.stringify(dailyList));
      }
    }
    router.push({
      name: 'list'
    })
  }
</script>

<template>
  <div class="main">
    <van-cell-group>
      <van-field v-model="date" readonly label="日期" placeholder="请选择日期"  @click="showCalendar" />
      <van-calendar v-model:show="show" @confirm="onConfirm"></van-calendar>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="money" label="金额" placeholder="请输入金额" />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="tag" label="标签" placeholder="请输入标签" />
    </van-cell-group>
    <van-cell>
      <van-button type="primary" size="large" @click="onSubmit">保存</van-button>
    </van-cell>
  </div>
</template>
