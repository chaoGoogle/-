function validateCheckbox() {
    if (document.forms[0].rgouxuan.checked) {
        return true;
    } else {
        alert("请勾选用户协议！");
        return false;
    }
}