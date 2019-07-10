<template>
    <div>{{location}}</div>
</template>
<script>
import BMap from 'BMap'
export default {
    data () {
        return {
            location: ''
        }
    },
    created () {
        var geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition((r) =>{
          var p =new BMap.Point(r.point.lng,r.point.lat)
          var myGeo = new BMap.Geocoder()
          myGeo.getLocation(p,(result) =>{
              if (result) {
                  this.location = result.address
              }
          })  
        })
    }
}
</script>
