// 把单个数组转化为对象返回
function singleArrayToObject(data) {
  if (Array.isArray(data) && data.length === 1) {
    return data[0]
  } else {
    return data
  }
}

// 对数据类型进行判断
function judgeDataType(data,datatype){
  // data:{id:1,name:'name'}
  // datatype:{id:'number',name:'string'}
  const keys = Object.keys(datatype)
  keys.forEach(i=>{
    console.log(Object.prototype.toString.call(data[i]))
  })
  const res = keys.every(item=> Object.prototype.toString.call(data[item]).includes(datatype[item]))
  return res
}

module.exports = {
  singleArrayToObject,
  judgeDataType
}
