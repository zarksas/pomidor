function createTodoList() {
    const todoListObject = {
      items: [
        {
          text: "Завершить текущий челлендж",
          completed: false
        },
        {
          text: "Отдохнуть во время перерыва",
          completed: false
        },
        {
          text: "Помочь напарнику понять код",
          completed: false
        },
        {
          text: "Выиграть в мафию",
          completed: true
        },
      ],
      
  
    }
  
    return todoListObject;
  }
  
  const todoList = createTodoList();

  todoList.print = function(index) {
    if (this.items[index].completed) {
    console.log(`[x] ${this.items[index].text}`);
    } else {
   console.log(`[ ] ${this.items[index].text}`)   
    }
}

  todoList.printAll = function() {
      for (let i = 0; i < this.items.length; i++) {
        todoList.print(i)
      }
  }

 todoList.printAll();

 todoList.add = function(text) {
        this.items.unshift({text: text, completed: false})
 };

 todoList.remove = function(index) {
    this.items.splice(index, 1);
 }




