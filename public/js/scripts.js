ClassicEditor.create(document.querySelector("#Description"), {
  toolbar: [
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote"
  ],
}).catch(error => {
  console.log(error);
});

ClassicEditor.create(document.querySelector("#Ingredients"), {
  toolbar: [
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote"
  ],
}).catch(error => {
  console.log(error);
});


ClassicEditor.create(document.querySelector("#Directions"), {
  toolbar: [
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote"
  ],
}).catch(error => {
  console.log(error);
});



