class BSNode{
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}



class BinarySearchTree {
    constructor(value) {
      this.root = value
    }


    // ** All left ecendents <= value < all right decendents
    insert(value){
        let newNode = new BSNode(value);
      
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left == null){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right == null ){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }

    }

 // helper method that calls the
// removeNode with a given data
remove(data)
{
	// root is re-initialized with
	// root of a modified tree.
	this.root = this.removeNode(this.root, data);
}

// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
		
	// if the root is null then tree is
	// empty
	if(node === null)
		return null;

	// if data to be delete is less than
	// roots data then move to left subtree
	else if(key < node.value)
	{
		node.left = this.removeNode(node.left, key);
		return node;
	}

	// if data to be delete is greater than
	// roots data then move to right subtree
	else if(key > node.value)
	{
		node.right = this.removeNode(node.right, key);
		return node;
	}

	// if data is similar to the root's data
	// then delete this node
	else
	{
		// deleting node with no children
		if(node.left === null && node.right === null)
		{
			node = null;
			return node;
		}

		// deleting node with one children
		if(node.left === null)
		{
			node = node.right;
			return node;
		}
		
		else if(node.right === null)
		{
			node = node.left;
			return node;
		}

		// Deleting node with two children
		// minimum node of the right subtree
		// is stored in aux
		var aux = this.findMinNode(node.right);
		node.value = aux.value;

		node.right = this.removeNode(node.right, aux.value);
		return node;
	}

}


    findMinNode(node){
        if(node.left == null){
            return node;
        }else return this.findMinNode(node.left);
    }
              
    
    getRootNode()
{
    return this.root;
}

inorder(node)
{
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }
}
 


// Performs preorder traversal of a tree   
preorder(node)
{
    if(node !== null)
    {
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}

postorder(node)
{
    if(node !== null)
    {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }
}
// search for a node with given data
search(node, data)
{
   // if trees is empty return null
    if(node == null)
        return null;
 
    // if data is less than node's data
    // move left
    else if(data < node.value)
        return this.search(node.left, data);
 
    // if data is less than node's data
    // move left
    else if(data > node.value)
        return this.search(node.right, data);
 
    // if data is equal to the node data
    // return node
    else
        return node;
}

}

module.exports = BinarySearchTree