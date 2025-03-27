// $('#charge_1').click(function(){
//     alert('erm what the sigma');
// })

// $(".charge_1").click(function(){alert('what the sigma')});

// $(".charge_1").click(
//     function(){
//         alert("Clicked !!");
//   });

$(document).ready(function(){
    $(".charge_1, .charge_2, .charge_3, .charge_4, .charge_5, .charge_6").click(function(){
        alert("plug me in!")
    })

    $(".OFF").click(function(){
        // alert('the button is off!!')
        $(".TV_1, .TV_2, .TV_3, .TV_4, .TV_5, .TV_6").toggleClass("OFF-BUTTON")
    })

    $(".OFF").click(function(){
      $("#tv_off")[0].play()
    })

    $(".s1, .s2, .s3, .s4, .s5, .s6").click(function(){
        alert("plug stuff into me!")
    })

    // $( ".draggable" ).draggable(
    // {containment: ".container_left", snap: ".s1, .s2, .s3", snapMode: "inner"}
    // );

    // $(".dropped1").droppable({
    //     drop: function(){
    //         // $(this)
    //             $(".container2").find(".charge_1")
    //             $(".s1").toggleClass("toggled")
    //             // $(".charge_1").attr('src', 'MEDIA/those-who-know.png')
    //     }
    // })

    // $(".dropped2").droppable({
    //     drop: function(){
    //         // $(this)
    //         $(".container2").find(".charge_2")
    //             $(".s2").toggleClass("toggled")
    //             // $(".charge_1").attr('src', 'MEDIA/those-who-know.png')
    //     }
    // })

    // $(function(){
    //     $(".draggable1", ".draggable2", ".draggable3").draggable()
    //     $(".dropped1").droppable({
    //         accept: ".draggable1"
    //     })
    // }),
    //     drop: function(event, ui) //idk if im using this again

    $( function() { //accepts charge_1
        $(".draggable1").draggable(
            {containment: ".container_left", snap: ".s1", snapMode: "inner"}
        );
        $(".dropped1").droppable({
          accept: ".draggable1",
          drop: function() {
            $(this)
                $(".s1").toggleClass("toggled")
                $(".TV_1").toggleClass("ON")
                $("#smile_1").attr('src', 'MEDIA/plug3.png')
          }
        });
      } );

      $( function() { //accepts charge_2
        $(".draggable2").draggable(
            {containment: ".container_left", snap: ".s2", snapMode: "inner"}
        );
        $(".dropped2").droppable({
          accept: ".draggable2",
          drop: function() {
            $(this)
                $(".s2").toggleClass("toggled")
                $(".TV_2").toggleClass("ON")
                $(".TV_2").click(function(){
                    $("#without_clothes").attr('src', 'MEDIA/with-clothes.avif')
                    $("#washing")[0].play()
                })
                $("#smile_2").attr('src', 'MEDIA/plug3.png')
          }
        });
      } );

      $( function() { //accepts charge_3
        $(".draggable3").draggable(
            {containment: ".container_left", snap: ".s3", snapMode: "inner"}
        );
        $(".dropped3").droppable({
          accept: ".draggable3",
          drop: function() {
            $(this)
                $(".s3").toggleClass("toggled")
                $(".TV_3").toggleClass("ON")
                $("#smile_3").attr('src', 'MEDIA/plug3.png')
          }
        });
      } );

      $( function() { //accepts charge_4
        $(".draggable4").draggable(
            {containment: ".container_left", snap: ".s4", snapMode: "inner"}
        );
        $(".dropped4").droppable({
          accept: ".draggable4",
          drop: function() {
            $(this)
                $(".s4").toggleClass("toggled")
                $(".TV_4").toggleClass("ON")
                $("#smile_4").attr('src', 'MEDIA/plug3.png')
          }
        });
      } );

      $( function() { //accepts charge_5
        $(".draggable5").draggable(
            {containment: ".container_left", snap: ".s5", snapMode: "inner"}
        );
        $(".dropped5").droppable({
          accept: ".draggable5",
          drop: function() {
            $(this)
                $(".s5").toggleClass("toggled")
                $(".TV_5").toggleClass("ON")
                $("#smile_5").attr('src', 'MEDIA/plug3.png')
          }
        });
      } );

      $( function() { //accepts charge_6
        $(".draggable6").draggable(
            {containment: ".container_left", snap: ".s6", snapMode: "inner"}
        );
        $(".dropped6").droppable({
          accept: ".draggable6",
          drop: function() {
            $(this)
                $(".s6").toggleClass("toggled")
                $(".TV_6").toggleClass("ON")
                $("#smile_6").attr('src', 'MEDIA/plug3.png')
          }
        });
      } );

      $( function() { //to revert image to OG when removed from outlet
        $(".draggable1, .draggable2, .draggable3, .draggable4, .draggable5, .draggable6").draggable(
            {containment: ".container_left"}
        );
        $(".revertA, .revertB").droppable({
          accept: ".draggable1, .draggable2, .draggable3, .draggable4, .draggable5, .draggable6",
          drop: function() {
            $(this)
                $("#smile_1, #smile_2, #smile_3, #smile_4, #smile_5, #smile_6").attr('src', 'MEDIA/plug1.png')
          }
        });
      } );

      $( function() { //accepts charge_6
        $(".draggable6").draggable(
            {containment: ".container_left", snap: ".s6", snapMode: "inner"}
        );
        $(".dropped6").droppable({
          accept: ".draggable6",
          drop: function() {
            $(this)
                $(".s6").toggleClass("toggled")
                $(".TV_6").toggleClass("ON")
                $("#smile_6").attr('src', 'MEDIA/plug3.png')
          }
        });
      } );

    // $( function() { //turns relevant TV off when plug removed, revert image. --> TV_1
    //     $(".revertA, .revertB").droppable({
    //       accept: ".draggable1",
    //       drop: function() {
    //         $(this)
    //             $(".TV_1").toggleClass("ON")
    //             $("#smile_1").attr('src', 'MEDIA/happy_face_test.svg')
    //       }
    //     });
    //   } );

    //   $( function() { //turns relevant TV off when plug removed, reverts image. --> TV_2
    //     $(".revertA, .revertB").droppable({
    //       accept: ".draggable2",
    //       drop: function() {
    //         $(this)
    //             $(".TV_2").toggleClass("ON")
    //             $("#smile_2").attr('src', 'MEDIA/happy_face_test.svg')
    //       }
    //     });
    //   } );

    // $( function() { //turns relevant TV off when plug removed. --> TV_4
    //     $(".revertA, .revertB").droppable({
    //       accept: ".draggable1",
    //       drop: function() {
    //         $(this)
    //             $(".TV_4").toggleClass("ON")
    //             $("#smile_4").attr('src', 'MEDIA/happy_face_test.svg')
    //       }
    //     });
    //   } );

})

