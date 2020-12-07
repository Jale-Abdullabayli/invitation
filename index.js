var Design = document.getElementById("Design");
var DesignOptions = document.querySelectorAll(".Options div");
var Submit = document.getElementById("Submit");


DesignOptions.forEach((designoption, index) => {
    var DesignName = document.getElementById("DesignName");
    var URl = "url('Photos/" + index + ".jpg')";
    designoption.style.backgroundImage = URl
    designoption.addEventListener("click", function() {
        Design.style.backgroundImage = URl;
        DesignName.innerHTML = designoption.getAttribute("data-name");

    });
});

Submit.addEventListener("click", function() {
    var fontfamily = document.getElementById("Font"),
        fontsize = document.getElementById("fontsize"),
        Name = document.getElementById("name").value,
        PartnerName = document.getElementById("partnername").value,
        Weddingdate = document.getElementById("weddingdate").value,
        CenterNames = document.getElementById("CenterNames"),
        CenterDate = document.getElementById("CenterDate");
    CenterNames.innerHTML = Name + " & " + PartnerName;
    CenterDate.innerHTML = Weddingdate;
    CenterNames.style.fontFamily = fontfamily.value;
    CenterDate.style.fontFamily = fontfamily.value;
    CenterNames.style.fontSize = fontsize.value + "px";
    CenterDate.style.fontSize = fontsize.value + "px";
});

var textcolor = document.getElementById("textcolor");
textcolor.addEventListener("change", function() {
    Design.style.color = textcolor.value;
});

//Add Image
var AddImg = document.getElementById("AddImage");
AddImg.addEventListener("change", function() {
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var url = "url('" + e.target.result + "')";
            Design.style.backgroundImage = url;
        }

        reader.readAsDataURL(input.files[0]);
    }
}