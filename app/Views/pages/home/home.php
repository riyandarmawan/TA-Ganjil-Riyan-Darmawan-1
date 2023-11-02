<?= $this->extend('layout/template'); ?>

<?= $this->section('content'); ?>

<!-- main start -->
<section class="home" id="home">
    <main class="content">
        <div class="greeting">
            <h2>Selamat Datang di <span>Pengaduan</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas placeat eveniet excepturi. Nesciunt, praesentium?</p>
            <a href="#">Ajukan Sekarang!</a>
        </div>
        <img src="/img/orang.jpg" alt="Orang Melompat ">
    </main>
</section>
<!-- main end -->

<!-- about section start -->
<section class="about" id="about">
    <img src="/img/about.jpg" alt="Orang sedang berkomunikasi">
    <main class="content">
        <h2>Tentang <span>Pengaduan</span></h2>
        <div class="explanation">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium repellat amet libero temporibus nostrum veniam tempore, assumenda tempora cumque, velit recusandae. Ipsum eum sapiente sit deserunt nostrum eos expedita veritatis!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor delectus, sapiente deleniti commodi omnis vel ut perferendis minima id molestiae explicabo ex aperiam distinctio incidunt at quas saepe impedit voluptatum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora alias qui esse odit ratione delectus deserunt illo magnam, assumenda voluptate iusto porro inventore quasi ipsam non rerum? Soluta, quis? Illum.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quisquam eaque excepturi est, voluptatem ullam eos veniam voluptate fugit voluptas debitis doloribus aliquam inventore delectus deserunt reiciendis modi quibusdam eius.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam unde distinctio totam ut at nihil deleniti nisi neque eveniet! Quia harum voluptate totam officiis, deserunt inventore explicabo ab voluptatem iste?</p>
        </div>
    </main>
</section>
<!-- about section end -->

<?= $this->endsection(); ?>