import SignupForm from '@/components/signup/SignupForm'
import Banner from '@/components/ui/banner/Banner'
import InstaPhotos from '@/components/ui/insta-photos/InstaPhotos'
import PageDecor from '@/components/ui/page-decor/PageDecor'
import SubscribeCard from '@/components/ui/subscribe/SubscribeCard'
import React, { Fragment } from 'react'

const signup = () => {
  return (
    <Fragment>
        <PageDecor />
        <Banner pageTitle="Registration" breadcrumbs={[{title:"Home", link: "/"}, {title: "Signup"}]} />
        <SignupForm />
        <SubscribeCard />
        <InstaPhotos />
    </Fragment>
  )
}

export default signup