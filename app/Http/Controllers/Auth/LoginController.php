<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use DB;
use Redirect;
use Session;



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
    public function  index(){
        // dd('hii');
        return view('auth.login');
    }
    
    public function select(Request $request)
    {
       
        
        
        $id = $request->all();

       
      
        //$user= Auth::user();
        $host = DB::table('users')->select('email')->where('email', $id['email'])->get();
        if(isset($host)&& count($host) >0){
         
            $session_var=Session::put('user',$host);
            // dd(Session::get('user'));
            return redirect('hotels');
            // return Views::make('welcome')
            // ->with('login',$session_var);
        }else{
            //return redirect('login');
            return redirect()->back()->withInput($request->only('email', 'remember'))->withErrors([
                'approve' => 'These credentials do not match our records.',
    ]);
        }
         
        //  dd($host);
       
        
    }
    // public function hotels(Request $request) {
    //    dd(Auth::id())
    //   }

    public function logout(Request $request) {
        // Session::flush();
        // Session::destroy();
        Auth::logout();
        return redirect('/');
      }
   
    
    

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
