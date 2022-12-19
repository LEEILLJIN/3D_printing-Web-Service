import React from 'react'
import Icon1 from '../../images/logo1-2.png'
import Icon2 from '../../images/logo1-4.png'
import Icon3 from '../../images/logo1-6.png'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesCard,
    ServicesIcon,
    ServicesP,
    ServicesWrapper 
} from './ServicesElements'

const Services = () => {
  return (
      <>
      <ServicesContainer id='services'>
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>First Service</ServicesH2>
                    <ServicesP>bowwow</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Second Service</ServicesH2>
                    <ServicesP>bowwow</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>third Service</ServicesH2>
                    <ServicesP>bowwow</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
      </ServicesContainer>
      </>
  )
}

export default Services