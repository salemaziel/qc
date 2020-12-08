import React from 'react'
import {navigateTo} from 'gatsby'
import HeroSectionTxtBtnRight from '../../HeroSectionTxtBtnRight'
import SectionCTA from '../Home/sectionCTA'

import FlowerBG from '../../../images/flower-bg.jpg'



const CoachingPage = (props) => {
    return(
        <>
              <HeroSectionTxtBtnRight
        bg="white"
        textColor="light"
        size="md"
        bgImage={FlowerBG}
        bgImageOpacity={1}
        title="What Is Coaching"
        subtitle="Life coaching help challenge clients to think outside of their belief systems and recognize where fear, doubt, and shame have taken control of their lives. Having a life coach helps many people to overcome obstacles, achieve goals, and make major changes in their lives."
        /*buttonText="Get Started"
        buttonColor="primary"*/
        image=""
        /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
      />


<SectionCTA
      bg="lbrown"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="Coming Out Coaching"
      subtitle="Coming out isn't just about sexual orientation."
      description="Three months of biweekly coaching sessions helps you find your true purpose and own your story. Only you get to decide what and how that is. I'll be there to give you support as you learn patience, self-acceptance, and start working your way out of the shadows. You won't just be challenged to own up to your life goals and dreams—you'll be challenged to find a way to achieve them!"
      style={{ backgroundColor: "#ddc1ce" }}
    />

<SectionCTA
      bg="dbrown"
      textColor="white"
      size="lg"
      bgImage=""
      bgImageOpacity={1}
      title="Living Out Coaching"
      subtitle="Coming out happens every day."
      description="Coming out is never a one time event. It happens every time we enter a new work or social environment. Learn to recognize where shame, fear and doubt are preventing you from moving forward with your life. Six months of biweekly coaching will help keep you accountable for taking control of your life. We will work together to set realistic goals to help you live your truth. You'll be challenged to set boundaries for yourself and others, while learning self-love and compassion."
      style={{ backgroundColor: "#ddc1ce" }}
    />

        </>
    )
}

export default CoachingPage
