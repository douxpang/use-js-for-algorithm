

// 查找两个节点的最近的一个共同父节点，可以包括节点自身


function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){
        return oNode1;
    }else{
        return commonParentNode(oNode1.parentNode,oNode2);
    }
} 



function commonParentNode(oNode1, oNode2) {
    var parent1 = [];   //用于存储包括oNode1的所有oNode1父节点
    parent1.push(oNode1);
    while(oNode1.parentNode){
        parent1.push(oNode1.parentNode);
        oNode1 = oNode1.parentNode;
    }
    while(oNode2){
        for(var i in parent1){
            if( parent1[i] == oNode2 ){
                return oNode2;
            }
        }
        oNode2 = oNode2.parentNode;
    }
    return null;
}