import { Formik, Form, Field } from "formik";
import { useState } from "react";
import './styles/header.css'
import './styles/content.css'
import './styles/article.css'

const App = () => {
  const [photos, setPhotos] = useState([]);
  const open = (url: any) => window.open(url)
  console.log({photos});
  return  (
    <div>
      <header>
        <Formik
        initialValues = {{ search : ''}}
        onSubmit = {async values =>  {
          const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
            headers:{
              'Authorization' : 'Client-ID hg5dMRbYy4DAc7tPbtgp5o-sT9sk1xU9064bGsN_neg'
            }
          })

          const data =  await response.json();
          //Llamar api
          setPhotos(data.results)
        }}>

          <Form>
            <Field name = "search"></Field>
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map((photo: any) => {
            return(
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} />
              <p>{[photo.description, photo.alt_description].join(' - ')}</p>
            </article>
          )})}
        </div>
      </div>
    </div>
  )
}

export default App
