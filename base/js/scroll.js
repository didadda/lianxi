<script>
    var oDiv = document.getElementsById('top')
    var oList =document.getElementsByClassName('list')[0]
    oList.onscroll = function () {
        let scroll=document.documentElement.scrollTop|| document.body.scrollTop
        if(scroll>=oList.offsetHeight){
            oList.className="list listfixed"
        }
    }
</script>