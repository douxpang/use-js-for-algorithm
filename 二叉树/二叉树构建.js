function Node(data,left,right) {
    this.data = data
    this.left = left
    this.right = right
}

Node.prototype = {
    show: function() {
        console.log(this.data)
    }
}

function Tree() {
    this.root = null
}

Tree.prototype = {
    insert: function(data) {
        let node = new Node(data,null,null)
        if(!this.root) {
            this.root = node
            return
        }
        let current = this.root
        this.parent = null
        while(current) {
            parent = current
            if(data < parent.data) {
                current = current.left
                if(!current) {
                    parent.left = node
                    return
                }

            }else {
                current = current.right
                if(!current) {
                    parent.right = node
                    return
                }
            }
        }
    },
    preOrder: function(node) {   //先序遍历
        if(node) {
            node.show()
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    },
    getDeep: function(node) {
        let deep = 0
        if(node === null) {
            return deep
        }
        deep++
        var dLeft = this.getDeep(node.left)
        var dRight = this.getDeep(node.right)
        return Math.max(dLeft,dRight) 
    },

    getNode : function (data,node) {
        if(node) {
            if(data === node.data) {
                return node
            }else if(data < node.data){
                return this.getNode(data,node.left)
            } 
        }
    }
    
}
