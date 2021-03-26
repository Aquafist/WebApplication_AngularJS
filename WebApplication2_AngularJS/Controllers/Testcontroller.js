app.controller('myBooks', function ($scope) {
    $scope.products = ["The Monk Who Sold His Ferrar", "Death in the Cloud", " Keep Off the Grass"];
    $scope.addItems = function () {
        $scope.errortext = "";
        if (!$scope.addInList) {
            return;
        }
        if ($scope.products.indexOf($scope.addInList) == -1) {
            $scope.products.push($scope.addInList);
        }
        else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});
app.controller('myShopping', function ($scope) {
    $scope.products = ["Butter","Milk","Bread","Apple"];
    $scope.addItems = function () {
        $scope.errortext = "";
        if (!$scope.addInList) {
            return;
        }
        if ($scope.products.indexOf($scope.addInList) == -1) {
            $scope.products.push($scope.addInList);
        }
        else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});