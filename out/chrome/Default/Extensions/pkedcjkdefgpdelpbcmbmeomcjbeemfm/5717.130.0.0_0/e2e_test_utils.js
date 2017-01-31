
angular.module('E2eTest', []).controller('E2eTestUtilsCtrl', function() {
  const utils = this;
  let e2eTestService = null;
  const init = function() {
    const backgroundPage = chrome.extension.getBackgroundPage();
    if (backgroundPage) {
      e2eTestService = backgroundPage.e2eTestService;
      e2eTestService.start();
    } else {
      console.error('Unable to access MR extension');
    }
  };

  utils.mirrorTabViaCastStreaming = function() {
    if (!utils.url || !utils.sinkName || !e2eTestService) {
      return;
    }
    e2eTestService.mirrorTabViaCastStreaming(utils.sinkName, utils.url);
  };

  utils.mirrorDesktopViaCastStreaming = function() {
    if (!utils.sinkName || !e2eTestService) {
      return;
    }
    e2eTestService.mirrorDesktopViaCastStreaming(utils.sinkName);
  };

  utils.stopMirroring = function() {
    if (e2eTestService) {
      e2eTestService.stopMirroring();
    }
  };

  init();
});
