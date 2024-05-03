function findText (e)  {
    e.preventDefault();
    let textarea = document.getElementById('textarea').value.split(' ');
    let input = document.getElementById('input').value.split(' ');
    
    if (textarea.includes(input[0])) {
        alert('Yes');
    }else{
        alert('No');
    }
}