// stack will following a LIFO --> last in first out
class Stack{
    constructor(){
        this.stack=[]
        this.count=0
    }
    // adding data to the front
    push(data){
        this.stack.push(data)
    }
    pop(){
        if(!this.stack){
            return console.log("the stack is empty")
        }else{
            this.stack.pop()
        }
    }
    peek(){
       return console.log(this.stack[this.stack.length-1]);
    }
    showStack(){
        console.log(this.stack)
    }
}

let stack=new Stack()
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)
stack.pop()

stack.peek()
