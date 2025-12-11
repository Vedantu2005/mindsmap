import React from 'react'
import ContactForm from '../components/ContactForm'
import MoreBlog from '../components/moreblog'
import PoseHero from '../components/PoseHero'
import Pose7 from '../components/Pose7'
import Pose6 from '../components/Pose6'
import Pose4 from '../components/Pose4'
import Pose3 from '../components/Pose3'
import Pose2 from '../components/Pose2'
import Pose1 from '../components/Pose1'
// import Pose5 from '../components/Pose5'

const Pose = () => {
  return (
    <div>
      <PoseHero />
      <Pose1 />
      <div className='-mt-20 lg:mt-0'>
        <Pose2 />
      </div>
      <Pose3 />
      <Pose4 />
      {/* <Pose5 /> */}
      <div className='lg:-mt-15'>
        <Pose6 />
      </div>
      <Pose7 />
      <MoreBlog />
      <div className='py-10 lg:py-0'>
      <ContactForm />

      </div>
    </div>
  )
}

export default Pose
