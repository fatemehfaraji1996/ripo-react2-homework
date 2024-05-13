function Building({image,cardTitle,cardDescription,url,lable}) {
 return (
  <div className="card m-5">
  <img className="card-img-top" src={image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{cardTitle}</h5>
    <p className="card-text">
     {cardDescription}
    </p>
    <a href={url} className="btn btn-primary">{lable}</a>
  </div>
</div>
 ) 
}
export default Building