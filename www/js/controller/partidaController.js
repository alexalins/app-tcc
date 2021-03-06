app.controller('partidaCtrl', function($scope, $rootScope, $state, $stateParams, $http, $ionicPopup, $ionicLoading, partidaService){
	partidaService.getPartida($stateParams.id)
		.then(function (success) {
			$scope.partida = success.data;
			relatorio($scope.partida.relatorio);
			$state.go('menu.partida');
		})
		.catch(function (error) {
			alert("Não foi possível listar os dados");
		})
	//
	//RELATORIO

	let relatorio = function (dados) {
		var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["Erro", "Acerto"],
				datasets: [{
					data: [dados.erros.length, dados.acertos.length],
					backgroundColor: [
						'rgba(255,99,132,1)',
						'rgba(75, 192, 192, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(75, 192, 192, 1)'
					],
					borderWidth: 1
				}]
			}
		});
	}
})