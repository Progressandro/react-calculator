import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { GetStaticProps, NextPage } from 'next'
import CalculatorView from 'components/templates/CalculatorView'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const { t } = useTranslation('index')
  return <CalculatorView title={t('title')} subtitle={t('subtitle')} />
}

export async function getStaticProps({
  locale,
}: GetStaticProps & { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index'])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
