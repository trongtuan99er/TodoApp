const inputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todo-list")
const deleteAll = document.querySelector(".footer button")
// const todoList = document.querySelector("")
inputBox.onkeyup = (e) => {
      let userData = inputBox.value;
      if (userData.trim()!= 0){
            addBtn.classList.add("active");
      }else{
            addBtn.classList.remove("active")
      }
}

showTasks();
addBtn.onclick = () => {
      let userData = inputBox.value;
      let getlocalStorage = localStorage.getItem("New Todo")
      if(getlocalStorage == null){
            listArr = [];
      }else{
            listArr = JSON.parse(getlocalStorage);
      }
      listArr.push(userData);
      localStorage.setItem("New Todo", JSON.stringify(listArr));
      showTasks();
      inputBox.value = '';
      inputBox.focus();
}
function showTasks(){
      let getlocalStorage = localStorage.getItem("New Todo")
      if(getlocalStorage == null){
            listArr = [];
      }else{
            listArr = JSON.parse(getlocalStorage);
      }
      const pendingNum = document.querySelector(".pendingNum");
      pendingNum.textContent = listArr.length;
      if(listArr.length > 0){
            deleteAll.classList.add("active");
      }else{
            deleteAll.classList.remove("active");
      }
     let newLitag = '';
     listArr.forEach((element, index) =>{
            newLitag += ` <li>${element}<span onclick = "deleteTask(${index});"><i class="fas fa-trash"></i></span></li>`     
     })
     todoList.innerHTML = newLitag;
    
}
 
// delete task func
function deleteTask(index){
      let getlocalStorage = localStorage.getItem("New Todo")
      listArr = JSON.parse(getlocalStorage);
      listArr.splice(index, 1)
      localStorage.setItem("New Todo", JSON.stringify(listArr));
      showTasks();
      // inputBox.value = '';
      // inputBox.focus();
}
deleteAll.onclick =()=>{
      listArr = [];
      localStorage.setItem("New Todo", JSON.stringify(listArr));
      showTasks();
}