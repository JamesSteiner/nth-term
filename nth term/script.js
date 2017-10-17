function compute(){
  var adiff1 = document.getElementById('term 1').value;
  var adiff2 = document.getElementById('term 2').value;
  var adiff3 = document.getElementById('term 3').value;
  var adiff4 = document.getElementById('term 4').value;
  var adiff5 = document.getElementById('term 5').value;

  var bdiff1 = adiff2-adiff1;
  var bdiff2 = adiff3-adiff2;
  var bdiff3 = adiff4-adiff3;
  var bdiff4 = adiff5-adiff4;

  var cdiff1 = bdiff2-bdiff1;
  var cdiff2 = bdiff3-bdiff2;
  var cdiff3 = bdiff4-bdiff3;

  var ddiff1 = cdiff2-cdiff1;
  var ddiff2 = cdiff3-cdiff2;

  var ediff1 = ddiff2-ddiff1;

  var e = ediff1/24;
  var d = (ddiff1/6) - 10*e;
  var c = (cdiff1/2) - 6*d - 25*e;
  var b = bdiff1 - 3*c - 7*d - 15*e;
  var a = adiff1 - b - c - d - e;

  var output = '';
  if(e != 0) {
    if(e == 1){
      output = output + 'x^4';
    }else{
      output = output + e + 'x^4 ';
    }
  }
  if(d != 0){
    if((d > 0) && (e !=0)){
      output = output + ' + ';
    }else{
      output = output + ' ';
    }
    if(d == 1){
      output = output + 'x^3';
    }else{
      output = output + d + 'x^3 ';
    }
  }
  if(c != 0){
    if((c > 0) && (d != 0)){
      output = output + ' + ';
    }else{
      output = output + ' ';
    }
    if(c==1){
      output = output + 'x^2';
    }else{
      output = output + c + 'x^2 ';
    }
  }
  if(b != 0) {
    if((b > 0) && (c != 0)){
      output = output + ' + ';
    }else{
      output = output + ' ';
    }
    if(b==1){
      output = output + 'x';
    }
    else{
      output = output+ b + 'x ';
    }
  }
  if(a != 0) {
    if((a > 0) && (b != 0)){
      output = output + ' + ';
    }else{
      output = output + ' ';
    }
    output = output + a;
  }
  if((e==0) && (d==0) && (c==0) && (b==0)){
    output = adiff1;
  }

  document.getElementById('answer').innerHTML = output;
}
