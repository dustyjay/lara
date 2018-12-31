<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>
        
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title'): {{env('APP_NAME')}}</title>

        @yield('cssSection')
        @yield('cssSectionSideNav')

    </head>
    <body>
        <div class="tw-text-grey-darkest" id="app">
            @yield('content')
        </div>

        @yield('scriptsSection')
        @yield('scriptsSectionSideNav')
    </body>
    <script src="{{ asset('js/app.js') }}"></script>
</html>
