var input=document.getElementById("input");

var ulist=document.getElementById("ulist");

/*addbtn.addEventListener("click",function(event){

    event.preventDefault();
    var listItem=document.createElement("li");
    listItem.innerHTML =input.value;
    ulist.append(listItem);
})*/

function add()
{
    if(input.value ==='')
    {
        alert("Please enter anything");
    }
    else{
    var listItem=document.createElement("li");
    listItem.innerHTML ="<input type='checkbox' class='check'>" + input.value + "<button class='edit'>Edit</button>" + "<button class='delete'>Delete</button>";
    ulist.appendChild(listItem);
}
    input.value="";
    savaData();
}
var checked=document.querySelector(".checked")
var delet=document.querySelector(".delete");

ulist.addEventListener("click",function(event){
 if(event.target.className==="checked"){
    event.target.classList.toggle("checked");
    savaData();
   }
   else if(event.target.className==="delete" && event.target.parentElement.querySelector('.check').checked==true)
   {
    event.target.parentElement.remove();
    savaData();
}
   /* if(event.target.className==="checked" ){
        console.log("awdhvbnadsv6");
        if(event.target.className==="delete"){
        event.target.parentElement.remove();
    }
    }
    else if(event.target.className==="edit"){
        alert("Hello");

    }*/
},false);

/*var edit=document.querySelector(".edit")
edit.addEventListener("click",function(event){

})*/

var check=document.querySelector(".checked")
check.addEventListener("click",function(event){
    event.target.style.decoration="line-through";
})

ulist.savaData()
{
    localstorage.setItem("data",ulist.innerHTML);
}

function showtask()
{
    ulist.innerHTML=localstorage.getItem("Data")
}
showtask();

