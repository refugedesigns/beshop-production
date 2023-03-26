import Banner from '@/components/ui/banner/Banner'
import React, { Fragment} from 'react'

const ProfilePage = () => {
  return (
    <Fragment>
        <Banner pageTitle="My Profile" breadcrumbs={[{title: "Home", link: "/"}, {title: "My Profile"}]} />
    </Fragment>
  )
}

export default ProfilePage