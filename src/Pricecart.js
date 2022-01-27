import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
function Pricecart(props) {
 
  return <>
    <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.type.product}</h5>
              <h6 className="card-price text-center">${props.type.price}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li className={props.type.usersEnabler? "":"text-muted"} style={ (props.type.users == "Single User") ? { fontWeight: "normal" } : { fontWeight: "bold" } }><span className="fa-li">{props.type.usersEnabler?<CheckIcon />:<ClearIcon />}</span>{props.type.users}</li>
                <li className={props.type.storageEnabler? "":"text-muted"}><span className="fa-li">{props.type.storageEnabler? <CheckIcon />:<ClearIcon />}</span>{props.type.storage}</li>
                <li className={props.type.publicprojectsEnabler? "":"text-muted"}><span className="fa-li">{props.type.publicprojectsEnabler?<CheckIcon />:<ClearIcon />}</span>{props.type.publicprojects}</li>
                <li className={props.type.communityAccessEnabler? "":"text-muted"}><span className="fa-li">{props.type.communityAccessEnabler?<CheckIcon />:<ClearIcon />}</span>{props.type.communityAccess}</li>
                <li className={props.type.privateprojectsEnabler? "":"text-muted"}><span className="fa-li">{props.type.privateprojectsEnabler? <CheckIcon />:<ClearIcon />}</span>{props.type.privateprojects}</li>
                <li className={props.type.phoneSupportEnabler ? "":"text-muted"}><span className="fa-li">{props.type.phoneSupportEnabler ? <CheckIcon />:<ClearIcon />}</span>{props.type.phoneSupport}</li>
                <li className={props.type.subdomainEnabler ? "":"text-muted"} style={ (props.type.product == "PRO") ? { fontWeight: "bold" } : { fontWeight: "normal" } }><span className="fa-li">{props.type.subdomainEnabler ? <CheckIcon />:<ClearIcon />}</span>{props.type.subdomain}
                </li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.type.reports}</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
     
</>
}
export default Pricecart

