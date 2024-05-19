var id = getId();


function getRecipe(){
    var rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
    var fullPath = rootPath + "get-recipes/?id=" + id;

    fetch(fullPath)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var output = "";

            document.getElementById("back-link").href = "list-recipes.html?category=" + data[0].category;

            output += `
                <img src="${rootPath}uploads/${data[0].image}">
                <h1>${data[0].title}</h1>
                <div class="recipe-details-ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        ${data[0].ingredients}
                    </ul>
                </div>
                <div class="recipe-details-steps">
                    <h2>Methods</h2>
                    <ol>
                        ${data[0].method}
                    </ol>
                </div>


            `;
            document.getElementById("output").innerHTML = output;
        })
}

function getId(){
    var url = window.location.href;
    var equalsToPosition = url.search("=");
    var id = url.slice(equalsToPosition + 1);
    return id;
}