
<div class="login-section" style="display:none;" id="loginform">
    <x-guest-layout>
        <x-jet-authentication-card>
            <x-slot name="logo">
                <img src="{{asset('images/login-under.svg')}}">    
            </x-slot>

            <x-jet-validation-errors class="mb-4" />

            @if (session('status'))
                <div class="mb-4 font-medium text-sm text-green-600">
                    {{ session('status') }}
                </div>
            @endif

            <div class="login-text">Login</div>

            <form method="post"  action="{{route('userlogin')}}" >
            
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
        
            
                <div  class="login-inner">
                    <!-- <x-jet-label for="email" value="{{ __('Email') }}" /> -->
                    <x-jet-input id="email" type="email" name="email" :value="old('email')" autofocus />
                </div>

                <div class="login-inner">
                    <!-- <x-jet-label for="password" value="{{ __('Password') }}" /> -->
                    <x-jet-input id="password" type="password" name="password"  autocomplete="current-password" />
                </div>

                <!-- <div class="">
                    <label for="remember_me" class="flex items-center">
                        <x-jet-checkbox id="remember_me" name="remember" />
                        <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                    </label>
                </div> -->

                <div>
                    @if (Route::has('password.request'))
                        <a class="forgot-pass" href="{{ route('password.request') }}">
                            {{ __('Forgot your password?') }}
                        </a>
                    @endif
                </div>

                <div class="log-in">
                    <x-jet-button>
                        {{ __('Log in') }}
                    </x-jet-button>
                </div>
                <hr class="hr-text" data-content="Or Sign up With">
                <div class="google-fb">
                    <a class="" href="{{ url('auth/google') }}"  id="btn-fblogin">
                        <img src="{{asset('images/login-google.svg')}}">    
                    </a>                
                    <a class="" href="{{ url('auth/facebook') }}" id="btn-fblogin">
                        <img src="{{asset('images/login-fb.svg')}}">    
                    </a>                
                </div>
                </div>
            </form>
        </x-jet-authentication-card>
    </x-guest-layout>
</div>

