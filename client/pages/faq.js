import React, {Fragment} from 'react'

import { Box } from '@mui/material'
import Banner from '@/components/ui/banner/Banner'
import AllQuestions from '@/components/faq/AllQuestions'
import SubscribeCard from '@/components/ui/subscribe/SubscribeCard'
import InstaPhotos from '@/components/ui/insta-photos/InstaPhotos'

const FAQPage = () => {
  return (
    <Fragment>
        <Banner pageTitle="FAQ" breadcrumbs={[{title: "Home", link: "/"}, {title: "FAQ"}]} />
        <AllQuestions />
        <SubscribeCard />
        <InstaPhotos />
    </Fragment>
  )
}

export default FAQPage