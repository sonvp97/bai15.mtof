let result='';
function footToMeter(foot){
    result = 0.305 * foot;
    document.getElementById('result').innerHTML=result+' m';
}
function meterToFoot(meter){
    result = 3.279 * meter;
    document.getElementById('result1').innerHTML=result+' f';
}
