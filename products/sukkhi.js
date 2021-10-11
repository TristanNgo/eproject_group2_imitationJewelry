angular
  .module("eproject.sukkhi", [])
  .controller("sukkhiController", function ($scope, factorygetdata) {
    $scope.product = "sukkhi";
    $scope.icon = "";
    $scope.productorder = "name";
    factorygetdata.getproducts().then(function (response) {
      $scope.productslist = [];
      angular.forEach(response.data, function (product) {
        if (product.brand == "Sukkhi") {
          $scope.productslist.push(product);
        }
      });
    });
  });
