angular.module("eproject.contactus",[])
    .controller("contactusCtrl", function($scope,factorygetdata){
        factorygetdata.getcompanyinfo().then(function(response){
            $scope.contactinfo=response.data;
        });
    });
