
///BARE LAGRET FOR Å LESE GJENNOM OG FORSTÅ BILDEGREIA

function readURL(input){
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector("#addPlaceImg").setAttribute("src", e.target.result);
        };
    
        reader.readAsDataURL(input.files[0]);
        let newImage = "new image url somehow";//
        model.viewState.addPlace.image = newImage;
    }
    
//  SPØRSMÅLSTEGN ???? Hvordan lagre bildet og vise det på neste side 
    document.getElementById("imageUpload").addEventListener('change', function(storeImage){
        let uploadedImage = event.target.files[0];

        let reader = new FileReader();
        reader.onload = function(e) {
            let dataUrl = e.target.result; // Get the data Url
            let imgElement = document.createElement("img");
            imgElement.src = dataUrl;
            document.body.appendChild(imgElement);
        };

        reader.readAsDataURL(uploadedImage);
        model.viewState.addPlace.image = uploadedImage;
    });
}




function uploadCatImage(){
    const fileUpload = document.getElementById(`uploadFile`);
    fileUpload.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            model.newCatImg = reader.result;
        });
        reader.readAsDataURL(this.files[0]);
    }); 
}
function uploadCat(){
    let newNameInput = document.getElementById(`newNameInput`);
    model.newCatName = newNameInput.value;
    let catIndex = model.cats.length + 1;
    model.cats.push(
        {name: model.newCatName, 
        img: model.newCatImg, 
        points: 0,
        owner: model.currentUser[0].name,
        ratings: [0, 0, 0, 0],
        id: catIndex}
        );
        profile();
    return model.cats;
}


function readURL(input) {
    console.log(input);
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        model.viewState.addPlace.image = e.target.result; // store in your live model
    };
    reader.readAsDataURL(file);
}