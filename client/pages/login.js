import LoginForm from '@/components/login/LoginForm'
import Banner from '@/components/ui/banner/Banner'
import InstaPhotos from '@/components/ui/insta-photos/InstaPhotos'
import PageDecor from '@/components/ui/page-decor/PageDecor'
import SubscribeCard from '@/components/ui/subscribe/SubscribeCard'
import React, { Fragment } from 'react'

const LoginPage = () => {
  return (
    <Fragment>
        <PageDecor />
        <Banner pageTitle="Log In" breadcrumbs={[{title: "Home", link: "/"}, {title: "Log In"}]} />
        <LoginForm />
        <SubscribeCard />
        <InstaPhotos />
    </Fragment>
  )
}

export default LoginPage