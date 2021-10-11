angular
  .module("eproject.semi-precious", [])
  .controller("semi-preciousController", function ($scope, factorygetdata) {
    $scope.product = "semi-precious";
    $scope.icon = "tshirt";
    $scope.productorder = "name";
    factorygetdata.getproducts().then(function (response) {
      $scope.productslist = [];
      angular.forEach(response.data, function (product) {
        if (product.type == "Semi-Precious") {
          $scope.productslist.push(product);
        }
      });
    });
  });
