import { notFound } from 'next/navigation'
import PackageDetailsPage from '../../../src/pages/PackageDetailsPage'
import { packages } from '../../../src/data/packages'

export default function Page({ params }) {
  const pkg = packages.find((item) => item.id === params.id)

  if (!pkg) {
    notFound()
  }

  return <PackageDetailsPage pkg={pkg} />
}
