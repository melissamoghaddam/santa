app.controller("santaCtrl", function($scope) {
    $scope.showShoppingCart = false;
    $scope.showCoalBag = false;
    $scope.showJsonDiv = false;
    $scope.jsonString = "";
    $scope.coalNum = 0;
    $scope.selectBehav = "";
    $scope.kids = [
    	{name:'Curious George', wishList:'bike', behavior:'Nice'},
    	{name:'Sofia', wishList:'Tiara', behavior:'Nice'},
    	{name:'Pinokyo', wishList:'BackPack', behavior:'Naughty'},
    	{name:'Micky Mouse', wishList:'Tent', behavior:'Naughty'},
    	{name:'Super Why', wishList:'car', behavior:'Nice'},
    	{name:'Juni B Jones', wishList:'Doll', behavior:'Naughty'},
    	{name:'Daniel Tiger', wishList:'iPad', behavior:'Nice'}
    ];
    
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    };
    
    $scope.addNewChild = function() {
    	if(!$scope.newName || !$scope.newWish || !$scope.newBehav)
    		return;
    	var newKidObject = {name:$scope.newName, wishList:$scope.newWish, behavior: $scope.newBehav};
    	$scope.kids.push(newKidObject);
    	$scope.newName = "";
    	$scope.newWish = "";
    	$scope.newBehav = "";
    	
    };
    
    $scope.removeKid = function(index) {
    	$scope.kids.splice(index, 1);
    };
    
    $scope.createJson = function () {
   		$scope.showJsonDiv = true;
   		var niceList = [];
   		var naughtyList= [];
   		for (var kid in $scope.kids)
   			if ($scope.kids[kid].behavior == 'Nice')
   				niceList.push("'" + $scope.kids[kid].name+ "'");
   			else
   				naughtyList.push("'" + $scope.kids[kid].name+ "'");
   
   		$scope.jsonString = "{'Nice': [ " + niceList.join(', ') + "], 'Naughty': [" + naughtyList.join(', ') + "]}";
   }
});