<template> 
 <mt-header title={{title}} style="height: 64px;">
 </mt-header> 
</template>


<script> 

 export default {
  
  data(){
    return{
    }
  },
  props: {
    title: {
      default: '',
      type: String
    }
  }

 }

</script>