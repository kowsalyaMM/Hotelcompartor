<?php

namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use DB;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function select(Request $request)
    {
        //dd($request->all());
        
        $id = $request->all();
        // dd($id['email']);
        //$user= Auth::user();
        $host = DB::table('users')->select('email')->where('email', $id['email'])->get();
        if(isset($host)&& count($host) >0){
            return redirect('dashboard');
        }else{
            //return redirect('login');
            return redirect()->back()->withInput($request->only('email', 'remember'))->withErrors([
                'approve' => 'These credentials do not match our records.',
    ]);
        }
         
        //  dd($host);
       
        
    }

   
    
    

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
