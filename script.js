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

  todoList.printAll = function() {
      for (let i = 0; i < this.items.length; i++) {
          console.log(this.items[i].text)
      }
  }

 todoList.printAll()