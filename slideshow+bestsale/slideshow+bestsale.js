angular.module("eproject.slideshow+bestsale",[])
    .controller("Ctrl",function($scope,factorygetdata,$routeParams){
        factorygetdata.getslideshow().then(function(response){
            $scope.slideshowList=response.data;
        });
        factorygetdata.getbestsale().then(function(response){
            $scope.bestsaleList=response.data;
            $scope.selectedproductid={};
            angular.forEach($scope.bestsaleList,function(product){
                if(product.id==$routeParams.bestsaleproductid){
                    $scope.selectedproductid=product;
                }
            });
        });
    })



