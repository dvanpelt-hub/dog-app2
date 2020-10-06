"use strict";

function getDogImage(breedType) {
    console.log(breedType);
  fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something is wrong, try again."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
    if (responseJson.status === "success") {
  $(".results").append(
    `<img src="${responseJson.message}" class="image-results">`
  );
  $(".results").removeClass('hidden');
    }
    else {
        alert('No breed found, please try again');
    }
};

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    let breedInput = $('input[name="breedInput"]').val();
    console.log(breedInput);
    getDogImage(breedInput);
  });
};

$(function () {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});