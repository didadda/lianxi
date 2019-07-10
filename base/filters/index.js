import Vue from 'vue'
Vue.filter(
    'money',function(count){
        count=count.toString()
        if(count.length==0 ){
            count='0';
        }
        let int=count.split(".")[0];
        let float=count.split('.')[1]?'.'+count.split('.')[1]:'.00';
        let list=int.split('').reverse();
        for(let i=0;i<list.length;i++){
            if(i%3==0&& i != 0){
                list[i]=list[i]+',';
            }
        }
        let result=list.reverse().join('');
        console.log(result);
        result='￥'+result+float;
        return result;
    }
)
Vue.filter('savePhone',(phone)=>{
    phone=phone+''
    return phone.substring(0,3)+'****'+phone.substring(7)
})