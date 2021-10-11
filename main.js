angular
  .module("eproject", [
    "ngRoute",
    "ngAnimate",
    "eproject.slideshow+bestsale",
    "eproject.original",
    "eproject.artificial",
    "eproject.semi-precious",
    "eproject.sannyra",
    "eproject.sukkhi",
    "eproject.dazzling",
    "eproject.product",
    "eproject.compare",
    "eproject.contactus",
    "eproject.factory",
  ])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "slideshow+bestsale/slideshow+bestsale.html",
          controller: "Ctrl",
        })
        .when("/original", {
          templateUrl: "products/products.html",
          controller: "originalController",
        })
        .when("/semi-precious", {
          templateUrl: "products/products.html",
          controller: "semi-preciousController",
        })
        .when("/artificial", {
          templateUrl: "products/products.html",
          controller: "artificialController",
        })
        .when("/sannyra", {
          templateUrl: "products/products.html",
          controller: "sannyraController",
        })
        .when("/sukkhi", {
          templateUrl: "products/products.html",
          controller: "sukkhiController",
        })
        .when("/dazzling", {
          templateUrl: "products/products.html",
          controller: "dazzlingController",
        })
        .when("/product/:productid", {
          templateUrl: "products/product.html",
          controller: "productdetailsController",
        })
        .when("/product/:bestsaleproductid", {
          templateUrl: "products/product.html",
          controller: "Ctrl",
        })
        .when("/compare", {
          templateUrl: "compare/compare.html",
          controller: "compareCtrl",
        })
        .when("/contactus", {
          templateUrl: "contactus+aboutus/contactus.html",
          controller: "contactusCtrl",
        })
        .when("/aboutus", { templateUrl: "contactus+aboutus/aboutus.html" })
        .otherwise({ redirectTo: "/" });
    },
  ]);
