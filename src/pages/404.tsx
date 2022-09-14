import * as React from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Hero from '../components/uiComponents/hero'
import indexPageBanner from '../images/index-page-banner.jpg'
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    textAlign: 'center'
  },
}))

const NotFoundPage = () => {
  const styles = useStyles()

  return (
    <main>
      <Header />
      <Hero
        imageObj={indexPageBanner}
        imageHeight='295px'
        header='Page Not Found'
        subheader=''
        fitInLowOpacityContainer={true}
      />
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <Typography variant='h1'>
            The page you're looking for does not exist.
          </Typography>
          <br />
          <Typography variant='h1'>
            Try clicking one of the links at the top or re-entering the url.
          </Typography>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default NotFoundPage
