// if("serviceWorker" in navigator){
//     console.log("si existe");
// }
// if(navigator.serviceWorker) 
    // console.log("si existes");

if(navigator.serviceWorker) {
    navigator.serviceWorker.register("./sw.js")
}