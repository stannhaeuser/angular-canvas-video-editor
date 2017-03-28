(function(angular) {
  'use strict';
function VideoEditorController() {

}

angular.module('angular-canvas-video-editor').component('videoEditor', {
  templateUrl: 'video-editor.html',
  controller: VideoEditorController,
  bindings: {
    hero: '='
  }
});
})(window.angular);
