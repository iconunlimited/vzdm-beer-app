app.controller("mainController", function($scope, $http, Restangular, $uibModal){
	
	$scope.beersList=[];
	$scope.currentPage = 1;
	
	$scope.loadBeerData = function() {
		Restangular.all('beers').getList()
			.then(function(beerData) {

				beerData.forEach(function(beerItem) {
					$scope.beersList.push(beerItem);
				});

			});
		console.log("beersList is ", $scope.beersList);
	};
	
	$scope.doBeerSearch = function(qParams) {

		$scope.emptySearch = false;
		$scope.noBeersFound = false;

		if(!$scope.beerName) {
			$scope.emptySearch = true;
			return;
		}

		//clear out previous search value
		$scope.beersList=[];
		
		var filteredResults,
			normBeerStr = $scope.beerName.trim().toLowerCase();

		$scope.beersList.forEach(function(beerItem) {
			if(normBeerStr === beerItem.Name) {
				$scope.noBeersFound = false;
				filteredResults.push(beerItem);
			}
		});
		$scope.beersList = filteredResults;

	/*
		var beerSearchResults = Restangular.all('beers')
			.then(function(response) {				

				if(response.data) {

					var fullList = response.data;

					fullList.forEach(function(beerItem) {
						if(normBeerStr === beerItem.Name) {
							$scope.noBeersFound = false;
							filteredResults.push(beerItem);
						}
					});	

					$scope.beersList = filteredResults;	
					
				}
				
			},function(response) {
				if(response.status == 404) {
					$scope.noBeersFound = true;
				}
			});
		*/
	};

	$scope.loadBeerData();
    
});