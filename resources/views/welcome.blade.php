<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

        <!-- Bootstrap -->
        <link rel="stylesheet" href="{{asset('bootstrap/css/bootstrap.min.css')}}">

        <!-- style -->
        <link rel="stylesheet" href="{{asset('css/main.css')}}">

        <!-- select -->
        <link rel="stylesheet" href="{{asset('select/css/select2.css')}}"/>

        <!-- owl -->
        <link rel="stylesheet" href="{{asset('owl/css/owl.carousel.min.css')}}">
        <link rel="stylesheet" href="{{asset('owl/css/owl.theme.default.min.css')}}">
        
    </head>
    <body class="antialiased">
        @include('layouts/header')
        @include('homepage')
        @include('layouts/footer')
        <!-- Bootstrap script -->
        <script src="{{asset('jquery/jquery.slim.min.js')}}"></script>
        <script src="{{asset('popper/popper.min.js')}}"></script>
        <script src="{{asset('bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('js/common.js')}}"></script>
        <!-- select script -->
        <script src="{{asset('select/js/select2.js')}}"></script>
        <!-- owl script-->
        <script src="{{asset('owl/js/owl.carousel.min.js')}}"></script>
    </body>
</html>
