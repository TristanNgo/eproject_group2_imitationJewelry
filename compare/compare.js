angular.module("eproject.compare",[])
    .controller("compareCtrl",function($scope,factorygetdata){
        factorygetdata.getproducts().then(function(response){
            $scope.productslist=response.data;
        });
    });