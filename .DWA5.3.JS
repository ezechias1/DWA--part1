const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
});
if (!dividend|| divider){
    result.innerText= "Division is not performed. Both values are required inputs. Try again "
}
else if(isNaN(dividend) || isNaN(divider)){
    result.innterText="Divsion is not performed . Invaild number provided . try again "
}
else if (isNaN(dividend)|| isNaN(divider)){
    result.innerText="Something critical went wrong. Please  reload your page";
    console.log("Something went critical wrong. Please reload your page ")
}
else{
    result.innerText= Math.floor(dividend/divider);
}