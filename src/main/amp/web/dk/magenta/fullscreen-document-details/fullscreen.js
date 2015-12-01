// Check that we are on the document details page and that 'fullscreen=1'
// is in the URL.
if (location.href.indexOf('/document-details') !== -1 &&
    location.href.indexOf('fullscreen=1') !== -1) {

  require(['jquery'], function (jQuery) {
    // Check every 100ms for the maximize button to appear
    var interval = setInterval(function () {
      var elemSelector = '.maximizebutton button';
      // If the button appears...
      if (jQuery(elemSelector).length) {
        // Stop checking for the button.
        clearInterval(interval);
        // Click on the button.
        jQuery(elemSelector).click()
      }
    }, 100);
  });

}