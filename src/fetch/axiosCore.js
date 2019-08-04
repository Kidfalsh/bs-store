
import axios from "axios";
import { Component } from "react";
 
let base = "/api";


axios.defaults.baseURL = "http://localhost:8000/"//api前缀



// 请求前拦截
axios.interceptors.request.use(
  config => {
    //在发送请求之前做某事，比如加一个loading
    // ...
    return config;
  },
  err => {
    console.log("请求超时");
    //请求错误时做些事
    // ...
    return Promise.reject(err);
  }
);
// 返回后拦截
axios.interceptors.response.use(
  data => {
    return data;
  },
  err => {
    if (err.response.status === 504 || err.response.status === 404) {
      console.log("服务器被吃了⊙﹏⊙∥");
    } else if (err.response.status === 401) {
      console.log("登录信息失效⊙﹏⊙∥");
    } else if (err.response.status === 500) {
      console.log("服务器开小差了⊙﹏⊙∥");
    }
    return Promise.reject(err);
  }
);


// @RequestBody请求  post-body 请求
const postRequestBody = (url, params) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8"
    }
  });
};


// @RequsetParam请求  post-param 文件请求
const postRequestParam = (url, params) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function(data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

// get请求封装
const get = url => {
  return axios({
    method: "get",
    url: `${base}${url}`
  });
};


// 多封装
const multiple = function(requsetArray, callback) {
  axios.all(requsetArray).then(axios.spread(callback));
};

Component.prototype.get = get;
Component.prototype.postRequestBody = postRequestBody;
Component.prototype.postRequestParam = postRequestParam;
Component.prototype.multiple = multiple;