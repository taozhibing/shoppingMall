<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: 'Myself',
   props: {
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
     this.$api.queryUser({ }).then(res => {
       console.log(res);
     }).catch(err => {
       console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>