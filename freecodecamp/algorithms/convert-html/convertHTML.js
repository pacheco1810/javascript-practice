// Input: convertHTML("Dolce & Gabbana")
// Output: "Dolce &amp; Gabbana"

function convertHTML(str){
  let result = "";

  const mapChar = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  for(let i = 0; i < str.length; i++){
    if(str[i] in mapChar){
      result += mapChar[str[i]];
    }else{
      result += str[i]; 
    }
  }
  return result; 
}

module.exports = {
  convertHTML
};