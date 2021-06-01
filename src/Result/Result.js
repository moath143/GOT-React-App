import React, {Fragment, useContext} from 'react'
import {Gotprovider} from '../Gotcontext/Gotcontext'

const Result = () => {

    const obj = useContext(Gotprovider);
    const result = obj.result.map((item, index) => {
        return (
          <Fragment key={index}>
            <div>
              <div className="img">
                <img src={item.photo} alt="" />
              </div>
            </div>
            <div className="info">
              <h3>character name: {item.charactername} </h3>
              <h3>actor name: {item.actorname} </h3>
              <h3>house name: {item.housename} </h3>
            </div>
          </Fragment>
        );
    })
    return (
      <section>
        <div className="container">
          <h2>information</h2>
          <div className="infos">{result}</div>
        </div>
      </section>
    );
}
 
export default Result;