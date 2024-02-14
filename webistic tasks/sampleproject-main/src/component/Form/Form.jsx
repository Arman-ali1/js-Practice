import React from "react";
import "../Form/Form.css";

function Form() {
  return (
    <>
      <section className="vh-100 container-fluid bg-black">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-11 bg-color">
              <div className="card bg-color border-0 ">
                <div className="row g-0 bg-dark">
                  <div className="col-md-6 col-lg-5 d-none d-md-block bg-color" style={{backgroundColor:'#4527a0'}}>
                    <div className="card-body p-4  mt-5 p-lg-5 text-white">
                      <div className="d-flex align-items-center mb-1 pb-1">
                        <span className="h6 mb-0 ">TAKE THE SILK ROAD TO</span>
                      </div>

                      <div style={{color:'#00eaff'}} >
                      <span className="fw-bold h4 mb-3 pb-3">
                        Digitizing Your Buisness Growth
                      </span>
                      </div>
                      <div className="mt-5 pt-5 h5 ">
                        <span className=" ps-5">Follow Us</span>
                        <i className="fa-brands fa-instagram ps-3 pe-4"></i>
                        <i className="fa-brands fa-linkedin"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center bg-color" style={{backgroundColor:'#4527a0'}}>
                    <div className="card-body mt-4 p-4 p-lg-5 text-white">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1" >
                          <span className="h4 fw-bold mb-0">Start A Conservation With Us</span>
                        </div>

          
                        <div className="form-outline mb-4  d-flex">
                        <i className="fa fa-user mt-2 pe-3"></i>
                        <input className="pb-2" type="text" id="name" name="name" placeholder="Name*" />
                          
                        </div>

                        <div className="form-outline mb-4  d-flex">
                        <i className="fa fa-home mt-2 pe-3"></i>
                        <input className="pb-2" type="text" id="name" name="name" placeholder="Company Name*" />
                          
                        </div>
                        <div className="form-outline mb-4  d-flex">
                        <i className="fa fa-inbox mt-2 pe-3"></i>
                        <input className="pb-2" type="text" id="name" name="name" placeholder="Email*" />
                          
                        </div>
                        <div className="form-outline mb-4  d-flex">
                        <i className="fa fa-phone mt-2 pe-3"></i>
                        <input className="pb-2" type="text" id="name" name="name" placeholder="Phone*" />
                          
                        </div>
                        <div className="form-outline mb-4  d-flex">
                        <i className="fa fa-message mt-2 pe-3"></i>
                        <input className="pb-2" type="text" id="name" name="name" placeholder="Your Message" />
                          
                        </div>

                        <div className="pt-1 mb-4" style={{textAlign:'end'}} >
                          <button
                            className="btn btn-dark border-white"
                            type="button"
                          >
                            SUBMIT
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
