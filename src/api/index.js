import requests from "./requests";

export function getBaseCategoryList(params){
    return requests({
        url:'/api/product/getBaseCategoryList',
        method:'get',
        params
    })
};

export function postlist(data={}){
    return requests({
        url:'/api/list',
        method:'post',
        data
    })
}

