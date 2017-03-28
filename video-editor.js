(function(angular) {
  'use strict';
function VideoEditorController() {
  var canvas = document.getElementById("video-editor");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,150,75);
}

angular.module('angular-canvas-video-editor', []).component('videoEditor', {
  template: '<canvas id="video-editor" style="border:1px solid #000000;"></canvas>',
  controller: VideoEditorController,
  bindings: {
    hero: '='
  }
});
})(window.angular);
