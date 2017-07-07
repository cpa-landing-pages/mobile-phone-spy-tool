<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="MIG-92">
    <meta name="description" content="Spytool">
    <meta name="keywords" content="Site Name">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="shortcut icon" href="img/favicon.png">
    <meta name="HandheldFriendly" content="true" />
    <title>Spytool</title>

    <!-- CSS -->
    <link rel="stylesheet" href="https://cdn.unpacker.org/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.unpacker.org/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/animate.min.css" rel="stylesheet">
    <script type="text/javascript">
    /*    if (screen.width >= 768){
        window.location = '/redirection.php';
        }*/
    </script>
</head>

<body>
     <audio controls id="sound0" class="hide">
        <source src="sounds/dtmf-0.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound1" class="hide">
        <source src="sounds/dtmf-1.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound2" class="hide">
        <source src="sounds/dtmf-2.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound3" class="hide">
        <source src="sounds/dtmf-3.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound4" class="hide">
        <source src="sounds/dtmf-4.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound5" class="hide">
        <source src="sounds/dtmf-5.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound6" class="hide">
        <source src="sounds/dtmf-6.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound7" class="hide">
        <source src="sounds/dtmf-7.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound8" class="hide">
        <source src="sounds/dtmf-8.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <audio controls id="sound9" class="hide">
        <source src="sounds/dtmf-9.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <!-- Header -->

    <div class="header">
        <div class="container-fluid">
            <div class="logo-out">
                <div class="logo-holder">
                    <img class="img-fluid element-center logo" src="img/logo.svg" width="200" alt="SpyLogo">
                </div>
            </div>
        </div>
    </div>

    <!-- Section-Spytool -->

    <div class="section-spytool"></div>
        <div class="container-fluid">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="headline text-center">
                         <span class="element"></span>
                        <span class="typed-cursor"></span>
                    </div>
                </div>

                <div class="panel-body panel-custom-spy">
                    <div id="topLoader" class="toploader">
                         <button  id="animateButton" class="btn btn-secondary btn-submit hack-regular" class="circle-button"><span class="spy-icon"><i class="fa fa-user-secret fa-2x" aria-hidden="true"></i></span><br>SpyNow</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Section-Chat -->

    <div class="container-fluid">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title chat-description"><span class="icon-blue"><i class="fa fa-comment-o fa-lg" aria-hidden="true"></i></span> SaySomething...</h3>
                </div>

                <div class="panel-body panel-custom chat" id="scroll" >

                </div>

                <div class="panel-footer">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="input-group">
                                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope fa-lg"></i></span>
                                <textarea id="uComment" class="form-control"  placeholder="Enter your message here:" rows="1" required=""></textarea>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <button data-toggle="modal" data-target="#modal-user" type="button"  class="btn btn-default btn-lg btn-block button-chat">Send <i class="fa fa-paper-plane-o fa-lg"></i></button>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>

    <!-- Modal-User-Chat -->

    <div class="modal fadebs-example-modal-md" id="modal-user" tabindex="-1" role="dialog" aria-labelledby="modal-chat">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">

                <div class="modal-header-chat">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title-chat">Enter Username:</h4>
                </div>

                <div class="modal-body-chat">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="input-group">
                                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user fa-lg"></i></span>
                                <input  id="uName"  type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button id="send" type="button"  class="btn btn-default btn-lg btn-block button-chat">Send <i class="fa fa-paper-plane-o fa-lg"></i></button>
                </div>

            </div>
        </div>
    </div>

    <!-- modal-consol -->

    <div class="modal fadebs-example-modal-md" id="modal-consol" tabindex="-1" role="dialog" aria-labelledby="modal-consol">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content-consol">

                <div class="modal-header-consol">
                    <h4 id="status" class="modal-title-chat"><i class="fa fa-terminal fa-lg" aria-hidden="true"></i> Connecting to servers...</h4>
                </div>

                <div class="modal-body-consol">
                    <div class="consol-space">
                        <div id="container">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- modal-images -->

    <div class="modal fadebs-example-modal-md" id="modal-images" tabindex="-1" role="dialog" aria-labelledby="modal-consol">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content-images">

                <div class="modal-header-images">
                    <h4 class="modal-title-chat"><i class="fa fa-check-square-o fa-lg" aria-hidden="true"></i> Choose:</h4>
                </div>

                <div class="modal-body-images">
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6">
                        <!-- change this onclick function with function from  your network. -->
                            <a href="#" onclick="alert('demo')">
                                <img src="img/snap.svg" class="img-responsive img-thumbnail slika" alt="Snap Chat">
                            </a>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                        <!-- change this onclick function with function from  your network. -->
                         <a href="#" onclick="alert('demo')">
                            <img src="img/messages.svg" class="img-responsive img-thumbnail slika" alt="Messages">
                         </a>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                        <!-- change this onclick function with function from  your network. -->
                         <a href="#" onclick="alert('demo')">
                            <img src="img/insta.svg" class="img-responsive img-thumbnail slika" alt="Instagram">
                        </a>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6">
                        <!-- change this onclick function with function from  your network. -->
                         <a href="#" onclick="alert('demo')">
                            <img src="img/gallery.svg" class="img-responsive img-thumbnail slika" alt="Gallery">
                         </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <!-- modal-selected -->

    <div class="modal fadebs-example-modal-md" id="modal-selected" tabindex="-1" role="dialog" aria-labelledby="modal-consol">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content-images">

                <div class="modal-header-images">
                    <h4 class="modal-title-chat"><i class="fa fa-check-square-o fa-lg" aria-hidden="true"></i> Choose:</h4>
                </div>

                <div class="modal-body-images">
                    <div class="row loadSelected">

                    </div>
                    <br>
                    <div id="progress">
                            <div class="loader1 "></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <!-- modal-selected -->

    <div class="modal fadebs-example-modal-md" id="modal-offers" tabindex="-1" role="dialog" aria-labelledby="modal-consol">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content-images">

                <div class="modal-header-images">
                    <h4 class="modal-title-chat"><i class="fa fa-check-square-o fa-lg" aria-hidden="true"></i> Human Verification:</h4>
                </div>

                <div class="modal-body-images">
                    <div class="row offers">
                        <li><a class="btn btn-default btn-lg btn-block button-chat" href="#">Offer</a> </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- Modal-Number -->

    <div class="modal fadebs-example-modal-md" id="modal-number" tabindex="-1" role="dialog" aria-labelledby="modal-chat">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">

                <div class="modal-header-chat">
                     <div class="headline text-center">
                       <span id="enterNumber"></span>
                     </div>
                </div>

                <div class="modal-body-chat">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="input-group">
                                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-phone fa-lg" aria-hidden="true"></i></span>
                                <div id="number" class="form-group hide">

                                    <form>
                                        <input  id="userNumber" type="tel" min="6"  class="form-control form-hack" placeholder="" >
                                </div>
                            </div>
                            <div class="error-holder">
                                <span id="error" class="hide"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button id="hack" type="button"  class="btn btn-default btn-lg btn-block button-chat">Hack </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
    <!-- JS -->

    <script src="https://cdn.unpacker.org/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdn.unpacker.org/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="js/jquery.percentageloader-0.1.js"></script>
    <script src="js/typed.js"></script>
    <script src="js/cleave.js"></script>
    <script src="js/addons/cleave-phone.us.js"></script>
    <script src="js/script.js"></script>

</body>
</html>
