function updateImages(e) {
    // console.log('this is e', e.hits);

    if (e.hits.length != 0) {
    // console.log('this is e', e.hits[0].largeImageURL);
    let main_image = document.getElementById('main_image');
    let img_button_1 = document.getElementById('img_button_1');
    let img_button_2 = document.getElementById('img_button_2');
    let img_button_3 = document.getElementById('img_button_3');
    let img_button_4 = document.getElementById('img_button_4');
   
    img_button_1.classList.remove("d-none")
    img_button_2.classList.remove("d-none")
    img_button_3.classList.remove("d-none")
    img_button_4.classList.remove("d-none")

    main_image.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),url(${e.hits[0].largeImageURL})`;
    img_button_1.style.backgroundImage = `url(${e.hits[0].largeImageURL})`;
    img_button_2.style.backgroundImage = `url(${e.hits[1].largeImageURL})`;
    img_button_3.style.backgroundImage = `url(${e.hits[2].largeImageURL})`;
    img_button_4.style.backgroundImage = `url(${e.hits[3].largeImageURL})`;


    let img_tags = document.getElementById('img_tags');
    let img_src = document.getElementById('img_src');
    img_src.innerHTML = `Photo by ${e.hits[0].user}`;
    img_tags.innerHTML = e.hits[0].tags

    }
    else {
        document.getElementById('img_tags').innerHTML = "No image available"
    }
}

export {updateImages}
