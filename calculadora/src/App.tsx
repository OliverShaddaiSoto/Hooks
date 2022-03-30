import './styles/style.css'
import styled from 'styled-components'
import {Formik, Form} from 'formik'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'
import { useState } from 'react'



const compuntInterest= (deposit: number, contribution: number, years: number, rate : number) =>{
  let total = deposit 
  for (let i = 0; i < years; i++) {
    total =  (total + contribution) * (rate+1)
  }
  

  return Math.round(total)
}
function App() {
  const [balance, setBalance] = useState(0);
  const handleSubmit = ({deposit, contribution, years, rate} : any) => {
    const val = compuntInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(val);
    
  }
  return (
    <div>
      <Container>
        <Section>
         <Formik 
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
         }}
         onSubmit={handleSubmit}>
           <Form>
             <Input name = "deposit" label="Deposito inicial"/>
             <Input name = "contribution" label="Contribución anual"/>
             <Input name = "years" label="Años"/>
             <Input name = "rate" label="Beneficio estimado"/>
             <Button type='submit'>Calcular</Button>
           </Form>
         </Formik>
         {balance !== 0 ? `Balance final: ${balance}` : null}
        </Section>
      </Container>
    </div>
  )
}

export default App
