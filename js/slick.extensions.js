/**
 * @name slickExtensions
 * @since 2018-08-02
 * @param {
 *	   isRunOnLowIE : boolean,
 *	   autoArrow : element || jQueryElement,
 *	   playArrow : element || jQueryElement,
 *	   pauseArrow : element || jQueryElement,
 *	   pauseOnArrowClick : boolean,
 *	   pauseOnDotsClick : boolean,
 *	   pauseOnDirectionKeyPush : boolean,
 *	   pauseOnSwipe : boolean,
 *	   playText : string,
 *	   pauseText : string,
 *	   current : element || jQueryElement,
 *	   total : element || jQueryElement,
 *	   customState : function
 * }
 * @return {object || jQuery}
 */
try{!function(t){if("function"!=typeof t)throw"제이쿼리가 없습니다.";var s=t.fn.slick,i="function"==typeof s,e=navigator.userAgent.toLowerCase(),n=e.indexOf("msie 7.0")>-1||e.indexOf("msie 8.0")>-1;t.fn.slick=function(){var e=this,o=e.first(),c=o[0],r=arguments[0];if(i&&c&&r){var l="string"==typeof r;if(!l){var a=c.slick;a&&o.slick("unslick"),(r=t.extend({},r)).autoArrow=t(r.autoArrow),r.playArrow=t(r.playArrow),r.pauseArrow=t(r.pauseArrow),r.total=t(r.total),r.totalText=r.total.text(),r.current=t(r.current),r.currentText=r.current.text(),n&&!r.isRunOnLowIE&&(r._responsive=r.responsive,r.responsive=void 0),arguments[0]=r}try{e=s.apply(o,arguments)}catch(t){}if(!l){var k=(a=o.slick("getSlick")).options||{};function u(){a.slideCount>k.slidesToShow?(o.slick("slickPlay"),t(k.autoArrow).addClass("slick-pause").removeClass("slick-play").text(k.pauseText)):f()}function f(){o.slick("slickPause"),t(k.autoArrow).addClass("slick-play").removeClass("slick-pause").text(k.playText)}o.on("destroy.slickExtensions",function(s,i){t(k.autoArrow).add(k.playArrow).add(k.pauseArrow).add(a.$prevArrow).add(a.$nextArrow).off("click.slickExtensions"),t(k.current).text(k.currentText),t(k.total).text(k.totalText),o.off("keydown.slickExtensions")}).on("afterChange.slickExtensions",function(s,i,e){var n=k.customState,o=Math.ceil(a.slideCount/k.slidesToShow)||a.slideCount,c=a.currentSlide+1;if("function"==typeof n){var r=n({current:c,total:o});r||(r={current:c,total:o}),c=r.current||c,o=r.total||o}t(k.current).text(c),t(k.total).text(o)}).on("reInit.slickExtensions breakpoint.slickExtensions",function(s,i){var e=t(a.$prevArrow),n=t(a.$nextArrow);t(k.autoArrow).addClass("slick-arrow").off("click.slickExtensions").on("click.slickExtensions",function(t){a.paused?u():f(),t.preventDefault()}),t(k.playArrow).addClass("slick-arrow").off("click.slickExtensions").on("click.slickExtensions",function(t){u(),t.preventDefault()}),t(k.pauseArrow).addClass("slick-arrow").off("click.slickExtensions").on("click.slickExtensions",function(t){f(),t.preventDefault()}),e.add(n).css("display","").off("click.slick click.slickExtensions").on("click.slickExtensions",function(t){!0===k.pauseOnArrowClick&&f()}),t(k.current).addClass("slick-text"),t(k.total).addClass("slick-text"),e.on("click.slickExtensions",function(t){o.slick("slickPrev"),t.preventDefault()}),n.on("click.slickExtensions",function(t){o.slick("slickNext"),t.preventDefault()}),!0===k.dots&&t(a.$dots).css("display","").children("li").off("click.slickExtensions").on("click.slickExtensions",function(t){!0===k.dots&&!0===k.pauseOnDotsClick&&f()}),o.triggerHandler("afterChange.slickExtensions")}).on("swipe.slickExtensions",function(t,s,i){!0===k.pauseOnSwipe&&f()}).on("keydown.slickExtensions",function(t){if(!0===k.pauseOnDirectionKeyPush){var s=this.tagName.toLowerCase(),i=t.keyCode||t.which;!0!==k.accessibility||"textarea"===s||"input"===s||"select"===s||37!==i&&39!==i||f()}}).triggerHandler("reInit.slickExtensions"),!0===r.autoplay?u():f()}}return e}}(window.jQuery)}catch(t){console.error(t)}