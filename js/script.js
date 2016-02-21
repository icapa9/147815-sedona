var link = document.querySelector (".show-form");
var form = document.querySelector (".hotels-search");
var close = document.querySelector (".show-form");

link.addEventListener ("click", function (event) {
  event.preventDefault ();
  form.classList.add ("hotels-search-show");
});

close.addEventListener ("click", function (event) {
  event.preventDefault ();
  form.classList.toggle ("hotels-search-hide");
});
