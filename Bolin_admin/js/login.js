function PostData() {
    // 验证数据
    regData();

}
// 验证数据
function regData() {
    // username password
    var username = $.trim($('input[name=username]').val());
    var password = $.trim($('input[name=password]').val());



    if (!username) {
        layer.msg("请输入用户名！")
        return false;
    }
    if (!password) {
        layer.msg("请输入密码！")
        return false;
    }

    var data = {
        "username": username,
        "password": password
    }

    // 提交数据进行验证
    $.ajax({
        url: "",
        data: data,
        async: true,
        method: 'post',
        cache: false,
        dataType: "json",
        success: function() {

        },
        error: function(res) {

        }
    })

}