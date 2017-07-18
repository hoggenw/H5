/**
 * Created by wangliugen on 2017/7/10.
 */

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    console.log(x);
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}