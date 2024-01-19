import './App.css';
import React from 'react';
import web1 from './images/istockphoto-527679120-612x612.jpg'

function Home() {
  return (
<div>


<section id='header' className='d-flex align-items-center'>

<div class='container-fluid nav_bg'>
<div class='row'>
<div class='col-10 mx-auto'>
<div className='row'>
<div class='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
<h1><br></br><strong class='brand-name'> Your Voice Matters</strong></h1>
<h2 class='my-3'>
Engage,Learn,Succeed.
</h2>
<div class='mt-3'>
<a className="btn-get-started" href="/services" role="button">Get Started</a>
</div>
<div class='mt-3 '>
<a className="btn-get-started" href="http://127.0.0.1:5502/index.html#" role="button">Dashboard</a>
</div>
</div>

<div className='col-lg-6 order-1 order-lg-2 header-img'>
<img src={web1} className='img-fluid animated' alt='home img' />
</div>
</div>
</div>
</div>
</div>
</section>

</div>
   
   

  )
}

export default Home;
