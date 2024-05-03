let file = document.getElementById('file');
let fileSize =  file.addEventListener('change', function() {
    let file = this.files[0];
    let size = file.size;
    console.log(size);
    document.getElementById('size').innerHTML = `Fayl hajmi: ${size} KB`;
})
