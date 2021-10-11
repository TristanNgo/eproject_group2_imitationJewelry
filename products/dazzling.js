angular
  .module("eproject.dazzling", [])
  .controller("dazzlingController", function ($scope, factorygetdata) {
    $scope.product = "Dazzling";
    $scope.icon = "";
    $scope.productorder = "name";
    factorygetdata.getproducts().then(function (response) {
      $scope.productslist = [];
      angular.forEach(response.data, function (product) {
        if (product.brand == "Dazzling") {
          $scope.productslist.push(product);
        }
      });
    });
  });
