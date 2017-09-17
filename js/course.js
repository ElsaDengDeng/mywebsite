var header = {
    init: function () {
        this.bind();
    },
    bind: function () {
        var me = this;
        $(".icon-box").on("click", "#search-btn", this.searchshow);
        $(".searchbox").on("click", "#close-btn", this.searchide)
    },
    searchshow: function () {
        $(".searchbox").addClass("scale")
    },
    searchide: function () {
        $(".searchbox").removeClass("scale")
    }
};
$(function () {
    header.init()
});


var lessonlist = {
    init: function () {
        this.tagtype(),
            this.changeStyle(),
            this.videoDownload()
    },
    tagtype: function () {
        if ($("#changeid").hasClass("lesson-list")) {
            $(".zhongji").hide(),
                $(".learn-number").hide(),
                $("#changeid").removeClass("lesson-list2").addClass("lesson-list"),
                $(".kuai-icon").addClass("curr"),
                $(".list-icon").removeClass("curr");
            var s = $(".lesson-list p");
            s.height(0),
                $(".lesson-list li").hover(lessonlist.lessonHover, lessonlist.lessonOut),
                $("#changeid").show()
        } else if ($("#changeid").hasClass("lesson-list2")) {
            var s = $(".lesson-list p");
            $(".learn-number").show(),
                $(".zhongji").show(),
                s.height(36).show(),
                $("#changeid").removeClass("lesson-list").addClass("lesson-list2"),
                $(".kuai-icon").removeClass("curr"),
                $(".list-icon").addClass("curr"),
                $("#changeid").show()
        }
    },
    videoDownload: function () {

    },
    changeStyle: function () {
        $(".kuai-icon").unbind(),
            $(".kuai-icon").bind("click", function () {
                $(".zhongji").hide(),
                    $(".learn-number").hide(),
                    $(".zhongji").hide(),
                    $("#changeid").removeClass("lesson-list2").addClass("lesson-list"),
                    $(".list-icon").removeClass("curr"),
                    $(this).addClass("curr");
                var e = $(".lesson-list p");
                e.height(0),
                    e.hide(),
                    //      $("lesson-list li").each(function(index){
                    //     $(this).hover(lessonlist.lessonHover, lessonlist.lessonOut);
                    //     $("lesson-list li:eq('+index+')").hover(lessonlist.lessonHover, lessonlist.lessonOut).siblings().unbind("mouseenter").unbind("mouseleave");
                    // })
                    $(".lesson-list li").hover(lessonlist.lessonHover, lessonlist.lessonOut)
            }),
            $(".list-icon").unbind(),
            $(".list-icon").bind("click", function () {
                var e = $(".lesson-list p");
                e.show(),
                    $(".learn-number").show(),
                    $(".zhongji").show(),
                    e.height(36),
                    $("#changeid").removeClass("lesson-list").addClass("lesson-list2"),
                    $("kuai-icon").removeClass("curr"),
                    $(this).addClass("curr")
            })
    },
    lessonHover: function () {
        if ($("#changeid").hasClass("lesson-list")) {
            $(".lesson-infor").addClass("lesson-hover").height(175),
                $(".lesson-infor p").height(52).css("opacity", "1").show(),
                $(".lessonplay").css("opacity", "1").show(),
                $(".learn-number").show(),
                $(".zhongji").show(),
                $(".lessonicon-box").css("bottom", "-2px")
        } else {
            $(".lessonplay").css("opacity", "1").show()
        }
    },
    lessonOut: function () {
        if ($("#changeid").hasClass("lesson-list")) {
            $(".lesson-infor").removeClass("lesson-hover").height(88),
                $(".lesson-infor p").height(0).hide(),
                $(".lessonplay").hide(),
                $(".learn-number").hide(),
                $(".zhongji").hide(),
                $(".lessonicon-box").css("bottom", "4px")
        } else {
            $(".lessonplay").hide()
        }
    }
}
$(function () {
    lessonlist.init()
});