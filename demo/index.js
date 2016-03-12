angular.module('app', ['ImgSrc'])
  .controller('ImageFallbackController', [
    '$scope', '$timeout',
    function ($scope, $timeout) {
      $scope.img_initial = "demo/images/AngularJs-gray.png";
      $scope.img_external = "http://it-kokensha.com/company/wp-content/uploads/2015/06/full_2125152.jpeg.png";
      $scope.img_external_2 = "http://findicons.com/files/icons/2773/pictonic_free/512/angularjs.png";
      $scope.img_actual = "demo/images/AngularJs.png";
      $scope.img_loading = "demo/images/AngularJs-loading.png";

      $scope.img = null;

      $timeout(function () {
        console.log('ctrl updating new image..');
        $scope.img = $scope.img_external+'';
      }, 2000);

      $scope.switchImage = function () {
        $scope.img = $scope.newImageSource+'';
      }

    }])
;