//电话号码验证
$("input[name = 'phone']").blur(function(){
    isnum(this);
})
function isnum(obj){
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if(!reg.test(obj.value)){
        popupText("请正确填写手机号！");
        obj.value="";
    }
}
function popupText(Describe,Time){
    var oDiv = document.createElement("div");
    oDiv.id = "popup";
    var sText = "z-index: 9999;font-size: 14px;position: fixed;max-width:80%;left:50%;top:50%;background:rgba(0,0,0,0.8);color:#FFF;padding:16px 20px;border-radius:6px;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);"
    var textHtml = '<div style="' + sText + '" class="popup_text">' + Describe +'</div>';
    oDiv.innerHTML = textHtml;
    document.body.appendChild(oDiv);
    if(Time == undefined){
        Time = 1000;
    }
    setTimeout(function(){
        document.body.removeChild(document.getElementById("popup"));
    },Time);
}


//设置显示
$('.li_input').blur(function(){
    var oThis = this;
    inpBlur(oThis);})
$('.li_input').focus(function(){
    var oThis = this;
    inpFocus(oThis);})
// $('input[name = "password"]').blur(function(){inpBlur();})
function inpFocus(oThis){
    var oDiv = $(oThis);
    oDiv.parent().find('.li_inp .lab').addClass('an_input');
}
function inpBlur(oThis){
    var oDiv = $(oThis);
    if(oDiv.attr("value") == ""){
        oDiv.parent().find('.li_inp .lab').removeClass('an_input');
    }
}