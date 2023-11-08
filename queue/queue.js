// queue -> FIFO
// 1.) enqueue() -> will add value to the front of the array
// 2.) dequeue()
// 3.) peek() / front()
// 4.) isEmpty()
// 5.) size()


class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(!this.items.length){
            return console.log(`underflow`)
        }
        this.items.shift() //remove the first ellemtn in the array
    }
    peek(){
        if(!this.items.length){
            return console.log("no ellement")
        }
        return console.log(this.items[0])
    }
    size(){
        return this.items.length
    }
    printQueue(){
        for( let i of this.items){
            console.log(`Queue: ${i}`)
        }
    }
}

queue1=new Queue()
queue1.enqueue(100)
queue1.enqueue(1200)
console.log(queue1.items)
queue1.peek()
queue1.printQueue()
