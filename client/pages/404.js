import React, { Fragment } from 'react'

import { Container } from '@mui/material'
import Banner from '@/components/ui/banner/Banner'
import NotFound from '@/components/404/NotFound'
import InstaPhotos from '@/components/ui/insta-photos/InstaPhotos'
import NextHead from '@/components/ui/Head/Head'

const NotFoundPage = () => {
  return (
    <Fragment>
      <NextHead title="GoShop - 404" description="GoShop Not Found Page" />
        <Banner pageTitle="404 Page" breadcrumbs={[{title: "Oops!"}]} />
        <Container>
            <NotFound />
        </Container>
        <InstaPhotos />
    </Fragment>
  )
}

export default NotFoundPage