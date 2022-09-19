//import the needed webhooks

import {useEffect, useState} from 'react';

function SCP()
{
    // create current state and set or update state variables
    // use empty array as we want to display al records in the collection. 
    // this will be automatically stored into this empty array. 
    const [state, setState] = useState([]);

    // function to connect to Restdb and grab data
    // and update our setState variable

    function getData()
    {
        // code from restDB to connect to their rest API
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.responseText);
            // save data into variable
            const scpData = JSON.parse(this.responseText);            
            //update our component state(setState)
            setState(scpData);
        }
        });
        
        xhr.open("GET", "https://comp6210-beba.restdb.io/rest/scp1");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", "632793090282ae17e4905dfe");
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);

    }

    // use the useEffect webhook we can now tell the DOM to display the data
    // first argument is function to grab the data, second to update our current state
    // with the data. 
    useEffect(
        () => {
            getData();
        }, [state]
    );

    return(
        <div className='container'>
            {
                state && state.map(
                    scp => 
                    <div className="scpSubjects" id={scp.Item} key="{scp.Item}"> 
                                <div className="card-body">                                  
                                    <h2 >Item: {scp.Item}</h2>
                                    <h3>Class: {scp.Class}</h3>
                                    <p>Description: {scp.Description}</p>
                                    <p>Containment: {scp.Containment}</p>
                                    <img src={"/SCP_Images/" + scp.Item + ".jpg"} alt="scp img" />
                                </div>

                            </div>                 
                )
            }
        </div>
    );
}

export default SCP;