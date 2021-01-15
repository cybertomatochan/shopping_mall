<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <div >
        
        <p class="h2 text-center">您所輸入網頁不存在。您可以前往<router-link to="/">首頁</router-link>或是返回
            <span><a @click.prevent="backPage" style="display:inline;">上一頁</a></span>
        </p>
        
    </div>
    
      

        
    
    
     
  </div>
</template>

<script>
export default {
  data () {
    return {

        isLoading:false,
    }
  },
  methods:{
      backPage(){
         this.$router.go(-2) 
      }
  },


}
</script>
