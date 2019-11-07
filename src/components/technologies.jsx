import React, {Component} from 'react'


export default class Technology extends Component
{

    render()
    {

        if(this.props.data)
        {
            var technologies = this.props.data;

            var technolodgiesDOM = Object.keys(technologies).map((techcategory)=>
            {
                
                var techlist = technologies[techcategory].map((tech)=>
                {   
                     var imageLink = "./images/"+tech.logo;
                     return (<div class="col-md-3 col-sm-6 col-xs-6">
                     <img src={imageLink} class="img-responsive img-centered logo"></img>
                     </div>)
                })
                
                return (
                <div class="row mt-5 mb-5">
                    <h3 class="text-center">{techcategory}</h3>
                    
                   { techlist}
                
                </div>
                )
            })
        }

        return (
            <div>
                {technolodgiesDOM}
            </div>
        )


    }



    
}
