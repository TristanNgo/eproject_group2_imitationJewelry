angular
  .module("eproject.sannyra", [])
  .controller("sannyraController", function ($scope, factorygetdata) {
    $scope.product = "sannyra";
    $scope.icon = "";
    $scope.productorder = "name";
    factorygetdata.getproducts().then(function (response) {
      $scope.productslist = [];
      angular.forEach(response.data, function (product) {
        if (product.brand == "Sannyra") {
          $scope.productslist.push(product);
        }
      });
    });
  });
