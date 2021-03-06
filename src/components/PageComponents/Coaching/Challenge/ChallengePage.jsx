import React from 'react'
import HeroSectionTxtBtnRight from '../../../HeroSectionTxtBtnRight'
import SectionCTA from '../../Home/sectionCTA'
import HeroSectionCentered from '../../../HeroSectionCentered'
import LeafBG from '../../../../images/leaf-bg.jpg'
import HeroSectionTextOnly from '../../../HeroSectionTextOnly'

import LogoImage from '../../../../images/logo-image.png'

import ClimberSection from "./ClimberSection"
import Climber from "../../../../images/original/challenge-page_climber.jpg"

import OfferSection from "./OfferSection"

const ChallengePage = (props) => {
    return(
        <>
              <HeroSectionCentered
        bg="white"
        textColor="white"
        size="lg"
        bgImage={LeafBG}
        bgImageOpacity={1}
        title="Queer Liberation"
        subtitle="5day Challenge"
        subtitle="If you avoid conflict to keep the peace, you start a war inside yourself."
        buttonText="Register Now"
        buttonColor="brown"
        /*buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}*/
      />
          <HeroSectionTextOnly
          className="font-weight-bold"
      bg="#ddc1ce"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title=""
      subtitle=""
      description=""
      listTitle1=""
      listItem1=""
      listItem2=""
      listTitle2=""
      listItem3=""
      listItem4=""
      description1="Do you constantly feel anxious, on edge, or fearful when thinking of the future of the LGBTQ+ community?"
      description2="Do you find it difficult to fully express yourself in relationships, with family, or in your professional life?      "
      description3="Are you struggling to find the confidence to say what you really feel or ask for what you want?      "
      description4="Do you feel hopeless when it comes to having a meaningful and abundant life?      "
      description5="Are you often cynical about the LGBTQ+ community at large?      "
      description6="Do you feel limited by stereotypes around gender, sexuality, and body image?      "
      description7="Do you struggle to connect with your own queer authenticity?      "
      bottomPic={LogoImage}
      bottomPicAlt="Queer Conscious"
    />
    <ClimberSection
    bg=""
    bgImage={Climber}
    bgImageOpacity={1}
    size="md"
    textColor="white"
    
    />
    <OfferSection 
    bg=""
    bgImage=""
    size="md"
    className=""
    offerTopTitle="Introducing a 5-day virtual experience where you will stop the
    fear, hopelessness, and loneliness around your identity so you
    can liberate your queer authenticity!"
    offerMainTitle="In the Queer Liberation Challenge you will:"
    list1="Move from fear, hopelessness, and loneliness to confidence,
    empowerment, and freedom"
    list2="Shift how you connect with yourself, others, and the world
    around you"
    list3="Discover how to re-wire your brain to live your identity,
    purpose, and unique gifts"
    list4="Develop a new relationship with your queer authenticity"
    list5="Stop unhealthy patterns and emotions—start living confidently"
    list6="Understand blocks around your queer identity"
    offerValued="Valued at $1091.00"
    offerPrice=" = ONLY $37.00 ="
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

export default ChallengePage
