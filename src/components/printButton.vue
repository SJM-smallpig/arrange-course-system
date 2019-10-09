<template>

    <el-button type="info" class="p-search" v-print="'#'+printObj.id">打印</el-button>

</template>

<script>
export default {
  components: {},
  props: {
      nameMsg:{
          type:String,
          require:true
      }
  },
  data() {
    return {
        printObj:{
            id: this.nameMsg,
            popTitle: 'good print',
            extraCss: 'https://www.google.com,https://www.google.com'
            }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.p-search {
  float: right;
}
</style>