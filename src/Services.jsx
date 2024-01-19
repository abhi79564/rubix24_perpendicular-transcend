import React from 'react'
import web1 from './images/AI.webp'
import web2 from './images/Appd.avif'
import web3 from './images/DataS.avif'
import web4 from './images/Webd.avif'
import web5 from './images/blockchain.png'
import web6 from './images/programming-languages-1.avif'



function Services() {
    return (
  <div>
  <div className='my-5'>
  <h1 className='text-center'>Our Services</h1>
  </div>
  <div className="container-fluid mb-5">
  <div className="row">
  <div className="col-10 mx-auto">
  <div className="row gy-5">
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web1} class="card-img-top" alt="img"/>
    <div class="card-body">
      <h5 class="card-title font-weight-bold">Artificial Intelligence</h5>
      <p class="card-text">Explore AI technologies.</p>
      <a href="/Aintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">App Development</h5>
      <p class="card-text">Learn how to build Mobile Application.</p>
      <a href="/Bintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Data Science</h5>
      <p class="card-text">Build your carrer as a Data Scientist.</p>
      <a href="/Cintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Web Development</h5>
      <p class="card-text">Develop Dynamic websites.</p>
      <a href="/Dintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web5} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Blockchain </h5>
      <p class="card-text">Learn blockchain technology</p>
      <a href="/Eintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto" style={{ width: '25rem',height: '30rem' }}>
  
  <div class="card">
    <img src={web6} class="card-img-top " alt="..."/>
    <div class="card-body">
      <h5 class="card-title">My Learning</h5>
      <p class="card-text">Your progress </p>
      <a href="/ProgressTracker" class="btn btn-primary">Click</a>
    </div>
  </div>
  
  </div>
  </div>
  
  </div>
  </div>
  </div>
  
  
  
  </div>
     
     
  
    )
  }

export default Services;
