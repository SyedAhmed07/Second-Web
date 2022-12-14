var mainlist = document.getElementById('mainlist');
var inp1 = document.getElementById('inp1');


function abc() {
    var a = document.createElement('LI');
    var b = document.createTextNode(inp1.value);
    a.appendChild(b);
    mainlist.appendChild(a);
    var ab = document.createElement('BUTTON');
    var ad = document.createTextNode('Delete');
    ab.appendChild(ad);
    a.appendChild(ab);
    var btnedit = document.createElement('BUTTON');
    var txtedit = document.createTextNode('Edit');
    btnedit.appendChild(txtedit);
    a.appendChild(btnedit);
    ab.setAttribute('Class', 'btnjs')
    btnedit.setAttribute('Class', 'btnjs')

    ab.setAttribute('onclick', 'xyz(this)')
    btnedit.setAttribute('onclick', 'edit(this)')



    console.log(a);
}


function xyz(element) {
    element.parentNode.remove();
}

function edit(element) {
    element.parentNode.firstChild.nodeValue = prompt();
}

function delall() {
    mainlist.innerHTML = '';
}