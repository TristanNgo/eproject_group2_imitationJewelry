angular.module('eproject.factory',[])
    .factory('factorygetdata',function($http){
        var getdata={};
        getdata.getslideshow=function(){
            return $http.get("json/slideshow.json");
        }
        getdata.getbestsale=function(){
            return $http.get("json/bestsale.json");
        }
        getdata.getproducts=function(){
            return $http.get("json/products.json");
        }
        getdata.getcompanyinfo=function(){
            return $http.get("json/companyinfo.json");
        }
        return getdata;
    });