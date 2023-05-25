import React, {Fragment} from 'react'

import { Box } from '@mui/material'
import Banner from '@/components/ui/banner/Banner'
import AllQuestions from '@/components/faq/AllQuestions'
import SubscribeCard from '@/components/ui/subscribe/SubscribeCard'
import InstaPhotos from '@/components/ui/insta-photos/InstaPhotos'
import NextHead from '@/components/ui/Head/Head'

const FAQPage = () => {
  return (
    <Fragment>
      <NextHead title="GoShop - FAQ" description="GoShop FAQ Page" />
        <Banner pageTitle="FAQ" breadcrumbs={[{title: "Home", link: "/"}, {title: "FAQ"}]} />
        <AllQuestions />
        <SubscribeCard />
        <InstaPhotos />
    </Fragment>
  )
}

export default FAQPage