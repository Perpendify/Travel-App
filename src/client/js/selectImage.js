function selectImage(e) {
    let main_image = document.getElementById('main_image');

    // console.log('asdfasdfasdf',e)
    // console.log('e.split(', e.id.split('_')[2])
    main_image.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), ${e.style.backgroundImage}`;  
    document.querySelector(".activeImage").classList.remove("activeImage")
    e.classList.add("activeImage")

    // console.log('onclick',e);
    // console.log('this is pixabay', pixabay)

    let arrayNo = e.id.split('_')[2]-1;
    document.querySelector("#img_tags").innerHTML = `Photo by ${pixabay.hits[arrayNo].user}`; 
    document.querySelector("#img_src").innerHTML = `${pixabay.hits[arrayNo].tags}`; 



}

export {selectImage}
