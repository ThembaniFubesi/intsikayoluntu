<main class="clearfix">
    <aside>

        <!--load sidebar-->
        <?php
        include './includes/sidebar.php';
        ?>
        <!--end load sidebar-->

    </aside>

    <section class="trans-all">

        <!--load mobile menu-->
        <?php
        include './includes/mobilemenu.php';
        ?>
        <!--end load mobile menu-->

        <article id="activities">
            <!--load activities-->
            <?php
            include "./pages/activities.php";
            ?>
            <!--end load activities-->
        </article>
        <article id="values">
            <!--load values-->
            <?php
            include "./pages/values.php";
            ?>
            <!--end load values-->
        </article>
        <article id="history">
            <!--load history-->
            <?php
            include "./pages/history.php";
            ?>
            <!--end load history-->
        </article>
        <article id="gallery">
            <!--load gallery-->
            <?php
            include "./pages/gallery.php";
            ?>
            <!--end load gallery-->
        </article>
        <article id="contact">
            <!--load contact-->
            <?php
            include "./pages/contact.php";
            ?>
            <!--end load contact-->
        </article>
    </section>
</main>
