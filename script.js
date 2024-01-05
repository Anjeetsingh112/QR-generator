const qrText = document.getElementById("qr-text");
const Sizes = document.getElementById("sizes");
const GenerateBtn = document.getElementById("generate");
const DownloadBtn = document.getElementById("download");
const qrContainer = document.querySelector(".qr-body");
let size = Sizes.value;
GenerateBtn.addEventListener("click", (e) => {
  e.preventDefault(); //to stop refres whole page
 isEmptyInput();
});
Sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
});

function isEmptyInput(){
    // if (qrText.value.length > 0) {
    //     generateQRCode();
    //   } else {
    //     alert("Enter the text or URL to generate your QR code");
    //   }
    qrText.value.length>0?generateQRCode() : alert("Enter the text or URL to generate your QR code");
}
DownloadBtn.addEventListener('click',()=>{
    let img =document.querySelector(".qr-body img");
    if(img!==null){
        let imgAtrr=img.getAttribute('src')
        DownloadBtn.setAttribute("href",imgAtrr);
    }else{
        DownloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});
function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}

