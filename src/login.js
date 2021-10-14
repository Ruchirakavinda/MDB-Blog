import React from 'react'
import { MDBCard, MDBCardBody, MDBBtn, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

const login = () => {
    return (
        <section class="vh-100" style={{backgroundColor: "#fafbff"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
            </div>

            <MDBCard style={{ width: '40vw'}}>
      <MDBCardBody>
              <form>

                <div class="form-outline mb-4">
                  <input type="email" id="form1Example13" class="form-control form-control-lg" style={{ border: '1px solid black' }}/>
                  <label class="form-label" for="form1Example13">Email address</label>
                </div>
      

                <div class="form-outline mb-4">
                  <input type="password" id="form1Example23" class="form-control form-control-lg" style={{ border: '1px solid black' }}/>
                  <label class="form-label" for="form1Example23">Password</label>
                </div>
      
                <div class="d-flex justify-content-around align-items-center mb-4">
   
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
      
                <MDBBtn class="btn btn-primary btn-lg btn-block">Sign in</MDBBtn>

      
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
      
                <MDBBtn class="btn btn-primary btn-lg btn-block" style= {{backgroundColor: "#3b5998" }} href="#!" role="button">
                  <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                </MDBBtn>
                <MDBBtn class="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} href="#!" role="button">
                  <i class="fab fa-twitter me-2"></i>Continue with Twitter</MDBBtn>
      
              </form>

            </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </section>
    
    )
}

export default login
