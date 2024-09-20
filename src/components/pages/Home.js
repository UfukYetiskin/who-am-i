import React, {useRef, useEffect} from 'react'

function Home() {
  const ref = useRef(null);

  useEffect(() => {
      if(ref.current){
        ref.current.scrollIntoView({behavior : "smooth"});
      }
  }, [])
  return (
    <>
      <div className='space-y-12' ref={ref}>
        <div className='flex justify-center items-center'>
          <img
            src='/profilePhoto.jpeg'
            alt='profil picture'
            className='w-60 h-60 object-cover rounded-full'
          />
        </div>
        <p className='text-start text-balance leading-6 mb-4  mx-auto'><span className='mr-4'></span>I met software during my university years and after gaining experience in various fields, I decided to develop my career in the frontend field. During my education, I had the opportunity to live abroad for 6 months with the Erasmus+ internship program and improved my English during this period. </p>
        <p className='text-start text-balance leading-6  mx-auto'><span className='mr-4'></span>In my first internship experience in the software field, I learned how to work with a team and developed myself in project management and collaboration. After the internship, I gained my first professional work experience and while actively working in this field, I took part in various freelance projects and had the opportunity to apply my skills in different projects.</p>
      </div>
    </>
  )
}

export default Home