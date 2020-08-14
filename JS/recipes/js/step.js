function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
var apiData = [];
$(document).ready(function () {
    $('#guest').hide();
    requestApi();
    $('#chooseRecipe').on('change', () => {
        var recipe = $('#chooseRecipe').val();
        getRecipe(recipe);
    });

    $('#minus').on('click', function () {
        decrease();
        var guest = $('#member').val();
        var recipe = $('#chooseRecipe').val();
        updateRecipe(recipe, guest);
    });
    $('#plus').on('click', function () {
        increase();
        var guest = $('#member').val();
        var recipe = $('#chooseRecipe').val();
        updateRecipe(recipe, guest);
    });
});

function requestApi() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => chooseRecipe(data.recipes),
    });
}

function chooseRecipe(recipe) {
    apiData = recipe;
    var option = "";
    recipe.forEach(element => {
        option += `
         <option value="${element.id}">${element.name}</option>
       `;
    });
    $('#chooseRecipe').append(option);
}
var nbDefault = 1;
function getRecipe(recipeId) {
    apiData.forEach(element => {
        if (element.id == recipeId) {
            eachRecipe(element.iconUrl, element.name);
            eachIngredient(element.ingredients);
            eachStep(element.instructions);
            addGuest();
             $('#member').val(element.nbGuests);
             nbDefault = $('#member').val();
        }
    })
}
function updateRecipe(recipeId, guest) {
    apiData.forEach(element => {
        if (element.id == recipeId) {
            eachRecipe(element.iconUrl, element.name);
            updateIngredient(element.ingredients, guest);
            eachStep(element.instructions);
            addGuest();
            $('#member').val(guest);
        }
    })
}

function eachRecipe(image, name) {
    var showRecipe = "";
    showRecipe += `
    <img src = "${image}" width = "100" height="100" id="recipe-image">
    <strong id="recipe-name">${name}</strong>
  `;
    printOut('recipe',showRecipe);
}

function eachStep(step) {
    var steps = step.split('<step>');
    var listStep = "";
    for (let i = 1; i < steps.length; i++) {
        listStep += `
        <li class = "list-group-item" style = "border:none">
        <strong class = "text-primary">Step: ${i}</strong>
        <br>
        &nbsp;&nbsp;
        ${steps[i]}
        </li>
     `
    }
    printOut("step",listStep);
}

function addGuest() {
    $('#guest').show();
}

function increase() {
    var member = $('#member').val();
    var guest = parseInt(member) + 1;
    if (guest <= 15) {
        $('#member').val(guest);
    }
}

function decrease() {
    var member = $('#member').val();
    var guest = parseInt(member) - 1;
    if (guest >= 1) {
        $('#member').val(guest);
    }
}

function eachIngredient(ing) {
    var ingredient = "";
    ing.forEach(element => {
        ingredient += `
        <tr>
            <td><img src = "${element.iconUrl}" width = "50"></td>
            <td>${element.name}</td>
            <td>${element.quantity}</td>
            <td>${element.unit[0]}</td>
        </tr>
      `
    })
    printOut("ingredient",ingredient);
}
function updateIngredient(ing, member) {
    var ingredient = "";
    ing.forEach(element => {
        var add = Number(element.quantity * parseInt(member)/nbDefault).toFixed(2);
        ingredient += `
        <tr>
            <td><img src = "${element.iconUrl}" width = "50"></td>
            <td>${element.name}</td>
            <td>${ add }</td>
            <td>${element.unit[0]}</td>
        </tr>
      `
    })
    printOut("ingredient",ingredient);
}

function printOut(elementId,output) {
    $('#' + elementId).html(output);
}