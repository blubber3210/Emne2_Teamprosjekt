// burde være en universell controller
function changePage(newPage) {
    model.app.currentPage = newPage;
    updateView();
}

// egentlig en controller funksjon
function goToPlacePage(selectedPlaceId){
    let placeID = selectedPlaceId;
    model.app.selectedPlace = model.data.placesList[placeID];
    model.app.currentPage = 'placePage';
    document.querySelector('#container').scrollTo({ top: 0, behavior: 'smooth' });
    updateView()
}
