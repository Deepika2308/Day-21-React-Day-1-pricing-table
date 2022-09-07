import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Pricecart />
    </div>
  );
}

function Pricecart() {
  return (
    <section className="bg-primary py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            {/* card 1 starts */}
            <div className="card bg-white">
              <div className="card-body">
                <div className="card-title text-uppercase fw-bold">Free</div>
                <div className="card-subtitle">
                  <p className="price fw-bold">
                    $0<span className="period">/month</span>
                  </p>
                </div>
                <hr></hr>
                <div className="card-text">
                  <ul className="fa-ul d-flex flex-column gap-3 align-items-start mx-0">
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Single User</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> 5GB Storage</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Unlimited Public Projects</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Community Access</span></li>

                    <li className="text-muted"><span><FontAwesomeIcon icon={faTimes} className="fa-lg"></FontAwesomeIcon></span><span> Unlimited Private Projects</span></li>
                    <li className="text-muted"><span><FontAwesomeIcon icon={faTimes} className="fa-lg"></FontAwesomeIcon></span><span> Dedicated Phone Support</span></li>
                    <li className="text-muted"><span><FontAwesomeIcon icon={faTimes} className="fa-lg"></FontAwesomeIcon></span><span> Free Subdomain</span></li>
                    <li className="text-muted"><span><FontAwesomeIcon icon={faTimes} className="fa-lg"></FontAwesomeIcon></span><span> Monthly Status Reports</span></li>
                  </ul>
                </div>
                <button className="btn btn-primary btn-lg col-12">Button</button>
              </div>
            </div>
            {/* card 1 ends */}
          </div>
          <div class="col-lg-4">
            {/* card 2 starts */}
      <div className="card bg-white">
        <div className="card-body">
          <div className="card-title text-uppercase fw-bold">
            Plus
          </div>
          <div className="card-subtitle">
          <p className="price fw-bold">$9<span className="period">/month</span></p>
          </div>
          <hr></hr>
          <div className="card-text">
                  <ul className="fa-ul d-flex flex-column gap-3 align-items-start mx-0">
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span className="fw-bold"> 5 Users</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> 50GB Storage</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Unlimited Public Projects</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Community Access</span></li>

                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Unlimited Private Projects</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Dedicated Phone Support</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Free Subdomain</span></li>
                    <li className="text-muted"><span><FontAwesomeIcon icon={faTimes} className="fa-lg"></FontAwesomeIcon></span><span> Monthly Status Reports</span></li>
                  </ul>
                </div>
                <button className="btn btn-primary btn-lg col-12">Button</button>
        </div>
      </div>
      {/* card 2 ends */}
          </div>
          <div class="col-lg-4">
            {/* card 3 starts */}
      <div className="card bg-white">
        <div className="card-body">
          <div className="card-title text-uppercase fw-bold">
            Pro
          </div>
          <div className="card-subtitle">
          <p className="price fw-bold">$49<span className="period">/month</span></p>
          </div>
          <hr></hr>
          <div className="card-text">
                  <ul className="fa-ul d-flex flex-column gap-3 align-items-start mx-0">
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span className="fw-bold"> Unlimited Users</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> 150GB Storage</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Unlimited Public Projects</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Community Access</span></li>

                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Unlimited Private Projects</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Dedicated Phone Support</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> <span className="fw-bold">Unlimited</span> Free Subdomain</span></li>
                    <li><span><FontAwesomeIcon icon={faCheck} className="fa-lg"></FontAwesomeIcon></span><span> Monthly Status Reports</span></li>
                  </ul>
                </div>
                <button className="btn btn-primary btn-lg col-12">Button</button>
        </div>
      </div>
      {/* card 3 ends */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
