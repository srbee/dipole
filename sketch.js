function setup() {
  createCanvas(10, 10);
}

function draw() {
  background(220);
}

function funb1(){
// this function handles the button to calculate dipole length
    unitFeet=' feet'
    unitInch=' inches'
    unitMeter=' meters'
    unitcm='  centimeters'
    
    feetInch=234/In1.value
    
    Feet=Math.trunc(feetInch)
    Inch=((feetInch-Feet)*12).toFixed(2)
    
    metersCm=feetInch*0.3048
    
    Meters=Math.trunc(metersCm)
    cm=((metersCm-Meters)*100).toFixed(2)
    
    // b1p.innerHTML=(234/(In1.value)).toString()
   // b1p.innerHTML=String(234/(In1.value))
    topLine.innerHTML='For frequency of '+In1.value+' Mhz'
    L1.innerHTML='Each Side ='+String(Feet)+'    '+' feet'+'   and '+Inch+' inches'
    L2.innerHTML='Each Side ='+String(Meters)+'    '+" meters "+'   and '+cm+' cm'
    //L3.innerHTML=feetInch+' feet'
  }