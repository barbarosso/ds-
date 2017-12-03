chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      if ($(".bt-popin").length > 0) {
        clearInterval(readyStateCheckInterval);
        if ($("#porous-paywall-content").length) {
          document
            .querySelector("#porous-paywall-content")
            .classList.remove("is-hidden");
        }
        if ($("#porous-paywall-shortened-content").length) {
          $("#porous-paywall-shortened-content").remove();
        }
        if (
          $(".article-full > .article__body").length &&
          $("#porous-paywall-content").length
        ) {
          $(".article-full > .article__body").remove();
        } else if (
          $('[data-mht-block~="detail__article-body"] > .article__body')
            .length &&
          $("#porous-paywall-content").length
        ) {
          $(
            '[data-mht-block~="detail__article-body"] > .article__body'
          ).remove();
        }

        $(".BToverlay").remove();
        $(".bt-popin").remove();
        
        const origHTMLOverflow = $("html").css("overflow");
        const origBodyOverflow = $("body").css("overflow");

        $("html").css("overflow", "" + origHTMLOverflow + "");
        $("body").css("overflow", "" + origBodyOverflow + "");
        console.log("Hallo De Standaard, zouden jullie dit niet eens wat deftig implementeren?");
      }
    }
  }, 1000);
});
