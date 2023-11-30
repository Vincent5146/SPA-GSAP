function setupPage() {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
  function navde() {
    $(".burger").attr("toggle", "0");
    $(".burger").removeClass("isclick");
    $(".mynav").css("height", "");
    $(".langlist").css("height", "");
    // if ($(window).width() <= 768) {
    //   $(".mynav").hide();
    // }
    // $("html,body").removeClass("overflow");
    $(".header").css({
      height: "",
    });
  }
  function toggleNav(type) {
    const isOpen = $(type).attr("toggle") == 0 ? 1 : 0;
    const slideDirection = isOpen === 1 ? "slideDown" : "slideUp";
    if (type === ".burger") {
      $(".earth").attr("toggle", "0");
      $(".langlist").css("display", "none");
      $(".mynav")[slideDirection]();
      $(".burger").toggleClass("isclick", isOpen === 1);
    } else if (type === ".earth") {
      $(".burger").attr("toggle", "0");
      $(".mynav").css("display", "none");
      $(".burger").removeClass("isclick");
      $(".langlist").css("display", isOpen === 1 ? "flex" : "none");
    }
    $(type).attr("toggle", isOpen);
  }
  function headerfix() {
    var _topH = $(".header").outerHeight(true);
    var _scroll = $(window).scrollTop();
    if (_scroll >= _topH) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  }

  $(window).scroll(headerfix);
  headerfix();

  // GSAP相關
  function initHorizontalScroll() {
    // 取得區塊總寬度
    const races = document.querySelector(".races");
    const airplane = document.querySelector(".airplane");
    const scoll_down = document.querySelector(".scoll_down");
    const part1text = document.querySelector(".part_1 .text");
    const part1line = document.querySelector(".part_1 .line");
    const part2text = document.querySelector(".part_2 .text");
    const part2logo = document.querySelector(".part_2 .logo");
    // 取得未顯示區塊寬度
    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }
    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "0% top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 0.5,
      // refreshPriority: "low",
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = self.progress;
        // 控制飛機位置跟旋轉角度
        gsap.to(airplane, {
          top: 40 + progress * 25 + "%",
          left: -100 + progress * 155 + "%",
          width: 100 - progress * 60 + "%",
          duration: 0.5, // 持續時間
          ease: "none", // 動畫曲線
        });

        if (progress > 0.1) {
          gsap.to(scoll_down, {
            opacity: 0,
            duration: 0.5,
          });
        } else {
          gsap.to(scoll_down, {
            opacity: 1,
            duration: 0.5,
          });
        }

        gsap.to(part1text, {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(part1line, {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(part2text, {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(part2logo, {
          opacity: 0,
          duration: 0.5,
        });

        if (progress >= 0.85 && progress <= 1) {
          gsap.to(part2text, {
            opacity: 1,
            duration: 0.5,
          });
          gsap.to(part2logo, {
            opacity: 1,
            duration: 0.5,
          });
        } else if (progress > 0.5 && progress < 0.8) {
        } else if (progress >= 0.3 && progress <= 0.5) {
          gsap.to(part1line, {
            opacity: 1,
            width: progress * 140 + "%",
            right: progress * 200 + -120 + "%",
            duration: 0.5,
          });
        } else if (progress < 0.3) {
          gsap.to(part1text, {
            opacity: 1,
            duration: 0.5,
          });
        } else if (progress == 0) {
          gsap.to(part1text, {
            opacity: 1,
            duration: 0.5,
          });
        }
      },
      onRefresh: self => {
        self.update();
      },
      markers: false,
    });
  }
  function initMobileHorizontalScroll() {
    // 取得區塊總寬度
    const races = document.querySelector(".races");
    const airplane = document.querySelector(".airplane");
    const scoll_down = document.querySelector(".scoll_down");
    const part1text = document.querySelector(".part_1 .text");
    const part1line = document.querySelector(".part_1 .line");
    const part2text = document.querySelector(".part_2 .text");
    const part2logo = document.querySelector(".part_2 .logo");
    // 取得未顯示區塊寬度
    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }
    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "0% top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 0.5,
      refreshPriority: "medium",
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = self.progress;
        // 控制飛機位置跟旋轉角度
        gsap.to(airplane, {
          top: 40 + progress * 45 + "%",
          left: -100 + progress * 118 + "%",
          width: 100 - progress * 45 + "%",
          duration: 1, // 持續時間
          ease: "none", // 動畫曲線
        });

        if (progress > 0.1) {
          gsap.to(scoll_down, {
            opacity: 0,
            duration: 0.5,
          });
        } else {
          gsap.to(scoll_down, {
            opacity: 1,
            duration: 0.5,
          });
        }

        gsap.to(part1text, {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(part1line, {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(part2text, {
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(part2logo, {
          opacity: 0,
          duration: 0.5,
        });
        if (progress >= 0.85 && progress <= 1) {
          gsap.to(part2text, {
            opacity: 1,
            duration: 0.5,
          });
          gsap.to(part2logo, {
            opacity: 1,
            duration: 0.5,
          });
        } else if (progress > 0.5 && progress < 0.8) {
        } else if (progress >= 0.3 && progress <= 0.5) {
          // gsap.to(part1line, {
          //   opacity: 1,
          //   width: progress * 140 + "%",
          //   right: progress * 200 + -120 + "%",
          //   duration: 0.5,
          // });
        } else if (progress < 0.3) {
          gsap.to(part1text, {
            opacity: 1,
            duration: 0.5,
          });
        } else if (progress == 0) {
          gsap.to(part1text, {
            opacity: 1,
            duration: 0.5,
          });
        }
      },
      markers: false,
    });
  }

  function showline() {
    const line = document.querySelector(".introduction .line2");

    ScrollTrigger.create({
      trigger: line,
      start: "-50% 50%",
      end: "center center",
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = self.progress;
        gsap.to(line, {
          height: progress * 80 + "%",
          opacity: 1,
          duration: 2, // 持續時間
          ease: "none", // 動畫曲線
        });
      },
    });
  }

  function showTimeline() {
    const line = document.querySelector(".contents .timeline");
    const years = document.querySelector(`.years`);

    ScrollTrigger.create({
      trigger: years,
      start: "-5% center",
      end: "bottom 80%",
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = self.progress;
        gsap.to(line, {
          height: progress * 71 + "%",
          duration: 1, // 持續時間
          ease: "none", // 動畫曲線
        });
      },
      markers: false,
    });
  }
  function showMobileTimeline() {
    const line = document.querySelector(".contents .timeline");
    const years = document.querySelector(`.years`);

    ScrollTrigger.create({
      trigger: years,
      start: "-5% center",
      end: "bottom 80%",
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = self.progress;
        gsap.to(line, {
          height: progress * 80 + "%",
          duration: 1, // 持續時間
          ease: "none", // 動畫曲線
        });
      },
      markers: false,
    });
  }

  function switchContent() {
    const intro1 = document.querySelector(".introduction .intro_1");
    const intro2 = document.querySelector(".introduction .intro_2");
    gsap.to(".introduction .intro_1", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".introduction",
        start: "40% 50%",
        end: "45% 50%",
        scrub: 0,
        markers: false,
        invalidateOnRefresh: true,
        onUpdate: self => {
          const progress = self.progress;
          if (progress >= 1) {
            gsap.to(intro1, { opacity: 0 });
            gsap.to(intro2, { opacity: 1 });
          } else {
            gsap.to(intro1, { opacity: 1 });
            gsap.to(intro2, { opacity: 0 });
          }
        },
      },
    });
  }
  let years = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  function animateIntro(year) {
    const cloudElement = document.querySelector(`.year-${year} .cloud`);
    if (cloudElement) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.year-${year}`,
            start: "0% center",
            end: "bottom bottom",
            scrub: 5,
            toggleActions: "play restart play restart",
            markers: false,
          },
        })
        .fromTo(
          `.year-${year} .img`,
          { x: "-10%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1 }
        )
        .fromTo(
          `.year-${year} .text_box`,
          { x: "10%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1 },
          0
        )
        .to(`.year-${year} .cloud`, { x: "0%", opacity: 1, duration: 1.5, delay: 1.5 }, 0);
    } else {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.year-${year}`,
            start: "0% center",
            end: "bottom bottom",
            scrub: 1,
            toggleActions: "play complete",
          },
        })
        .fromTo(
          `.year-${year} .img`,
          { x: "-10%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.5 }
        )
        .fromTo(
          `.year-${year} .text_box`,
          { x: "10%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.5 },
          0
        );
    }
  }

  // 影片控制
  function checkVideoUrl() {
    let zhenVideo_1 = "iDt2-_22On8?si=_uCie9__M8Ymds16";
    let zhenVideo_2 = "a2QStj1J30M?si=A_AE8UCvCnqNgSm8";

    // let jpVideo_1 = "iDt2-_22On8?si=_uCie9__M8Ymds16";
    let jpVideo_2 = "Jc0Cyw_-TUc?si=GoMMGwPQkbu72Sgq";

    let fitstVideoUrl = "https://www.youtube.com/embed/" + zhenVideo_1;
    let secondVideoUrl = "https://www.youtube.com/embed/" + zhenVideo_2;
    if (langType === "jp") {
      // let fitstVideoUrl = "https://www.youtube.com/embed/" + jpVideo_1;
      secondVideoUrl = "https://www.youtube.com/embed/" + jpVideo_2;
    }

    $("#fitstVideo").attr("src", fitstVideoUrl);
    $("#secondVideo").attr("src", secondVideoUrl);
  }

  // 在URL中加上lang参数
  function addLangParamToUrl(param, value) {
    let currentUrl = window.location.href;
    let langParamIndex = currentUrl.indexOf("lang=");
    // 判断是否已存在 lang 参数
    if (langParamIndex !== -1) {
      let endOfLangParam = currentUrl.indexOf("&", langParamIndex);
      let newUrl;
      if (endOfLangParam !== -1) {
        newUrl =
          currentUrl.substring(0, langParamIndex) +
          param +
          value +
          currentUrl.substring(endOfLangParam);
      } else {
        newUrl = currentUrl.substring(0, langParamIndex) + param + value;
      }
      return newUrl;
    } else {
      let separator = currentUrl.indexOf("?") !== -1 ? "&" : "?";
      let langUrl = currentUrl + separator + param + value;
      return langUrl;
    }
  }

  // gotop
  let gotop = $("#gotop");
  let contentsOffset = $(".banner").height() * 2;
  $(window).scroll(function () {
    if ($(window).scrollTop() > contentsOffset) {
      gotop.addClass("show");
    } else {
      gotop.removeClass("show");
    }
  });

  var c = {};
  c.init = function () {
    $(".burger").on("click", function () {
      toggleNav(".burger");
    });
    $(".gotop").on("click", function () {
      gScroll(0);
    });

    document.querySelectorAll(".mynav .navbtn a").forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        const targetSectionTop = targetSection.getBoundingClientRect().top + window.pageYOffset;

        toggleNav(".burger");

        if (targetSection) {
          const viewportHeight = window.innerHeight;
          let targetOffset;
          const intro1Height = document.getElementById("intro_1").offsetHeight;
          // 因內容為同一區塊，需另外判斷
          if (targetId === "intro_2") {
            targetOffset = targetSectionTop - viewportHeight / 2 + intro1Height * 0.3;
          } else {
            targetOffset = targetSectionTop - viewportHeight / 2;
          }

          window.scrollTo({
            top: targetOffset,
            left: 0,
            behavior: "smooth",
          });
        }
      });
    });

    $(".earth").on("click", function () {
      toggleNav(".earth");
    });
    $(".langbtn").on("click", function () {
      let val = $(this).attr("id");
      let langParam = "lang=";
      if (val === "zh") {
        lang(val);
        saveCookie("language", val, 1);
        window.location.href = addLangParamToUrl(langParam, val);
      } else if (val === "en") {
        lang(val);
        saveCookie("language", val, 1);
        window.location.href = addLangParamToUrl(langParam, val);
      } else {
        lang(val);
        saveCookie("language", val, 1);
        window.location.href = addLangParamToUrl(langParam, val);
      }
    });
  };

  if (isMobileDevice() && $(window).width() <= 768) {
    initMobileHorizontalScroll();
    showMobileTimeline();
    $(".banner .bg").height($(".header").height() * 2 + $(".banner").height() + 300);
    $(".contents .bg").height($(".wrapper .contents").height() + 3000);
  } else {
    initHorizontalScroll();
    showTimeline();
    $(".banner .bg").height($(".header").height() * 2 + $(".banner").height() + 300);
    $(".contents .bg").height($(".wrapper .contents").height() + 2000);
  }
  showline();
  navde();
  switchContent();
  years.forEach(year => {
    animateIntro(year);
  });
  checkVideoUrl();

  return c.init;
}

