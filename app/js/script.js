const toggle = document.querySelectorAll('.toggle');
for(const btn of toggle){
    btn.addEventListener('click',function(){
        const id = btn.attributes.name.nodeValue;
        const current = document.querySelectorAll('.show-content[name="' + id + '"]');
        for(const current_btn of current){
            current_btn.classList.toggle('visible');
            btn.classList.toggle('active');
        }
    });
}