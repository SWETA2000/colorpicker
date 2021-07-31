
function colorPicker(){
    let color = document.getElementById('color').value;
    let heading = document.getElementById('title');
    let first= document.getElementById('output');



    heading.style.color = color;
    first.style.backgroundColor=color;

}
