let myProjects = '<div class="column"><h4><a href="https://github.com/felixcao99/cookie-recipe">Cookie Recipe</a></h4></div><div class="column"><h4><a href="https://github.com/felixcao99/resort_site">Resort Website</a></h4></div><div class="column"><h4><a href="https://github.com/felixcao99/cupcake-site">Cupcake Site</a></h4></div><div class="column"><h4><a href="https://github.com/felixcao99/favorite-brand">Favorite Brand</a></h4></div><div class="column"><h4><a href="https://github.com/felixcao99/css-float">CSS Float</a></h4></div>'
let myContact = '<div class="card w-75"><div class="card-body"><div class="card-text"><h5><em>Phone</em>: +1 123-456-7890</h5><h5><em>Email</em>: <a href="mailto:abc@defg.com">abc@defg.com</a></h5></div></div></div></div>'

$(document).ready(function() {
  $("h3#aboutme").click(function() {
    location.reload()
  });
  $("h3#projects").click(function() {
    $(".custom-header").children().remove();
    $(".custom-header").append(myProjects);
    $("h3#projects").addClass("blue-background");
  });
  $("h3#contact").click(function() {
    $(".custom-header").children().remove();
    $(".custom-header").append(myContact);
  });
});