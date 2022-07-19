function getAndupdate(){
    console.log("updting")
    tit =document.getElementById('title').value;
    desc =document.getElementById('description').value;
    if(localStorage.getItem('itemsjson')==null){
        itemjsonArray=[];
        itemjsonArray.push([tit,desc]);
        localStorage.setItem('itemsjson', JSON.stringify(itemjsonArray))
    }
    else{
        itemjsonArrayStr =localStorage.getItem('itemsjson')
        itemjsonArray =JSON.parse(itemjsonArrayStr);
        itemjsonArray.push([tit,desc]);
        localStorage.setItem('itemsjson',JSON.stringify(itemjsonArray))
    }
    update();
}
function update(){
    console.log("updting")
    tit =document.getElementById('title').value;
    desc =document.getElementById('description').value;
    if(localStorage.getItem('itemsjson')==null){
        itemjsonArray=[];
        localStorage.setItem('itemsjson', JSON.stringify(itemjsonArray))
    }
    else{
        itemjsonArrayStr =localStorage.getItem('itemsjson')
        itemjsonArray =JSON.parse(itemjsonArrayStr);
    }
    // populate the table
    let tablebody =document.getElementById("tablebody");
    let str =""
    itemjsonArray.forEach((element,index) => {
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" onclick ="deleted(${index})">Deleted</button></td>
    </tr>`
        
    });
    tablebody.innerHTML =str;  
}
add =document.getElementById("add");
add.addEventListener('click',getAndupdate);
update();
function deleted(itemindex){
    console.log("delete",itemindex);
    itemjsonArrayStr =localStorage.getItem('itemsjson')
    itemjsonArray =JSON.parse(itemjsonArrayStr);
     // Delete itemsIndex elememt from the array
     itemjsonArray.splice(itemindex,1);
     localStorage.setItem('itemsjson',JSON.stringify(itemjsonArray));
     update();
}
function clearstr(){
    if(confirm("do you areally want  to clear ?"))
    localStorage.clear();
    console.log("clear the storage");
    update();
}