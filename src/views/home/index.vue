<template>
  <div id="home">
     <navigation></navigation>
  </div>
</template>

<script>
import navigation from '@/components/navigation';
export default {
name:'home',
data() {
    return {
        
    }
},
components:{
    navigation
},
methods: {
    
},
mounted() {
   this.$store.dispatch('BaseCategoryList')
},
}
</script>

<style>

</style>