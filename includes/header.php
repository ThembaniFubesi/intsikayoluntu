<!DOCTYPE html>
<!--
Developed by Own Appeal: http://www.own-appeal.com
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta id="extViewportMeta" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <title>Intsika Yoluntu Development Project</title>
        <!--load reset.css-->
        <link rel="stylesheet" href="./css/reset.css">
        <!--end load reset.css-->

        <!--load default.css-->
        <link rel="stylesheet" href="./css/default.css">
        <!--end load default.css-->
        <script>
            function setPageTitle(page) {
                document.title = "Intsika Yoluntu Development Project | " + page[0].toUpperCase() + page.slice(1);
            }
            var serverUrl = "<?= getServerUrl(); ?>";
        </script>
        <!--[if lt IE 9]>
            <script src="scripts/html5shiv.js"></script>
            <script src="scripts/respond.js"></script>
        <![endif]-->
    </head>
    <body>