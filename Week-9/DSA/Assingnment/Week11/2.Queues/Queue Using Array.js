class Queue {
    constructor(){
        this.items = [];
    }

    enQueue(value){
        this.items.push(value);
    }

    deQueue(){
        if(this.items.length === 0){
            return 'Queue is empty'
        }
        else{
           return this.items.shift();
        }
    }

    front(){
        if(this.items.length === 0){
            return 'Queue is empty'
        }
        else{
           return this.items[0];
        }
    }

    isEmpty(){
        return this.items.length === 0;
    }

    printQueue(){
        console.log(this.items.join(" "));
    }
}

let q = new Queue();

q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.printQueue();
q.deQueue()
q.printQueue();
console.log(q.front());