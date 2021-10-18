(function(window){

    const defineLibrary = () =>({
        init: function(galleryId) {
          let container = document.getElementById(galleryId);
          
          if(!container){
              console.error('please add the correct element')
              return ;
          }
          
          let firstImage = container.querySelector('.samll-preview')
          let zoomedImage = container.querySelector('.zoomed-image')

          if(!zoomedImage){
              console.error('please add container for image zoom')
              return;
            }


          if(!firstImage){
              console.error('there is no image to show!')
              return;
          }

        zoomedImage.style.backgroundImage = `url(${firstImage.src})`

        let images = container.querySelectorAll('.samll-preview ')
        
         container.addEventListener('click',(e) => {

            let element = e.target;

            if(element.classList.contains('samll-preview')){
                zoomedImage.style.backgroundImage = `url(${element.src})`               
            }
         })

         zoomedImage.addEventListener('mouseenter',function(){
                this.style.backgroundSize = '250%'           
         })


         zoomedImage.addEventListener('mousemove',function(e){
             

             let dimentions = this.getBoundingClientRect();
             let x = e.clientX - dimentions.left;
             let y =e.clientY -dimentions.top;

             x = Math.round((dimentions.width/x) / 100)
             y = Math.round( 100 / (dimentions.heigth/y))
             console.log(x)
             


         })
         
        }
    })

    if(typeof(vanillaZoom) === 'undefined'){
        window.vanillaZoom = defineLibrary()
    }else{
        console.log('library already defined')
    }

})(window)