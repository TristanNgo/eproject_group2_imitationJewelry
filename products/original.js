angular
  .module("eproject.original", [])
  .controller("originalController", function ($scope, factorygetdata) {
    $scope.product = "original";
    $scope.icon = "tv";
    $scope.productorder = "name";
    factorygetdata.getproducts().then(function (response) {
      $scope.productslist = [];
      angular.forEach(response.data, function (product) {
        if (product.type == "Original") {
          $scope.productslist.push(product);
        }
      });
    });
  });
