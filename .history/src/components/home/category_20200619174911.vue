<template>
 <div>
<div>
<div v-for="(item,index) in category" :key="index">
<div>
<div></div>
<div></div>
</div>
</div>
</div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     category : {
        type: Array,
      default: () => {}
     }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>