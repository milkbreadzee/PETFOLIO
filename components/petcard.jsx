export default function PetCard(){
    return(
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" alt="pet-image" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name</h2>
    <p>Cute little description</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View More</button>
    </div>
  </div>
</div>
    )
}