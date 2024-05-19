
var  category = getCategory();

function getCategory() {
    var url = window.location.href;
    var equalsToPosition = url.search("=");
    var category = url.slice(equalsToPosition + 1);
    return category;
}

function getRecipeList() {

    var rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
    var fullPath = rootPath + "get-recipes/?category=" + category;

    fetch(fullPath)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            var output = "";
            for(i = 0; i < data.length; i++) {

                output += `
                    <a href="show-recipe.html?id=${data[i].id}">
                        <div class="meals-list-item">
                            <h1>${data[i].title}<i class="fas fa-chevron-circle-right"></i></h1>
                            <p>${data[i].description}</p>
                        </div>
                    </a>
                
                
                
                `;
                data[i].id;
                data[i].title;
                data[i].description;
                console.log(data);
            }

            document.getElementById("output").innerHTML = output;
        })


}


// function getRecipe(){
//     var rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
//     var fullPath = rootPath + "get-recipes/?id=" + id;

//     fetch(fullPath)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             var output = "";


//             output += `
//                 <img src="${rootPath}uploads/${data[0].image}">
            
            
//             `;
//             document.getElementById("output").innerHTML = output;
//         })
// }

// function getId(){
//     var url = window.location.href;
//     var equalsToPosition = url.search("=");
//     var id = url.slice(equalsToPosition + 1);
//     return id;
// }

