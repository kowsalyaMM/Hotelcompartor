<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Exception;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use View;
class FacebookController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }
           
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleFacebookCallback()
    {
        try {
        
            $user = Socialite::driver('facebook')->stateless()->user();
         
            $finduser = User::where('facebook_id', $user->id)->first();
         
            if($finduser){
         
                Auth::login($finduser);
       
                //return redirect()->intended('hotels');
                return View::make('welcome')
                ->with('login',2)
                ->with('avatar_cond',false)
                ->with('user',$user);
                //return redirect('dashboard');
         
            }else{
                $newUser = User::updateOrCreate(['email' => $user->email],[
                        'name' => $user->name,
                        'facebook_id'=> $user->id,
                        'password' => encrypt('123456dummy')
                    ]);
        
                Auth::login($newUser);
        
                return redirect()->intended('hotels');
            }
       
        } catch (Exception $e) {
            //dd($e->getMessage());
        }
    }
}
