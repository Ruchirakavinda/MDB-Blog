import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';

function Auth(){
    return(

        <>
        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 300 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
<MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            card has even longer content than the first to show that equal height action.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
        </>


    );
}

export default Auth;
