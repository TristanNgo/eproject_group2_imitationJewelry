angular
  .module("eproject.artificial", [])
  .controller("artificialController", function ($scope, factorygetdata) {
    $scope.product = "artificial";
    $scope.icon = "snowflake";
    $scope.productorder = "name";
    factorygetdata.getproducts().then(function (response) {
      $scope.productslist = [];
      angular.forEach(response.data, function (product) {
        if (product.type == "Artificial") {
          $scope.productslist.push(product);
        }
      });
    });
  });
