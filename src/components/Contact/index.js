import emailjS from '@emailjs/browser'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjS
      .sendForm(
        'service_sht12lb',
        'template_1hzv87a',
        form.current,
        'NsM1CowBNzK8oRlFF'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  //   const sendEmail = (e) => {
  //     e.preventDefault()

  //     emailJS.sendForm(
  //         'gmail',
  //         "template_1hzv87a",
  //         refForm.current,
  //         'NsM1CowBNzK8oRlFF'
  //     ). then(
  //         () =>{
  //             alert('Message sucessesfully sent!')
  //             window.location.reload(false)
  //         },
  //         () => {
  //             alert('Failed to send message!, Please try again')
  //         }
  //     )
  //   }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I would love to hear from you! Whether you have a project in mind, need a consultation, or just want to say hello, feel free to reach out. Let's collaborate and create something amazing together!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your fullname"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email adress"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-botton" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Okafor Johnson Chukwuemeka,
          <br />
          Nigeria,
          <br />
          10/12 Gbeleyi street <br />
          Lagos, Egbeda
          <br />
          <span>johnsonzagazor06@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[6.527673169764433, 3.3282793558330273]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[6.527673169764433, 3.3282793558330273]}>
              <Popup>
                Johnson lives here come over for a cup of coffee :){' '}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
