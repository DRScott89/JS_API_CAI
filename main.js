
/** 
 * @param img_index
 * 
 * 
*/
async function clickedEvent(img_index) {
    // get track name
    let image = document.getElementsByTagName('img')[img_index].attributes[1].value;
    console.log(image)
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${image}`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();
    console.log(response)
    console.log(request)
    window.open(response.config.website_url + '/artworks/' + image)
    
    
    

   

}

/** 
 * @param id
 * id = image if for gallery image
 * event = Mouse event given by the action from our user
 * 
 * 
 * Function produces songs from the clickedEvent based
 *on index of image. 
 *
*/

function getInfo(id) {
    switch(id){
        case 'fig1' : {
        clickedEvent(0,0)
        var popup = document.getElementById("popup1");
        popup.classList.toggle("show");
        break;
        }
        case 'fig2' : {
        clickedEvent(1,0)
        var popup = document.getElementById("popup2");
        popup.classList.toggle("show");
        break;
        }
        case 'fig3' : {
        clickedEvent(2,0)
        var popup = document.getElementById("popup3");
        popup.classList.toggle("show");
        break;
        }
        case 'fig4' : {
        clickedEvent(3,0)
        var popup = document.getElementById("popup4");
        popup.classList.toggle("show");
        break;
        }
        case 'fig5' : {
        clickedEvent(4,0)
        var popup = document.getElementById("popup5");
        popup.classList.toggle("show");
        break;
        }
        case 'fig6' : {
        clickedEvent(5,0)
        var popup = document.getElementById("popup6");
        popup.classList.toggle("show");
        break;
        }
        case 'fig7' : {
        clickedEvent(6,0)
        var popup = document.getElementById("popup7");
        popup.classList.toggle("show");
        break;
        }

        case 'fig8' : {
        clickedEvent(7,0)
        var popup = document.getElementById("popup8");
        popup.classList.toggle("show");
        break;
        }
    }
}

