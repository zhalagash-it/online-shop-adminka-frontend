export const search = function(tree, callback) {
    let b = false;
    let result = null;

    function find(n, clb) {
        if (b || !n)
            return;
        if (clb(n.node)) {
            b = true;
            result = n;
            return;
        }
        if (n.children.length) {
            for (let ch of n.children)
                find(ch, clb);
        }
    }
    find(tree, callback);
    return result;
}

export const arrayToTree = (arr) => {
    const tree = new Node(null);
    for (let item of arr) {
        const node = new Node(item);
        if (item.parent_id > 0) {
            const exists = search(tree, n => n && n.id === item.parent_id);
            if (exists) {
                exists.children.push(node);
                node.parent = exists;
            }
        } else if (item.parent_id === null) {
            tree.children.push(node);
        }
    }
    return tree;
}

export const treeToArray = (node) => {
    const arr = [];
    if (node.node)
        arr.push();
    if (node.children.length > 0)
        pushChild(node);

    function pushChild(n) {
        for (let ch of n.children) {
            arr.push(ch.node);
            if (ch.children.length > 0)
                pushChild(ch);
        }
    }
    return arr;
}

export const Node = function(item) {
    this.node = item;
    this.children = [];
    this.parent = null;
    this.isExpanded = false;
}