import logo from './logo.svg';
import './App.css';
import  Card  from "./Card";
import Kathir from './Kathir';
function App() {
  let pricelist = [
    {
     plan:"Freee",
     price:"0",
     features:[
      {
        name:"Single User",
        enable: true,
        isStrong: false
      },
      {
       name:"Unlimited Public Projects",
       enable: true
     },
     {
       name:"Community Access",
       enable: true
     },
     {
       name:"Unlimited  Private Projects",
      
       enable: true
     },
     {
       name:"Dedicated Phone Support",
       
       enable: false
     },
     {
       name:"Free Subdomain",
       enable: false
     },
     {
       name:"Monthly Status  Reports",
      
       enable: false
     },
    
    ]

    },
    {
     plan:"Medium",
     price:"10",
     features:[
      {
        name:"Single User",
        enable: true,
        isStrong:true
      },
      {
       name:"Unlimited Public Projects",
       enable: true
     },
     {
       name:"Community Access",
       enable: true
     },
     {
       name:"Unlimited  Private Projects",
      
       enable: true
     },
     {
       name:"Dedicated Phone Support",
       
       enable: true
     },
     {
       name:"Free Subdomain",
       enable: false
     },
     {
       name:"Monthly Status  Reports",
      
       enable: false
     },
    
    ]
    },
    {
      plan:"paided",
      price:"100",
      features:[
        {
          name:"Single User",
          enable: true,
          isStrong: true
        },
        {
         name:"Unlimited Public Projects",
         enable: true
       },
       {
         name:"Community Access",
         enable: true
       },
       {
         name:"Unlimited  Private Projects",
        
         enable: true
       },
       {
         name:"Dedicated Phone Support",
         
         enable: true
       },
       {
         name:"Free Subdomain",
         enable: true
       },
       {
         name:"Monthly Status  Reports",
        
         enable: true
       },
      
      ]
    }

  ]
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
       {
        pricelist.map((obj)=>{
          return <Card data={obj}></Card>
        })
       }
       
      </div>
  </div>
</section>
  );
}

export default App;
