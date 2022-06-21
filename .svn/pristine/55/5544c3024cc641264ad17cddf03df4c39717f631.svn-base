/**
 * 校验手机号码是否正确
 */
function checkPhoneNumberRule(phone) {
  return (/^1[123456789]\d{9}$/.test(phone))
}
/**
 * 校验邮箱格式是否正确
 */
function checkEmailNumberRule(email) {
  return (/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/.test(email))
}

/**
 * @desc 时间戳
 */
const currTimestamp = () => {
  return Date.now() //Date.parse(new Date())
}
/**
 * @desc 时间戳差值转时间
 */
function getRemainderTime(s2, s1) {
  var runTime = s2 / 1000 - s1 / 1000;
  var year = Math.floor(runTime / 86400 / 365);
  runTime = runTime % (86400 * 365);
  var month = Math.floor(runTime / 86400 / 30);
  runTime = runTime % (86400 * 30);
  var day = Math.floor(runTime / 86400);
  runTime = runTime % 86400;
  var hour = Math.floor(runTime / 3600);
  runTime = runTime % 3600;
  var minute = Math.floor(runTime / 60);
  runTime = runTime % 60;
  var second = Math.ceil(runTime);
  return year + ',' + month + ',' + day + ',' + hour + ',' + minute + ',' + second;

}
/**
 * @desc 判断两个对象是否相等
 */
function diff(obj1,obj2){
  var o1 = obj1 instanceof Object;
  var o2 = obj2 instanceof Object;
  if(!o1 || !o2){/*  判断不是对象  */
      return obj1 === obj2;
  }

  if(Object.keys(obj1).length !== Object.keys(obj2).length){
      return false;
      //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
  }

  for(var attr in obj1){
      var t1 = obj1[attr] instanceof Object;
      var t2 = obj2[attr] instanceof Object;
      if(t1 && t2){
          return diff(obj1[attr],obj2[attr]);
      }else if(obj1[attr] !== obj2[attr]){
          return false;
      }
  }
  return true;
}
module.exports = {
  CheckPhoneNumberRule: checkPhoneNumberRule, //校验手机号码格式是否正确
  CheckEmailNumberRule: checkEmailNumberRule, //校验邮箱格式是否正确
  CurrTimestamp: currTimestamp, //获取当前时间戳
  GetRemainderTime: getRemainderTime, //时间戳差值转时间
  Diff:diff,
}