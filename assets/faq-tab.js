!function(a){"use strict";a.fn.jqTabs=function(t){var s=a.extend({direction:"vertical",duration:400,mainWrapperClass:"jq-tab-wrapper",tabClass:"jq-tab-title",tabContentClass:"jq-tab-content",tabClicked:a.noop,tabContentLoaded:a.noop},t);return this.each(function(){var t=a(this);t.hasClass(s.mainWrapperClass)||t.addClass(s.mainWrapperClass),"horizontal"===s.direction&&t.addClass("horizontal-tab"),t.find("."+s.tabClass).click(function(n){n.preventDefault(),s.tabClicked.call();var e=a(this);if(!e.hasClass("active")){t.find("."+s.tabClass).removeClass("active");var i=e.data("tab");e.addClass("active"),t.find("."+s.tabContentClass).removeClass("active").css("display","none"),t.find("."+s.tabContentClass+'[data-tab="'+i+'"]').fadeIn(s.duration,function(){s.tabContentLoaded.call(),a(this).addClass("active")})}})})}}(jQuery);

$(function () {
    $(".jq-tab-menu .jq-tab-title:first").addClass("active");
  $(".jq-tab-content-wrapper .jq-tab-content:first").addClass("active");
            $('#verticalTab').jqTabs();
            $('#horizontalTab').jqTabs({direction: 'horizontal', duration: 200});
        });