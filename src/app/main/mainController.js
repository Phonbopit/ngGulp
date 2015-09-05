(function() {
  'use strict';

  function mainController() {
    var vm = this;

    vm.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, possimus, animi expedita, velit tenetur reiciendis facere incidunt accusamus perspiciatis saepe, libero nesciunt vel omnis blanditiis aspernatur laudantium dolorem illo! Tenetur.";

  };

  angular.module('ngGulp')
    .controller('MainController', mainController);
})();
