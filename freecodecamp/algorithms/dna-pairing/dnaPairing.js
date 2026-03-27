// Input: pairElement("ATCGA")
// Output: [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

function pairElement(strADN){
  const mapADN = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  let arr2d = [];
  for(let i = 0; i < strADN.length; i++){
    let base = strADN[i];
    let pair = mapADN[base];

    arr2d.push([base, pair]);
  }
  return arr2d;
}

module.exports = {
  pairElement
};