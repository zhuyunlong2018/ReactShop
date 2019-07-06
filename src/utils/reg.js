/**
 * 正则表达式工具类
 */
class Reg {

    static regCheck(str, reg) {
        if (str === "") { //输入不能为空
            // console.log('str is empty')
            return false;
        } else if (!reg.test(str)) { //正则验证不通过，格式不对
            // console.log(str+' regex is wrong')
            return false;
        } else {
            // console.log('true')
            return true;
        }
    }

    static isEmail(str) {
        var reg = new RegExp(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/);
        return this.regCheck(str, reg);
    }

    static checkPwd(str) {
        var reg = new RegExp(/^[A-Za-z0-9_]{6,30}$/);
        return this.regCheck(str, reg);
    }

    static isPhone(str) {
        var reg = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
        return this.regCheck(str, reg);
    }
}

export default Reg