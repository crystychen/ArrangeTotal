export function postAjax(opt = {url, data}){
  return new Promise((resolve, reject)=>{
    wx.request({
      url: 'https://mallapi.ejamad.com/' + opt.url,
      method: 'POST',
      data: opt.data || {},
      success: res =>{
        console.log(`=====${opt.data.method}=====`);
        console.log(res);
        resolve(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  })
}
