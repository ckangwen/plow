<template>
  <div class="comp-container">
    <crud
      :data="data"
      :columns="columns"
      :table-props="tableProps"
      :selection="{ width: '100', align: 'center' }"
      :extra-column-props="extraColumnProps"
      show-delete
      show-update
      :before-row-remove="beforeRemove"
      :before-row-update="beforeUpdate"
      @removeError="confirmError"
    ></crud>
  </div>
</template>
<script>
import Crud from '@/components/crud'
export default {
  name: 'crud-page',
  components: {
    Crud
  },
  data () {
    return {
      columns: [
        {
          label: '日期',
          prop: 'date',
          attrs: {
            width: '180',
            sortable: true
          }
        },
        {
          label: '姓名',
          prop: 'name',
          attrs: {
            width: '180'
          }
        },
        {
          label: '省份',
          prop: 'province',
          attrs: {
            width: '300'
          }
        },
        {
          label: '市区',
          prop: 'city',
          attrs: {
            width: '300'
          }
        },
        {
          label: '地址',
          prop: 'address',
          attrs: {
            width: '300'
          }
        },
        {
          label: '邮编',
          prop: 'zip',
          attrs: {
            width: '120',
            filters: [{ text: '200332', value: 200332 }, { text: '200333', value: 200333 }, { text: '200334', value: 200334 }],
            'filter-method': this.filterZip,
            'filter-placement': 'bottom-end'
          }
        }
      ],
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200334
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200332
        },
        {
          date: '2016-05-20',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200332
        },
        {
          date: '2016-05-11',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200334
        },
        {
          date: '2016-05-22',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-21',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      tableProps: {
        border: true,
        size: 'mini',
        height: '100%'
      },
      extraColumnProps: {
        width: '200'
      }
    }
  },
  methods: {
    beforeRemove ({ index, row }, done) {
      console.log(index, row)
    },
    confirmError (e) {
      console.log(e)
    },
    beforeUpdate (data, done) {
      // 传入false，不执行更新
      done(false)
    }
  }
}
</script>

<style lang="scss">
</style>
