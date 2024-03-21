import './Links.css'

function Links() {
  return (
    <div className='Links container'>
       <div className='containers'>
          <a href='https://api.whatsapp.com/send?phone=5586995652410' className='linkContainer' target='_blank'>
                <div className='img img1'></div>
                <p>Nosso Whatsapp</p>
          </a>
          <div className='shadow'></div>
       </div>

       <div className='containers'>
          <a href='https://tiagoviniciusdev.github.io/idealwebsites/' className='linkContainer' target='_blank'>
              <div className='img img2'></div>
              <p>Nosso Site</p>
          </a>
          <div className='shadow'></div>
       </div>

       <div className='containers'>
          <a href='https://www.instagram.com/idealwebsites/' className='linkContainer' target='_blank'>
              <div className='img img3'></div>
              <p>Instagram</p>
          </a>
          <div className='shadow'></div>
       </div>
    </div>
  )
}

export default Links