import react from "react"
import "./Card.css"


export default function Card(props) {
  let future = props.data.features;
return   <div class="col-lg-4">
<div class="card mb-5 mb-lg-0">
  <div class="card-body">
    <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
    <h6 class="card-price text-center">${props.data.price}<span class="period">/month</span></h6>
    <hr/>
    <ul class="fa-ul">
      {
        props.data.features.map(obj=> {
         if(obj.enable){
          return <li><span class="fa-li"><i class="fas fa-check"></i></span>{obj.isStrong ? <strong> {obj.name} </strong> : obj.name }</li>
         }else{
          return <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{obj.name}</li>
         }
        })
      }
    
        
    </ul>
    <div class="d-grid">
      <a href="#" class="btn btn-primary text-uppercase">Button</a>
    </div>
  </div>
</div>
</div>
    
  
 
    

}