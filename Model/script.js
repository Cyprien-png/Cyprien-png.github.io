document.addEventListener('alpine:init', () => {
  Alpine.data('carousel', () => ({
    containers: [],

    async init() {

      let response = await fetch('./View/content/Products/Products.json')
      this.containers = await response.json()
      console.log(this.containers.length)

      Alpine.store('objects', this.containers)

      var setId = 0

      this.containers.forEach(container => {
        var show = false
        setId++
        if (setId <= 3) {
          show = true
        }

        container.shown = show
        container.num = setId
      });

    },

  }))
})



function CarouselToggle(diff) {


  if(diff){

    var temp = Alpine.store('objects').shift()
    Alpine.store('objects').push(temp)

  }else{
    var temp = Alpine.store('objects').pop()
    Alpine.store('objects').unshift(temp)
  }

/**

  console.log(diff)

  onScreen = Alpine.store('objects').filter(shoe => shoe.shown === true)
  var onScreenIndex = onScreen.map(x => Alpine.store('objects').indexOf(x) + diff)
  var onScreenNext = onScreenIndex.map(x => {


    return Alpine.store('objects')[x] ?? Alpine.store('objects')[0]
    
  })



  onScreen.forEach(shoe => shoe.shown = !shoe.shown)
  onScreenNext.forEach(shoe => shoe.shown = !shoe.shown)
 */




}





  //var mydata = JSON.parse('./View/content/Products/Products.json');
  //console.log(mydata)