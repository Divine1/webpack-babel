export default (input)=>{
    console.log("in textbox")
    var divTag = document.createElement("div");
    divTag.innerHTML=input
    divTag.classList.add('text');

    return divTag
}