class _Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data){

        const node  = new _Node(data)

        if(this.first === null){
            this.first = node
            this.last = this.first
        }

        else{

            this.last.next = new _Node(data, this.last)

            this.last = this.last.next

        }

    }

    dequeue(){

        if(this.first === null){
            return
        }

        const node = this.first
        
        this.first = this.first.next

        if(node === this.last){
            this.last = null
        }

        return node.value

    }
    
}

module.exports = Queue