/**
 * Created by wangliugen on 2017/7/13.
 */

function addNewPart() {
var para = document.createElement("p");
var node = document.createTextNode("this new part");
para.appendChild(node);
var elment = document.getElementById("div1");
elment.appendChild(para);

}

function deletePart() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.removeChild(child);
}