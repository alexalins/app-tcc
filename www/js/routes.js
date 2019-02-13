angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    

    .state('menu.inicio', {
    url: '/inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'fonoCtrl'
      }
    }
  })

  .state('menu.meusPacientes', {
    url: '/pacientes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusPacientes.html',
        controller: 'fonoCtrl'
      }
    }
  })

  .state('menu.sobre', {
    url: '/sobre',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobre.html'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastro', {
    url: '/cadastroFono',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('menu.atualizar', {
    url: '/atualizar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/atualizar.html',
        controller: 'fonoCtrl'
      }
    }
  })

  .state('menu.cadastroPaciente', {
    url: '/cadastroPaciente',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastroPaciente.html',
        controller: 'cadastroCtrl'
      }
    }
  })

  .state('menu.paciente', {
    url: '/paciente/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paciente.html',
        controller: 'pacienteCtrl'
      }
    }
  })

  .state('menu.partidas', {
    url: '/partidas/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/partidas.html',
        controller: 'pacienteCtrl'
      }
    }
  })

  .state('menu.partida', {
    url: '/partida/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/partida.html',
        controller: 'partidaCtrl'
      }
    }
  })

  .state('menu.cadastroPalavras', {
    url: '/cadastroPalavras/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastroPalavras.html',
        controller: 'palavraCtrl'
      }
    }
  })

  .state('menu.palavras', {
    url: '/palavras/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palavras.html',
        controller: 'palavraCtrl'
      }
    }
  })

  .state('menu.meusDados', {
    url: '/meusDados',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusDados.html',
        controller: 'fonoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')


});