import React from 'react'
import { ServiceConcumer } from '../service-context'

const withServiceConsumer = (Veiw) => {
  return (props) => {
      return (
        <ServiceConcumer>
          {
            (service) => {
              return (
                <Veiw {...props} service={service}/>
              )
            }
          }
        </ServiceConcumer>
      )
  }
}

export default withServiceConsumer