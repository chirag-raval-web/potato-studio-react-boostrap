import React from 'react'
import Contact from './button'

const styles  = {
  container: {
    width: '100%',
    height: 'auto',
    padding: '140px 106px',
    gap: '56px'
  },
  h2 : {
    fontFamily: 'Sora',
    fontSize: '54px',
    fontWeight: '600',
    lineHeight: '70.2px',
    letterSpacing: '-0.04em',
    textAlign: 'center',
    color: '#EA5A0B',
  }
}
 

const StartProject = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-items-center' style={styles.container}>
    <div className="container d-flex justify-content-center align-items-center flex-column">
    <div className='d-flex  align-items-center flex-column'>
                    <h2 style={styles.h2}>Ready to start a project?</h2>
                    <p className='text-black-50 fs-5'>Let’s craft brilliance together.</p>
        </div>
        <div className='ms-5'>
        <Contact />
        </div>
    </div>
    </div>
    </>
  )
}

export default StartProject
