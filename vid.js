// MODAL
$(document).ready(function () {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });

  window.onload = function () {
    var element = document.getElementById("mainvideo");
    element.muted = true;
  };
  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    //hiding elements
    document.querySelector("video").style.visibility = "hidden";
    document.querySelector(".text").style.visibility = "hidden";
    document.querySelector(".video-btn").style.visibility = "hidden";
    document.querySelector(".social-media").style.visibility = "hidden";
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  // $('#myModal').on('hide.bs.modal', function (e) {
  //     // a poor man's stop video
  //     // $("#myModal iframe").attr('src', $("myModal iframe").attr("src"));
  //     $("#video").attr('src',$videoSrc);
  // });

  $("#myModal").on("hide.bs.modal", function () {
    //bringing the elements back
    document.querySelector("video").style.visibility = "visible";
    document.querySelector(".text").style.visibility = "visible";
    document.querySelector(".video-btn").style.visibility = "visible";
    document.querySelector(".social-media").style.visibility = "visible";
    $(".modal-body iframe").attr("src", "");
  });

  // document ready
});
