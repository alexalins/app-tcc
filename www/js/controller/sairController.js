app.controller('sairCtrl', function($scope, $state){
    $scope.sair = function(){
		//removendo dados do usuario
		localStorage.removeItem("dados");
		
		//indo pra pagina de login
		$state.go('login');
	}   
})