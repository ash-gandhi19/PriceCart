
import './App.css';
import Pricecart from './Pricecart';

function App() {

 let  data=[
    {
      product:"FREE",
      price:0,
      users:"Single User",
      usersEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicprojects:"Unlimited Public Projects",
      publicprojectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateprojects:"Unlimited Private Projects",
      privateprojectsEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subdomain:"Free Subdomain", 
      subdomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false,
    },
    {
      product:"PLUS",
      price:9,
      users:"5 Users",
      usersEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicprojects:"Unlimited Public Projects",
      publicprojectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateprojects:"Unlimited Private Projects",
      privateprojectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subdomain:"Free Subdomain", 
      subdomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false,
    },
    {
      product:"PRO",
      price:49,
      users:"Unlimited Users",
      usersEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicprojects:"Unlimited Public Projects",
      publicprojectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateprojects:"Unlimited Private Projects",
      privateprojectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subdomain:"Unlimited Free Subdomains", 
      subdomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:true,
    }
  ];
 
  return <>
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
   {  
        data.map((e)=>{
          return <Pricecart type={e}/>
        })
   }
      </div>
    </div>
  </section>
  </>
}

export default App;
