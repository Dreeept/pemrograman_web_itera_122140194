const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){
    if(taskInput.value === ''){
        alert("You have to write Something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);

        let del_btn = document.createElement("button");
        del_btn.innerHTML = "Hapus";
        del_btn.classList.add("del-btn");  

        let done_btn = document.createElement("button");
        done_btn.innerHTML = "Tandai Selesai";
        done_btn.classList.add("done-btn"); 
  
        li.appendChild(del_btn);
        li.appendChild(done_btn)
    }
    taskInput.value = "";
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.classList.contains("done-btn")) {
        let li = e.target.parentElement;

         if (!li.querySelector(".done-text")) {
            let doneText = document.createElement("span"); 
            doneText.textContent = " <Tugas telah selesai>"; 
            doneText.classList.add("done-text");            
            let taskTextNode = li.firstChild;  
            li.insertBefore(doneText, taskTextNode.nextSibling);           
        }                                
        saveData();
    } else if (e.target.classList.contains("del-btn")) {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();
