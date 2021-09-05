// 写一个能够插值的 {{}}语法


const textReg = /\{\{\s?\w+\s?\}\}/gi; // 检测{{name}}语法
console.log(textReg.test('sss'));
console.log(textReg.test('aaa{{name}}'));
console.log(textReg.test('aaa{{  name  }} {{ text }}'));


// 写这种 正则表达式 就不怕  比如匹配 {{}}    就  /\{\{\s?\w\s?\}\}/ 


// let content = node.textContent;

// if(textReg.test(content)) {

// }


//  https://www.cnblogs.com/chenjg/p/9548473.html  还有 v-model

class MVVM {


    constructor({ data, el }) {
      this.data = data;
      this.el = el;
      this.init();
      this.initDom();
    }
    
    initDom() {
      const fragment = this.node2Fragment();
      this.compile(fragment);
      // 将fragment返回到页面中
      document.body.appendChild(fragment);
    }
    
    compile(node) {
      const textReg = /\{\{\s*\w+\s*\}\}/gi; // 检测{{name}}语法
      if (this.isTextNode(node)) {
        // 若是文本节点，则判断是否有{{}}语法，如果有的话，则编译{{}}语法
        let textContent = node.textContent;
        if (textReg.test(textContent)) {
          // 对于 "test{{test}} {{name}}"这种文本，可能在一个文本节点会出现多个匹配符，因此得对他们统一进行处理
          // 使用 textReg来对文本节点进行匹配，可以得到["{{test}}", "{{name}}"]两个匹配值
          const matchs = textContent.match(textReg);
          CompileUtils.compileTextNode(this.data, node, matchs);
        }
      }
      // 若节点有子节点的话，则对子节点进行编译
      if (node.childNodes && node.childNodes.length > 0) {
        Array.prototype.forEach.call(node.childNodes, (child) => {
          this.compile(child);
        })
      }
    }
    // 是否是文本节点
    isTextNode(node) {
      return node.nodeType === 3;
    }
  }
  
  const CompileUtils = {
    reg: /\{\{\s*(\w+)\s*\}\}/, // 匹配 {{ key }}中的key
    // 编译文本节点，并注册Watcher函数，当文本节点依赖的属性发生变化的时候，更新文本节点
    compileTextNode(vm, node, matchs) {
      // 原始文本信息
      const rawTextContent = node.textContent;
      matchs.forEach((match) => {
        const keys = match.match(this.reg)[1];
        console.log(rawTextContent);
        new Watcher(vm, keys, () => this.updateTextNode(vm, node, matchs, rawTextContent));
      });
      this.updateTextNode(vm, node, matchs, rawTextContent);
    },
    // 更新文本节点信息
    updateTextNode(vm, node, matchs, rawTextContent) {
      let newTextContent = rawTextContent;
      matchs.forEach((match) => {
        const keys = match.match(this.reg)[1];
        const val = this.getModelValue(vm, keys);
        newTextContent = newTextContent.replace(match, val);
      })
      node.textContent = newTextContent;
    }
  }