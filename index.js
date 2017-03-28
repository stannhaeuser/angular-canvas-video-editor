(function(angular) {
  'use strict';
function VideoEditorController() {

}

angular.module('video-editor').component('video-editor', {
  templateUrl: 'index.html',
  controller: VideoEditorController,
  bindings: {
    hero: '='
  }
});
})(window.angular);
