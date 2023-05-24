import savannah from "../images/savannah.jpg"
import programmer from "../images/programmer.jpg"

export default function Home() {
  return (
    <div>
      <h1 className='text-center'>Latest Blogs</h1>
      <div className='container-fluid row'>

        <div className='col-4 mb-5'>
          <div className="card">
            <img src={savannah} className="card-img-top" alt="img loading..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success btn-sm w-100">Read More</a>
            </div>
          </div>
        </div>

        <div className='col-4 mb-5'>
          <div className="card ">
            <img src={programmer} className="card-img-top" alt="img loading..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success btn-sm w-100">Read More</a>
            </div>
          </div>
        </div>

        <div className='col-4 mb-5'>
          <div className="card">
            <img src={savannah} className="card-img-top" alt="img loading..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success btn-sm w-100">Read More</a>
            </div>
          </div>
        </div>

        <div className='col-4 mb-5'>
          <div className="card">
            <img src={savannah} className="card-img-top" alt="img loading..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success btn-sm w-100">Read More</a>
            </div>
          </div>
        </div>

        <div className='col-4 mb-5'>
          <div className="card">
            <img src={savannah} className="card-img-top" alt="img loading..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success btn-sm w-100">Read More</a>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className="card">
            <img src={savannah} className="card-img-top" alt="img loading..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-success btn-sm w-100">Read More</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
