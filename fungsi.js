// let close = document.querySelectorAll('.close');

//  close.forEach( function(el){
//      el.addEventListener('click', function(e){
//          e.target.parentElement.style.display = 'none';
         
//      });
//  });
 

function add (){
     const input = document.querySelector('.input').value;
     const listItem= document.querySelector('.listItem');

    if (input === ''){
        alert('Inputan harus di Isi!');
        return false;
    };

     const li = document.createElement('li');
     const span = document.createElement('span');
     span.className = 'close';
    li.className = 'itemList';
    listItem.appendChild(li).innerHTML = input;
    li.appendChild(span).innerHTML = 'x';

    document.querySelector('.input').value = "";

    let close = document.querySelectorAll('.close');

    close.forEach( function(el){
        el.addEventListener('click', function(e){
            e.target.parentElement.style.display = 'none';
            
        });
    });
    
    event.preventDefault();

    
 };

 