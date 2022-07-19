import Logo from "../assets/logomark.min.svg";
import Twitter from "../assets/ICONS/Social/twitter.min.svg";
import Github from "../assets/ICONS/Social/github.min.svg";
import discord from "../assets/ICONS/Social/discord.min.svg";
import youtube from "../assets/ICONS/Social/youtube.min.svg";

const Footer = () => {
  return (
    <footer className="px-5 pt-40 xl:pt-64 max-w-screen-2xl m-auto">
      <div className="border-b border-gray-300 pb-8">
        <img src={Logo} alt="logo" className="w-16" />
        <div className="mt-12 lg:grid grid-cols-6 gap-10 ">
          <div className="max-w-md lg:col-span-2  ">
            <p>
              Laravel is a web application framework with expressive, elegant
              syntax. We believe development must be an enjoyable and creative
              experience to be truly fulfilling. Laravel attempts to take the
              pain out of development by easing common tasks used in most web
              projects.
            </p>
            <ul className="flex gap-4 mt-8 ">
              <li>
                <a href="https://twitter.com/laravelphp">
                  <img src={Twitter} alt="twitter" className="w-6" />
                </a>
              </li>
              <li>
                <a href="https://github.com/laravel">
                  <img src={Github} alt="github" className="w-6" />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/mPZNm7A">
                  <img src={discord} alt="discord" className="w-6" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/laravelphp">
                  <img src={youtube} alt="youtube" className="w-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-gray-500 text-xs mt-10 lg:mt-0 grid gap-10 grid-cols-2 md:grid-cols-4 lg:col-span-4 ">
            <div>
              <h3 className="text-gray-800">HIGHLIGHTS</h3>
              <ul className=" space-y-4 mt-5">
                <li>
                  <a href="https://laravel.com/team">Our Team</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/releases">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/installation">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/routing">Routing</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/blade">
                    Blade Templates
                  </a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/authentication">
                    Authentification
                  </a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/authorization">
                    Authorization
                  </a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/artisan">
                    Artisan Console
                  </a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/database">Database</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/eloquent">
                    Eloquent ORM
                  </a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/testing">Testing</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800">RESOURCES</h3>
              <ul className="text-gray-500  space-y-4 mt-5">
                <li>
                  <a href="https://laracasts.com/">Laracasts</a>
                </li>
                <li>
                  <a href="https://laravel-news.com/">Laravel News</a>
                </li>
                <li>
                  <a href="https://laracon.us/">Laracon</a>
                </li>
                <li>
                  <a href="https://laracon.eu/">Laracon EU</a>
                </li>
                <li>
                  <a href="https://larajobs.com/">Jobs</a>
                </li>
                <li>
                  <a href="https://laracasts.com/discuss">Forums</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800">PARTNERS</h3>
              <ul className="text-gray-500  space-y-4 mt-5">
                <li>
                  <a href="https://vehikl.com/">Vehiki</a>
                </li>
                <li>
                  <a href="https://tighten.co/">Tighten</a>
                </li>
                <li>
                  <a href="https://64robots.com/">64 Robots</a>
                </li>
                <li>
                  <a href="https://kirschbaumdevelopment.com/">Kirschbaum</a>
                </li>
                <li>
                  <a href="https://www.curotec.com/services/technologies/laravel/">
                    Curotec
                  </a>
                </li>
                <li>
                  <a href="https://www.a2design.biz/">A2 Design</a>
                </li>
                <li>
                  <a href="https://corporate.aboutyou.de/app/uploads/2019/08/INTRO-Pitch-I-AY-Tech.pdf?utm_source=laravelpartnersfindoutmore&utm_medium=socialgroups&utm_campaign=tech">
                    ABOUT YOU
                  </a>
                </li>
                <li>
                  <a href="https://jump24.co.uk/">Jump 24</a>
                </li>
                <li>
                  <a href="https://www.byte5.net/">Byte 5</a>
                </li>
                <li>
                  <a href="https://cubettech.com/">Cubet</a>
                </li>
                <li>
                  <a href="https://www.cyber-duck.co.uk/how-we-work/technology/laravel?utm_source=Laravel%20Partner&utm_medium=Sponsorship">
                    Cyber-Duck
                  </a>
                </li>
                <li>
                  <a href="https://devsquad.com/">DevSquad</a>
                </li>
                <li>
                  <a href="https://www.ideil.com/">Ideil</a>
                </li>
                <li>
                  <a href="https://romegadigital.com/">Romega Software</a>
                </li>
                <li>
                  <a href="https://www.worksome.com/">Worksome</a>
                </li>
                <li>
                  <a href="https://webreinvent.com/?utm_source=laravel&utm_medium=laravel.com&utm_campaign=patreon-sponsors">
                    WebReinvent
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800">ECOSYSTEM</h3>
              <ul className="text-gray-500  space-y-4 mt-5">
                <li>
                  <a href="https://laravel.com/docs/9.x/billing">Cashier</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/dusk">Dusk</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/broadcasting">Echo</a>
                </li>
                <li>
                  <a href="https://envoyer.io/">Envoyer</a>
                </li>
                <li>
                  <a href="https://forge.laravel.com/">Forge</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/homestead">Homestead</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/horizon">Horizon</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/mix">Mix</a>
                </li>
                <li>
                  <a href="https://nova.laravel.com/">Nova</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/passport">Passport</a>
                </li>
                <li>
                  <a href="https://devsquad.com/">Scout</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/socialite">Socialite</a>
                </li>
                <li>
                  <a href="https://spark.laravel.com/">Spark</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/telescope">Telescope</a>
                </li>
                <li>
                  <a href="https://laravel.com/docs/9.x/valet">Valet</a>
                </li>
                <li>
                  <a href="https://vapor.laravel.com/">Vapor</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs space-y-6 mt-6 pb-16">
        <p>
          Laravel is a Trademark of Taylor Otwell. Copyright © 2011-2022 Laravel
          LLC.
        </p>
        <p>Code highlighting provided by Torchlight</p>
      </div>
    </footer>
  );
};

export default Footer;
