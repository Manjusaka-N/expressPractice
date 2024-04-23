/**
 * @author manjusaka
 * @description 业务异常通用code
 *
 */
class StatusCode {

  /***********************************/
  /**
   * code
   */
  code;
  /**
   * 说明
   */
  desc;

  constructor(code, desc) {
    this.code = code;
    this.desc = desc;
  }

  /************************************/

  static SUCCESS = new StatusCode(200, '成功');
  static FAILED = new StatusCode(500, '失败');
  static VALIDATE_FAILED = new StatusCode(400, '参数校验失败');
  static API_NOT_FOUNT = new StatusCode(404, '接口不存在');
  static Time_Out = new StatusCode(503, '请求超时');
  static API_BUSY = new StatusCode(700, '操作过于频繁')
}

module.exports =StatusCode