function gScroll(a) {
  var b = window.opera
    ? "CSS1Compat" == document.compatMode
      ? $("html")
      : $("body")
    : $("html,body");
  b.animate({ scrollTop: a }, 600);
}

// i18n相關
function getLang() {
  var langType = getCookie("language");
  if (langType) {
    // 設定當前語系
    $("#" + langType).addClass("select");
  } else {
    var type = navigator.appName;
    if (type == "Netscape") {
      var lang = navigator.language; //浏览器配置语言，支持非IE浏览器
    } else {
      var lang = navigator.userLanguage; //浏览器配置语言，支持IE5+ == navigator.systemLanguage
    }
    var lang = lang.substr(0, 2);
    // 設定當前語系
    $("#" + langType).addClass("select");
    saveCookie("language", lang, 1);
  }
}
function saveCookie(cookieName, cookieValue, cookieDates) {
  let d = new Date();
  d.setDate(d.getDate() + cookieDates);
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + d.toGMTString();
}
//取cookie
function getCookie(cookieName) {
  let cookieStr = unescape(document.cookie);
  let arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split("=");
    if (temp[0] == cookieName) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
}
function lang(language) {
  $.i18n.init(
    {
      lng: language, //指定语言
      resGetPath: "./i18n/" + language + "/translation.json", //文件的路徑
      ns: {
        namespaces: ["translation", "message"],
        defaultNs: "translation", //默认使用的，不指定namespace时
      },
    },
    function (err, t) {
      $("[data-i18n]").i18n(); // 通过选择器集体翻译
      $("[data-i18n-html]").each(function () {
        let date_name = $(this).attr("data-i18n-html");
        $(this).html($.t(date_name));
      });
      // 更新footer中的超連結URL
      $(".footer .shares a").each(function () {
        if ($(this).hasClass("fb")) {
          let fbUrl = $.t("videos.link_fb");
          if (fbUrl) {
            $(this).attr("href", fbUrl);
          }
        } else if ($(this).hasClass("ig")) {
          let igUrl = $.t("videos.link_ig");
          if (igUrl) {
            $(this).attr("href", igUrl);
          }
        } else if ($(this).hasClass("yt")) {
          let ytUrl = $.t("videos.link_yt");
          if (ytUrl) {
            $(this).attr("href", ytUrl);
          }
        }
      });
      //	通过t函数获得某个翻译的值
      $.t("message:app.child", {
        count: "1",
      }); //使用namespace，并将count替换成1，其值为1 child
      $.t("message:app.child_plural", {
        count: "2",
      }); //将count替换成2，其值为2 children
    }
  );
}
function updateImages(language) {
  let headerImageName;
  let bannerImageName;
  let endImageName;
  switch (language) {
    case "zh":
      bannerImageName = "kv_3_zh.png";
      endImageName = "end_title_zh.png";
      headerImageName = "header_logo_zh.png";
      break;
    case "en":
      bannerImageName = "kv_3_en.png";
      endImageName = "end_title_en.png";
      headerImageName = "header_logo_en.png";
      break;
    case "jp":
      bannerImageName = "kv_3_jp.png";
      endImageName = "end_title_jp.png";
      headerImageName = "header_logo_jp.png";
      break;
    default:
      bannerImageName = "kv_3_zh.png";
      endImageName = "end_title_zh.png";
      headerImageName = "header_logo_zh.png";
  }
  // 更新圖片連結
  $(".races .part_2 .img_box picture source")
    .eq(0)
    .attr("srcset", "images/" + bannerImageName);
  $(".races .part_2 .img_box picture source")
    .eq(1)
    .attr("srcset", "images/m/" + bannerImageName);
  $(".races .part_2 .img_box picture .text").attr("src", "images/" + bannerImageName);

  $(".bottom .end .title picture source")
    .eq(0)
    .attr("srcset", "images/" + endImageName);
  $(".bottom .end .title picture source")
    .eq(1)
    .attr("srcset", "images/m/" + endImageName);
  $(".bottom .end .title picture img").attr("src", "images/" + endImageName);

  $(".header .container .logo img").attr("src", "images/" + headerImageName);
}
var langType = getCookie("language") || "zh";

window.onload = function () {
  $(function () {
    var initFunction = setupPage();

    getLang();
    lang(langType);
    updateImages(langType);
    initFunction();

    $("html").removeClass("zh en jp").addClass(langType);
    $("body").css("opacity", "1");
  });
};
