const StatusCode = require('./statusCode');

/**
 * @author manjusaka
 * @description 统一返回结果
 */
class StatusResult {

  /**
   * 返回code
   */
  code;
  /**
   * 返回消息
   */
  msg;
  /**
   * 返回数据
   */
  data;
  /**
   * 返回时间
   */
  time;

  /**
   *
   * @param code {number} 返回code
   * @param msg {string} 返回消息
   * @param data {any} 返回具体对象
   */
  constructor(code, msg, data, success) {
    this.code = code;
    this.msg = msg;
    this.data = data;
    this.success = success;
    this.time = Date.now();
  }

  /**
   * 成功
   * @param data {any} 返回对象
   * @return {BizResult}
   */
  static success(data) {
    return new StatusResult(StatusCode.SUCCESS.code, StatusCode.SUCCESS.desc, data,true);
  }

  /**
   * 失败
   */
  static fail(errData) {
    return new StatusResult(StatusCode.FAILED.code, StatusCode.FAILED.desc, errData,false);
  }

  /**
   * 参数校验失败
   */
  static validateFailed(param) {
    return new StatusResult(StatusCode.VALIDATE_FAILED.code, StatusCode.VALIDATE_FAILED.desc, null,false);
  }

  /**
   * 请求超时
   */
  static timeOut(param) {
    return new StatusResult(StatusCode.Time_Out.code, StatusCode.Time_Out.desc, null,false);
  }

  /**
   * 接口不存在
   * @param
   */
  static apiNotFound() {
    return new StatusResult(StatusCode.API_NOT_FOUNT.code, StatusCode.API_NOT_FOUNT.desc, null,false);
  }

}

module.exports = StatusResult
