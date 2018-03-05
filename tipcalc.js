function findTip(){
  var a = document.getElementById('preTip').value;
  var b = document.getElementById('tipAmount').value;
  var b1 = (b/100)+1;
  var c = (a * b1);
  document.getElementById('finalTotal').innerHTML = "$" + c.toFixed(2);
}